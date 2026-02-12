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
Edit `state.json` to update:
- KPI numbers
- agent statuses/tasks
- active tasks
- CEO brief

## Next upgrades
- Auto-sync with task files
- Webhook updates from agent runs
- Historical KPI charting
