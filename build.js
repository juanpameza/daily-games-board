const fs = require('fs');
const parser = fs.readFileSync('parser.js', 'utf8').replace(/if \(typeof module[\s\S]*$/, '').trim();
const tpl = fs.readFileSync('template.html', 'utf8');
if (!tpl.includes('/*__PARSER__*/')) throw new Error('placeholder missing');
const html = tpl.replace('/*__PARSER__*/', parser);
fs.writeFileSync('daily-games-board.html', html);
// syntax check the inline script
const m = html.match(/<script>([\s\S]*)<\/script>/);
fs.writeFileSync('/tmp/claude-0/-home-claude/98f6a570-9a2d-5af6-85d3-3a3b91ff47c1/scratchpad/inline.js', m[1]);
console.log('built', html.length, 'bytes');
