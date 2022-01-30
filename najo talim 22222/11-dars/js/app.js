let elWrapper = document.querySelector("#posts_list");
let elForm = document.querySelector("#form_search");
let elSearchInput = document.querySelector("#search");

let elPostTemplate = document.querySelector("#post_item_template").content

let elBtn = document.querySelector("#btn")


function render(array, wrapper) {
    var posts = document.createDocumentFragment()
    
    if(array){
        array.forEach(function(item) {
            var postTemplate = elPostTemplate.cloneNode(true)
            
            postTemplate.querySelector("#post_heading").textContent = item.Title
            postTemplate.querySelector("#post_user_id").textContent = item.Year
            
            posts.appendChild(postTemplate)
        })
        wrapper.innerHTML = null
        wrapper.appendChild(posts)
    }else {
        wrapper.innerHTML = null
        alert("Ma'lumot kelmadi")
    }
    
    console.log(array);
}

async function fetchData(search_name) {
    let response = await fetch(`https://www.omdbapi.com/?apikey=73119f16&s=${search_name}`)
    
    let data = await response.json()
    console.log(data);
    render(data.Search, elWrapper)
}

elForm.addEventListener("submit", (evt) => {
    evt.preventDefault()
    
    var searchInput = elSearchInput.value.trim()
    
    fetchData(searchInput)
    console.log(searchInput)
    
})



var student = {
    fullName: {
        firstName: "Farrukhbek",
        secondName: "Abbosov",
        fathersName: "Marufjon o'g'li",
    },
    age: "21",
    contacts: {
        email: "farruh183@gmail.com",
        tgLink: "@MrAbbosov",
        phoneNumbers: ["+998911645022", "+998911645033"]
    },
    city: "Tashkent",
    isStudying: true
}

var {fullName: {firstName: ismi}, weight=58, contacts:{ email="salom"}, city: test} = student


console.log(ismi,weight,email,ismi,test);







//         "+998911645022","+998977777777",undefined
// var {phoneNumbers: [nomer3, nomer2, nomer1]} = student

// var nomer1 = student.phoneNumbers[0]
// var nomer2 = student.phoneNumbers[1]
// var nomer3 = student.phoneNumbers[2]


// var studentphoneNumbers = student.phoneNumbers
// var studentism = student.ism

// console.log(nomer1, nomer2, nomer3);


var vowels = ["a", "i", "e", "u", "o"]

// 1-usul 
function findVowels(string) {
    var newString = string.toLowerCase().split(" ")
    
    var counter = 0
    
    newString.forEach((item)=> {
        var newItem = item.split("")
        
        newItem.forEach((letter) => {
            var validation = vowels.includes(letter)
            if (validation) {
                counter++
            }
        })
    })
    return counter
}

function findVowels2(string) {
    var newString = string.toLowerCase().split("")
    console.log(newString);
    var counter = 0
    
    newString.forEach((item)=> {
        var validation = vowels.includes(item)
        if (validation) {
            counter++
        }
    })

    return counter
}

console.log(findVowels2("Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero velit maiores repellendus dolores autem amet ipsam repudiandae officia? Reiciendis, aperiam facilis. At, voluptatibus provident perferendis voluptate ab totam ex ut magni enim itaque autem in omnis deleniti ipsam quis mollitia expedita eveniet facilis sint soluta fuga dolorem suscipit distinctio commodi! Veritatis, totam iusto. Temporibus at ipsa repellat sed. Magni, pariatur voluptatem saepe voluptas corporis sapiente nihil ipsam maiores exercitationem necessitatibus sunt at asperiores? Quam deleniti iure, hic provident, numquam quo animi nihil vero illo alias perspiciatis eum id? Quae, quidem? Non quibusdam vitae nemo doloribus debitis laboriosam illo eos ipsum."));

console.log(findVowels("Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero velit maiores repellendus dolores autem amet ipsam repudiandae officia? Reiciendis, aperiam facilis. At, voluptatibus provident perferendis voluptate ab totam ex ut magni enim itaque autem in omnis deleniti ipsam quis mollitia expedita eveniet facilis sint soluta fuga dolorem suscipit distinctio commodi! Veritatis, totam iusto. Temporibus at ipsa repellat sed. Magni, pariatur voluptatem saepe voluptas corporis sapiente nihil ipsam maiores exercitationem necessitatibus sunt at asperiores? Quam deleniti iure, hic provident, numquam quo animi nihil vero illo alias perspiciatis eum id? Quae, quidem? Non quibusdam vitae nemo doloribus debitis laboriosam illo eos ipsum."));



var { log: print } = console


print("salom")



























