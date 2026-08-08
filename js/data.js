/* Central registry — single source of truth for search, homepage cards,
   favorites and recently-used. Add a new tool/game by adding one entry here
   plus the matching HTML page. */
const TOOLPLAY_ITEMS = [
  // ---- Calculators ----
  { id:'age-calculator', type:'tool', category:'Calculators', title:'Age Calculator', desc:'Find your exact age in years, months and days.', icon:'🎂', url:'tools/age-calculator.html', keywords:'age birthday date' },
  { id:'bmi-calculator', type:'tool', category:'Calculators', title:'BMI Calculator', desc:'Check your Body Mass Index instantly.', icon:'⚖️', url:'tools/bmi-calculator.html', keywords:'bmi weight health body mass' },
  { id:'percentage-calculator', type:'tool', category:'Calculators', title:'Percentage Calculator', desc:'Calculate percentages, increases and decreases.', icon:'％', url:'tools/percentage-calculator.html', keywords:'percent percentage math' },

  // ---- Text tools ----
  { id:'word-counter', type:'tool', category:'Text Tools', title:'Word Counter', desc:'Count words, characters, sentences and reading time.', icon:'📝', url:'tools/word-counter.html', keywords:'word character count text' },

  // ---- Utility ----
  { id:'password-generator', type:'tool', category:'Utility', title:'Password Generator', desc:'Create strong, random passwords instantly.', icon:'🔐', url:'tools/password-generator.html', keywords:'password generator security random' },
  { id:'qr-generator', type:'tool', category:'Utility', title:'QR Code Generator', desc:'Turn any text or link into a scannable QR code.', icon:'🔳', url:'tools/qr-generator.html', keywords:'qr code generator scan' },

  // ---- Games ----
  { id:'tic-tac-toe', type:'game', category:'Games', title:'Tic Tac Toe', desc:'Classic 2-player X and O, play on one device.', icon:'⭕', url:'games/tic-tac-toe.html', keywords:'tic tac toe xo game' },
  { id:'snake', type:'game', category:'Games', title:'Snake', desc:'Guide the snake, eat the food, don\u2019t hit yourself.', icon:'🐍', url:'games/snake.html', keywords:'snake arcade game' },
  { id:'2048', type:'game', category:'Games', title:'2048', desc:'Slide and merge tiles to reach 2048.', icon:'🔢', url:'games/2048.html', keywords:'2048 puzzle tile merge' },
];

function tpGetItem(id){ return TOOLPLAY_ITEMS.find(i => i.id === id); }
