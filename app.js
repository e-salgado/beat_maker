class DrumKit {
  constructor() {
    this.pads = document.querySelectorAll(".pad");
    this.kickAudio = document.querySelector(".kick-sound");
    this.snareAudio = document.querySelector(".snare-sound");
    this.hihatAudio = document.querySelector(".hihat-sound");
    this.index = 0;
  }
  // Repeats over pads
  repeat() {
    let step = this.index % 8;
    const activeBars = document.querySelectorAll(`.b${step}`);
    this.index++;
  }
  start() {
    // Grabs repeat()
    setInterval(() => {
      this.repeat();
    }, 1000); // 1000ms
  }
}

const drumKit = new DrumKit();

drumKit.start();
