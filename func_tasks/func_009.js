//Ripo4ek - Андрей Ляпустин
const cc = (x = 0) => () => ++x;

let num = cc()
let inc = num()
let inc2 = num()
let inc3 = num()

console.log(inc, inc2, inc3)





