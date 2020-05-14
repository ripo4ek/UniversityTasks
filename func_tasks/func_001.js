//Ripo4ek - Андрей Ляпустин

let toHex = c => {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
};
let RGBToHex = (r, g, b) => `#${toHex(r)}${toHex(g)}${toHex(b)}`;

console.log(RGBToHex(0, 255, 13));
