let carts = document.querySelectorAll('.add-cart');
carts[0]

let products = [
    {
        Manufacturer: 'Shure',
        ProductName: 'SM57',
        ItemID: 'SM5',
        Price: 99,
        Description: 'Dynamic Microphone with Cardioid Pickup Pattern, 40Hz-15kHz Frequency Response, Low Impedance,Includes Stand Adapter, and Zippered Carrying Case',
        Available: 9,
        inCart: 0
    },
    {
        Manufacturer: 'Gibson',
        ProductName: 'SG Standard 2017 T - Heritage Cherry',
        ItemID:'SGS17HCCH',
        Price: 1169,
        Serial: 170099523,
        Description: 'Solidbody Electric Guitar with Mahogany Body, Mahogany Neck, Rosewood Fingerboard, and 2 Humbucking Pickups - Heritage Cherry',
        Available: 1,
        inCart: 0
    },
    {
        Manufacturer: 'Shure',
        ProductName: 'SM58',
        ItemID: 'SM58',
        Price: 99,
        Description: 'Dynamic Vocal Microphone with Cardioid Pickup Pattern and 50Hz-15kHz Frequency Response, Includes Stand Adapter, and Zippered Carrying Case',
        Available: 6,
        inCart: 0
    },
    {
        Manufacturer:  'Zoom',
        ProductName: 'R16',
        ItemID: 'R16',
        Price: 399,
        Description: '16-track Portable SD Recorder, USB Audio Interface, and DAW Control Surface with 8 Microphone Inputs, Built-in Stereo Condenser Microphones, Built-in Effects, 1GB SD Card, and USB - Mac/PC',
        Available: 14,
        inCart: 0
    }
]

for (let i=0; i < carts.length; i++){
    carts[i].addEventListener('click', () =>{
        cartNumbers(products[i]);
        totalCost(products[i])
    })
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelectorAll('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(product){
    console.log("The product clicked is" + products)
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);
    
    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
    }else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelectorAll('.cart span').textContent = 1;
    }

    setItems(product);
}

function setItems(product){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems !== null){
        if(cartItems[product.ProductName] == undefined){
            cartItems = {
                ...cartItems,
                [product.ProductName]: product
            }
        }
        cartItems[product.ProductName].inCart += 1;
    }else {
        product.inCart = 1;
        cartItems = {
        [product.ProductName]: product
    }
    }
    
    
    localStorage.setItem("productsInCart", JSON.stringify
    (cartItems));
}

function totalCost(product){
    //console.log("The prodict price is", product.Price);
    let cartCost = localStorage.getItem('totalCost'); 

    console.log("My cartCost is", cartCost);
    console.log(typeof cartCost)

    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.Price);
    }else{
        localStorage.setItem("totalCost", product.Price);
    }

    localStorage.setItem("totalCost", product.Price);
}

function displayCart(){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".product-container");
    if(cartItems && productContainer){
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += '<div class="product"><ion-icon name="close-circle"></ion-icon><img src="./images/${item.ProductName}.jpg><span>${item.ProductName}</span></div><div class="price">${item.price}</div><div class="quantity"><ion-icon class="decrease " name="arrow-droplet-circle"</ion-icon><span>${item.inCart}</span><ion-icon class="decrease " name="arrow-droplet-circle"</ion-icon><div class="total">${itemInCart + item.Price},00</div></div>'
        });

        productContainer.innerHTML +='
        <div class="basketTotalContainer"><h4 class="basketTotalTitle">Basket Total</h4><h4 class="basketTotal">$${cartCost},00</h4></div>';
    }
}

onLoadCartNumbers();