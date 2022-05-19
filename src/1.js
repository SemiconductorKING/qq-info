function colorToHex(color) {
  var hexadecimal = (+color).toString(16);
  return hexadecimal.padStart(2, '0')
}

function convertRGBtoHex(str) {
  let rgba = str.match(/^rgba\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*,\s*(.*)\s*\)$/)
  // console.log(rgba)
  let a = rgba[4]
  if (a <= 0) {
    a = '00'
  } else if (a >= 1) {
    a = 'ff'
  } else {
    a = colorToHex(a).substring(2, 4).padEnd(2, '0')
  }
  return '#' + colorToHex(rgba[1]) + colorToHex(rgba[2]) + colorToHex(rgba[3]) + a
}
console.log(convertRGBtoHex('rgba(  125 , 25,255 ,-0.1)'))
console.log(convertRGBtoHex('rgba(125, 25, 255 ,0)'))
console.log(convertRGBtoHex('rgba(125, 25, 255, 0.1)'))
console.log(convertRGBtoHex('rgba(125, 25, 255, 0.4)'))
console.log(convertRGBtoHex('rgba(125, 25, 255, 0.5)'))
console.log(convertRGBtoHex('rgba(125, 25, 255, 1.0)'))
console.log(convertRGBtoHex('rgba(125, 25, 255, 1.1)'))
