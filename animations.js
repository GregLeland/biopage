document.addEventListener('DOMContentLoaded', function() {
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
      "Greg Leland",
      "✉ greg@gregleland.com",
      "✱ <a href='https://github.com/GregLeland' target='_blank'>GitHub</a> | ✱ <a href='https://linkedin.com/in/GregLeland' target='_blank'>LinkedIn</a>",
      " ",
      "SUMMARY",
      "☑ Seasoned Analyst with extensive experience in data analysis, marketing analytics, data engineering, and visualization across gaming, product, streaming video, and entertainment sectors.",
      "☑ Over a decade of expertise in providing actionable insights that have optimized user engagement, marketing campaign performance, and revenue growth.",
      "☑ Proven leadership in managing cross-functional teams, driving complex projects, and leveraging data-driven strategies to support product development and marketing initiatives.",
      "☑ Proficient in SQL, Python, statistical modeling, and advanced data visualization tools.",
      " ",
      "Seeking a challenging role where my technical expertise and leadership abilities can make an impact in a dynamic environment.",
  " ",
  "Full resume ➤ <a href='resume/Greg_Leland_Analytics_CV_2024.pdf' target='_blank'>Here</a>"
      // Continue adding your resume lines here
    ];
  
    let lineIndex = 0;
    let content = '';
    const typingSpeed = 30;
    const lineDelay = 500;
    const resumeElement = document.getElementById('resume-text');
  
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
        setTimeout(() => {
          typeText(text, charIndex + 1, callback);
        }, typingSpeed);
      } else {
        callback();
      }
    }
  
    typeLine();
  });
  