let age = [
    {
        name: "Salom",
        age: 18
    },
    {
        name: "Valijon",
        age: 25
    },
    {
        name: "O'ktam",
        age: 19
    },
]

console.log(age.some((item)=> item.name == "Valijon"));

// Every
// age[0].name == "Valijon"  true
// age[1].name == "Valijon"  true         TRUE
// age[3].name == "Valijon"  true

// SOME
// age[0].name == "Valijon"  false
// age[1].name == "Valijon"  true         TRUE
// age[3].name == "Valijon"  true



// XHR usuli fetch o'rniga
let url = "https://jsonplaceholder.typicode.com/users";



function sentRequest(method, requestUrl, body = null) {
    return new Promise ( ()=> {
        
        let xhr = new XMLHttpRequest

        xhr.responseType = "json"
        // xhr.setRequestHeader("Content-Type", "application/json")

        xhr.open(method, requestUrl)
        
        xhr.onload = () => {
            if (xhr.status > 400){
                console.error(xhr.response)
            }else {
                console.log(xhr.response)
            }
        }
        
        xhr.send()
    })
}


let requestBody = {
    name: "SALOM",
    surname: "Valijonov"
}

sentRequest("POST", url, requestBody)
    .then(data => console.log(data))

// sentRequest("GET", url)
//     .then(data => console.log(data))















// function sendRequest(method, requestUrl, body = null) {
//     return new Promise ( ()=>{
//         let xhr = new XMLHttpRequest

//         xhr.open(method, requestUrl)

//         xhr.responseType = "json"
//         xhr.setRequestHeader("Content-Type", "application/json")

//         xhr.onload = () => {
//             console.log(xhr.response);
//         }

//         xhr.send(JSON.stringify(body)) 

//     }) 
// }

// let body = {
//     name: "Farrukhbek",
//     surname: "Abbosov"
// }

// // sendRequest("GET", url, body)
// //     .then(data => console.log(data))
// sendRequest("POST", url, body)
// .then(data => console.log(data))

























