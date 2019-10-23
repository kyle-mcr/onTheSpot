const fs = require('fs');
const request = require('request');
let count = 1
let data = []
function makeRequest(){
    request(`http://www.recipepuppy.com/api/?i=&q=dessert&p=${count}`, (error, response, body) => {
        console.log('made a request');    
        data.push(JSON.parse(body));
        count++;
        console.log(count)
        if(count != 101) makeRequest();
    })
}
makeRequest()
let mystr = ""
setTimeout(()=>stringer(),45000);
function stringer(){

    let newdata = data
    console.log(newdata)
    for(let i = 0; i < newdata.length; i++){
        
        if(i == newdata.length - 1){
            for(let j = 0; j < newdata[i].results.length; j++){
                mystr += newdata[i].results[j].ingredients
            }
        } else {
            for(let j = 0; j < newdata[i].results.length; j++){
                mystr += newdata[i].results[j].ingredients + ","
            }
        }
    }
    console.log(mystr.split(","))
    let dict = new Set()
    let a = mystr.split(',')
    let s = ""
    for(let i = 0; i < a.length; i++){
        if(a[i][0] == " "){
            b = a[i].substring(1)
        } else {
            b = a[i]
        }
        if(dict.has(b) == false) {
            dict.add(b)
            s += b + ", "
        }
    }
    fs.writeFile('pooper.txt', s, (err) => {
        console.log(err)
    })


}
