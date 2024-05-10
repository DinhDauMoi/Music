const audioPlayer = document.getElementById('audioPlayer');

function playMusic(musicSrc) {
    // Kiểm tra xem âm nhạc đang phát hay không
    if (!audioPlayer.paused) {
        // Nếu âm nhạc đang phát, dừng nó trước khi chơi âm nhạc mới
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
    }
    // Cập nhật nguồn nhạc mới
    audioPlayer.src = musicSrc;
    // Phát nhạc mới
    audioPlayer.play();
}
