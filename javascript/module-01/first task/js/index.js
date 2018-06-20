const ADMIN_LOGIN = 'admin';
const ADMIN_PASSWORD = '33333';

let login = prompt('Admin login');
// console.log(password);
if(login === null){
    alert('canceled by user');
}
else if(login !== ADMIN_LOGIN){
    alert('fuck off');
}
else if(login === ADMIN_LOGIN){
    // alert('success');
    let passwordForm = prompt('type your password');
    if(passwordForm === null){
        alert('pass canceled by user');
    }
    else if(passwordForm !== ADMIN_PASSWORD){
        alert('access denied');
    }
    else {
        alert('welcome');
    }
}




