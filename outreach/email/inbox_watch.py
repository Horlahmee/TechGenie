import os
import json
import imaplib
import email
from email.header import decode_header
from pathlib import Path


def load_env(path: Path):
    if not path.exists():
        return
    for line in path.read_text(encoding='utf-8').splitlines():
        if not line or line.strip().startswith('#') or '=' not in line:
            continue
        k, v = line.split('=', 1)
        os.environ.setdefault(k.strip(), v.strip())


def dh(value):
    if value is None:
        return ""
    parts = decode_header(value)
    out = []
    for v, enc in parts:
        if isinstance(v, bytes):
            out.append(v.decode(enc or 'utf-8', errors='ignore'))
        else:
            out.append(v)
    return "".join(out)


base = Path(__file__).resolve().parent
load_env(base / '.env.local')

user = os.getenv('GMAIL_ADDRESS')
pwd = os.getenv('GMAIL_APP_PASSWORD')
if not user or not pwd:
    raise SystemExit('Missing GMAIL_ADDRESS or GMAIL_APP_PASSWORD')

state_path = base / 'inbox_state.json'
state = {"last_seen_uid": 0}
if state_path.exists():
    try:
        state = json.loads(state_path.read_text(encoding='utf-8'))
    except Exception:
        pass
last_seen = int(state.get('last_seen_uid') or 0)

M = imaplib.IMAP4_SSL('imap.gmail.com')
M.login(user, pwd)
M.select('INBOX')

# Search unread emails
typ, data = M.search(None, 'UNSEEN')
if typ != 'OK':
    raise SystemExit('IMAP search failed')

uids = [int(x) for x in data[0].split() if x.isdigit()]
uids.sort()

new = [u for u in uids if u > last_seen]

items = []
max_uid = last_seen
for uid in new[-10:]:
    typ, msg_data = M.fetch(str(uid), '(RFC822)')
    if typ != 'OK':
        continue
    raw = msg_data[0][1]
    msg = email.message_from_bytes(raw)
    frm = dh(msg.get('From'))
    subj = dh(msg.get('Subject'))
    date = dh(msg.get('Date'))
    items.append({"uid": uid, "from": frm, "subject": subj, "date": date})
    max_uid = max(max_uid, uid)

M.logout()

# Update state even if no new items? only if advanced
if max_uid > last_seen:
    state_path.write_text(json.dumps({"last_seen_uid": max_uid}, indent=2), encoding='utf-8')

print(json.dumps({"newCount": len(new), "items": items}, indent=2))
