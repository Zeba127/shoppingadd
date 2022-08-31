//1add event handler
//get the value inside the case field
//3.convert number to integer
//4.get new value
//5.set the value case number field

function updateCaseNumber(isIncrease){
    const caseNumberfield = document.getElementById('case-number-field')
    const caseNumberstring = caseNumberfield.value;
    const previouscaseNumber = parseInt(caseNumberstring);
    let newCaseNumber;
    if(isIncrease === true){
        newCaseNumber = previouscaseNumber + 1;

    }
    else{
        newCaseNumber = previouscaseNumber - 1;
    }
    caseNumberfield.value = newCaseNumber;

    return newCaseNumber
}
function updatecaseTotalPrice(newCaseNumber){
    const newCaseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total')
    caseTotalElement.innerText = newCaseTotalPrice;

}
document.getElementById('btn-case-plus').addEventListener('click',function(){
    const newCaseNumber = updateCaseNumber(true);

    updatecaseTotalPrice(newCaseNumber);
    calculateSubTotal();
    
})
document.getElementById('btn-case-minus').addEventListener('click',function(){
    const newCaseNumber = updateCaseNumber(false);

    updatecaseTotalPrice(newCaseNumber);
    calculateSubTotal();
   

})