const elInput = document.querySelector('.js-input') ;
const elCounterBox = document.querySelector('.js-counter-box') ;

function handleTask (number){
    let numbersInterval ;
    if(number > 0){
        let counterText = document.createElement('p') ;
        counterText.textContent = number ;
        numbersInterval = setInterval(() => {
            number -= 1 ;
            counterText.textContent = number ;
            if(number < 1) {
                counterText.remove() ;
            };
        }, 1000);
        elCounterBox.append(counterText) ;
    }else{
        clearInterval(numbersInterval) ;
    }
} ;

elInput.addEventListener('change', (evt) => {
    if(evt.target.value.length > 4){
        alert('Length max 4 ')
    }else{
        let searchVal = evt.target.value ;
        if(isNaN(searchVal)){
           return alert("Bu harfku, bizni lox deb o'ylashdi aslida sizlar o'qiyotgan kitobni biz yozganmiz") ;
        }; 
        handleTask(searchVal) ;
    }
    evt.target.value = '';
}) ;


