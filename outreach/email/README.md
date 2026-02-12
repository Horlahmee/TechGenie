# TechGenie Email Ops

Uses Gmail SMTP with app password.

## Setup
1. Copy `.env.example` to `.env.local`
2. Fill credentials

## Test login
```powershell
python outreach/email/smtp_test.py
```

## Send email
```powershell
python outreach/email/send_email.py --to "lead@example.com" --subject "TechGenie project inquiry" --body "Hello ..."
```
