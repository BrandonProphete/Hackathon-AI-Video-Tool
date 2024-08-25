document.addEventListener('DOMContentLoaded', function () {
    const videoUploader = document.getElementById('videoUploader');
    const videoPlayer = document.getElementById('videoPlayer');
    const effectSelect = document.getElementById('effectSelect');
    const applyEffect = document.getElementById('applyEffect');
    const downloadButton = document.getElementById('downloadButton');

    // Event listener for video upload
    videoUploader.addEventListener('change', function () {
        const file = videoUploader.files[0];
        const url = URL.createObjectURL(file);
        videoPlayer.src = url;
    });

    // Event listener for applying effects
    applyEffect.addEventListener('click', function () {
        const selectedEffect = effectSelect.value;
        applyVideoEffect(selectedEffect);
    });

    // Function to apply video effects
    function applyVideoEffect(effect) {
        switch (effect) {
            case 'grayscale':
                videoPlayer.style.filter = 'grayscale(100%)';
                break;
            case 'sepia':
                videoPlayer.style.filter = 'sepia(100%)';
                break;
            case 'invert':
                videoPlayer.style.filter = 'invert(100%)';
                break;
            default:
                videoPlayer.style.filter = 'none';
                break;
        }
    }

    downloadButton.addEventListener('click', function () {
        const link = document.createElement('a');
        link.href = videoPlayer.src;
        link.download = 'modified_video.mp4';
        link.click();
    });

});