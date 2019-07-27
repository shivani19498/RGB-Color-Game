var numSquares = 6;
var color = makeRandom(numSquares);

var squares = document.querySelectorAll(".Square");
var colorPicked = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
colorDisplay.textContent = colorPicked;

var message = document.querySelector("#message");




var reset = document.querySelector("#reset");
reset.addEventListener("click",function()
{
	color = makeRandom(numSquares);
	colorPicked = pickColor();
	colorDisplay.textContent = colorPicked;
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor = color[i];	
	}

	document.querySelector("h1").style.backgroundColor = "steelblue";
	message.textContent = "";

	if(reset.textContent === "Play Again")
		reset.textContent = "New Colors";
});



var easybtn = document.querySelector("#easy");
var hardbtn = document.querySelector("#hard");

easybtn.addEventListener("click",function()
{
	easybtn.classList.add("selected");
	hardbtn.classList.remove("selected");

	numSquares = 3;

	color = makeRandom(numSquares);
	colorPicked = pickColor();
	colorDisplay.textContent = colorPicked;

	for(var i=0;i<6;i++)
	{
		if(color[i])
			squares[i].style.backgroundColor = color[i];
		else
			squares[i].style.display = "none";
	}
});

hardbtn.addEventListener("click",function()
{
	hardbtn.classList.add("selected");
	easybtn.classList.remove("selected");

	numSquares = 6;

	color = makeRandom(numSquares);
	colorPicked = pickColor();
	colorDisplay.textContent = colorPicked;

	for(var i=0;i<6;i++)
	{
		squares[i].style.backgroundColor = color[i];
		squares[i].style.display = "block";
	}
});


for(var i=0;i<squares.length;i++)
{
	squares[i].style.backgroundColor = color[i];


	squares[i].addEventListener("click",function()
	{
		var colorClicked = this.style.backgroundColor;
		if(colorClicked === colorPicked)
		{
			changeColor(colorClicked);
			message.textContent = "Correct";
			document.querySelector("h1").style.backgroundColor = colorClicked;
			reset.textContent = "Play Again";
		}
		else
		{
			this.style.backgroundColor = "#232323";
			message.textContent = "Wrong";
		}
	});
}

function changeColor(color)
{
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor = color;
	}	
}

function pickColor()
{
	var random = Math.floor(Math.random() * color.length);
	return color[random];
}

function makeRandom(num)
{
	var arr = [];

	for(var i=0;i<num;i++)
	{
		arr[i] = randomColor();
	}

	return arr;
}

function randomColor()
{
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}