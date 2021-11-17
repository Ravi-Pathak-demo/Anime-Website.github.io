
var removecartItemButtons = document.getElementsByClassName("btn-danger")
console.log(removecartItemButtons)
for (var i = 0; i < removecartItemButtons.length; i++) {
    var button = removecartItemButtons[i]
    button.addEventListener('click', function (event) {
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
        updatecarttotal()
    })
}
var quantityInputs = document.getElementsByClassName('cart-quantity-input')
for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i]
    input.addEventListener('change', quatitychanged)
}
var addtoCartButtons = document.getElementsByClassName('shop-items-button')
for (var i = 0; i < addtoCartButtons.length; i++) {
    var button = addtoCartButtons[i]
    button.addEventListener('click', addtoCartClicked)
}
function quatitychanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updatecarttotal()
}
function addtoCartClicked(event) {
    var button = event.target
    var shopItems = button.parentElement.parentElement
    var title = shopItems.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItems.getElementsByClassName('shop-item-title')[0].innerText
    var imagesrc = shopItems.getElementsByClassName('shop-item-image')[0].src
    console.log(title, price, imagesrc)
}

function updatecarttotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = total + ' Rupees'
}
document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
function purchaseClicked() {
    alert('Thank You for Your Purchase .... Happy Shopping')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
}