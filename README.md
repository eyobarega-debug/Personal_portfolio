# Portfolio

A personal developer portfolio with a dark, terminal-inspired theme — monospace accents, a typed-text hero, and a fake terminal window as the centerpiece.

## Features

- **Terminal-style hero** — animated typed line and a mock terminal card with prompt/output styling
- **Sticky, responsive nav** — collapses into a mobile menu below 640px
- **Sections** — About, Skills, Projects, Contact
- **Skill tags & project cards** with hover states
- **Back-to-top button**
- Respects `prefers-reduced-motion` (disables cursor blink and smooth scroll)

## Tech Stack

- HTML5
- CSS3 (custom properties, CSS Grid/Flexbox)
- Vanilla JavaScript
- Fonts: [JetBrains Mono](https://www.jetbrains.com/lp/mono/) (mono) + [Inter](https://rsms.me/inter/) (body)

## Project Structure

```
.
├── index.html
├── style.css
└── script.js
```

## Getting Started

No build step required.

1. Clone or download the repo
2. Open `index.html` in your browser

   or serve it locally:

   ```bash
   npx serve .
   ```

## Customization

Colors, spacing, and radii are controlled via CSS custom properties at the top of `style.css`:

```css
:root{
  --bg:#0b0f14;
  --accent:#6fd9c9;
  --amber:#f2b866;
  --font-mono:'JetBrains Mono', ui-monospace, Menlo, monospace;
  --font-body:'Inter', system-ui, sans-serif;
}
```

Update these to re-theme the site without touching individual component styles.

## Sections to Fill In

- [ ] About text and photo
- [ ] Skills list (grouped by category)
- [ ] Project cards (title, tags, description, links)
- [ ] Contact details / social links

## License

MIT — feel free to fork and adapt.
