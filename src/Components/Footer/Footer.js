import React from 'react';


const Footer = () => (
  <footer>
    <p>Click (save) to save color. <br/>
      Click on a color to set that as the main color. <br/>
      Hover over a color to get hex and rgb codes.
    </p> 
    <p style={{fontSize: '80%', fontStyle: 'italic'}}>
      Why isn't green the complementary color of red? <br/>
      Read the last paragraph of <a href="http://wtamu.edu/~cbaird/sq/2015/01/22/why-are-red-yellow-and-blue-the-primary-colors-in-painting-but-computer-screens-use-red-green-and-blue/" target="_blank" rel="noopener noreferrer">this site</a> for a very interesting explanation.<br/>
      Spoiler alert: your kindergarten teacher lied to you.
    </p>
    <ul>
      <li>a site made by <a href="https://github.com/craftykate" target="_blank" rel="noopener noreferrer">kate mcfaul</a></li>
    </ul>
  </footer>
)

export default Footer;
