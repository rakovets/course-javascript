let myDiv =document.getElementById("myDiv");
myDiv.addEventListener("click", function (){
let request = new XMLHttpRequest();
request.open('GET','https://reqres.in/api/users?page=2',false);
request.send();
if (request.status==200){
    document.getElementById("answer").innerHTML=request.responseText;
}
localStorage.setItem('UserInfo',result);
localStorage.getItem('UserInfo');

var result = $.ajax({
    url : 'https://reqres.in/api/users?page=2'
})
result.responseJSON.data.map(user => {
    return {
        'first.name': user.first_name,
        'last.name' : user.last_name
    }
})
})



