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
    console.log(step);
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
});

// Starts start() when Play Button is Clicked
drumKit.playBtn.addEventListener("click", () => {
  drumKit.start();
});
