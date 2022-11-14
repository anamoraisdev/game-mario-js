const mario = document.getElementById("mario");
const pipe = document.getElementById("pipe");
const jump = () => {
    mario.classList.add("jump");
    
    setTimeout(() => {
       mario.classList.remove("jump");
    }, 500);
}


document.addEventListener('keydown', jump);