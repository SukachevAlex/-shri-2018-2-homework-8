const Camera = [];

(function() {
    const cameraUrl = getCameraUrl();

    cameraUrl.forEach((element, index, array) => {
        let camera = document.createElement('video');
        camera.className = `camera camera-${index + 1}`;
        camera.autoplay = true;
        camera.controls = false;
        camera.muted = true;

        initVideo(camera, element);
        Camera.push(camera);
    });
})();

function initVideo(video, url) {
    if (Hls.isSupported()) {
        let hls = new Hls();
        hls.loadSource(url);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, function() {
            video.play();
        });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = url;
        video.addEventListener('loadedmetadata', function() {
            video.play();
        });
    }
}

function getCameraUrl() {
    return [
        'http://www.streambox.fr/playlists/test_001/stream.m3u8',
        'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
        'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8',
        'https://mnmedias.api.telequebec.tv/m3u8/29880.m3u8'
    ];
}

export { Camera };
