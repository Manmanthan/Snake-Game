// Canvas is used to draw graphics


function init(){
	var canvas = document.getElementById("mycanvas");
	W = H = canvas.height = canvas.width = 1000;
	pen = canvas.getContext('2d');
	cs = 66;
	game_over = false;
	score = 5;

	// Image object for food
	food_image = new Image();
	food_image.src = "Assets/apple.png";

	trophy = new Image();
	trophy.src = "Assets/trophy.png";
	food = getRandomFood();
	
	snake = {
		init_len:5,
		color:"blue",
		cells:[],
		direction:"right",

		createSnake:function(){

			for(var i = this.init_len; i > 0; i--){

				this.cells.push({x:i,y:0});

			}
		},

		drawSnake:function(){

			for(var i = 0; i < this.cells.length; i++){

				pen.fillStyle = this.color;
				pen.fillRect(this.cells[i].x*cs, this.cells[i].y*cs, cs-2, cs-2);

			}
		},

		updateSnake:function(){
			
			// Check if the snake has eaten food, increase the length of snake and generate new food object

			var headX = this.cells[0].x;
			var headY = this.cells[0].y;

			if (headX == food.x && headY == food.y) {
				console.log("Food Eaten");
				food = getRandomFood();
				score++;
			}
			else{
				this.cells.pop();
			}

			console.log("Update Snake");

			var nextX, nextY;

			if (this.direction=="right") {
				nextX = headX+1;
				nextY = headY;
			}
			else if (this.direction=="left") {
				nextX = headX-1;
				nextY = headY;
			}
			else if (this.direction=="down") {
				nextX = headX;
				nextY = headY+1;
			}
			else {
				nextX = headX;
				nextY = headY-1;
			}

			this.cells.unshift({x:nextX,y:nextY});

			var lastX = Math.round(W/cs);
			var lastY = Math.round(H/cs);

			if (this.cells[0].y < 0 || this.cells[0].x < 0 || this.cells[0].y > lastY || this.cells[0].x >lastX) {
				game_over = true;
			}
		}
	};

	snake.createSnake();

	function keyPressed(e){
		if (e.key=="ArrowRight") {
			snake.direction = "right";
		}
		else if(e.key=="ArrowLeft"){
			snake.direction = "left";
		}
		else if(e.key=="ArrowDown"){
			snake.direction = "down";
		}
		else if(e.key=="ArrowUp"){
			snake.direction = "up";
		}
		console.log(snake.direction);
	}

	document.addEventListener('keydown',keyPressed);
}

function draw(){
	pen.clearRect(0, 0, W, H);
	snake.drawSnake();

	pen.fillStyle = food.color;
	pen.drawImage(food_image,food.x*cs, food.y*cs, cs, cs);

	pen.drawImage(trophy, 18, 20, cs, cs);
	pen.fillStyle = "blue"; 
	pen.font = "20px Roboto";
	pen.fillText(score, 50,50);
}

function update(){
	snake.updateSnake();
}

function getRandomFood(){
	var foodX = Math.round(Math.random()*(W-cs)/cs);
	var foodY = Math.round(Math.random()*(H-cs)/cs);

	var food = {
		x:foodX,
		y:foodY,
		color:"red"
	}

	return food;
}

function gameloop(){
	if (game_over == true) {
		clearInterval(f);
		alert("Game Over");
		return;
	}
	draw();
	update();
}

init();
var f = setInterval(gameloop, 100);

