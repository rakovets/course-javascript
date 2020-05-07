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
    input.value = td.innerHTML;
    td.innerHTML = '';
    td.appendChild(input);
    input.focus();
};