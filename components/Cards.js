// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.


// let cardDiv = document.createElement('div')
// cardDiv.classList.add('card')

// let headlineDiv = document.createElement('div')
// headlineDiv.classList.add('headline')
// headlineDiv.textContent = 'placeholder'

// let authorDiv = document.createElement('div')
// authorDiv.classList.add('author')

// let imgContainerDiv = document.createElement('div')
// imgContainerDiv.classList.add('img-container')
// let newCardImg = document.createElement('img')
// newCardImg.setAttribute('src', 'placeholder')

// let authorSpan = document.createElement('span')
// authorSpan.textContent = 'placeholder'

// imgContainerDiv.appendChild(newCardImg)
// authorDiv.appendChild(imgContainerDiv)
// authorDiv.appendChild(authorSpan)

// cardDiv.appendChild(headlineDiv)
// cardDiv.appendChild(authorDiv)

let cardContainerDiv = document.querySelector('.cards-container')

const getData = () => {
    axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((res) => {
        let articleData = Object.values(res.data.articles)
        articleData.forEach((item) => {
            item.forEach((subItem) => {
                const logHeadline = e => {
                    console.log(subItem.headline)
                }

                let cardDiv = document.createElement('div')
                cardDiv.classList.add('card')

                let headlineDiv = document.createElement('div')
                headlineDiv.classList.add('headline')
                headlineDiv.textContent = subItem.headline

                let authorDiv = document.createElement('div')
                authorDiv.classList.add('author')

                let imgContainerDiv = document.createElement('div')
                imgContainerDiv.classList.add('img-container')
                let newCardImg = document.createElement('img')
                newCardImg.setAttribute('src', `${subItem.authorPhoto}`)

                let authorSpan = document.createElement('span')
                authorSpan.textContent = subItem.authorName

                imgContainerDiv.appendChild(newCardImg)
                authorDiv.appendChild(imgContainerDiv)
                authorDiv.appendChild(authorSpan)

                cardDiv.appendChild(headlineDiv)
                cardDiv.appendChild(authorDiv)
                cardDiv.addEventListener('click', logHeadline)

                cardContainerDiv.appendChild(cardDiv)
            })
        })
        console.log(articleData)
    })
    .catch((err) => {
        console.dir(err)
    })
}
getData()
