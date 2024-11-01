function displayRandomChirps() {
  const timeline = document.getElementById('timeline');
  timeline.innerHTML = ''; // Limpiar timeline

  const randomChirps = [];
  const randomUsers = [...usuarios]; 

  while (randomChirps.length < 5 && chirps.length > 0) {
    const randomChirpIndex = Math.floor(Math.random() * chirps.length);
    const randomUserIndex = Math.floor(Math.random() * randomUsers.length);
    const chirp = chirps[randomChirpIndex];
    const user = randomUsers.splice(randomUserIndex, 1)[0]; // Eliminates User Dups

    if (!randomChirps.some(c => c.chirp === chirp)) {
      randomChirps.push({ chirp, user });

      // Chirp Main Container
      const chirpDiv = document.createElement('div');
      chirpDiv.className = 'chirp';

      // Chirp Text and Like Container
      const chirpContentDiv = document.createElement('div');
      chirpContentDiv.className = 'chirp-content';

      // Text Formatting
      const chirpTextDiv = document.createElement('div');
      chirpTextDiv.className = 'chirp-text';
      chirpTextDiv.innerHTML = `<span class="username">@${user}</span>: ${chirp}`;

      // Like Button
      const likeButton = document.createElement('button');
      likeButton.className = 'like-button';
      likeButton.innerHTML = '❤';

      // Liked button event
      likeButton.addEventListener('click', () => {
        likeButton.classList.toggle('liked');
      });

      // Children of the main container
      chirpContentDiv.appendChild(chirpTextDiv);
      chirpContentDiv.appendChild(likeButton);

      // Pop it in the timeline
      chirpDiv.appendChild(chirpContentDiv);
      timeline.appendChild(chirpDiv);
    }
  }
}

// Refresh Timeline
document.getElementById('refresh-button').addEventListener('click', displayRandomChirps);

// Loading Start
window.onload = displayRandomChirps;
