const colors = ["green", "orange", "rgba(133,122,200)", "#f15546"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
   // Pergar um número aleatorio entre 0 e 3
   const randomNumber = getRandomNumber();
   document.body.style.backgroundColor = colors[randomNumber];
   color.textContent = colors[randomNumber];
});

function getRandomNumber(){
   return Math.floor(Math.random() * colors.length);
}

