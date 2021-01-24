function preload(){

}

function setup(){
  canvas = createCanvas(400 , 350)
  canvas.center()
  video = createCapture(VIDEO)
  video.hide()

  classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/2t_MVJh7Q/model.json", modelloaded)
}

function draw(){
  image(video,0,0,400,350)
  classifier.classify(video , getresults)
}

function modelloaded(){
  console.log("OK")
}

function getresults(error , results){
  if(error){
    console.log(error)
  }
  else{
    console.log(results)
    accuracy=results[0].confidence.toFixed(3)*100+" %"
    object=results[0].label
    document.getElementById("object-result").innerHTML = object
    document.getElementById("accuracy-result").innerHTML = accuracy
  }
}