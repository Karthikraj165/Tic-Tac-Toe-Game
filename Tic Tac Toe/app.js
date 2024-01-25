let boxes = document.querySelectorAll(".box");
let resbutton = document.querySelector("#reset-button");
let newgamebtn = document.querySelector("#new-button");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

console.log(boxes);
console.log(resbutton);

let turnO = true; //playerX,playerO

const winpattern = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[6, 4, 2],
];

const resetGame = () => {
	turnO = true;
	enableboxes();
	msgcontainer.classList.add("hide");
};

boxes.forEach((box) => {
	box.addEventListener("click", () => {
		// console.log("button was clicked");
		box.innerText = "x";
		if (turnO) {
			box.innerText = "O";
			turnO = false;
		} else {
			box.innerText = "X";
			turnO = true;
		}
		box.disabled = true;

		checkwinner();
	});
});

const disableboxes = () => {
	for (let box of boxes) {
		box.disabled = true;
	}
}

const enableboxes = () => {
	for (let box of boxes) {
		box.disabled = false;
		box.innerText = "";
	}
}


const showWinner = (winner) => {
	msg.innerText = `congratulation,winner is ${winner}`;
	msgcontainer.classList.remove("hide");
	disableboxes();


}

const checkwinner = () => {
	for (let pattern of winpattern) {
		// console.log(pattern[0],pattern[1],pattern[2]);
		// console.log(
		//     boxes[pattern[0]].innerText,
		//     boxes[pattern[1]].innerText,
		//     boxes[pattern[2]].innerText
		//     );

		let pos1val = boxes[pattern[0]].innerText;
		let pos2val = boxes[pattern[1]].innerText;
		let pos3val = boxes[pattern[2]].innerText;

		if (pos1val != "" && pos2val != "" && pos3val != "") {
			if (pos1val === pos2val && pos2val === pos3val) {
				console.log("winner", pos1val);
				showWinner(pos1val);
			}
		}
	}
};

newgamebtn.addEventListener("click", resetGame);
resbutton.addEventListener("click", resetGame);