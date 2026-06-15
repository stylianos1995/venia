import base64
from pathlib import Path

root = Path(__file__).resolve().parents[1]
logo = root / "public" / "logo-email.png"
b64 = base64.b64encode(logo.read_bytes()).decode("ascii")
data_uri = f"data:image/png;base64,{b64}"

html_path = root / "email-templates" / "auto-reply.html"
html = html_path.read_text(encoding="utf-8")
old = 'src="https://stylianos1995.github.io/venia/logo-email.png"'
if old not in html:
    raise SystemExit("pattern not found in auto-reply.html")
html = html.replace(old, f'src="{data_uri}"')
html = html.replace(
    "Logo URL (after deploy):\n  https://stylianos1995.github.io/venia/logo-email.png",
    "Logo: embedded base64 (works without deploy). Hosted URL after deploy:\n  https://stylianos1995.github.io/venia/logo-email.png",
)
html_path.write_text(html, encoding="utf-8")
print("updated auto-reply.html with embedded logo")
