"""Makes the link-preview image for each case study from its cover.

Run from the project root after adding or changing a cover:  python3 scripts/og-images.py
Needs Pillow. Writes public/og/work/<slug>.jpg at 1200x630, the size link previews expect.
JPEG on purpose: some apps (WhatsApp, older LinkedIn previews) don't show WebP.
"""
import re
from pathlib import Path
from PIL import Image, ImageOps

W, H = 1200, 630
root = Path(__file__).resolve().parent.parent
data = (root / "lib" / "data.ts").read_text()
# slug and cover sit together in each project entry in lib/data.ts
pairs = re.findall(r'slug: "([^"]+)",(?:(?!slug: ").)*?cover: "([^"]+)"', data, re.S)
out = root / "public" / "og" / "work"
out.mkdir(parents=True, exist_ok=True)
for slug, cover in pairs:
    img = Image.open(root / "public" / cover.lstrip("/")).convert("RGB")
    # Fill the frame from the top edge down, so headers and logos are never cut off
    fitted = ImageOps.fit(img, (W, H), Image.LANCZOS, centering=(0.5, 0.0))
    fitted.save(out / f"{slug}.jpg", quality=86, optimize=True, progressive=True)
    print(f"{slug}: {img.size} -> {out / (slug + '.jpg')}")
