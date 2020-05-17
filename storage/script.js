function submit() {
    'use strict';
    (async () => {
        let url = 'https://reqres.in/api/users?page=2';
        try {
            let response = await fetch(url);
            let user = await response.json();
            let length = user.data.length;
            for (let i = 0; i < length; i++) {
                insertText.insertAdjacentHTML('beforebegin', `<input type="radio" name="inset" id="tab_${i}" checked>`
                    + `<label for="tab_${i}">${i + 1}. ` + user.data[i].last_name + `</label></div>`);
                insertText.insertAdjacentHTML('afterend', `<div id="txt_${i}"><p><img src="` 
                    + user.data[i].avatar + `" alt="photo.jpg">` 
                    + `<p><big><b>First Name: </b> <i>` + user.data[i].first_name + `</i></p>` 
                    + `<b>Last Name: </b> <i>` + user.data[i].last_name + `</i></big></p>`);
                localStorage.setItem(`firstNameUser${i}`, user.data[i].first_name);
                localStorage.setItem(`lastNameUser${i}`, user.data[i].last_name);
            };
        } catch (e) {
            insert.insertAdjacentHTML('beforeend', 'Data not received' + '<br>' + e.stack);
        }
    })
    ()
}
