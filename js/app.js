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
];

function render(arr) {
    list.innerHTML = null;
    arr.forEach((item) => {
        let userItem = document.createElement("li");
        userItem.classList.add("user-item");
        let wrapper = document.createElement("div");
        wrapper.classList.add("wrapper");

        let heartIcon = document.createElement('img');
        heartIcon.className = 'w-[35px] h-[35px] heart';
        heartIcon.src = '../images/heart-1.svg';

        let saveIcon = document.createElement('img');
        saveIcon.className = 'w-[30px] h-[30px]';
        saveIcon.src = '../images/save-3.svg';

        let deleteIcon = document.createElement('img');
        deleteIcon.className = 'w-[30px] h-[30px] delete-icon';
        deleteIcon.src = '../images/delete.svg';

        let more = document.createElement('h3');
        more.className = 'text-[15px] text-[white] border-[1px] rounded-lg p-1 more';
        more.textContent = 'more';

        userItem.innerHTML = `
            <img class="flag w-[100px] h-[100px]" src=${item.flag} alt="flag">
            <h1>name: ${item.name}</h1>
            <p>capital: ${item.capital}</p>
            <p>population: ${item.population}</p>
            <p>id: ${item.id}</p>
        `;

        list.appendChild(userItem);
        userItem.appendChild(wrapper);
        wrapper.append(heartIcon, saveIcon, deleteIcon, more);

        deleteIcon.addEventListener('click', function () {
            userItem.remove();
        });

        more.addEventListener('click', function () {
            openModal(item);
        });
    });
}

render(countrys);

search.addEventListener("keyup", function (evt) {
    const searchValue = evt.target.value.toLowerCase();
    const filter = countrys.filter(item => item.name.toLowerCase().includes(searchValue));
    render(filter);
});


const modal = document.createElement('div');
modal.className = 'modal fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center hidden';
modal.innerHTML = `
    <div class="modal-content  p-4 rounded-lg w-[500px] h-[300px] flex flex-col items-center justify-center backdrop-blur content-auto">
        <button class="close-button"><img src="../images/x-lg.svg" alt=""></button>
        <h2 class="modal-title text-lg font-bold"></h2>
        <img class="modal-flag  w-[100px] h-[100px]" src="" alt="flag" >
        <p class="modal-capital"></p>
        <p class="modal-population"></p>
        <p class="modal-id"></p>
    </div>
`;

document.body.appendChild(modal);

function openModal(country) {
    modal.querySelector('.modal-title').textContent = country.name;
    modal.querySelector('.modal-flag').src = country.flag;
    modal.querySelector('.modal-capital').textContent = `Capital: ${country.capital}`;
    modal.querySelector('.modal-population').textContent = `Population: ${country.population}`;
    modal.querySelector('.modal-id').textContent = `ID: ${country.id}`;

    modal.classList.remove('hidden');
}

modal.querySelector('.close-button').addEventListener('click', function () {
    modal.classList.add('hidden');
});

window.addEventListener('click', function (e) {
    if (e.target === modal) {
        modal.classList.add('hidden');
    }
});

const darkButton = document.querySelector('.dark-body');
darkButton.addEventListener('click', () => {
    document.body.style.backgroundImage = 'url(../images/bg-img-blue.jpg)';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundPosition = 'center';
});



