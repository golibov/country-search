"use strict";


let list = document.querySelector(".list");
let search = document.querySelector(".search");
search.className = 'search w-[300px] h-[60px] border-[1px] rounded-lg ';
const countrys = [
    {
        id: 1,
        name: "Wallis",
        capital: "Mata-Utu",
        population: 11750,
        flag: "https://flagcdn.com/wf.svg"
    },
    {
        id: 2,
        name: "Iceland",
        capital: "Reykjavik",
        population: 366425,
        flag: "https://flagcdn.com/is.svg"
    },
    {
        id: 3,
        name: "Luxembourg",
        capital: "Luxembourg",
        population: 632275,
        flag: "https://flagcdn.com/lu.svg"
    },
    {
        id: 4,
        name: "Mali",
        capital: "Bamako",
        population: 20250834,
        flag: "https://flagcdn.com/ml.svg"
    },
    {
        id: 5,
        name: "Comoros",
        capital: "Moroni",
        population: 869595,
        flag: "https://flagcdn.com/km.svg"
    },
    {
        id: 6,
        name: "Australia",
        capital: "Canberra",
        population: 25687041,
        flag: "https://flagcdn.com/au.svg"
    },
    {
        id: 7,
        name: "Estonia",
        capital: "Tallinn",
        population: 1331057,
        flag: "https://flagcdn.com/ee.svg"
    },
    {
        id: 8,
        name: "Canada",
        capital: "Ottawa",
        population: 38005238,
        flag: "https://flagcdn.com/ca.svg"
    },
    {
        id: 9,
        name: "Belarus",
        capital: "Minsk",
        population: 9398861,
        flag: "https://flagcdn.com/by.svg"
    },
    {
        id: 10,
        name: "Guyana",
        capital: "Georgetown",
        population: 786559,
        flag: "https://flagcdn.com/gy.svg"
    }
]

function render(arr) {
    list.innerHTML = null;
    arr.map((item) => {
        let userItem = document.createElement("li");
        userItem.classList.add("user-item");
        let wrapper = document.createElement("div")
        wrapper.classList.add("wrapper")

        let heartIcon = document.createElement('img')
        heartIcon.className = 'w-[35px] h-[35px] heart'
        heartIcon.src = '../images/heart-1.svg'

        let saveIcon = document.createElement('img')
        saveIcon.className = 'w-[30px] h-[30px]'
        saveIcon.src = '../images/save-3.svg'

        let deleteIcon = document.createElement('img')
        deleteIcon.className = 'w-[30px] h-[30px] delete-icon'
        deleteIcon.src = '../images/delete.svg'

        userItem.innerHTML = `
            <img class=" flag w-[100px] h-[100px]" src=${item.flag} alt="flag" width="500px">
            <h1> name: ${item.name}</h1>
            <p>capital:${item.capital}</p>
            <p> population:${item.population}</p>
            <p> id:${item.id}</p>
        `

        list.appendChild(userItem);
        userItem.appendChild(wrapper);
        wrapper.append(heartIcon, saveIcon, deleteIcon);


        deleteIcon.addEventListener('click', function () {
            userItem.remove();
        });
    })
}

render(countrys);

search.addEventListener("keyup", function (evt) {
    const searchValue = evt.target.value.toLowerCase();
    const filter = countrys.filter(item => item.name.toLowerCase().includes(searchValue));
    render(filter);
});





const darkButton = document.querySelector('.dark-body');
darkButton.addEventListener('click', () => {
    document.body.style.backgroundImage = 'url(../images/bg-img-blue.jpg)';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundPosition = 'center';


});