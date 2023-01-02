const exit      = document.querySelector('.exit');
const checkList = document.querySelector('.cart-items-list');
const numList   = document.querySelector('.numList');
const cartItems = document.querySelector('.cart-items');
const addCart   = document.querySelector('.add-cart');
const msg       = document.querySelector('.msg');
let disableBtn     = document.querySelector('.decrease');
let data        = 0;
document.querySelector('.result').textContent=data;
document.querySelector('.result-2').textContent=data;

function increase(){
    data = data + 1;
    document.querySelector('.result').textContent = data;
    document.querySelector('.result-2').textContent = data;
}
function decrease(){
    // data = data - 1;
    // document.querySelector('.result').textContent = data;
    // document.querySelector('.result-2').textContent = data;
  if(data > 0 ){
   data = data - 1;
      document.querySelector('.result').textContent = data;
      document.querySelector('.result-2').textContent = data;
  }
}



addCart.addEventListener('click', (e)=>{
    e.preventDefault();
    if( data == 0){
        msg.classList.add('msg');
        msg.textContent = 'Your cart is empty.';
        cartItems.style.display = 'block';
        setTimeout(()=> cartItems.remove(), 4000);
    } else if( data > 0){
       numList.textContent = `${data} = $${data * 125.00}`;
       checkList.style.display = 'block'
    } 

})

 
//   disable()

exit.addEventListener('click', (e)=>{
    e.preventDefault();
    checkList.style.display = 'none';
    
})





