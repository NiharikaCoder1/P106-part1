function start() {
    navigator.mediaDevices.getUserMedia ({audio: true})
   classifier= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Cvfh4S2D4/', modelReady)
}

function modelReady(){
    classifier.classify(gotResults);
}