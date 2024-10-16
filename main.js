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

function handleMax(num){
    let numInterval ;
    if(num > 0){
        let numCounterText = document.createElement('p') ;
        numCounterText.textContent = num ;
        numInterval = setInterval(() => {
            num -= 1 ;
            numCounterText.textContent = num ;
            if(num < 1) {
                numCounterText.remove() ;
            };
        }, 100);
        elCounterBox.append(numCounterText) ;
    }else{
        clearInterval(numInterval) ;
    }
};

function handleLength(num){
    let lengthInterval ;
    if(num > 0){
        let lengthCounterText = document.createElement('p') ;
        lengthCounterText.textContent = num ;
        lengthInterval = setInterval(() => {
            num -= 1 ;
            lengthCounterText.textContent = num ;
            if(num < 1) {
                lengthCounterText.remove() ;
            };
        }, 5);
        elCounterBox.append(lengthCounterText) ;
    }else{
        clearInterval(lengthInterval) ;
    }
}

elInput.addEventListener('change', (evt) => {
    if(evt.target.value.length > 4){
        alert('Length max 4 ') ;
        
    }else if(evt.target.value.length == 3){
        handleMax(evt.target.value) ;
    }else if(evt.target.value.length == 4){
        handleLength(evt.target.value)
    }else{
        let searchVal = evt.target.value ;
        if(isNaN(searchVal)){
           return alert("Bu harfku, bizni lox deb o'ylashdi aslida sizlar o'qiyotgan kitobni biz yozganmiz") ;
        }; 
        handleTask(searchVal) ;
    }
    evt.target.value = '';
}) ;


