let hours = 7
let minuts = 37
let seconds = 21

let toggle = false

$(function(){
    $('.order-form-box .btn, .header .call').on('click', function(e){
        e.preventDefault();
        popupOpen();
    });
    $('.popup').on('click', function(e){
        if(e.target == this){
            popupClose();
        }
    })
});

window.onmouseout = function (event) {
    if (event.toElement === null && toggle === false) {
        popupOpen()
    }
}

function popupOpen() {
    document.getElementById('popup').style.display = 'flex'
    document.getElementById('body').style.overflow = 'hidden'
    toggle = true
}

function popupClose() {
    document.getElementById('popup').style.display = 'none'
    document.getElementById('body').style.overflow = 'auto'
}

// timer(hours, minuts, seconds)

function timer(h, m, s) {
    if (s >= 60 || m >= 60) {
        console.error("Invalid time settings!");
    } else {
        let interval = setInterval(() => {
            s--
            if (s < 0) {
                m--
                s = 59
            }
            if (m < 0) {
                h--
                m = 59
            }
            if (h === 0 && m === 0 && s === 0) {
                clearInterval(interval)
            }
            document.getElementById('hours').innerHTML = ('0' + h).slice(-2)
            document.getElementById('minuts').innerHTML = ('0' + m).slice(-2)
            document.getElementById('seconds').innerHTML = ('0' + s).slice(-2)
        }, 1000)
    }
}



