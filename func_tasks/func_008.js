//Ripo4ek - Андрей Ляпустин
const fetch = require("node-fetch");



async function GetDataAsync() {
    let response = await fetch("http://3336.kodaktor.ru/funcpsst", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
    });

    return await response.json();

}
GetDataAsync().then((data) => {
    let { g } = data
    console.log(g)
    let functions = g.map(item => new Function('...x', item))

    let [firstFunc, secondFunc] = [...functions]
    console.log("Result of First function:", firstFunc(3, 4, 5, 10))
    console.log("Result of Second function:", secondFunc(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))
})
