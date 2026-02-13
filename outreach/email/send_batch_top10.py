import csv
import json
import subprocess
from pathlib import Path
from datetime import datetime

ROOT = Path(r"C:\Users\olami\.openclaw\workspace\_repos\TechGenie")
DRAFTS = ROOT / "outreach" / "drafts" / "TOP10-OPS-AUTOMATION-EMAILS.csv"
TARGETS = ROOT / "outreach" / "targets" / "TOP10-CONTACT-EMAILS.csv"
SENDER = ROOT / "outreach" / "email" / "send_email.py"
LOGDIR = ROOT / "outreach" / "email" / "logs"
LOGDIR.mkdir(parents=True, exist_ok=True)

# Load targets map: Company -> email
email_map = {}
with TARGETS.open("r", encoding="utf-8", newline="") as f:
    r = csv.DictReader(f)
    for row in r:
        company = (row.get("Company") or "").strip()
        addr = (row.get("RecommendedEmail") or "").strip()
        if company:
            email_map[company.lower()] = addr

sent = []
skipped = []

with DRAFTS.open("r", encoding="utf-8", newline="") as f:
    r = csv.DictReader(f)
    for row in r:
        company = (row.get("company") or "").strip()
        subject = (row.get("subject") or "").strip().strip('"')
        body = row.get("body") or ""
        to = email_map.get(company.lower(), "")
        if not to:
            skipped.append({"company": company, "reason": "no_target_email"})
            continue

        cmd = ["python", str(SENDER), "--to", to, "--subject", subject, "--body", body]
        try:
            subprocess.run(cmd, check=True, capture_output=True, text=True)
            sent.append({"company": company, "to": to, "subject": subject})
        except subprocess.CalledProcessError as e:
            skipped.append({"company": company, "to": to, "reason": "send_failed", "stderr": (e.stderr or "")[0:500]})

stamp = datetime.now().strftime("%Y%m%d-%H%M%S")
log_path = LOGDIR / f"top10-send-{stamp}.json"
log_path.write_text(json.dumps({"sent": sent, "skipped": skipped}, indent=2), encoding="utf-8")

print(str(log_path))
print(f"SENT={len(sent)} SKIPPED={len(skipped)}")
if skipped:
    for x in skipped:
        print(f"SKIP: {x.get('company')} - {x.get('reason')}")
