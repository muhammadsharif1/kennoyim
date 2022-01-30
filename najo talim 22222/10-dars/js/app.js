let elWrapper = document.querySelector("#posts_list")

let elPostTemplate = document.querySelector("#post_item_template").content

let elBtn = document.querySelector("#btn")


function render(array, wrapper) {
    var posts = document.createDocumentFragment()

    if(array.length > 0){
        array.forEach(function(item) {
            var postTemplate = elPostTemplate.cloneNode(true)
    
            postTemplate.querySelector("#post_heading").textContent = item.Title
            postTemplate.querySelector("#post_user_id").textContent = item.Year
    
            posts.appendChild(postTemplate)
        })
        wrapper.innerHTML = null
        wrapper.appendChild(posts)
    }else {
        alert("Ma'lumot kelmadi")
    }

    console.log(array);
}



fetch('https://jsonplaceholder.typicode.com/photos')
    .then((response) => response.json())
    .then((data) => render(data, elWrapper))
   

async function fetchData() {
    let response = await fetch("https://www.omdbapi.com/?apikey=73119f16&s=iron&page=5")

    let data = await response.json()
    console.log(data.Search);
    render(data.Search, elWrapper)
}


fetchData()


function salomlash() {
    console.log("salom");
}


// setTimeout(salomlash, 2000)

setTimeout(() => {
}, 2000);
setTimeout(() => {
}, 2000);
setTimeout(() => {
}, 2000);


var test = setInterval(() => {
    console.log("salom");
}, 1000);


elBtn.addEventListener("click", function() {
    clearInterval(test)
    setInterval(() => {
        console.log("Ishladi");
    }, 1000);
})








