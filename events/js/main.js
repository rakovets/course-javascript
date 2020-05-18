button.onclick = function () {
    table.insertAdjacentHTML('afterbegin', '<tr><td></td><td></td><td></td></tr>');
};

let selectedTd;
let selectedInput;

table.onclick = function (event) {

    if (selectedTd && selectedInput) {
        selectedTd.innerHTML = selectedInput.value;
    }

    let target = event.target;

    if (target.tagName != 'TD') return;

    if (target.classList == 'tdf') return;

    selectedTd = target;

    changeTd(target);

};


function changeTd(td) {

    let text = td.textContent;

    if (selectedInput) {

        selectedInput.remove();
    }

    td.textContent = '';

    let input = document.createElement('input');
    input.setAttribute('id', 'input');
    input.setAttribute('value', text);
    td.prepend(input);
    input.focus();

    selectedInput = input;



}
