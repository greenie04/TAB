# TAB Trentham Predictor

Local, browser-based NZ horse racing predictor for betting on Trentham races.

This first version uses a curated slice of official 2025-26 Trentham results and combines that with user-entered season-wide runner data to rank a Trentham field. It considers:

- All-season horse performance, even if those runs were outside Trentham
- Trentham course form as a venue-specific bonus
- This season's trainer and jockey signals at Trentham
- Weather
- Track firmness / going
- Distance suitability
- Barrier position
- Recent form

## Important Notes

- This is a heuristic predictor, not a betting model.
- "Track firmware" has been interpreted as track firmness / going because that is how the official Trentham data is published.
- The bundled Trentham dataset is intentionally curated rather than a complete season scrape, so the output should be treated as decision support, not certainty.
- Horse-level season form should be entered by you for the target field, because runners may have raced anywhere this season.

## Run It

Open [index.html](C:\Users\dslng\GitHub\TAB\index.html) in a browser.

There is no build step and no dependency install.

The refresh button reloads [trentham-season.json](C:\Users\dslng\GitHub\TAB\trentham-season.json), so if you update that file with newer Trentham results or fields, the app can pull the new data into the page without editing the JavaScript.

## What The App Does

- Lets you choose Trentham race conditions such as distance, weather, and going
- Loads example fields for sprint and middle-distance races
- Lets you edit runners or add your own
- Lets you enter all-season runs, wins, and placings for each horse
- Refreshes the race review as the field changes before race day
- Reloads the bundled season dataset when you press refresh
- Reviews bundled races from the previous 14 days relative to the target race date
- Scores each runner with a transparent component breakdown
- Shows a Trentham season snapshot derived from the bundled results

## Season Sources Used

Official LoveRacing result pages used to seed the bundled Trentham dataset:

- [Wellington RC at Trentham, 6 Dec 2025](https://loveracing.nz/RaceInfo/54837/Meeting-Overview.aspx)
- [Wellington RC at Trentham, 3 Jan 2026](https://loveracing.nz/RaceInfo/54866/Meeting-Overview.aspx)
- [Wellington RC at Trentham, 17 Jan 2026](https://loveracing.nz/RaceInfo/54877/Meeting-Overview.aspx)
- [Wellington RC at Trentham, 31 Jan 2026](https://loveracing.nz/RaceInfo/54889/Meeting-Overview.aspx)
- [Wellington RC at Trentham, 1 Mar 2026](https://loveracing.nz/RaceInfo/54912/Meeting-Overview.aspx)

## Scoring Summary

The predictor blends:

- Recent finishing pattern from the runner form string
- All-season runs, wins, and placings entered for the runner
- Historical Trentham finish data for the horse, trainer, and jockey in the bundled season sample
- Distance fit against the runner's preferred range
- Wet-track suitability when the race is run on soft or heavy ground
- A small barrier and freshness adjustment

## Files

- [index.html](C:\Users\dslng\GitHub\TAB\index.html): app shell
- [styles.css](C:\Users\dslng\GitHub\TAB\styles.css): visual design
- [app.js](C:\Users\dslng\GitHub\TAB\app.js): dataset, scoring model, and UI logic

## Next Step Ideas

- Replace the curated season sample with a full import pipeline
- Add sectional times and pace maps
- Add meeting-level weather forecasts for upcoming Trentham cards
- Export a ranked race report as CSV
