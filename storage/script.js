function submit() {
    'use strict';
    
    (async () => {
        let url = 'https://reqres.in/api/users?page=2';
        try {
            let response = await fetch(url);
            let user = await response.json();
            let length = user.data.length;
            for (let i = 0; i < length; i++) {
                let fullName = user.data[i].first_name + " " + user.data[i].last_name;
                insert.insertAdjacentHTML('beforeend', '<br>' + fullName);

                localStorage.setItem(`firstNameUser${i}`, user.data[i].first_name);
                localStorage.setItem(`lastNameUser${i}`, user.data[i].last_name);
                
                // let userNum = localStorage.getItem(`firstNameUser${i}`) + " " 
                //     + localStorage.getItem(`lastNameUser${i}`);
                // alert(userNum); 

            }; 
        } catch (e) {
            insert.insertAdjacentHTML('beforeend', 'Data not received' + '<br>' + e.stack);
        }
    })
    ()
}