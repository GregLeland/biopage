// Horizontal Line Animation Code
const grid = document.querySelector('.animated-grid');

function generateHorizontalLine() {
  const line = document.createElement('div');
  line.classList.add('horizontal-line');
  line.style.bottom = '0';
  grid.appendChild(line);
  setTimeout(() => {
    line.remove();
  }, 6000);
}

setInterval(() => {
  generateHorizontalLine();
}, 1000);

// Typing Effect Code
const resumeLines = [
  "Initializing data_wizard.bio...",
  " ",
  " ",
  "➤ Username: Greg Leland",
  "➤ User Mailbox: <a href='mailto:greg@gregleland.com'>greg@gregleland.com</a>",
  "➤ User Links: <a href='https://github.com/GregLeland' target='_blank'>GitHub</a> | <a href='https://linkedin.com/in/GregLeland' target='_blank'>LinkedIn</a>",
  " ",
  " ",
  "Loading user bio...",
  " ",
  " ",
  "➤ Seasoned data expert with extensive experience in data analysis, marketing analytics, data engineering, and visualization across gaming, product, streaming video, and entertainment sectors.",
  " ",
  "➤ Over a decade of expertise in providing actionable insights that have optimized user engagement, marketing campaign performance, and revenue growth.",
  " ",
  "➤ Proven leadership in managing cross-functional teams, driving complex projects, building data pipelines, and leveraging data-driven strategies to support product development and marketing initiatives.",
  " ",
  "➤ Proficient in SQL, Python, statistical modeling, A/B & multivariate testing, and advanced data visualization tools.",
  " ",
  "➤ Seeking a challenging role where my technical expertise and leadership abilities can make an impact in a dynamic environment.",
  " ",
  " ",
  "➤ Full resume <a href='resume/Greg_Leland_Analytics_CV_2024.pdf' target='_blank'>HERE</a>",
  " ",
  " ",
  "Process finished successfully.",
  "Program terminating...",
  ">"
];

let lineIndex = 0;
let content = '';
const typingSpeed = 10;
const lineDelay = 500;
const resumeElement = document.getElementById('resume-text');

// Function to automatically scroll to the bottom of the container
function autoScrollToBottom() {
  resumeElement.scrollTop = resumeElement.scrollHeight;
}

function typeLine() {
  if (lineIndex < resumeLines.length) {
    const line = resumeLines[lineIndex];
    processLine(line, function() {
      content += '<br>';
      lineIndex++;
      setTimeout(typeLine, lineDelay);
    });
  }
}

function processLine(line, callback) {
  const tokens = line.match(/(<[^>]+>|[^<]+)/g);
  processTokens(tokens, 0, callback);
}

function processTokens(tokens, tokenIndex, callback) {
  if (tokenIndex < tokens.length) {
    const token = tokens[tokenIndex];
    if (token.startsWith('<') && token.endsWith('>')) {
      content += token;
      resumeElement.innerHTML = content;
      
      // Call auto scroll after updating content
      autoScrollToBottom();

      setTimeout(() => {
        processTokens(tokens, tokenIndex + 1, callback);
      }, typingSpeed);
    } else {
      typeText(token, 0, function() {
        processTokens(tokens, tokenIndex + 1, callback);
      });
    }
  } else {
    callback();
  }
}

function typeText(text, charIndex, callback) {
  if (charIndex < text.length) {
    content += text.charAt(charIndex);
    resumeElement.innerHTML = content;
    
    // Call auto scroll after updating content
    autoScrollToBottom();

    setTimeout(() => {
      typeText(text, charIndex + 1, callback);
    }, typingSpeed);
  } else {
    callback();
  }
}

typeLine();

// Ensure font is applied after text insertion
setTimeout(() => {
  resumeElement.style.fontFamily = "'Press Start 2P', system-ui";
}, 100);
