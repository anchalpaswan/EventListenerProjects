const container = document.querySelector('.container');

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

for (let i = 0; i < 101; ++i) {
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

// adding event Listener to numbers



