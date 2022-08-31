function updatePhonePrice(isIncrease){
    const phoneNumberField = document.getElementById('phone-number-field')
    const phoneNumberFieldString = phoneNumberField.value;
    const previousePhoneNumber = parseInt(phoneNumberFieldString);


    let newPhonePrice ;
    if(isIncrease){
        newPhonePrice = previousePhoneNumber + 1;
    }
    else{
        newPhonePrice = previousePhoneNumber - 1;
    }
    phoneNumberField.value = newPhonePrice;

    return newPhonePrice;
}
function updatePhoneTotalPrice(newPhonePrice){
    const totalPhonePrice = newPhonePrice * 1219;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = totalPhonePrice;
}   

// function getTextElementValueById(elementId){
//    const phoneTotalElement = document.getElementById(elementId)
//    const currentPhoneTotalstring = phoneTotalElement.innerText;
//    const currentPhoneTotal = parseInt(currentPhoneTotalstring);

//    return currentPhoneTotal;
// }

// function calculateSubTotal(){
//     const currentPhoneTotal = getTextElementValueById('phone-total');
//     const currentCaseTotal = getTextElementValueById('case-total');
//     const currentSubTotal = currentPhoneTotal + currentCaseTotal;
//     const subTotalElememt = document.getElementById('sub-total');
//     subTotalElememt.innerText = currentSubTotal;
 
// }

document.getElementById('btn-phone-plus').addEventListener('click',function(){
    const newPhonePrice = updatePhonePrice(true);
   updatePhoneTotalPrice(newPhonePrice);
   calculateSubTotal();

   //calculator
//    const currentPhoneTotal = getTextElementValueById('phone-total');
//    const currentCaseTotal = getTextElementValueById('case-total');
//    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
//    const subTotalElememt = document.getElementById('sub-total');
//    subTotalElememt.innerText = currentSubTotal;

})
 
document.getElementById('btn-phone-minus').addEventListener('click',function(){
    const newPhonePrice = updatePhonePrice(false);
    updatePhoneTotalPrice(newPhonePrice);
    calculateSubTotal();
})
