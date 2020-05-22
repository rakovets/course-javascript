const result = document.querySelector('#result');
let key = 0;

function buttonAction() {
    fetch('https://reqres.in/api/users?page=2')
        .then(res => res.json())
        .then(users => {
            users.data.forEach(user => {
                writeInStorage(user.first_name);
                writeInStorage(user.last_name);
                let dataAboutUser = user.first_name + " " + user.last_name;
                result.insertAdjacentHTML('beforeend', dataAboutUser);
                result.insertAdjacentHTML('beforeend', '<br />');
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
