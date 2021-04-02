const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// Functions
function togglePlay (event) {
  event.preventDefault();
  // const method = video.paused ? 'play' : 'pause';
  // video[method]();
  console.log(video.paused)
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}
function updateButton () {
  console.log(updateButton)
  console.log(this.paused)
  const icon = this.paused ? '►' : '❚ ❚';
  toggle.innerText = icon;
}

function skip() {
  console.log(this.dataset.skip)
  console.log(video.currentTime)
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  // const.scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  // video.currentTime = scrubTime;
}

video.onloadedmetadata = function() {
  console.log('metadata loaded!');
  console.log(this.duration);//this refers to myVideo
};

video.addEventListener('click', togglePlay);
// video.addEventListener('play', updateButton);
// video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

// toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));


progress.addEventListener('mousemove', scrub);
