function displayRandomChirps() {
  const timeline = document.getElementById('timeline');
  timeline.innerHTML = ''; // Limpiar timeline

  const randomChirps = [];
  const randomUsers = [...usuarios]; // Copia de la lista de usuarios

  while (randomChirps.length < 5 && chirps.length > 0) {
    const randomChirpIndex = Math.floor(Math.random() * chirps.length);
    const randomUserIndex = Math.floor(Math.random() * randomUsers.length);
    const chirp = chirps[randomChirpIndex];
    const user = randomUsers.splice(randomUserIndex, 1)[0]; // Elimina el usuario seleccionado

    if (!randomChirps.some(c => c.chirp === chirp)) {
      randomChirps.push({ chirp, user });

      // Crear contenedor principal del chirp
      const chirpDiv = document.createElement('div');
      chirpDiv.className = 'chirp';

      // Contenedor del texto del chirp y el botón de like
      const chirpContentDiv = document.createElement('div');
      chirpContentDiv.className = 'chirp-content';

      // Formatear el texto del chirp con el usuario estilo "hipervínculo"
      const chirpTextDiv = document.createElement('div');
      chirpTextDiv.className = 'chirp-text';
      chirpTextDiv.innerHTML = `<span class="username">@${user}</span>: ${chirp}`;

      // Botón de like
      const likeButton = document.createElement('button');
      likeButton.className = 'like-button';
      likeButton.innerHTML = '❤';

      // Evento para cambiar color del botón al hacer "like"
      likeButton.addEventListener('click', () => {
        likeButton.classList.toggle('liked');
      });

      // Añadir el texto y el botón al contenedor chirpContentDiv
      chirpContentDiv.appendChild(chirpTextDiv);
      chirpContentDiv.appendChild(likeButton);

      // Añadir el chirp completo al timeline
      chirpDiv.appendChild(chirpContentDiv);
      timeline.appendChild(chirpDiv);
    }
  }
}

// Evento para refrescar la línea de tiempo al hacer clic en el botón
document.getElementById('refresh-button').addEventListener('click', displayRandomChirps);

// Mostrar los primeros chirps al cargar la página
window.onload = displayRandomChirps;
