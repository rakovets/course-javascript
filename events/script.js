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

elem.addEventListener("click", newRow);

// Подсветка выбранной ячейки таблицы
table.onclick = function(event) {
    let td = event.target.closest('td'); 
  
    if (!td) return;
    if (elem) return; 
  
    td.innerHTML = "Hello";
    // td.focus();
    // highlight(td); 
  };