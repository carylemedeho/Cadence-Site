# Cadence — site

Static site for [Cadence](https://github.com/carylemedeho/Cadence), served by GitHub Pages.

| page | holds |
|---|---|
| `index.html` | what the app is, what it tracks, what it deliberately does not do |
| `privacy.html` | privacy policy — the URL App Store Connect asks for |
| `terms.html` | terms of use |
| `styles.css` | the app's own palette, type and radii, light and dark |
| `lang.js` | the FR/EN toggle |

Both languages live in the markup and are switched with `data-lang`, so every page answers on one
URL in either language. The choice follows the browser first, then whatever the reader picked.

Colours, radii and motion values are taken from `lib/core/theme/` in the app repo. Type is
Instrument Sans and IBM Plex Mono, the faces the app ships.
