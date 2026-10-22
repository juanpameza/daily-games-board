# Daily Games Board

Shared scoreboard for a WhatsApp group that plays Wordle, Perceptle, Krillion, Maptap and Size It Up every day.
Each person pastes their share text straight from the game; the page parses it and files it under their name and the day.

- `index.html` is the whole site (the built page). GitHub Pages serves it.
- `template.html` + `parser.js` are the sources; `node build.js` writes `daily-games-board.html` and `index.html` is that page wrapped in a full document.
- `node test-parser.js` runs the parser against sample share texts.
- Scores live in a Supabase project (`players` and `results` tables). The publishable key in the page is meant to be public; row access is governed by the tables' policies.
