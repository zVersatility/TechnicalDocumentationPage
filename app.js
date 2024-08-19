// Audio Personalizado
const audioPlayer = document.getElementById('audioPlayer');
const songSelector = document.getElementById('songSelector');
const playPauseButton = document.getElementById('playPauseButton');
let songs = Array.from(songSelector.options).map(option => option.value);
let currentSongIndex = 0;

// Reproduce la primera canción cuando el usuario hace clic en cualquier lugar de la página
function playFirstSongOnClick() {
    document.body.removeEventListener('click', playFirstSongOnClick); // Evita múltiples reproducciones
    playSong(currentSongIndex);
}

// Cambia la canción según la selección del usuario
function changeSong() {
    currentSongIndex = songSelector.selectedIndex;
    playSong(currentSongIndex);
}

// Alterna entre reproducir y pausar
playPauseButton.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseButton.textContent = 'Pause';
    } else {
        audioPlayer.pause();
        playPauseButton.textContent = 'Play';
    }
});

// Cambia a la siguiente canción
function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    playSong(currentSongIndex);
}

// Reproduce una canción dada por el índice
function playSong(index) {
    // Establece la nueva fuente del audio
    audioPlayer.src = songs[index];
    
    // Asegúrate de que el audio esté listo para reproducirse antes de llamar a play()
    audioPlayer.addEventListener('loadeddata', () => {
        audioPlayer.play().then(() => {
            playPauseButton.textContent = 'Pause';
        }).catch(error => {
            console.error("Error al reproducir el audio:", error);
        });
    }, { once: true }); // Escucha el evento solo una vez
}

// Maneja el evento 'ended' para pasar a la siguiente canción
audioPlayer.addEventListener('ended', nextSong);

// Inicia la reproducción de la primera canción cuando se hace clic en cualquier parte de la página
document.body.addEventListener('click', playFirstSongOnClick);

// Cambia la canción cuando el usuario selecciona una opción en el selector
songSelector.addEventListener('change', changeSong);




//Buscador con navegacion

const options = [
    "Arcane", "Sinopsis", "Powder (Jinx)", "Vi (Violet)", "Vander", "Silco", 
    "Ekko", "Jayce", "Viktor", "Mel", "Heimerdinger", "Caitlyn", "Marcus", 
    "Singed", "Sevika", "Grayson", "Consejales", "Deckard", "Claggor", 
    "Ambessa Medarda", "Sky Young", "Mylo", "Huck", "Benzo", "Elora", 
    "Babette", "Finn"
];

const searchInput = document.getElementById('nav-search');
const autocompleteList = document.getElementById('autocomplete-list');

searchInput.addEventListener('input', function() {
    const value = this.value.toLowerCase();
    autocompleteList.innerHTML = '';

    if (!value) return;

    const filteredOptions = options.filter(option => option.toLowerCase().includes(value));

    filteredOptions.forEach(option => {
        const item = document.createElement('div');
        item.className = 'autocomplete-item';
        item.innerText = option;
        item.addEventListener('click', function() {
            searchInput.value = option;
            scrollToSection(option);
            autocompleteList.innerHTML = '';
        });
        autocompleteList.appendChild(item);
    });
});

document.addEventListener('click', function(e) {
    if (!searchInput.contains(e.target) && !autocompleteList.contains(e.target)) {
        autocompleteList.innerHTML = '';
    }
});

function scrollToSection(option) {
    const sectionId = option.replace(/ /g, '_');
    window.location.hash = sectionId;
    searchInput.value="";
}

function search() {
    const value = searchInput.value;
    scrollToSection(value);
}


document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.mobile-nav-toggle');
    const menu = document.querySelector('.mobile-nav-menu');

    toggleButton.addEventListener('click', () => {
        menu.classList.toggle('show');
    });
});




//    //Audio Nativo
//    // Seleccionar el elemento de audio
//     const audio = document.getElementById('miAudio');
        
//     // Función para reproducir el audio al hacer clic
//     function reproducirAudio() {
//         audio.play();
//         // Remover el evento después de la primera reproducción para evitar múltiples reproducciones
//         document.removeEventListener('click', reproducirAudio);
//     }

//     // Agregar el evento de clic a toda la página
//     document.addEventListener('click', reproducirAudio);


