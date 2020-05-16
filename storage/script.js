function submit() {
    'use strict';
        
    // (async () => {
    //     let url = 'https://reqres.in/api/users?page=2';
    //     let response = await fetch(url);
    //     if (response.status != 200) {
    //         insert.insertAdjacentHTML('beforeend', 'ERROR - data not received');
    //     };
    //     let user = await response.json();

    //     let length = user.data.length;
    //     for (let i = 0; i < length; i++) {
    //         let fullName = user.data[i].first_name + " " + user.data[i].last_name;
    //         insert.insertAdjacentHTML('beforeend', '<br>');
    //         insert.insertAdjacentHTML('beforeend',  fullName);
    //     };
    // })
    // ()
    
    (async () => {
        let url = 'https://reqres.in/api/users?page=2';
        try {
            let response = await fetch(url);
            let user = await response.json();
            let length = user.data.length;
            for (let i = 0; i < length; i++) {
                let fullName = user.data[i].first_name + " " + user.data[i].last_name;
                insert.insertAdjacentHTML('beforeend', '<br>');
                insert.insertAdjacentHTML('beforeend',  fullName);
            }; 
        } catch (e) {
            insert.insertAdjacentHTML('beforeend', 'ERROR - data not received');
        }
    })
    ()
}