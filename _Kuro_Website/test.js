var pics = [
	"imgs/kuro1.png",	//0
	"imgs/kuro2.png",	//1
	"imgs/kuro9.png",	//2
	"imgs/kuro4.png",	//3
	"imgs/kuro5.png",	//4
	"imgs/kuro6.png",	//5
	"imgs/kuro7.png",	//6
	"imgs/kuro8.png"	//7
];

var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 1;


btn.addEventListener("click", function() {
	counter ++;
	if(counter ==7){counter = 0};
	img.src= pics[counter];
});