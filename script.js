//your JS code here. If required.
var currentSound;

function playSound(sound) {
	if(currentSound) {
		currentSound.pause();
		currentSound.currentTime = 0;
	}

	currentSound = new Audio('sounds/' + sound);
	currentSound.play();
}

function stopSound() {
	if(currentSound) {
		currentSound.pause();
		currentSound.currentTime = 0;
	}
}
