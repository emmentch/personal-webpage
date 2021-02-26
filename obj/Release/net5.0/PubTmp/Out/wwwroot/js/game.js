//file handles all code for the game on the ./gamepage.php
//interacts with myCanvas id from the canvas on that page
var canvas;
var ctx;
var values;//stores values of the 2048 grid
var score = 0;
var highScore = 0;
var scoreBox;
var highScoreBox; 

/*
 *adds a new 2 or 4 to the grid
 */
function addNewNumber(){
	var newNum = Math.random() < .5 ? 2 : 4;
	do{
		var x = Math.floor(Math.random() * 4);
		var y = Math.floor(Math.random() * 4);
	}while(values[x][y] != 0);
		values[x][y] = newNum;
}

/*
 *Creates a cookie, used to set the high score
 */
function createCookie(key, value, date) {
       let expiration = new Date(date).toUTCString();
       console.log(expiration);
       let cookie = escape(key) + "=" + escape(value) + ";expires=" + expiration + ";";
       document.cookie = cookie;
}

/*
 *Reads the cookie key and returns its value, or null if not defined
 */
function readCookie(name) {
	let key = name + "=";
    	let cookies = document.cookie.split(';');
    	for (let i = 0; i < cookies.length; i++) {
    		let cookie = cookies[i];
    		while (cookie.charAt(0) === ' ') {
                cookie = cookie.substring(1, cookie.length);
            }
    		if (cookie.indexOf(key) === 0) {
                return cookie.substring(key.length, cookie.length);
            }
    	}
    	return null;
}

/*
 * Checks array for possible moves, returns false if no moves available
 */
function hasValidMoves(){
	//checks for a blank space
	for(var i = 0; i < 4;i++){
		for(var j = 0; j < 4; j++){
			if(values[i][j] == 0){return true;}
		}
	}
	//checks borders of a "full grid" if valid moves exist 
	 for(var i = 0; i < 4;i++){
                for(var j = 0; j < 4; j++){
		if(i - 1 >= 0 && values[i-1][j] == values[i][j]){return true;}
		if(i + 1 <= 3 && values[i+1][j] == values[i][j]){return true;}
		if(j - 1 >= 0 && values[i][j-1] == values[i][j]){return true;}
		if(j + 1 <= 3 && values[i][j+1] == values[i][j]){return true;}
		}
	}
	return false;
	

}

/*
 * Creates a new game state, with a border with 1 number, and a score of 0
 */
function newBoard(isLoss){
	if (isLoss) {alert("You lost with a score of " + score);}
	values = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
	addNewNumber();
	clearScore();
	draw();
}

/*
 * Moves board to the left
 */
function moveLeft(){
	changed = false;
	var dontMergeValue;//used to stop 0 4 2 2 -> 0 0 0 8 bug from happening on move right
	for(var j = 0; j < 4; j++){
		dontMergeValue = -1;
                for(var i = 1; i < 4; i++){
               	        if(values[i][j] != 0){
                       	        while(i > 0 && values[i-1][j] == 0){
                               	        changed = true;
                                        values[i-1][j] = values[i][j];
                                        values[i][j] = 0;
               	                        i--;
               	                }
               	                if(i-1 >= 0 && values[i][j] != 0 && values[i][j] == values[i-1][j] && dontMergeValue != i-1){
               	                        changed = true;
               	                        values[i-1][j]*=2;
               	                        updateScore(values[i-1][j]);
                	                values[i][j] = 0;
					dontMergeValue = i-1;
                	        }
                	 }
              	  }
       	 }
	return changed;
}

/*
 * Moves board to the right
 */
function moveRight(){
	changed = false;
	var dontMergeValue;//used to stop 0 4 2 2 -> 0 0 0 8 bug from happening on move right
	for(var j = 0; j < 4; j++){
		dontMergeValue = -1;
                for(var i = 2; i >= 0; i--){
                        if(values[i][j] != 0){
                                while(i < 3 && values[i+1][j] == 0){
                                        changed = true;
                                        values[i+1][j] = values[i][j];
                                        values[i][j] = 0;
                                        i++;
                                }
                                if(i+1 <= 3 && values[i][j] != 0 && values[i][j] == values[i+1][j] && dontMergeValue != i+1){
                                        changed = true;
                                        values[i+1][j]*=2;
                                        updateScore(values[i+1][j]);
                                        values[i][j] = 0;
					dontMergeValue = i+1;
                                }
                        }
                }
        }
	return changed;
}

/*
 * Moves board to the top
 */
function moveUp(){
	changed = false;
	var dontMergeValue;//used to stop 0 4 2 2 -> 0 0 0 8 bug from happening on move right
	for(var i = 0; i < 4;i++){
		dontMergeValue = -1;
                for(var j = 1; j < 4; j++){
                        if(values[i][j] != 0){
                                while(j > 0 && values[i][j-1] == 0){
                                        changed = true;
                                        values[i][j-1] = values[i][j];
                                        values[i][j] = 0;
                                        j--;
                                }
                                if(j-1 >= 0 && values[i][j] != 0 && values[i][j] == values[i][j-1] && dontMergeValue != j-1){
                                        changed = true;
                                        values[i][j-1]*=2;
                                        updateScore(values[i][j-1]);
                                        values[i][j] = 0;
					dontMergeValue = j-1;
                                }
                        }
                }
        }
	return changed;
}

/*
 * Moves board to the bottom
 */
function moveDown(){
	changed = false;
	var dontMergeValue;//used to stop 0 4 2 2 -> 0 0 0 8 bug from happening on move right
	for(var i = 0; i < 4;i++){
		dontMergeValue = -1;
                for(var j = 2; j >= 0; j--){
                        if(values[i][j] != 0){
                                while(j < 3 && values[i][j+1] == 0){
                                        changed = true;
                                        values[i][j+1] = values[i][j];
                                        values[i][j] = 0;
                                        j++;
                                }
                                if(j+1 <= 3 && values[i][j] != 0 && values[i][j] == values[i][j+1] && dontMergeValue != j+1){
                                        changed = true;
                                        values[i][j+1]*=2;
                                        updateScore(values[i][j+1]);
                                        values[i][j] = 0;
					dontMergeValue = j+1;
                                }

                        }
                }
        }
	return changed;
}

/*
 * Handles all event interactions for moving tiles on the game board
 */
function moveTile(e){
	var changed = false;
	var key = e.keyCode;
	switch (key) {
        case 37:
		changed = moveLeft();
		break;
        case 38:
		changed = moveUp(); 
		break;
        case 39: 
		changed = moveRight();
		break; 
        case 40:
		changed = moveDown();
		break;
        default:
		break;
    	}	
	if(changed){
		addNewNumber();
		draw();
		if(!hasValidMoves()){
			setTimeout(function(){
				newBoard(true);
			},1000);
		}
	}
}

/*
 * Initializes the canvas, context, event listeners, and game state
 */
function init(){
	canvas = document.getElementById("myCanvas");
	ctx = canvas.getContext("2d");
	scoreBox = document.getElementById("score");
	highScoreBox = document.getElementById("highscore");
	highScore = readCookie("highscore") == null ? 0 : parseInt(readCookie("highscore"));
	createCookie("highscore",highScore,Date.UTC(2050,8,1));
	highScoreBox.innerHTML = "High Score: " + highScore;
	window.addEventListener("keyup",moveTile,false);
        window.addEventListener("keydown", function(e) {
                if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
                        e.preventDefault();
                }
        }, false);
	newBoard(false);
}

/*
 * Adds x points to the score and updates/saves high score if higher than the current score
 */
function updateScore(x){
	score+=x;
	scoreBox.innerHTML = "Score: " + score;
	if(score > highScore){
		highScore = score;
		highScoreBox.innerHTML = "High Score: " + highScore;
		createCookie("highscore",highScore,Date.UTC(2050,8,1));
	}
}

/*
 * Clears current score
 */
function clearScore(){
	score = 0;
	scoreBox.innerHTML = "Score: " + score;
}

/*
 * Handles all of the drawing of the game
 */
function draw(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = "black";
	ctx.font = "30px Arial";
	for(var i = 0; i < 4;i++){
		for(var j = 0; j < 4;j++){
			ctx.beginPath();
			//scale takes the log of the value times 10 to scale the color of the numbers
			var scale = (values[i][j] == 0) ? 0 : 10 * Math.log2(values[i][j]);
			ctx.fillStyle = scale != 0 ? "rgb(255, "+(255-scale)+", "+(255-scale)+")" : "black";
			ctx.rect(120*i,120*j,120,120);
			ctx.fill();
			ctx.stroke();
			ctx.fillStyle = "black";
			if(values[i][j] != 0){
				ctx.fillText(values[i][j], 120*i + 40, 120*j + 70);
			}
			ctx.closePath();
		}
	}
}


window.onload = function(){
	init();
}

