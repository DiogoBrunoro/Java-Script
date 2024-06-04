const charsContainer = document.querySelector('.chars-container');

const searchInput = document.querySelector('#name')
const speciesFilter = document.querySelector('#species')
const genderFilter = document.querySelector('#gender')
const statusFilter = document.querySelector('#status')
const loadMoreButton = document.querySelector('#load-more')



const API = 'https://rickandmortyapi.com/api';
const defaultFilters = {
    name: "",
    species: "",
    gender: "",
    status: "",
    page: 1,
};

async function getCharacters({ name = "", species = "", gender = "", status = "", page = 1 }) {
    const response = await fetch(`${API}/character?name=${name}&species=${species}&gender=${gender}&status=${status}&page=${page}`);
    
    if (!response.ok) {
        console.error('Failed to fetch characters:', response.statusText);
        return null;
    }
    
    const data = await response.json();
    return data.results;
}

async function render(characters) {
    characters.forEach(character => {
        charsContainer.innerHTML += `
            <div class="card" style="width: 18rem;">
                <img src="${character.image}" class="card-img-top" alt="${character.name}">
                <div class="card-body">
                    <h5 class="card-title">${character.name}</h5>
                    <p class="card-text">Status: ${character.status}</p>
                    <p class="card-text">Species: ${character.species}</p>
                    <p class="card-text">Gender: ${character.gender}</p>
                </div>
            </div>
        `;
    });
}

document.getElementById('name').addEventListener('keydown', async (event) =>{
    defaultFilters.name = event.target.value
    charsContainer.innerHTML = ""; 
    const characters = await getCharacters(defaultFilters);
    if (characters) {
        render(characters);
    }
})

document.getElementById('species').addEventListener('change', async (event) => {
    defaultFilters.species = event.target.value;
    charsContainer.innerHTML = ""; 
    const characters = await getCharacters(defaultFilters);
    if (characters) {
        render(characters);
    }
});

document.getElementById('gender').addEventListener('change', async (event) => {
    defaultFilters.gender = event.target.value;
    charsContainer.innerHTML = ""; 
    const characters = await getCharacters(defaultFilters);
    if (characters) {
        render(characters);
    }
});

document.getElementById('status').addEventListener('change', async (event) => {
    defaultFilters.status = event.target.value;
    charsContainer.innerHTML = ""; 
    const characters = await getCharacters(defaultFilters);
    if (characters) {
        render(characters);
    }
});

loadMoreButton.addEventListener('click', async (event) =>{
    defaultFilters.page += 1;
    const characters = await getCharacters(defaultFilters)
    if (characters)
    {
        render(characters);
    }
});


async function main() {
    const characters = await getCharacters(defaultFilters);
    if (characters) {
        render(characters);
    }
}

main();
