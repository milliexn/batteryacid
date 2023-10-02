let products = document.querySelector('.products');
const productData = [
    {
        imgsrc: "/assets/storeThumbnails/strawberrykiwi.png",
        price: 2.69,
        name: 'Strawberry Kiwi',
        about: "Harmony of ripe strawberries and tangy kiwi, delivering a burst of natural flavors.",
        index: 0,
    },
    {
        imgsrc: "/assets/storeThumbnails/lemonmint.png",
        price: 2.49,
        name: 'Lemon Mint',
        about: "Zesty Citrus Fruits blend with a hint of Mint.",
        index: 1,
    },
    {
        imgsrc: "/assets/storeThumbnails/blueraspberry.png",
        price: 2.99,
        name: 'Blue Raspberry',
        about: "Blueberries and Raspberries, with a touch of Pomegranate.",
        index: 2,
    },
    {
        imgsrc: "/assets/storeThumbnails/cherrylime.png",
        price: 2.79,
        name: 'Cherry Lime',
        about: "Bold Cherries paired with the tang of lime for a dynamic flavor experience.",
        index: 3,
    },
    {
        imgsrc: "/assets/storeThumbnails/applecinnamon.png",
        price: 3.19,
        name: 'Apple Cinnamon',
        about: "Crisp Apple and Warm Cinnamon, evoking the feeling of a cozy Autumn.",
        index: 4,
    },
    {
        imgsrc: "/assets/storeThumbnails/coconutoasis.png",
        price: 3.19,
        name: 'Coconut Oasis',
        about: "Creamy coconut meets zesty lime for a refreshing tropical escape in every sip.",
        index: 5,
    },
    {
        imgsrc: "/assets/storeThumbnails/plumspeach.png",
        price: 2.79,
        name: 'Plums Peach',
        about: "Intense Plum flavor with a punch of Peach, delivering a burst of energy.",
        index: 6,
    },
];
var sortedData = productData.slice(0);
let cartData = [];

window.onload = function () {
    products.innerHTML = "";
    productData.forEach((article, key) => {
        const product_div = document.createElement("div");
        product_div.className = "product";
        product_div.classList.add("article");
        const articleContent = `
            <img>
            <h2></h2>
            <p class="price"></p>
            <p class="about"></p>
            <button class="addCart" onclick="addToCart(${key})">Add To Cart</button>
        `;
        product_div.innerHTML = articleContent;
        products.appendChild(product_div);
    });

    for (var i in productData) {
        // console.log(i);
        products.getElementsByTagName('h2')[i].innerHTML = productData[i].name;
        products.getElementsByClassName('price')[i].innerHTML = "$" + productData[i].price;
        products.getElementsByClassName('about')[i].innerHTML = productData[i].about;
        products.getElementsByTagName('img')[i].src = productData[i].imgsrc;
        products.getElementsByTagName('img')[i].alt = productData[i].name;
    }
}

function sortData() {
    var sortOptions = document.getElementById("sort");
    var index = sortOptions.selectedIndex;
    var flag = sortOptions.options[index].text;
    // console.log(flag);

    if (flag == "Price - Low to High") {
        sortedData.sort((a, b) => (a.price > b.price ? 1 : -1));
        // cartData.sort((a, b) => (a.price < b.price ? 1 : -1));
    }
    else if (flag == "Recommended") {
        // sortedData.length =0;
        sortedData = productData.slice(0);
        // cartData = Data.slice(0);
    }
    else if (flag == "Price - High to Low") {
        sortedData.sort((a, b) => (a.price < b.price ? 1 : -1));
        // cartData.sort((a, b) => (a.price < b.price ? 1 : -1));

    }
    console.log(sortedData);

    for (var i in sortedData) {
        console.log(i);
        products.getElementsByTagName('h2')[i].innerHTML = sortedData[i].name;
        products.getElementsByClassName('price')[i].innerHTML = "$" + sortedData[i].price;
        products.getElementsByClassName('about')[i].innerHTML = sortedData[i].about;
        products.getElementsByTagName('img')[i].src = sortedData[i].imgsrc;
        products.getElementsByTagName('img')[i].alt = sortedData[i].name;
    }
}

let openCart = document.querySelector('.shopping-cart');
let closeCart = document.querySelector('.closeCart');
let listCart = document.querySelector('.listCart');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

//opening and closing the cart
openCart.addEventListener('click', () => {
        body.classList.toggle('active');
})
closeCart.addEventListener('click', () => {
    body.classList.remove('active');
})

// let i = 0;
function addToCart(key) {
    let i=sortedData[key].index;
    if (cartData[i] == null) {
        // copy product form list to list cart
        cartData[i] = JSON.parse(JSON.stringify(sortedData[key]));
        cartData[i].quantity = 1;
        // console.log(cartData);
        // console.log(sortedData[key]);
    }
    else if (cartData[i] != null)
        cartData[i].quantity += 1;
    console.log("button clicked", key);
    reloadCart();
}

let totalPrice = 0;
function reloadCart() {
    listCart.innerHTML = '';
    let count = 0;

    cartData.forEach((value, key) => {
        totalPrice = totalPrice + parseFloat(value.quantity)*parseFloat(value.price);
        console.log(value.price);
        console.log(typeof(value.price));
        count = count + value.quantity;
        if (value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.imgsrc}"/></div>
                <div>${value.name}</div>
                <div>${value.price}</div>
                <div class="count">${value.quantity}</div>
                `;
            listCart.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toFixed(2);
    totalPrice = 0;
    quantity.innerText = count;
}