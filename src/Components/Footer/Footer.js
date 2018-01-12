import React from 'react';


const Footer = () => (
  <footer>
    <p>
      Hover over a color to get hex and rgb codes. <br/>
      Click on any color to set that as the main color. <br/>
      Click (save) to save color. <br />
      Your browser will remember your saved colors and will load your last saved color next time you visit<br/>
      Optimized for mobile! Scroll down while picking a color to see different color combos
    </p> 
    <p style={{fontSize: '80%', fontStyle: 'italic'}}>
      Why isn't green the complementary color of red? <br/>
      Read the last paragraph of <a href="http://wtamu.edu/~cbaird/sq/2015/01/22/why-are-red-yellow-and-blue-the-primary-colors-in-painting-but-computer-screens-use-red-green-and-blue/" target="_blank" rel="noopener noreferrer">this site</a> for a very interesting explanation.<br/>
      Spoiler alert: your kindergarten color wheel is outdated. <a href="https://en.wikipedia.org/wiki/HSL_and_HSV" target="_blank" rel="noopener noreferrer">more info</a>
    </p>
    <ul>
      <li>a site made by <a href="https://github.com/craftykate" target="_blank" rel="noopener noreferrer">kate mcfaul</a></li>
    </ul>
  </footer>
)

export default Footer;
