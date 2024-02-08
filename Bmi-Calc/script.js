const form = document.querySelector('form')


form.addEventListener('submit' ,function(e){

    e.preventDefault()

    let height = document.querySelector('#height').value
    let weight = document.querySelector('#weight').value
    let result = document.querySelector('#result')

    if(/^\d+$/.test(height) && /^\d+$/.test(weight) && height != 0 && weight != 0){
        height = parseInt(height);
        weight = parseInt(weight);
        height = height/100;
        let bmi = (weight/(height*height)).toFixed(2)
        result.innerHTML = 'BMI : ' + bmi
    }

    else{
        result.innerHTML = "Enter valid data"
    }

})