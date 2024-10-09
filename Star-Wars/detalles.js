const character = JSON.parse(localStorage.getItem('selectedCharacter'));

if (character) {
    document.getElementById('characterName').textContent = character.name;
    document.getElementById('characterDetails').innerHTML = `
        <p><strong>Altura:</strong> ${character.height} cm</p>
        <p><strong>Peso:</strong> ${character.mass} kg</p>
        <p><strong>Color de piel:</strong> ${character.skin_color}</p>
        <p><strong>Color de cabello:</strong> ${character.hair_color}</p>
        <p><strong>Color de ojos:</strong> ${character.eye_color}</p>
        <p><strong>Año de nacimiento:</strong> ${character.birth_year}</p>
        <p><strong>Género:</strong> ${character.gender}</p>

    `;
}
