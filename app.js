document.addEventListener('DOMContentLoaded', () => {
  let pop_song_left = document.getElementById('pop_song_left');
  let pop_song_right = document.getElementById('pop_song_right');
  let pop_song = document.getElementsByClassName('pop_song')[0];

  pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
  });

  pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
  });
});


document.addEventListener('DOMContentLoaded', () => {
  let music = null; // Variable to store the currently playing audio
  let volumeUpButton = document.getElementById('volume_up');
  let volumeDownButton = document.getElementById('volume_down');



  // document.addEventListener('DOMContentLoaded', () => {
  //   let pop_song_left = document.getElementById('pop_song_left');
  //   let pop_song_right = document.getElementById('pop_song_right');
  //   let pop_song = document.getElementsByClassName('pop_song')[0];
  
  //   pop_song_right.addEventListener('click', () => {
  //     pop_song.scrollLeft += 330;
  //   });
  
  //   pop_song_left.addEventListener('click', () => {
  //     pop_song.scrollLeft -= 330;
  //   });
  
  
  
  
  // Function to play the song based on the ID
  function playSong(songId) {
    // Stop the previous song if it is playing
    if (music && !music.paused) {
      music.pause();
      music.currentTime = 0; // Reset the playback position to the beginning
    }

    // Generate the URL of the song based on the ID
    const songUrl = `songs/${songId}.mp3`;

    // Create a new audio element
    music = new Audio(songUrl);

    // Set the initial volume
    music.volume = 0.5; // You can adjust the initial volume here
    
    
    
    
    
    
    music.addEventListener('timeupdate' , ()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;
    // console.log(music_curr);

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);

    if(sec1<10) {
      sec1 =  '0${sec1}';
    }
    currentEnd.innerText = '${min1}:${sec1}';
    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
    if(sec2<10) {
      sec2 =  '0${sec2}';
    }
  });

    

    // Play the audio
    music.play()
      .catch(error => {
        console.error('Failed to play the audio:', error);
      });
  }

  // Function to pause the currently playing song
  function pauseSong() {
    if (music && !music.paused) {
      music.pause();
    }
  }

  // Function to increase the volume
  function increaseVolume() {
    if (music) {
      // Increase the volume by 0.1 (you can adjust the increment as needed)
      music.volume += 0.1;
      if (music.volume > 1) {
        music.volume = 1; // Ensure the volume doesn't exceed 1
      }
    }
  }

  function decreaseVolume() {
    if (music) {
      // Decrease the volume by 0.1 (you can adjust the decrement as needed)
      music.volume -= 0.1;
      if (music.volume < 0) {
        music.volume = 0; // Ensure the volume doesn't go below 0
      }
    }
  }




  // Get all the play buttons
  const playButtons = document.querySelectorAll('.bi-play-fill');

  // Add click event listener to each play button
  playButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Get the ID of the clicked button
      const songId = button.id;

      // Check if the button is already playing
      if (button.classList.contains('playing')) {
        // Pause the song
        pauseSong();
      } else {
        // Play the song
        playSong(songId);
      }

      // Toggle the playing class on the button
      button.classList.toggle('playing');
    });
  });
  volumeUpButton.addEventListener('click', () => {
    increaseVolume();
  });

  // Add click event listener to volume down button
  volumeDownButton.addEventListener('click', () => {
    decreaseVolume();
  });
});


  const songs = [
    {
      id: 1,
      poster: "1.jpg"
    },
    {
      id: 2,
      poster: "2.jpg"
    },
    {
      id: 3,
      poster: "3.jpg"
    },
    {
      id: 4,
      poster: "4.jpg"
    },
    {
      id: 5,
      poster: "5.jpg"
    },
    {
      id: 6,
      poster: "6.jpg"
    },
    {
      id: 7,
      poster: "7.jpg"
    },
    {
      id: 8,
      poster: "8.jpg"
    },
    {
      id: 9,
      poster: "9.jpg"
    },
    {
      id: 10,
      poster: "10.jpg"
    },
    {
      id: 11,
      poster: "11.jpg"
    },
    {
      id: 12,
      poster: "12.jpg"
    },
  ];

  Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;

    e.addEventListener('click', () => {
      if (music && !music.paused) {
        music.pause();
      }

      const songId = songs[i].id;
      const songUrl = `songs/${songId}.mp3`;

      music = new Audio(songUrl);
      music.play()
        .catch(error => {
          console.error('Failed to play the audio:', error);
        });
    });
  });




