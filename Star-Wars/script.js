//obtener los personajes de la API
async function fetchCharacters() {
    try {
        const response = await fetch('https://swapi.dev/api/people');
        const data = await response.json();
        displayCharacters(data.results);
    } catch (error) {
        console.error('Error fetching characters:', error);
    }
}


function displayCharacters(characters) {
    const characterDisplay = document.getElementById('characterDisplay');
    characterDisplay.innerHTML = '';

    characters.forEach(character => {
        const characterCard = document.createElement('div');
        characterCard.className = 'col-md-4 mb-4';
        characterCard.innerHTML = `
            <div class="card text-center h-1000">
               <img src="https://starwars-visualguide.com/assets/img/characters/2.jpg" class="card-img-top" onclick='displayCharacterDetail(${JSON.stringify(character)})' alt="${character.name}">
                <div class="card-body">
                    <h5 class="card-title" onclick='displayCharacterDetail(${JSON.stringify(character)})'>${character.name}</h5>
                    <button class="btn btn-primary" onclick='displayCharacterDetail(${JSON.stringify(character)})'>Ver</button>
                </div>
            </div>
        `;
        characterDisplay.appendChild(characterCard);
    });
}



function displayCharacterDetail(character) {
   
    localStorage.setItem('selectedCharacter', JSON.stringify(character));

    window.location.href = 'detalles.html';
}
window.onload = fetchCharacters;
