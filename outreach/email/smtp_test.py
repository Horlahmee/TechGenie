import os
import smtplib
from pathlib import Path


def load_env(path: Path):
    if not path.exists():
        return
    for line in path.read_text(encoding='utf-8').splitlines():
        if not line or line.strip().startswith('#') or '=' not in line:
            continue
        k, v = line.split('=', 1)
        os.environ.setdefault(k.strip(), v.strip())


base = Path(__file__).resolve().parent
load_env(base / '.env.local')

user = os.getenv('GMAIL_ADDRESS')
pwd = os.getenv('GMAIL_APP_PASSWORD')
if not user or not pwd:
    raise SystemExit('Missing GMAIL_ADDRESS or GMAIL_APP_PASSWORD')

ok = False
try:
    with smtplib.SMTP_SSL('smtp.gmail.com', 465, timeout=30) as s:
        s.login(user, pwd)
    ok = True
except Exception:
    with smtplib.SMTP('smtp.gmail.com', 587, timeout=30) as s:
        s.starttls()
        s.login(user, pwd)
    ok = True

print('SMTP login OK' if ok else 'SMTP login failed')
