# Homepage Maintenance

This site keeps the existing Jekyll / GitHub Pages deployment, with a lightweight custom layout and no frontend build step.

## Content

- `_pages/includes/intro.md`: introduction and research interests.
- `_layouts/default.html`: profile and page structure.
- `_config.yml`: identity, social links, canonical URL and `last_updated`.
- `_data/news.yml`: updates in reverse chronological order, all displayed directly in News.
- `_data/reports.yml`: technical reports, in display order.
- `_data/publications.yml`: publications; `lead: true` selects illustrated first/co-first-author entries. Author order and equal-contribution stars are written explicitly in `authors`, with a shared legend above Selected Publications rather than a separate co-first-author label.
- `_data/figures.yml`: thumbnail paths, alt text, dimensions and original PDF provenance.
- `_pages/includes/others.md` and `honers.md`: education, service and honors.
- `assets/css/homepage.css`: responsive styles, with colors and typography defined at the top.

Original author lists are retained. Both NeurIPS 2026 acceptances and the second-year PhD status were supplied by the site owner. SKE-Learn's equal-contribution notation is intentionally omitted at the owner's request. No personal contribution roles have been inferred for team-authored model cards.

## Figures

The ten illustrated works use seven original paper figures and three official Seed release covers, not generated artwork. PDF page/figure numbers and official cover source URLs are recorded in `_data/figures.yml`. Previous chart and diagram crops are retained as alternatives. UI-TARS uses the complete first-page performance overview, including both the benchmark bar chart and the radar chart with their legends; UI-TARS-2 uses the complete Figure 1 demo trajectory from PDF page 4. Preserve chart labels and use `object-fit: contain`. Clicking a thumbnail opens the work's paper PDF in a new tab, using the same URL as its title and primary resource link.

## Preview

With the existing bundle installed:

```sh
bundle exec jekyll serve --host 127.0.0.1
```

For a production-style build:

```sh
JEKYLL_ENV=production bundle exec jekyll build --safe
```

Check desktop and narrow mobile widths, the author disclosure, image links, old anchor aliases and `/about/` redirects before publishing. Changes to `_config.yml` require restarting the development server. The legacy theme assets are retained, but the homepage no longer loads its jQuery bundle, MathJax, citation fetch or visitor-map widget.
