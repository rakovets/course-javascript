const result = document.querySelector('#result');

function buttonAction() {
    fetch('https://reres.in/api/users?page=2')
        .then(res => res.json())
        .then(users => {
            users.data.forEach(user => {
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