const container = document.querySelector('.container');
const input = document.querySelector('#inputNumber');
const button = document.getElementsByTagName('button');
const main = document.getElementsByTagName('main');
const error = document.querySelector('.error');
let len = -1;
container.innerHTML = '';
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  function validate() {
    
    if (isNaN(input.value) ){
        error.textContent = 'invalid number'
        len = -1;
    }
    else {

        len = input.value;
        console.log(len);
        for (let i = 0; i < len; ++i) {
            const num = document.createElement('a');
            num.innerHTML = `${i}`;
        
            if ( isPrime(i)) {
                num.style.background = 'rgb(235, 65, 65)'
            }
            else if (i % 2 == 0) {
                num.style.background = 'rgb(42, 219, 42)'
            }else {
                num.style.background = '#FCDA3A'
            }
        
            num.className = 'number';
        
            num.addEventListener('mousedown', function() {
                this.classList.add('clicked')
            })
            num.addEventListener('mouseup' , function() {
                this.classList.remove('clicked');
            })
            container.appendChild(num);
        }
    }
}
          

button[0].addEventListener('click', validate);




