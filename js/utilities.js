function getTextElementValueById(elementId){
    const phoneTotalElement = document.getElementById(elementId)
    const currentPhoneTotalstring = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalstring);
 
    return currentPhoneTotal;
 }
 
 function setTextElementValueById(elementId,value){
    const subTotalElememt = document.getElementById(elementId);
    subTotalElememt.innerText = value;
 
 }
 function calculateSubTotal(){
     const currentPhoneTotal = getTextElementValueById('phone-total');
     const currentCaseTotal = getTextElementValueById('case-total');
     const currentSubTotal = currentPhoneTotal + currentCaseTotal;

     setTextElementValueById('sub-total',currentSubTotal)
     const subTotalElememt = document.getElementById('sub-total');
     subTotalElememt.innerText = currentSubTotal;
  
     //calculatetax
     const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
     const taxAmount = parseFloat(taxAmountString);
     setTextElementValueById('tax-amount',taxAmount);



     const finalAmount = currentSubTotal + taxAmount;
     setTextElementValueById('final-total',finalAmount);

    }
 