// Добавление новой строки
function newRow() {
    let tr = document.createElement('tr');
    tr.id = "tr";
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    table.prepend(tr);
    tr.append(td1);
    tr.append(td2);
    tr.append(td3);
};

addTr.addEventListener("click", newRow);

table.onclick = function(event) {
    let td = event.target.closest('td');
    if (!td) return; 

    let input = document.createElement('input');
    input.className = 'edit-input';
    input.value = td.innerHTML;
    td.innerHTML = '';
    td.appendChild(input);
    input.focus();

    input.onblur = closing;

    function closing() {
        td.innerHTML = td.firstChild.value;
        td.classList.remove('edit-input');
    };

    function buttonEnter() {
        document.querySelector('input').addEventListener('keydown', function(e) {
            if (e.keyCode === 13) {
            closing();
            console.log(this.value);
            }
        });
    }
    buttonEnter();
};



