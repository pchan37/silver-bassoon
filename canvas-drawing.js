var clearButton = document.getElementById("clear-drawing");
var canvas = document.getElementById("canvas");

clearButton.addEventListener("click", function(e){
    var canvasContext = canvas.getContext('2d');
    canvasContext.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

    alert("As you were dreaming, the disco bandits wiped everything...");
    canvasContext.beginPath();
});

var drawRectangle = function(e){
    var canvasContext = canvas.getContext('2d');
    var thickness = 5;
    var rectangle = canvas.getBoundingClientRect();
    var xcor = e.clientX - rectangle.left - 0.5 * thickness;
    var ycor = e.clientY - rectangle.top - 0.5 * thickness;

    canvasContext.fillRect(xcor, ycor, thickness, thickness);
};		       

var canvasContext = canvas.getContext("2d");

var connectDots = function(e){
    var xcor = e.offsetX;
    var ycor = e.offsetY;

    canvasContext.fillStyle = "LightSteelBlue";
    canvasContext.lineTo(xcor, ycor);
    canvasContext.stroke();
    canvasContext.beginPath();
    canvasContext.arc(xcor, ycor, 5, 0, Math.PI * 2);
    canvasContext.fill();
    canvasContext.moveTo(xcor, ycor);
};

canvas.addEventListener("click", connectDots);
