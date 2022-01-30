// XHR usuli fetch o'rniga
let url = "https://jsonplaceholder.typicode.com/users";

// CRUD  Create, read, update, delete
function sentRequest(method, requestUrl, body = null) {
    return new Promise ( (resolve, reject)=> {
        
        let request = new XMLHttpRequest
        request.open(method, requestUrl)

        request.responseType = "json"
        request.setRequestHeader("Content-Type", "application/json")

        
        request.onload = () => {
           console.log(request.response);
        }
        
        request.send(JSON.stringify(body))
    })
}


let requestBody = {
    name: "SALOM",
    username: "salomjon"
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

























