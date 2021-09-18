function checkbox() {
   const ckb = document.getElementById('ckb').checked
   if (ckb) {
      return true
   }
   document.getElementById('ckbSpan').innerHTML =
      '*Please agree to the terms and conditions'
   return false
}

function required() {
   var empt = document.forms['Form']['Name'].value
   if (empt == '') {
      document.getElementById('nameSpan').innerHTML =
         '* This is a required field'
      return false
   }
   return true
}

// function isNumber() {
//    const value = document.getElementById('marks').value;
//    const result = typeof value === 'number';

//    if (!result) {
//       document.getElementById('marksSpan').innerHTML =
//          '*This should be a number';
//       return false;
//    }
//    return true;
// }

function isNumber() {
   var n = document.getElementById('marks').value

   // if (isNaN(n)) {
   //
   // }
   if (!n) {
      document.getElementById('marksSpan').innerHTML =
         '*This should be a number'
      return false
   } else {
      return true
   }
}

// create a function that check if every function return true

const checkAll = () => {
   const func1 = checkbox()
   const func2 = required()
   const func3 = isNumber()
   if (func1 && func2 && func3) {
      document.getElementById('body').innerHTML =
         '<h1>The form has been successfully submitted</h1>'
   }
}

document.getElementById('btn').addEventListener('click', checkbox)
document.getElementById('btn').addEventListener('click', required)
document.getElementById('btn').addEventListener('click', isNumber)
document.getElementById('btn').addEventListener('click', checkAll)
