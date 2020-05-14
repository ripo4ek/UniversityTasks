//можно сразу qv(5) - esm  дает привязку на контекст ¯\_(ツ)_/¯
//Ripo4ek - Андрей Ляпустин
import qv from "./func_003_export";

let test = qv.bind(this);

console.log(test(5));
