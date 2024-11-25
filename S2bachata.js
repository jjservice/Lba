
const songs = [ 
    {
        "id": 1,
        "name": "Piel Sin Alma",
        "artist": "Raulin Rodriguez",
        "img": "RAULINPIC.jpg",
        "music": "Raulin Rodriguez-Piel Sin Alma.mp3"
    },
    {
        "id": 2,
        "name": "Te Pierdo y Te Pienso",
        "artist": "Raulin Rodriguez",
        "img": "raulinpicc2222.jpg",
        "music": "Raulin Rodriguez-Te Pierdo y Te Pienso.mp3"
    },
    {
        "id": 3,
        "name": "La Mejor Versión De Mi",
        "artist": "Natti Natasha X Romeo Santos",
        "img": "ROMENATIPIC.jpg",
        "music": "Natti Natasha X Romeo Santos - La Mejor Versión De Mi (LetraLyrics) Remix.mp3"
    },
    {
        "id": 4,
        "name": "Ay Hombre",
        "artist": "Raulin Rodriguez",
        "img": "raulinpicc2222.jpg",
        "music": "Raulin Rodriguez - Ay Hombre.mp3"
    },
    {
        "id": 5,
        "name": "Guerra de Amor",
        "artist": "Yoskar Sarante",
        "img": "yoskarpic33.jpg",
        "music": "Yoskar Sarante-Guerra de Amor.mp3"
    },
    {
        "id": 6,
        "name": "Si Algún Día La Ves",
        "artist": "Raulin Rodriguez",
        "img": "RAULINPIC.jpg",
        "music": "Raulin Rodriguez-Si Algún Día La Ves.mp3"
    },
    {
        "id": 7,
        "name": "Cuanto Duele Que Te Vas",
        "artist": "Zacarias Ferreira",
        "img": "zacariaspic111.jpg",
        "music": "Zacarias Ferreira-Cuanto Duele Que Te Vas.mp3"
    },
    {
        "id": 8,
        "name": "Por un Segundo",
        "artist": "Aventura",
        "img": "aventurapic222.jpg",
        "music": "Aventura-Por un Segundo.mp3"
    },
    {
        "id": 9,
        "name": "Amada Mia",
        "artist": "Elvis Martinez",
        "img": "ELVISMODAPIC.jpg",
        "music": "Elvis Martinez-Amada Mia.mp3"
    },
    {
        "id": 10,
        "name": "ANTOLOGIA DE CARICIAS",
        "artist": "Anthony Santos",
        "img": "anthonisantpic222.jpg",
        "music": "ANTHONY SANTOS -ANTOLOGÍA DE CARICIAS.mp3"
    },
    {
        "id": 11,
        "name": "Su Veneno",
        "artist": "Aventura",
        "img": "aventurapic222.jpg",
        "music": "Aventura-Su Veneno.mp3"
    },
    {
        "id": 12,
        "name": "Perdoname",
        "artist": "Yoskar Sarante",
        "img": "yoskarpic222.jpg",
        "music": "Yoskar Sarante-Perdoname.mp3"
    },
    {
        "id": 13,
        "name": "No Me Entendio",
        "artist": "Zacarias Ferreira",
        "img": "zacaariaspic222.jpg",
        "music": "Zacarias Ferreira-No Me Entendio.mp3"
    },
    {
        "id": 14,
        "name": "Olvidarme de Ti",
        "artist": "Anthony Santos",
        "img": "anthonysantospic1.jpg",
        "music": "Anthony Santos-Olvidarme de Ti.mp3"
    },
    {
        "id": 15,
        "name": "No Te Detengas",
        "artist": "Yoskar Sarante",
        "img": "yoskarpic222.jpg",
        "music": "Yoskar Sarante-No Te Detengas.mp3"
    },
    {
        "id": 16,
        "name": "Voy Amarte",
        "artist": "Elvis Martinez",
        "img": "elvimarpic222.jpg",
        "music": "Elvis Martinez-Voy Amarte.mp3"
    },
    {
        "id": 17,
        "name": "Sin Tu Amor No Hay Vida",
        "artist": "Zacarias Ferreira",
        "img": "zacaariaspic222.jpg",
        "music": "Zacarias Ferreira-Sin Tu Amor No Hay Vida.mp3"
    },
    {
        "id": 18,
        "name": "Mátame",
        "artist": "Anthony Santos",
        "img": "anthonysantospic1.jpg",
        "music": "Anthony Santos-Mátame.mp3"
    },
    {
        "id": 19,
        "name": "Escobita Nueva",
        "artist": "Yoskar Sarante",
        "img": "YOSKARPICG.jpg",
        "music": "Yoskar Sarante-Escobita Nueva.mp3"
    },
    {
        "id": 20,
        "name": "Bailando Con El",
        "artist": "Elvis Martinez",
        "img": "ELVISMODAPIC.jpg",
        "music": "Elvis Martinez-Bailando Con El.mp3"
    },
    {
        "id": 21,
        "name": "Dónde Está Mi Amor",
        "artist": "Zacarias Ferreira",
        "img": "zacariaspic111.jpg",
        "music": "Zacarias Ferreira-Dónde Está Mi Amor.mp3"
    },
    {
        "id": 22,
        "name": "Mi Primera Vez",
        "artist": "Anthony Santos",
        "img": "anthosanpic33.jpg",
        "music": "Anthony Santos-Mi Primera Vez.mp3"
    },
    {
        "id": 23,
        "name": "La Tormenta",
        "artist": "Aventura",
        "img": "aventurapic222.jpg",
        "music": "Aventura-La Tormenta.mp3"
    },
    {
        "id": 24,
        "name": "El Amor Es Libre",
        "artist": "Yoskar Sarante",
        "img": "YoskarPIC.jpg",
        "music": "Yoskar Sarante-El Amor Es Libre.mp3"
    },
    {
        "id": 25,
        "name": "Por Mi Timidez",
        "artist": "Anthony Santos",
        "img": "anthonysantospic1.jpg",
        "music": "Anthony Santos-Por Mi Timidez.mp3"
    },
    {
        "id": 26,
        "name": "Bella Sin Alma",
        "artist": "Elvis Martinez",
        "img": "elvimarpic222.jpg",
        "music": "Elvis Martinez-Bella Sin Alma.mp3"
    },
    {
        "id": 27,
        "name": "Si Te Llego A Perder",
        "artist": "Yoskar Sarante",
        "img": "YOSKARPICG.jpg",
        "music": "Yoskar Sarante-Si Te Llego A Perder.mp3"
    },
    {
        "id": 28,
        "name": "Donde Estará",
        "artist": "Anthony Santos",
        "img": "anthosanpic33.jpg",
        "music": "Anthony Santos-Donde Estará.mp3"
    },
    {
        "id": 29,
        "name": "Prohibeme",
        "artist": "Yoskar Sarante",
        "img": "yoskarpic222.jpg",
        "music": "Yoskar Sarante-Prohibeme.mp3"
    },
    {
        "id": 30,
        "name": "Dile al Amor",
        "artist": "Aventura",
        "img": "aventurapic111.jpg",
        "music": "Aventura-Dile al Amor.mp3"
    },
    {
        "id": 31,
        "name": "Fabula De Amor",
        "artist": "Elvis Martinez",
        "img": "elvimarpic222.jpg",
        "music": "Elvis Martinez-Fabula De Amor.mp3"
    },
    {
        "id": 32,
        "name": "Perdido",
        "artist": "Yoskar Sarante",
        "img": "YOSKARPICG.jpg",
        "music": "Perdido  - Yoskar Sarante.mp3"
    },
    {
        "id": 33,
        "name": "La Bomba",
        "artist": "Zacarias Ferreira",
        "img": "zacariaspic111.jpg",
        "music": "Zacarias Ferreira-La Bomba.mp3"
    },
    {
        "id": 34,
        "name": "Mi Santa",
        "artist": "Romeo Santos",
        "img": "ROMEOPICCCCCC.jpg",
        "music": "Romeo Santos - Mi Santa.mp3"
    },
    {
        "id": 35,
        "name": "Tres Veces",
        "artist": "Yoskar Sarante",
        "img": "YoskarPIC.jpg",
        "music": "Tres Veces - Yoskar Sarante (Audio Bachata).mp3"
    },
    {
        "id": 36,
        "name": "Soberbio",
        "artist": "Romeo Santos",
        "img": "ROMEO222PICCC.jpg",
        "music": "Romeo Santos - Soberbio.mp3"
    },
    {
        "id": 37,
        "name": "Amor A Medio Tiempo",
        "artist": "Yoskar Sarante",
        "img": "YOSKARPICG.jpg",
        "music": "Amor A Medio TIEMPO  - Yoskar Sarante.mp3"
    },
    {
        "id": 38,
        "name": "El Fracaso",
        "artist": "Richie Ortega",
        "img": "RichieOrtegaPic.jpg",
        "music": "Richie Ortega - El Fracaso.mp3"
    },
    {
        "id": 39,
        "name": "La Diabla",
        "artist": "Romeo Santos",
        "img": "ROMEOPICCCCCC.jpg",
        "music": "Romeo Santos - La Diabla (Audio).mp3"
    },
    {
        "id": 40,
        "name": "Yo Quisiera Amarla",
        "artist": "Romeo Santos",
        "img": "ROMEOPICCCCCC.jpg",
        "music": "Aventura - Yo Quisiera Amarla.mp3"
    },
    {
        "id": 41,
        "name": "Guitarra",
        "artist": "Yoskar Sarante",
        "img": "YoskarPIC.jpg",
        "music": "Guitarra - Yoskar Sarante [Video Oficial].mp3"
    },
    {
        "id": 42,
        "name": "Quizás Si, Quizás No",
        "artist": "Hector Acosta(Torito)",
        "img": "TORITOPIC.jpg",
        "music": "Quizás Si, Quizás No.mp3"
    },
    {
        "id": 43,
        "name": "El Malo",
        "artist": "Aventura",
        "img": "aventurapic111.jpg",
        "music": "Aventura-El Malo.mp3"
    },
    {
        "id": 44,
        "name": "Perdóname la Vida",
        "artist": "Hector Acosta(Torito)",
        "img": "TORITOPIC.jpg",
        "music": "Perdóname la Vida.mp3"
    },
    {
        "id": 45,
        "name": "Amorcito Enfermito",
        "artist": "Hector Acosta(Torito)",
        "img": "TORITOPIC.jpg",
        "music": "Hector Acosta - Amorcito Enfermito (Official Video).mp3"
    },
    {
        "id": 46,
        "name": "Asi te Amo",
        "artist": "Elvis Martinez",
        "img": "ELVISMODAPIC.jpg",
        "music": "Elvis Martinez Así te Amo 2003  Audio (1).mp3"
    },
    {
        "id": 47,
        "name": "Si no te tengo",
        "artist": "Raulin Rodriguez",
        "img": "RAULINPIC.jpg",
        "music": "Raulin Rodriguez-Si No Te Tengo.mp3"
    },
    {
        "id": 48,
        "name": "Tu sabes bien",
        "artist": "Elvis Martinez",
        "img": "ELVISMODAPIC.jpg",
        "music": "Tu Sabes.mp3"
    },
    {
        "id": 49,
        "name": "Maestra",
        "artist": "Elvis Martinez",
        "img": "ELVISMODAPIC.jpg",
        "music": "Elvis martinez Maestra.mp3"
    },
    {
        "id": 50,
        "name": "Carta de Verano",
        "artist": "Joe Veraz",
        "img": "JOEPIC.jpg",
        "music": "Joe Veras - Carta De Verano.mp3"
    }

     ];
     const searchInput = document.getElementById("search-input");
     const songList = document.getElementById("song-list");
     const audioPlayer = document.getElementById("audio-player");
     const audioSource = document.getElementById("audio-source");
     const prevButton = document.getElementById("prev-button");
     const nextButton = document.getElementById("next-button");
     const randomButton = document.getElementById("random-button");
     const playPauseButton = document.getElementById("play-pause-button");
     const progressBar = document.getElementById("progress-bar");
     const volumeSlider = document.getElementById("volume-slider");
     const muteButton = document.getElementById("mute-button");
     
     let isPlaying = false;
     let currentSongId = null;
     let isMuted = false;
     
     function renderSongs(filteredSongs = songs) {
         songList.innerHTML = "";
     
         filteredSongs.forEach(song => {
             const songItem = document.createElement("div");
             songItem.classList.add("song-item");
             songItem.dataset.songId = song.id;
             songItem.innerHTML = `
                 <img src="${song.img}" alt="${song.name}">
                 <span>${song.name} - ${song.artist}</span>
                 <button class="play-button"><i class="fas fa-play"></i></button>
             `;
     
             const playButton = songItem.querySelector(".play-button");
             playButton.addEventListener("click", () => {
                 playOrPauseSong(song, playButton);
             });
     
             songList.appendChild(songItem);
         });
     }
     
     function playOrPauseSong(song, button) {
         if (isPlaying && currentSongId === song.id) {
             audioPlayer.pause();
             button.querySelector("i").classList.replace("fa-pause", "fa-play");
             playPauseButton.querySelector("i").classList.replace("fa-pause", "fa-play");
             isPlaying = false;
         } else {
             audioSource.src = song.music;
             audioSource.dataset.songId = song.id;
             audioPlayer.load();
             audioPlayer.play();
             button.querySelector("i").classList.replace("fa-play", "fa-pause");
             playPauseButton.querySelector("i").classList.replace("fa-play", "fa-pause");
             isPlaying = true;
             currentSongId = song.id;
         }
         // Update the current song name display
         const songNameDisplay = document.getElementById("current-song-name");
         songNameDisplay.textContent = song.name;
         
         const artistNameDisplay = document.getElementById("current-artist-name");
         artistNameDisplay.textContent = song.artist;// Display the song name
          
         const idNumberDisplay = document.getElementById("current-id");
         idNumberDisplay.textContent = song.id;// Display the artist name
        }
     
     
     
     audioPlayer.addEventListener("ended", function() {
         const currentSongIndex = songs.findIndex(song => song.id === parseInt(audioSource.dataset.songId));
         const nextSongIndex = (currentSongIndex + 1) % songs.length;
         playOrPauseSong(songs[nextSongIndex], document.querySelector(`[data-song-id="${songs[nextSongIndex].id}"] .play-button`));
     });
     
     function playNextSong() {
         const currentSongIndex = songs.findIndex(song => song.id === parseInt(audioSource.dataset.songId));
         const nextSongIndex = (currentSongIndex + 1) % songs.length;
         playOrPauseSong(songs[nextSongIndex], document.querySelector(`[data-song-id="${songs[nextSongIndex].id}"] .play-button`));
     }
     
     function playPrevSong() {
         const currentSongIndex = songs.findIndex(song => song.id === parseInt(audioSource.dataset.songId));
         const prevSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
         playOrPauseSong(songs[prevSongIndex], document.querySelector(`[data-song-id="${songs[prevSongIndex].id}"] .play-button`));
     }
     
     function playRandomSong() {
         const randomIndex = Math.floor(Math.random() * songs.length);
         playOrPauseSong(songs[randomIndex], document.querySelector(`[data-song-id="${songs[randomIndex].id}"] .play-button`));
     }
     
     prevButton.addEventListener("click", playPrevSong);
     nextButton.addEventListener("click", playNextSong);
     randomButton.addEventListener("click", playRandomSong);
     
     // Handle play/pause button toggle
     playPauseButton.addEventListener("click", () => {
         if (isPlaying) {
             audioPlayer.pause();
             playPauseButton.querySelector("i").classList.replace("fa-pause", "fa-play");
             isPlaying = false;
         } else {
             if (currentSongId === null) {
                 // If no song is playing, start the first song
                 playOrPauseSong(songs[0], document.querySelector(`[data-song-id="${songs[0].id}"] .play-button`));
             } else {
                 audioPlayer.play();
                 playPauseButton.querySelector("i").classList.replace("fa-play", "fa-pause");
                 isPlaying = true;
             }
         }
     });
     
     // Progress Bar update
     audioPlayer.addEventListener("timeupdate", () => {
         if (audioPlayer.duration) {
             const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
             progressBar.value = progress;
         }
     });
     
     // Seek functionality
     progressBar.addEventListener("click", (event) => {
         const seekTime = (event.offsetX / progressBar.offsetWidth) * audioPlayer.duration;
         audioPlayer.currentTime = seekTime;
     });
     
     // Handle volume control slider
     volumeSlider.addEventListener("input", (event) => {
         audioPlayer.volume = event.target.value;
     });
     
     // Handle mute/unmute button
     muteButton.addEventListener("click", () => {
         if (isMuted) {
             audioPlayer.muted = false;
             volumeSlider.value = audioPlayer.volume;
             muteButton.querySelector("i").classList.replace("fa-volume-mute", "fa-volume-up");
         } else {
             audioPlayer.muted = true;
             muteButton.querySelector("i").classList.replace("fa-volume-up", "fa-volume-mute");
         }
         isMuted = !isMuted;
     });
     
     audioPlayer.addEventListener("play", () => {
         playPauseButton.querySelector("i").classList.replace("fa-play", "fa-pause");
         isPlaying = true;
     });
     
     audioPlayer.addEventListener("pause", () => {
         playPauseButton.querySelector("i").classList.replace("fa-pause", "fa-play");
         isPlaying = false;
     });
     
     renderSongs();
     
     searchInput.addEventListener("input", function() {
         const searchQuery = searchInput.value.toLowerCase();
     
         const filteredSongs = songs.filter(song =>
             song.name.toLowerCase().includes(searchQuery) ||
             song.artist.toLowerCase().includes(searchQuery)
         );
     
         renderSongs(filteredSongs);
     });
     
     ///voice search ///
     const voiceSearchButton = document.getElementById("voice-search-button");
     
     // Check if the SpeechRecognition API is available
     const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
     
     let recognition;
     if (SpeechRecognition) {
        recognition = new SpeechRecognition();
        recognition.lang = "es-ES"; // Set language for recognition (you can change this to other languages)
        recognition.continuous = false; // Only listen for a single command
        recognition.interimResults = false; // No need for interim results
     
        // Function to start the voice recognition when the button is clicked
        voiceSearchButton.addEventListener("click", () => {
            recognition.start();
        });
     
        // Handle the speech recognition result
        recognition.addEventListener("result", (event) => {
            const transcript = event.results[0][0].transcript.toLowerCase(); // Convert to lowercase to match the song names/artists
            searchInput.value = transcript; // Set the search input to the recognized speech
     
            // Filter the songs based on the recognized voice input
            const filteredSongs = songs.filter(song =>
                song.name.toLowerCase().includes(transcript) ||
                song.artist.toLowerCase().includes(transcript)
            );
     
            renderSongs(filteredSongs); // Render the filtered song list
        });
     
        // Handle speech recognition errors
        recognition.addEventListener("error", (event) => {
            console.error("Speech recognition error:", event.error);
        });
     
        // Optionally, handle the end of recognition
        recognition.addEventListener("end", () => {
            console.log("Voice search ended");
        });
     } else {
        console.error("Sorry, Lollita can not recognized your voice");
     }
     
     // Assuming you already have the following in your HTML:
     // <audio id="notification-sound" src="notification.mp3" preload="auto"></audio>
     
     const notificationSound = document.getElementById("notification-sound");
     
     // Voice search event listener for recognition result
     recognition.addEventListener("result", (event) => {
        const transcript = event.results[0][0].transcript.toLowerCase(); // Convert to lowercase to match the song names/artists
        searchInput.value = transcript; // Set the search input to the recognized speech
     
        // Filter the songs based on the recognized voice input
        const filteredSongs = songs.filter(song =>
            song.name.toLowerCase().includes(transcript) ||
            song.artist.toLowerCase().includes(transcript)
        );
     
        renderSongs(filteredSongs); // Render the filtered song list
     
        // Play the sound notification if songs are found
        if (filteredSongs.length > 0) {
            notificationSound.play(); // Play sound if matches are found
        }
     });
     
     // Optional: Handle other events like error and end if you want to give feedback for those situations
     recognition.addEventListener("error", (event) => {
        console.error("Speech recognition error:", event.error);
     });
     
     // Optional: Handle end of recognition event
     recognition.addEventListener("end", () => {
        console.log("Voice search ended");
     });
     
     
     recognition.addEventListener("result", (event) => {
        // Get the transcript from the speech recognition result
        let transcript = event.results[0][0].transcript.toLowerCase();
     
        // Remove the period at the end of the text if it exists
        if (transcript.endsWith(".")) {
            transcript = transcript.slice(0, -1); // Remove the last character (the period)
        }
     
        // Set the search input to the recognized speech (without period)
        searchInput.value = transcript;
     
        // Filter the songs based on the recognized voice input
        const filteredSongs = songs.filter(song =>
            song.name.toLowerCase().includes(transcript) ||
            song.artist.toLowerCase().includes(transcript)
        );
     
        renderSongs(filteredSongs); // Render the filtered song list
     
        // Play the sound notification if songs are found
        if (filteredSongs.length > 0) {
            notificationSound.play(); // Play sound if matches are found
        }
     });
     
     function toggleClassPlayer(){
     
        const body = document.querySelector('body');
        body.classList.toggle('lightPlayer');
        
        }