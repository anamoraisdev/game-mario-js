const mario = document.getElementById("mario");
const pipe = document.getElementById("pipe"); 
const score = document.getElementById("score"); 
let pulando = false

const jump = () => {
    mario.classList.add("jump");
    pulando = true

    setTimeout(() => {
      mario.classList.remove("jump");
      pulando = false

    }, 500);
}

const gameOver = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", '');
  var pontos = 0;
    
  if (pipePosition <= 90 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = "none";
    pipe.style.left = "90px";

    mario.style.bottom = "80px";
    mario.src = "./imagens/game-over.png";
    mario.style.width = "8%";
    mario.style.marginLeft = "50px"
    clearInterval(gameOver);
  } 
},10)
document.addEventListener('keydown', jump);

  //if (pipePosition < 90) {
  //  pontos = pontos + 1;
   // console.log("Seus pontos são:" + pontos)
 // }
//for (; pipePosition <= 90 && pulando == true ; pontos++){
 //   console.log(pontos);
//}


//const randomInteger = (min, max) => {
   // return Math.floor(Math.random() * (max - min + 1)) + min;
 //}

//const randomPipe = () => {
    //setTimeout(() => {
        //if ((randomInteger(1, 100) % 2) === 0) {
      //      console.log("grande")
       //      pipe.classList.add("obj-obstaculo-cano-pequeno");
      //  } else {
      //      console.log("pequeno")
      //      pipe.classList.add("obj-obstaculo-cano-grande");
     //   }
   // }, 1000)
 //   if (pipe.classList.contains("obj-obstaculo-cano-pequeno")) pipe.classList.remove("obj-objstaculo-cano-pequeno");
  //  if (pipe.classList.contains("obj-obstaculo-cano-grande")) pipe.classList.remove("obj-objstaculo-cano-grande");
//}

//()
