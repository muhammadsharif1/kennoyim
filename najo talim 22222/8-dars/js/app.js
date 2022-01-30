// Select elements from DOM 
let elWrapper = document.querySelector("#wrapper");
let elBookmarkList = document.querySelector("#bookmark_ul");
let elForm = document.querySelector("#form");
let elRating = document.querySelector("#rating");
let elBtn = document.querySelector("#btn");
let elTitle = document.querySelector("#h5");
let elCategorySelect = document.querySelector("#category_select");
var elSearchInput = document.querySelector("#search_input")

var elMovieItemTemplate = document.querySelector('#movie-card-item').content
var elBookmarkedMovieTemplate = document.querySelector('#bookmarked-movie-template').content;




// var resultjon = elBookmarkedMovieTemplate.cloneNode(true)

// console.log(resultjon);

// Get movies list 
let slicedMovies = movies.slice(0, 20);

var normolizedMovieList = slicedMovies.map((movieItem, index) =>{
    return {
        id: index + 1,
        title: movieItem.Title.toString(),
        categories: movieItem.Categories,
        rating: movieItem.imdb_rating,
        year: movieItem.movie_year,
        imageLink: `https://i.ytimg.com/vi/${movieItem.ytid}/mqdefault.jpg`,
        youtubeLink: `https://www.youtube.com/watch?v=${movieItem.ytid}`
    }
})


var renderCategories = function (movieList, renderSelect) {
    
    var resultCategoryList = []
    
    movieList.forEach(item => {
        var splittedCategory = item.categories.split('|')
        
        splittedCategory.forEach(categoryItem => {
            
            var isCategoryIncludes = resultCategoryList.includes(categoryItem)
            if(!isCategoryIncludes) {
                console.log(isCategoryIncludes);
                resultCategoryList.push(categoryItem)
            }
        })
        
    })
    
    // console.log([369, 321, 12, 21, 1, 10000, 2555555554,5465,4,6,1,54,435,16,854,6].sort((b, a) => (b - a)));
    resultCategoryList.sort()
    
    var elOptionsFragment = document.createDocumentFragment();
    
    resultCategoryList.forEach(function (category) {
        var elCategoryOption = document.createElement("option");
        elCategoryOption.setAttribute('class', ' ');
        elCategoryOption.textContent = category;
        elCategoryOption.value = category;
        
        elOptionsFragment.appendChild(elCategoryOption);
    });
    
    renderSelect.appendChild(elOptionsFragment);
}


renderCategories(normolizedMovieList, elCategorySelect)



// Create render function
function renderMovies(movieArray , wrapper){
    var rusultRender = document.createDocumentFragment()
    
    movieArray.forEach(movie => {
        var movieCardItem = elMovieItemTemplate.cloneNode(true)
        
        movieCardItem.querySelector('#card-image').src = movie.imageLink;
        movieCardItem.querySelector('#card-title').textContent = movie.title;
        movieCardItem.querySelector('#year').textContent = `Year: ${movie.year}`;
        movieCardItem.querySelector('#rating').textContent = `Rating: ${movie.rating}`;
        movieCardItem.querySelector('#movie-link').href = movie.youtubeLink;
        movieCardItem.querySelector("#bookmark").dataset.idJonSalom = movie.id
        
        rusultRender.appendChild(movieCardItem);
    });
    elWrapper.innerHTML = null
    
    elWrapper.appendChild(rusultRender)
    
    elTitle.textContent = `Search results: ${movieArray.length}`;
}

renderMovies(normolizedMovieList , elWrapper);


function renderBookmark(bookmarkList) {
    var elitem = document.createDocumentFragment();
    
    bookmarkList.forEach((item) => {
        var newLi = elBookmarkedMovieTemplate.cloneNode(true)
        
        newLi.querySelector('#bookmark-title').textContent = item.title
        newLi.querySelector("#bookmark-button").dataset.idJon = item.id
        elitem.appendChild(newLi)
    })
    
    elBookmarkList.innerHTML = null
    elBookmarkList.appendChild(elitem)
}


var findMovies = function (title, minRating, genre) {
    
    return normolizedMovieList.filter((movie) => {
        var doesMatchCategory = genre === 'All' || movie.categories.includes(genre);
        
        return  movie.title.match(title) && movie.rating >= minRating && doesMatchCategory;
    });
};


elForm.addEventListener("submit" , (evt) => {
    evt.preventDefault();
    
    var searchInput = elSearchInput.value.trim()
    
    var searchKey = new RegExp(searchInput, "gi");
    
    var ratingInput = elRating.value.trim()
    
    var categorySelect = elCategorySelect.value
    
    var resultList = findMovies(searchKey, ratingInput, categorySelect)
    
    if (resultList.length > 0) {
        elWrapper.innerHTML = null
        renderMovies(resultList , elWrapper);
    } else{
        elWrapper.innerHTML = "Kino yo'q"
        elTitle.textContent = `Search results: 0`;
    }
})


// console.log(elWrapper);


let storage = window.localStorage

var getBookmarked =storage.getItem("bookmark")

var bookArray = JSON.parse(getBookmarked) || []
renderBookmark(bookArray)

elWrapper.addEventListener("click", (evt) =>{ 
    var elementId = evt.target.dataset.idJonSalom
    
    if (elementId) {
        var foundItem = normolizedMovieList.find(function (item) {
            if (item.id == elementId) {
                console.log(item)
                return item
            }
        })
        var resultIncluded = bookArray.includes(foundItem)
        if (!resultIncluded) {
            bookArray.push(foundItem)   
        }
        
    }
    storage.setItem('bookmark', JSON.stringify(bookArray))
    console.log(bookArray);
    
    
    renderBookmark(bookArray)
});





elBookmarkList.addEventListener("click", (evt) => {
    var btnId = evt.target.dataset.idJon
    console.log(btnId);
    
    if (btnId) {
        var foundItem = bookArray.findIndex(function (item) {
            if (item.id == btnId) {
                return item
            }
        })
        
        bookArray.splice(foundItem, 1)
        storage.setItem('bookmark', JSON.stringify(bookArray))
        
        renderBookmark(bookArray)
        
        console.log(bookArray);
        
    }
})



// console.log(storage);

// storage.setItem('user', normolizedMovieList)


// console.log(JSON.parse(storage.getItem("user")));

// let user = storage.getItem('userjon')

// console.log(JSON.parse(user))

