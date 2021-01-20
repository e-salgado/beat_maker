class DrumKit {
  constructor() {
    this.pads = document.querySelectorAll(".pad");
    this.playBtn = document.querySelector(".play");
    this.kickAudio = document.querySelector(".kick-sound");
    this.snareAudio = document.querySelector(".snare-sound");
    this.hihatAudio = document.querySelector(".hihat-sound");
    this.index = 0;
    this.bpm = 120;
  }
  // Actives pad color change
  activePad() {
    this.classList.toggle("active");
  }
  // Repeats over pads
  repeat() {
    let step = this.index % 8;
    const activeBars = document.querySelectorAll(`.b${step}`);
    // Loop over the pads
    activeBars.forEach((bar) => {
      bar.style.animation = `playTrack 0.3s alternate ease-in-out 2`;
      // Check if pads are active
      if (bar.classList.contains("active")) {
        // Check each sound
        if (bar.classList.contains("kick-pad")) {
          // Resets time of audio track
          this.kickAudio.currentTime = 0;
          this.kickAudio.play();
        }
        if (bar.classList.contains("snare-pad")) {
          // Resets time of audio track
          this.snareAudio.currentTime = 0;
          this.snareAudio.play();
        }
        if (bar.classList.contains("hihat-pad")) {
          // Resets time of audio track
          this.hihatAudio.currentTime = 0;
          this.hihatAudio.play();
        }
      }
    });
    this.index++;
  }
  start() {
    const interval = (60 / this.bpm) * 1000;
    // Grabs repeat()
    setInterval(() => {
      this.repeat();
    }, interval); // in milliseconds
  }
}

const drumKit = new DrumKit();

// Pads become active when clicked
drumKit.pads.forEach((pad) => {
  pad.addEventListener("click", drumKit.activePad);
  pad.addEventListener("animationend", function () {
    this.style.animation = "";
  });
});

// Starts start() when Play Button is Clicked
drumKit.playBtn.addEventListener("click", () => {
  drumKit.start();
});
