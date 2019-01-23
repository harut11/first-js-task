const input =  document.getElementById('squares');
const select = document.getElementById('variants');
const items = document.getElementsByClassName('items');
const item = document.getElementsByClassName('item');

let initItem = (number) => {
    let container = document.getElementById('table');
    let button = document.getElementById('buttonReset');
    document.getElementById('table').innerHTML = "";
    for (let i = 1; i <= number; i++) {
        let div = document.createElement('div');
        div.classList.add('items');
        div.setAttribute('data-id', `${i}`);
        container.appendChild(div);
        for (let s = 1; s <= number; s++) {
            let div2 = document.createElement('div');
            div2.classList.add('item');
            div2.setAttribute('data-id', `${s}`);
            div.appendChild(div2);
        }
    }

    button.addEventListener('click', () => {
        container.innerHTML = "";
        input.value = "";
        select.value = 'main';
    });
};

input.addEventListener('keyup', (event) => {
    input.classList.remove('is-invalid', 'is-valid');

    let regex = /^[0-9]+$/;
    if(!input.value.match(regex) && event.which === 13) {
        alert('Must input numbers!');
        return false;
    }

    if(!input.value && event.which === 13) {
        input.classList.add('is-invalid');
        alert('Field cant be empty!');
        return false;
    } else input.classList.add('is-valid');

    if((input.value < 2 || input.value > 21) && event.which === 13) {
        input.classList.add('is-invalid');
        alert('The number must be higher than 2 and less than 21!');
        return false;
    }

    if(event.which === 13 && (input.value >= 2 || input.value <= 30)) {
        let value = input.value;
        initItem(value);
    }
});

function clearAllMarked() {
   for(let i = 0; i < item.length; i++){
       if(item[i].classList.contains('marked')) item[i].classList.remove('marked')
   }
}

select.addEventListener('change', (event) => {
    clearAllMarked();
    event.preventDefault();
    let drawMode = event.target.value;
    if(drawMode === 'vertical') {
        for (let i = 0; i < item.length; i++) {
            let data = getDataId(item[i]);
            if(data % 2 === 0) {
                item[i].classList.add('marked');
            }
        }

    }

    if(drawMode === 'horizontal') {
        for(let i = 0; i < items.length; i++) {
            let data = getDataId(items[i]);

            if(data % 2 === 1) {
                let child = items[i].childNodes;
                for(let j = 0; j < child.length; j++){
                    child[j].classList.add('marked')
                }
            }
        }
    }

    if(drawMode === 'chess') {
        for(let i = 0; i < item.length; i++) {
            let itemData = getDataId(item[i]);

            if(itemData % 2 === 1) {
                item[i].classList.add('marked');
            }
        }
    }
});



let getDataId = (div) => {
    return div.getAttribute('data-id');
};