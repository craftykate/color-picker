const colorCalculator = {
  convertHexToRgb(hex) {
    // Convert hex to rgb
    // Credit to Denis http://stackoverflow.com/a/36253499/4939630
    let rgb = 'rgb(' + (hex = hex.replace('#', '')).match(new RegExp('(.{' + hex.length/3 + '})', 'g')).map(function(l) { return parseInt(hex.length%2 ? l+l : l, 16); }).join(',') + ')';

    // Get array of RGB values
    rgb = rgb.replace(/[^\d,]/g, '').split(',');
    const r = rgb[0], g = rgb[1], b = rgb[2];

    return (rgb);
  }
}

export default colorCalculator;
