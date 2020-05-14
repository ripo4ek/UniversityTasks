//Ripo4ek - Андрей Ляпустин


const fetch = require("node-fetch");


const values = [10, 20, 30]
const serviceUrls = ['https://kodaktor.ru/api/m/', 'https://kodaktor.ru/api/MS2/', 'https://kodaktor.ru/api/MS3/']
let result = []
async function GetData() {
    let prevAnswer = ''

    for (let i = 0; i < values.length; i++) {
        answer = await fetch(serviceUrls[i] + values[i] + '/' + prevAnswer)
            .then(function (response) {
                return response.text();
            })
            .then(function (text) {
                prevAnswer = takeNumFromLayout(text)
                result.push(prevAnswer)
            });
    }
}
async function PrintData(promise) {
    promise.then(() => {
        console.log(result)
    })
}
function takeNumFromLayout(layout) {
    let re = new RegExp("<span>(.*?)</span>")
    return re.exec(layout)[1]
}



PrintData(GetData())

