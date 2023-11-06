const APP_ID = '4626f2e73dea4f1585f5ba6dd34bd5a2';
const TOKEN =
  '007eJxTYOhnrXykU33IMkLP+Igpu8Ifppj2Qo3LlZfKa9fu3lfm8VmBIdHEItEwNdXYIiklxcQs2cgi1STN1MAsOdHEMDXFIjnp2FuP1IZARoZJU5yZGRkgEMRnYchNzMxjYAAAH44fqQ==';
const CHANNEL = 'main';

const client = AgoraRTC.createClient({
  mode: 'rtc',
  codec: 'v8',
});

let localTracks = [];
let remoteTracks = {};

let joinAndDisplayLocalStream = async () => {
  let UID = await client.join(APP_ID, CHANNEL, TOKEN, null);
  localTracks = await AgoraRTC.createMicrophoneAndCameraTracks();

  let player = `<div class="video-container" id="user-container-${UID}">
         <div class"video-player" id="user-${UID}"></div>
  </div>`;

  document
    .getElementById('video-stream')
    .insertAdjacentHTML('beforeend', player);

  localTracks[1].play(`user-${UID}`);
  await client.publish([localTracks[0], localTracks[1]]);
};

let joinStream = async () => {
  await joinAndDisplayLocalStream();
  document.getElementById('join-btn').style.display = 'none';
  document.getElementById('stream-controls').style.display = 'flex';
};
