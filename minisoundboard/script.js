window.addEventListener('keydown', function(e) {
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    if (!audio) return;//Stops the function from running
    audio.currentTime = 0;
    audio.play()

});

