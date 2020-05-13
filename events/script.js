
function newRow() {
    let tr = document.createElement('tr');
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
    input.className='edit-input'
    input.value = td.innerHTML;
    td.innerHTML = '';
    td.appendChild(input);
    input.focus();

    input.onblur=function(){
        td.innerHTML=td.firstChild.value;
        td.classList.remove('edit-input');
    }
}; 