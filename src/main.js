let input =  document.getElementById('squares');
let select = document.getElementById('variants');

let initItem = (number) => {
    let container = document.getElementById('table');
    let button = document.getElementById('buttonReset');

    for (let i = 0; i < number; i++) {
        let div = document.createElement('div');
        div.classList.add('items');
        container.appendChild(div);
        for (let s = 0; s < number; s++) {
            let div2 = document.createElement('div');
            div2.classList.add('item');
            div.appendChild(div2);
        }
    }

    button.addEventListener('click', () => {
        container.innerHTML = "";
        input.value = "";
    });
};

document.getElementById('buttonShow').addEventListener('click', () => {
    input.classList.remove('is-invalid', 'is-valid');

    if(!input.value) {
        input.classList.add('is-invalid');
        return false;
    } else input.classList.add('is-valid');

    if(input.value < 2 || input.value > 30) {
        input.classList.add('is-invalid');
        return false;
    }

    if(select.value === '1') {
        let items = document.getElementsByClassName('item');
        console.log(items);
    }

    if(input.value && input.value >= 2 || input.value <= 30) {
        let value = input.value;
        initItem(value);
    }
});