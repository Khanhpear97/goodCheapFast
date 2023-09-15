function checkGood() {
    let g = document.getElementById('good');
    let c = document.getElementById('cheap');
    let f = document.getElementById('fast');

    if (g.checked === true && c.checked === true) {
        f.checked = false
    }
}
function checkCheap() {
    let g = document.getElementById('good');
    let c = document.getElementById('cheap');
    let f = document.getElementById('fast');

    if (c.checked === true && f.checked === true) {
        g.checked = false
    }
}
function checkFast() {
    let g = document.getElementById('good');
    let c = document.getElementById('cheap');
    let f = document.getElementById('fast');

    if (f.checked === true && g.checked === true) {
        c.checked = false
    }
}