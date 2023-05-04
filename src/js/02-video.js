import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const vimeoPlayer = document.querySelector('#vimeo-player');
const player = new Player(vimeoPlayer);

const playOn = throttle(data => {
  localStorage.setItem('videoplayer-current-time', data.seconds);
}, 1000);

player.on('timeupdate', playOn);
player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
