function submit() {
    'use strict';
    // localStorage.clear();
    let dataLength  = localStorage.length;
    if (dataLength != 0) {
        alert("Loading from localStorage");
        for (let i = 0; i < dataLength/3; i++) {
            insertText.insertAdjacentHTML('beforebegin', `<input type="radio" name="inset" id="tab_${i}" checked>`
                + `<label for="tab_${i}">${i + 1}. ` + localStorage.getItem(`lastNameUser${i}`) + `</label></div>`
            );
            insertText.insertAdjacentHTML('afterend', `<div id="txt_${i}"><p><img src="` 
                + localStorage.getItem(`avatarUser${i}`) + `" alt="photo.jpg">` 
                + `<p><big><b>First Name: </b> <i>` + localStorage.getItem(`firstNameUser${i}`) + `</i></p>` 
                + `<b>Last Name: </b> <i>` + localStorage.getItem(`lastNameUser${i}`) + `</i></big></p>`
            );
        }
    } else {
        alert("AJAX request and loading data into localStorage");
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
                    localStorage.setItem(`avatarUser${i}`, user.data[i].avatar);
                }
            } catch (e) {
                insert.insertAdjacentHTML('beforeend', 'Data not received' + '<br>' + e.stack);
            }
        })
        ();
    } 
}
