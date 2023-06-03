
//button er kaj kora hoyeche
function updateProductInput(product, isAdding,price){
   const productInput = document.getElementById(product+'-number');
   let productNumber = productInput.value;
   if(isAdding){      // isAdding == true ar shudhu isAdding lekhle ek ekaj kore
       productNumber = parseInt(productNumber) + 1;
    
   }
   else if(productNumber > 0){
       productNumber = parseInt(productNumber) - 1;
   }
   productInput.value =  productNumber;

   const updateTotal = document.getElementById(product+ '-total');
   updateTotal.innerText = productNumber * price ;
   calculateTotal();
} 

//calculate
function commonProductInput(product){
    const productInput = document.getElementById(product + '-number');
    const productQuantity =parseInt(productInput.value);
    return productQuantity;
}

function calculateTotal(){
    const phoneAmmount = commonProductInput('phone') * 1549;
    const caseAmmount = commonProductInput('case') * 59;
    const subTotal = phoneAmmount + caseAmmount;
    const tax = subTotal / 10;
    const grandTotal = subTotal + tax;
    
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-ammount').innerText = tax;
    document.getElementById('total-price').innerText = grandTotal; 
}


document.getElementById('phone-plus').addEventListener('click',function(){
    updateProductInput('phone',true,1549)

})
document.getElementById('phone-minus').addEventListener('click',function(){
    updateProductInput('phone',false,1549)

})
document.getElementById('case-plus').addEventListener('click',function(){
    updateProductInput('case',true,59)
})
document.getElementById('case-minus').addEventListener('click',function(){
    updateProductInput('case',false,59)
})   