const arr = ["Purple","Olive","Teal","Navy","Orange","Red","Yellow","Green"];
const btn = document.getElementById('btn');
const color = document.getElementById('color');

function random (){
    return Math.floor(Math.random()*arr.length);
}

btn.addEventListener("click", function(){
    const randomNumber = random();
    document.body.style.backgroundColor = arr[randomNumber];
    color.innerHTML = arr[randomNumber];
})

