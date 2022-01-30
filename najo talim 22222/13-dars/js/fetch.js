// XHR usuli fetch o'rniga
// let url = "https://jsonplaceholder.typicode.com/users";


// function sentRequest(requestUrl) {
//     return fetch(requestUrl).then( response => {
//         return response.json()
//     })
// }

// sentRequest("GET", url)
//     .then(data => console.log(data))
//     .catch(error => console.log(error))


let elWrapper = document.querySelector("#user_wrapper");
let elResultWrapper = document.querySelector("#user-result");

let elListTemplate = document.querySelector("#list_template").content



function render(array, wrapper) {
    var listItem = document.createDocumentFragment()
    
    if(array){
        array.forEach(function(item) {
            var listTemplate = elListTemplate.cloneNode(true)
            console.log(item);
            listTemplate.querySelector(".user__img").src = item.avatar
            listTemplate.querySelector("#user-name").textContent = item.first_name
            listTemplate.querySelector("#user-surname").textContent = item.last_name
            listTemplate.querySelector("#user-btn").dataset.userId = item.id
            
            listItem.appendChild(listTemplate)
        })
        wrapper.appendChild(listItem)
    }else {
        alert("Ma'lumot kelmadi")
    }
    
    console.log(array);
}


fetch('https://reqres.in/api/users?page=1')
.then(response => response.json())
.then(json => render(json.data, elWrapper))


elWrapper.addEventListener("click", (evt) => {
    let selectedUserId = evt.target.dataset.userId
    
    fetch(`https://reqres.in/api/users/${selectedUserId}/posts`)
    .then(response => response.json())
    .then(json => render([json.data], elResultWrapper))
    
    
    console.log(selectedUserId);
})