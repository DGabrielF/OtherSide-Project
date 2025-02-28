import { ProgressBar } from "../../components/ProgressBar/ProgressBar.js";

export const Opening = {
  self: null,
  create: () => {},
  show: () => {},
  hide: () => {},
  update: ({message, value, maxValue}) => {},
};

Opening.create = () => {
  Opening.self = document.createElement("section");
  Opening.self.id = "opening-page";

  createVideo();

  createProgress();
  
  return Opening.self;
};

function createVideo() {
  Opening.video =  document.createElement("video");
  Opening.video.id = "opening-video";
  Opening.self.appendChild(Opening.video);
  
  Opening.source = document.createElement("source");
  Opening.source.src = "";
  Opening.source.type = "video/mp4";
  Opening.video.appendChild(Opening.source);

  Opening.videoMenu = document.createElement("div");
  Opening.videoMenu.id = "video-menu";
  Opening.self.appendChild(Opening.videoMenu);

  const playButton = document.createElement("button");
  playButton.textContent = "play";
  playButton.addEventListener("click", (e) => playPause(e));
  Opening.videoMenu.appendChild(playButton);

  const muteButton = document.createElement("button");
  muteButton.textContent = "mute";
  muteButton.addEventListener("click", (e) => muteUnmute(e));
  Opening.videoMenu.appendChild(muteButton);

  const volumeInput = document.createElement("input");
  volumeInput.id = "volumeSlider";
  volumeInput.type = "range";
  volumeInput.min = 0;
  volumeInput.max = 1;
  volumeInput.step = 0.1;
  volumeInput.addEventListener("input", (e) => setVolume(e));
  Opening.videoMenu.appendChild(volumeInput);
}

function playPause(e) {
  const button = e.target;
  console.log(button);
  if (button.textContent === "play") {
    Opening.video.play();
    button.textContent = "pause";
  } else if (button.textContent === "pause") {
    Opening.video.pause();
    button.textContent = "play";
  }
}

function muteUnmute(e) {
  const button = e.target;
  console.log(button);
  if (button.textContent === "mute") {
    Opening.video.muted = true;
    button.textContent = "unmute";
  } else if (button.textContent === "unmute") {
    Opening.video.muted = false;
    button.textContent = "mute";
  }
}

function setVolume(e) {
  Opening.video.volume = e.target.value;
}

function createProgress() {
  Opening.message = document.createElement("span");
  Opening.message.textContent = "Carregando dados do jogo.";
  Opening.self.appendChild(Opening.message);
  
  Opening.progress = new ProgressBar({
    value: 0,
    maxValue: 100,
    showText: true,
  });

  Opening.self.appendChild(Opening.progress.create());
}

Opening.show = () => {
  Opening.self.classList.remove("hide");
};

Opening.hide = () => {
  Opening.self.classList.add("hide");
};

Opening.update = ({message, value, maxValue}) => {
  Opening.message.textContent = message;
  Opening.progress.update(value, maxValue);
  return (value === maxValue)
}