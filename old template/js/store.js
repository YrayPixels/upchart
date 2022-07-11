var removeCartItemButtons = document.getElementsByClassName('remBtn')
console.log(removeCartItemButtons)
for(var i=0; i<removeCartItemButtons.length; i++){
    var button =removeCartItemButtons[i]
    button.addEventListener('click', function(event){
        var buttonclicked = event.target
        buttonclicked.parentElement.parentElement.remove()
        updateTotal()
    })
}

function updateTotal(){
var cartitemTable = document.getElementById('cartitemTable')[0]
var tablerows = cartitemTable.getElementIdName('tablerow')
for(var i=0; i  < tablerows.length; i++){
    var tablerow =tablerows[i]
var cartPrice =tablerow.getElementsByClassName('cartPrice')[0]
var Quantity = tablerow.getElementsByClassName('cartQuantity')[0]
console.log(cartPrice, Quantity)
//var price = cartPrice.innerHTML
//var quantity = Quantity.innerHTML
}
}
 