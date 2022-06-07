let numberCheck = Number;
let result = Boolean;

let checkPaLindRome = function (numberCheck) {
    let strNumberCheck = numberCheck.toString()
    for (let i=0; i < strNumberCheck.length; i++) {
        console.log(strNumberCheck.charAt(i));
        console.log(strNumberCheck.charAt(strNumberCheck.length-i-1));
        if (strNumberCheck.charAt(i) !== strNumberCheck.charAt(strNumberCheck.length-i-1)) {
            result = false;
            return result;
        } else {result = true}
    }
    return result;
}