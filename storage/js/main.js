const result = document.querySelector('#result');
const nav = document.querySelector('#nav');
const bodyOfTabs = document.querySelector('#bodyOfTabs');
let key = 0;

function buttonAction() {
    removeOldElements();
    fetch('https://reqres.in/api/users?page=2')
        .then(res => res.json())
        .then(users => {
            users.data.forEach(user => {
                writeInStorage(user.first_name);
                writeInStorage(user.last_name);
                createNewTab(user.first_name, user.last_name);
            });
        })
        .catch(err => {
            result.insertAdjacentHTML('beforeend', err);
            console.log(`Error: ${err}`);
        });
}

function writeInStorage(value) {
    localStorage.setItem(key, value);
    key++;
}

function createNewTab(firstName, lastName) {
    let a = document.createElement('a');
    a.className = 'tabs__item';
    a.innerHTML = lastName;
    a.setAttribute('href', `#tab${key}`);
    nav.prepend(a);

    let div = document.createElement('div');
    div.className = 'tabs__block';
    div.innerHTML = firstName + ' ' + lastName;
    div.setAttribute('id', `tab${key}`);
    bodyOfTabs.prepend(div);
}

function removeOldElements() {
    let aElements = document.querySelectorAll('#nav > a');
    aElements.forEach(element => {
        element.remove();
    });

    let divElements = document.querySelectorAll('#bodyOfTabs > div');
    divElements.forEach(element => {
        element.remove();
    });
}
