const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attempts = 3;
do {
    let enteredPassword = Number(prompt('enter password'));
    if (enteredPassword === null) {
        break
    } else if (passwords.includes(enteredPassword) ){

    }
        }
while (attempts > 0 && enteredPassword !== null);