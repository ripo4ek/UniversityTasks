//Ripo4ek - Андрей Ляпустин
//мне не очень понятно задание,
//const curryPow = x => y => x ** y; при каррированни работает
//также если просто поменять аргументы x и y местами,
//test = x => y => y ** x; так и должно быть?

function partiPow(x) {
  return y => {
    return y ** x;
  };
}

const qv = partiPow(2);
const cb = partiPow(3);
console.log(qv(5));
console.log(cb(5));
