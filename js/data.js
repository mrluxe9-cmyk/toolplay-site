/* Central registry — single source of truth for search, homepage cards,
   favorites and recently-used. Add a new tool/game by adding one entry here
   plus the matching HTML page. */
const TOOLPLAY_ITEMS = [
  {
    "id": "age-calculator",
    "type": "tool",
    "category": "Calculators",
    "title": "Age Calculator",
    "desc": "Find your exact age in years, months and days.",
    "icon": "🎂",
    "url": "tools/age-calculator.html",
    "keywords": "age birthday date"
  },
  {
    "id": "bmi-calculator",
    "type": "tool",
    "category": "Calculators",
    "title": "BMI Calculator",
    "desc": "Check your Body Mass Index instantly.",
    "icon": "⚖️",
    "url": "tools/bmi-calculator.html",
    "keywords": "bmi weight health body mass"
  },
  {
    "id": "percentage-calculator",
    "type": "tool",
    "category": "Calculators",
    "title": "Percentage Calculator",
    "desc": "Calculate percentages, increases and decreases.",
    "icon": "％",
    "url": "tools/percentage-calculator.html",
    "keywords": "percent percentage math"
  },
  {
    "id": "word-counter",
    "type": "tool",
    "category": "Text Tools",
    "title": "Word Counter",
    "desc": "Count words, characters, sentences and reading time.",
    "icon": "📝",
    "url": "tools/word-counter.html",
    "keywords": "word character count text"
  },
  {
    "id": "password-generator",
    "type": "tool",
    "category": "Utility",
    "title": "Password Generator",
    "desc": "Create strong, random passwords instantly.",
    "icon": "🔐",
    "url": "tools/password-generator.html",
    "keywords": "password generator security random"
  },
  {
    "id": "qr-generator",
    "type": "tool",
    "category": "Utility",
    "title": "QR Code Generator",
    "desc": "Turn any text or link into a scannable QR code.",
    "icon": "🔳",
    "url": "tools/qr-generator.html",
    "keywords": "qr code generator scan"
  },
  {
    "id": "discount-calculator",
    "type": "tool",
    "category": "Calculators",
    "title": "Discount Calculator",
    "desc": "Calculate discount, savings and final price instantly.",
    "icon": "💸",
    "url": "tools/discount-calculator.html",
    "keywords": "discount calculator percentage savings final price"
  },
  {
    "id": "loan-emi-calculator",
    "type": "tool",
    "category": "Calculators",
    "title": "Loan EMI Calculator",
    "desc": "Calculate monthly EMI, total interest and total payment instantly.",
    "icon": "💰",
    "url": "tools/loan-emi-calculator.html",
    "keywords": "loan emi calculator monthly payment interest loan"
  },
  {
    "id": "area-calculator",
    "type": "tool",
    "category": "Calculators",
    "title": "Area Calculator",
    "desc": "Calculate area of common shapes.",
    "icon": "📐",
    "url": "tools/area-calculator.html",
    "keywords": "area calculator rectangle circle triangle"
  },
  {
    "id": "average-calculator",
    "type": "tool",
    "category": "Calculators",
    "title": "Average Calculator",
    "desc": "Calculate the average of multiple numbers.",
    "icon": "📊",
    "url": "tools/average-calculator.html",
    "keywords": "average mean calculator"
  },
  {
    "id": "base64-tool",
    "type": "tool",
    "category": "Developer Tools",
    "title": "Base64 Encoder Decoder",
    "desc": "Encode and decode Base64 text.",
    "icon": "🔐",
    "url": "tools/base64-tool.html",
    "keywords": "base64 encoder decoder"
  },
  {
    "id": "character-counter",
    "type": "tool",
    "category": "Text Tools",
    "title": "Character Counter",
    "desc": "Count characters, words and spaces.",
    "icon": "🔤",
    "url": "tools/character-counter.html",
    "keywords": "character counter word count"
  },
  {
    "id": "color-converter",
    "type": "tool",
    "category": "Design Tools",
    "title": "Color Converter",
    "desc": "Convert HEX colors to RGB.",
    "icon": "🎨",
    "url": "tools/color-converter.html",
    "keywords": "color converter hex rgb"
  },
  {
    "id": "currency-calculator",
    "type": "tool",
    "category": "Calculators",
    "title": "Currency Calculator",
    "desc": "Calculate currency conversions.",
    "icon": "💱",
    "url": "tools/currency-calculator.html",
    "keywords": "currency calculator money exchange"
  },
  {
    "id": "currency-converter",
    "type": "tool",
    "category": "Converters",
    "title": "Currency Converter",
    "desc": "Convert common currencies.",
    "icon": "💱",
    "url": "tools/currency-converter.html",
    "keywords": "currency converter usd inr eur"
  },
  {
    "id": "date-difference-calculator",
    "type": "tool",
    "category": "Calculators",
    "title": "Date Difference Calculator",
    "desc": "Calculate the number of days between dates.",
    "icon": "📅",
    "url": "tools/date-difference-calculator.html",
    "keywords": "date difference days calculator"
  },
  {
    "id": "fraction-calculator",
    "type": "tool",
    "category": "Calculators",
    "title": "Fraction Calculator",
    "desc": "Calculate with fractions.",
    "icon": "➗",
    "url": "tools/fraction-calculator.html",
    "keywords": "fraction calculator math"
  },
  {
    "id": "html-encoder",
    "type": "tool",
    "category": "Developer Tools",
    "title": "HTML Encoder Decoder",
    "desc": "Encode and decode HTML characters.",
    "icon": "💻",
    "url": "tools/html-encoder.html",
    "keywords": "html encoder decoder escape"
  },
  {
    "id": "image-to-pdf",
    "type": "tool",
    "category": "PDF Tools",
    "title": "Image to PDF",
    "desc": "Convert an image into a PDF workflow.",
    "icon": "🖼️",
    "url": "tools/image-to-pdf.html",
    "keywords": "image to pdf jpg pdf"
  },
  {
    "id": "jpg-to-pdf",
    "type": "tool",
    "category": "PDF Tools",
    "title": "JPG to PDF",
    "desc": "Convert JPG images to PDF.",
    "icon": "📄",
    "url": "tools/jpg-to-pdf.html",
    "keywords": "jpg pdf image pdf"
  },
  {
    "id": "json-formatter",
    "type": "tool",
    "category": "Developer Tools",
    "title": "JSON Formatter",
    "desc": "Format and validate JSON.",
    "icon": "🧩",
    "url": "tools/json-formatter.html",
    "keywords": "json formatter beautifier"
  },
  {
    "id": "pdf-to-text",
    "type": "tool",
    "category": "PDF Tools",
    "title": "PDF to Text",
    "desc": "Extract text from PDF files.",
    "icon": "📝",
    "url": "tools/pdf-to-text.html",
    "keywords": "pdf text extractor"
  },
  {
    "id": "time-zone-converter",
    "type": "tool",
    "category": "Converters",
    "title": "Time Zone Converter",
    "desc": "Convert time between time zones.",
    "icon": "🌍",
    "url": "tools/time-zone-converter.html",
    "keywords": "timezone time converter world clock"
  },
  {
    "id": "timestamp-converter",
    "type": "tool",
    "category": "Developer Tools",
    "title": "Timestamp Converter",
    "desc": "Convert Unix timestamps and dates.",
    "icon": "⏱️",
    "url": "tools/timestamp-converter.html",
    "keywords": "unix timestamp converter date"
  },
  {
    "id": "unit-converter",
    "type": "tool",
    "category": "Converters",
    "title": "Unit Converter",
    "desc": "Convert length, weight and temperature units.",
    "icon": "📏",
    "url": "tools/unit-converter.html",
    "keywords": "unit converter length weight temperature"
  },
  {
    "id": "tic-tac-toe",
    "type": "game",
    "category": "Games",
    "title": "Tic Tac Toe",
    "desc": "Classic 2-player X and O, play on one device.",
    "icon": "⭕",
    "url": "games/tic-tac-toe.html",
    "keywords": "tic tac toe xo game"
  },
  {
    "id": "snake",
    "type": "game",
    "category": "Games",
    "title": "Snake",
    "desc": "Guide the snake, eat the food, don’t hit yourself.",
    "icon": "🐍",
    "url": "games/snake.html",
    "keywords": "snake arcade game"
  },
  {
    "id": "2048",
    "type": "game",
    "category": "Games",
    "title": "2048",
    "desc": "Slide and merge tiles to reach 2048.",
    "icon": "🔢",
    "url": "games/2048.html",
    "keywords": "2048 puzzle tile merge"
  },
  {
    "id": "jpg-to-png",
    "type": "tool",
    "category": "Image Tools",
    "title": "JPG to PNG Converter",
    "desc": "Convert JPG images to PNG format.",
    "icon": "🖼️",
    "url": "tools/jpg-to-png.html",
    "keywords": "jpg png image converter"
  },
  {
    "id": "lorem-ipsum-generator",
    "type": "tool",
    "category": "Text Tools",
    "title": "Lorem Ipsum Generator",
    "desc": "Generate placeholder Lorem Ipsum text instantly.",
    "icon": "📝",
    "url": "tools/lorem-ipsum-generator.html",
    "keywords": "lorem ipsum text generator placeholder"
  },
  {
    "id": "number-converter",
    "type": "tool",
    "category": "Converters",
    "title": "Number Converter",
    "desc": "Convert numbers between different formats and bases.",
    "icon": "🔢",
    "url": "tools/number-converter.html",
    "keywords": "number converter base binary decimal"
  },
  {
    "id": "password-strength-checker",
    "type": "tool",
    "category": "Security Tools",
    "title": "Password Strength Checker",
    "desc": "Check password strength and security level.",
    "icon": "🔐",
    "url": "tools/password-strength-checker.html",
    "keywords": "password strength checker security"
  },
  {
    "id": "pdf-compressor",
    "type": "tool",
    "category": "PDF Tools",
    "title": "PDF Compressor",
    "desc": "Compress PDF files to reduce file size.",
    "icon": "📄",
    "url": "tools/pdf-compressor.html",
    "keywords": "pdf compressor reduce pdf size"
  },
  {
    "id": "pdf-to-jpg",
    "type": "tool",
    "category": "PDF Tools",
    "title": "PDF to JPG Converter",
    "desc": "Convert PDF pages into JPG images.",
    "icon": "📄",
    "url": "tools/pdf-to-jpg.html",
    "keywords": "pdf jpg converter pdf to image"
  },
  {
    "id": "png-to-jpg",
    "type": "tool",
    "category": "Image Tools",
    "title": "PNG to JPG Converter",
    "desc": "Convert PNG images into JPG format.",
    "icon": "🖼️",
    "url": "tools/png-to-jpg.html",
    "keywords": "png jpg image converter"
  },
  {
    "id": "profit-loss-calculator",
    "type": "tool",
    "category": "Calculators",
    "title": "Profit Loss Calculator",
    "desc": "Calculate profit, loss and percentage instantly.",
    "icon": "📈",
    "url": "tools/profit-loss-calculator.html",
    "keywords": "profit loss calculator percentage"
  },
  {
    "id": "random-number-generator",
    "type": "tool",
    "category": "Generators",
    "title": "Random Number Generator",
    "desc": "Generate random numbers instantly.",
    "icon": "🎲",
    "url": "tools/random-number-generator.html",
    "keywords": "random number generator"
  },
  {
    "id": "ratio-calculator",
    "type": "tool",
    "category": "Calculators",
    "title": "Ratio Calculator",
    "desc": "Calculate and simplify ratios easily.",
    "icon": "⚖️",
    "url": "tools/ratio-calculator.html",
    "keywords": "ratio calculator simplify ratio"
  },
  {
    "id": "scientific-calculator",
    "type": "tool",
    "category": "Calculators",
    "title": "Scientific Calculator",
    "desc": "Perform advanced scientific calculations.",
    "icon": "🧮",
    "url": "tools/scientific-calculator.html",
    "keywords": "scientific calculator math"
  },
  {
    "id": "text-case-converter",
    "type": "tool",
    "category": "Text Tools",
    "title": "Text Case Converter",
    "desc": "Convert text between uppercase, lowercase and other cases.",
    "icon": "🔤",
    "url": "tools/text-case-converter.html",
    "keywords": "text case converter uppercase lowercase"
  },
  {
    "id": "tip-calculator",
    "type": "tool",
    "category": "Calculators",
    "title": "Tip Calculator",
    "desc": "Calculate tips and split bills easily.",
    "icon": "💰",
    "url": "tools/tip-calculator.html",
    "keywords": "tip calculator bill split"
  },
  {
    "id": "url-encoder",
    "type": "tool",
    "category": "Developer Tools",
    "title": "URL Encoder",
    "desc": "Encode and decode URLs safely.",
    "icon": "🔗",
    "url": "tools/url-encoder.html",
    "keywords": "url encoder decoder encode url"
  },
  {
    "id": "uuid-generator",
    "type": "tool",
    "category": "Developer Tools",
    "title": "UUID Generator",
    "desc": "Generate unique UUID identifiers.",
    "icon": "🆔",
    "url": "tools/uuid-generator.html",
    "keywords": "uuid generator unique id"
  },
  {
    "id": "image-resizer",
    "type": "tool",
    "category": "Image Tools",
    "title": "Image Resizer",
    "desc": "Resize images quickly.",
    "icon": "IMG",
    "url": "tools/image-resizer.html",
    "keywords": "image resize photo resize"
  },
  {
    "id": "json-validator",
    "type": "tool",
    "category": "Developer Tools",
    "title": "JSON Validator",
    "desc": "Validate JSON instantly.",
    "icon": "JSON",
    "url": "tools/json-validator.html",
    "keywords": "json validator validate"
  },
  {
    "id": "word-counter-pro",
    "type": "tool",
    "category": "Text Tools",
    "title": "Word Counter Pro",
    "desc": "Count words, characters, sentences and paragraphs.",
    "icon": "TXT",
    "url": "tools/word-counter-pro.html",
    "keywords": "word counter character sentence paragraph"
  }
];

function tpGetItem(id){ return TOOLPLAY_ITEMS.find(i => i.id === id); }
