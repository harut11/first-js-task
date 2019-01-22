let input =  document.getElementById('squares');

let initItem = (number) => {
    let container = document.getElementById('table');
    let button = document.getElementById('buttonReset');

    for (let i = 0; i < number; i++) {
        let div = document.createElement('div');
        div.classList.add('items');
        container.appendChild(div);
        for (let i = 0; i < number; i++) {
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

input.addEventListener('keyup', (event) => {
    event.target.classList.remove('is-invalid', 'is-valid');

    if(!event.target.value) {
        event.target.classList.add('is-invalid');
        return false;
    } else event.target.classList.add('is-valid');

    if(event.target.value < 2 || event.target.value > 30) {
        event.target.classList.add('is-invalid');
        return false;
    }

    if(event.target.value) {
        let value = event.target.value;
        initItem(value);
    }
});