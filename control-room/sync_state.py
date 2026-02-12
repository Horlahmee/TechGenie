import json
from datetime import datetime
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
state_path = ROOT / "control-room" / "state.json"
leads_md = ROOT / "reports" / "leads-30.md"
leads_csv = ROOT / "reports" / "leads-30.csv"

state = json.loads(state_path.read_text(encoding="utf-8"))
state["updatedAt"] = datetime.now().strftime("%Y-%m-%d %H:%M WAT")

# Auto task status from real outputs
for t in state.get("tasks", []):
    if t.get("id") == "P-001-T01":
        if leads_md.exists() and leads_csv.exists():
            t["status"] = "Done"
        else:
            t["status"] = "Doing"

# Auto agent status from task completion
for a in state.get("agents", []):
    if a.get("name") == "Research Agent":
        if leads_md.exists() and leads_csv.exists():
            a["status"] = "ok"
            a["currentTask"] = "Lead report completed"
        else:
            a["status"] = "busy"
            a["currentTask"] = "Compile 30 leads"

state_path.write_text(json.dumps(state, indent=2), encoding="utf-8")
print(f"Synced {state_path}")
