const taba = 6;
const sharm = 15;
const hurgada = 25;
let numberReq = +prompt('Number of people');
if (numberReq > 0 && !isNaN(numberReq) && Number.isInteger(+numberReq)) {
    if (taba >= numberReq) {
        let answer = confirm('Are you ready taba?');
        if (answer) {
            alert('congratulation');
        } else {
            alert('Sorry');
        }
    } else if (sharm >= numberReq) {
        let answerSharm = confirm('Are you ready for sharm');
        if (answerSharm) {
            alert('congratulation man');
        } else {
            alert('Sorry Man');
        }
    } else if (hurgada >= numberReq) {
        let answerHurgada = confirm('Are you ready for hurgada');
        if (answerHurgada) {
            alert('congratulation woman');
        } else {
            alert('Sorry woman');
        }
    } else if (numberReq > hurgada) {
        alert('not enough place');
    }
}
    else
        {
            alert('error');
        }
