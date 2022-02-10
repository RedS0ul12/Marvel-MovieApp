import { data } from '/.data.js'

const main = document.querySelector('#main')

function showHeroes(heroes) {

    main.innerHTML = '';

    heroes.forEach((heroe)=> {

        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')

        movieEl.innerHTML = `
            <img src="${heroe.image}" alt="${heroe.name}">
            <div class="movie-info">
                <h3>${heroe.name}</h3>
                <span class="green">0.9</span>
            </div>
            <div class="overview">
                <h3>overview</h3>
                ${heroe.first_appearance}
            </div>
        `

        main.appendChild(movieEl)
    })
}

showHeroes(data);

const form = document.getElementById('form')

form.addEventListener('submit', (e.getElementById)=> {
    e.preventDefault()

    const search = document.querySelector('#search').value;

    const result = data.filter(heroe=> heroe.superheroe.toLocaleLowerCase().incluides(search.toLocaleLowerCase()) || heroe.name.toLocaleLowerCase().incluides(search.toLocaleLowerCase()))

    showHeroes(result);
})