// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    let newHeaderDiv = document.createElement('div')
    let newDateSpan = document.createElement('span')
    let newTempSpan = document.createElement('span')
    let newH1 = document.createElement('h1')

    newHeaderDiv.classList.add('header')
    newDateSpan.classList.add('date')
    newTempSpan.classList.add('temp')
    
    newDateSpan.textContent = 'MARCH 28, 2020'
    newTempSpan.textContent = '98°'
    newH1.textContent = 'Lambda Times'

    newHeaderDiv.appendChild(newDateSpan)
    newHeaderDiv.appendChild(newH1)
    newHeaderDiv.appendChild(newTempSpan)

    return newHeaderDiv
}

let headerContainer = document.querySelector('.header-container')
headerContainer.appendChild(Header())