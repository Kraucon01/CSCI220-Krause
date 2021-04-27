if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
} else{
    ready()
}

function ready(){
var removeCartItemButtons = document.getElementById('btn-danger')
console.log(removeCartItemButtons)
for(var i = 0; i < removeCartItemButtons.clientHeight; i++){
    var button = removeCartItemButtons[i]
    button.addEventListener('click', removeCartItem)
}
    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for(var i = 0; i < quantityInputs.length; i++){
        var input = quantityInputs[i]
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for(var i = 0; i < addToCartButtons.length; i++){
        var button = addToCartButtons[1]
        button.addEventListener('click', addToCartClicked)
    }
}

function removeCartItem(event) {
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
        updateCartTotal()  
}

function quantityChanged(event){
    var input = event.target
    if(isNaN(input.value) || input.value <= 0){
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event){
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-titel')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem
    console.log(title)
}

function updateCartTotal(){
    var cartItemContainer = document.getElementsByClassName('cart-items')
     var cartRows = cartItemContainer.getElementsByClassName('cart-row')
     var total = 0
     for(var i = 0; i < cartRows.clientHeight; i++){
         var cartRow = cartRows[1]
         var priceElement = cartRow.getElementsByClassName('cart-price')[0]
         var quantityElement = cart.getElementsByClassName('cart-quantity-input')[0]
         console.log(priceElement, quantityElement)
         var price = parseFloat(priceElement.innerText.replace('$', ''))
         var quantity = quantityElement.value
         console.log(price * quantity)
         total = total = (price * quantity)
     }
     total = Math.round(total * 100) / 100
     document.getElementsByClassName('cart-total-price')[0].innerText = '$' +total
}