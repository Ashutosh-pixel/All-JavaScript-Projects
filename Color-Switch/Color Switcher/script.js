const currentbutton = document.querySelectorAll('.circle')
const colorbox = document.querySelector('.colorbox')

let previousbutton = null;




console.log(currentbutton);

currentbutton.forEach(moveRight)


function moveRight(item){
    console.log(item);
    item.addEventListener('click', function (){
        if(previousbutton === null){
            item.style.transform = "translateX(37px)"
            previousbutton = item;
        }
        else{
            previousbutton.style.transform = "translateX(0)"
            item.style.transform = "translateX(37px)"
            previousbutton = item;
        }

        colorbox.style.backgroundColor = item.id
    });
}
