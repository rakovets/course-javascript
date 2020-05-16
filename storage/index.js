const myDiv = document.getElementById("myDiv");
myDiv.addEventListener("click", () => {
const request = new XMLHttpRequest();
request.open('GET', 'https://reqres.in/api/users?page=2', false);
request.send();
console.log(request.status);
if (request.status == 200) {
const response = JSON.parse(request.response);
const result = response.data.map(user => {
return {
'firstName': user.first_name,
'lastName': user.last_name
}
});
result.forEach((user, index) => {
myFunction(index,user);
});
}
});

function myFunction(index,user) {
    document.getElementById("nav-tab").innerHTML += "" + 
     '<a class="nav-item nav-link" id="nav-contact-tab'+index+  '" data-toggle="tab" href="#nav-contact'+index+'" role="tab" aria-controls="nav-contact'+index+'" aria-selected="false">'+user.firstName+'</a>';
  
     document.getElementById("nav-tabContent").innerHTML += "" + 
     '<div class="tab-pane fade" id="nav-contact'+index+'" role="tabpanel" aria-labelledby="nav-contact-tab'+index+'">'+user.lastName+'</div>';
  }