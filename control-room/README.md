# TechGenie Control Room v1

Visual operations dashboard for TechGenie agents.

## Run locally
From this folder:

```powershell
cd control-room
python -m http.server 8788
```

Then open:
- PC: http://localhost:8788/dashboard.html
- Phone (same Wi‑Fi): http://<YOUR_PC_LAN_IP>:8788/dashboard.html

## Update data
Manual: edit `state.json` directly.

Automatic sync from real outputs:
```powershell
python control-room/sync_state.py
```

This currently auto-updates Research task/agent status based on:
- `reports/leads-30.md`
- `reports/leads-30.csv`

## Next upgrades
- Webhook updates from agent runs
- Historical KPI charting
- More auto-derived task statuses
