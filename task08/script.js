let products = [];

// Fetch Products
fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {

        products = data;
        displayProducts(products);

    })
    .catch((error) => {

    console.error(error);

    document.getElementById("count").innerHTML =
        "Total Products : 0";

    document.getElementById("products").innerHTML = `

        <div class="error-box">

            <h2>❌ Unable to Load Products</h2>

            <p>Please try again later.</p>

        </div>

    `;

});


// =============================
// Display Products
// =============================

function displayProducts(data) {

    document.getElementById("count").innerHTML =
        `Total Products : ${data.length}`;

    if (data.length === 0) {

        document.getElementById("products").innerHTML =
            "<h2 style='text-align:center'>No Products Found</h2>";

        return;
    }

    let result = "";

    data.forEach((item, index) => {

        let description = item.description;

        if (description.length > 100) {
            description =
                description.substring(0, 100) +
                "... Read More";
        }

        result += `

        <div class="card">

            <img src="${item.image}" alt="${item.title}">

            <h3>Product ${index + 1}</h3>

            <h4>${item.title}</h4>

            <p><strong>Category :</strong> ${item.category}</p>

            <p><strong>Rating :</strong> ⭐ ${item.rating.rate}</p>

            <p>${description}</p>

            <h2>$${item.price}</h2>

            <button onclick="buyNow('${item.title}')">
                Buy Now
            </button>

        </div>

        `;

    });

    document.getElementById("products").innerHTML = result;

}

// =============================
// Show All Products
// =============================

function showAll() {

    displayProducts(products);

}

// =============================
// Below $100
// =============================

function below100() {

    let result = [];

    products.forEach((item) => {

        if (item.price < 100) {

            result.push(item);

        }

    });

    displayProducts(result);

}

// =============================
// Above $100
// =============================

function above100() {

    let result = [];

    products.forEach((item) => {

        if (item.price > 100) {

            result.push(item);

        }

    });

    displayProducts(result);

}

// =============================
// Electronics
// =============================

function electronics() {

    let result = [];

    products.forEach((item) => {

        if (item.category === "electronics") {

            result.push(item);

        }

    });

    displayProducts(result);

}

// =============================
// Men's Clothing
// =============================

function mensClothing() {

    let result = [];

    products.forEach((item) => {

        if (item.category === "men's clothing") {

            result.push(item);

        }

    });

    displayProducts(result);

}

// =============================
// Women's Clothing
// =============================

function womensClothing() {

    let result = [];

    products.forEach((item) => {

        if (item.category === "women's clothing") {

            result.push(item);

        }

    });

    displayProducts(result);

}

// =============================
// Jewellery
// =============================

function jewelleryProducts() {

    let result = [];

    products.forEach((item) => {

        if (item.category === "jewelery") {

            result.push(item);

        }

    });

    displayProducts(result);

}

// =============================
// First Five
// =============================

function firstFiveProducts() {

    let result = [];

    for (let i = 0; i < 5; i++) {

        result.push(products[i]);

    }

    displayProducts(result);

}

// =============================
// Last Five
// =============================

function lastFiveProducts() {

    let result = [];

    for (let i = products.length - 5; i < products.length; i++) {

        result.push(products[i]);

    }

    displayProducts(result);

}

// =============================
// Highest Rated
// =============================

function highestRatedProduct() {

    let highest = products[0];

    products.forEach((item) => {

        if (item.rating.rate > highest.rating.rate) {

            highest = item;

        }

    });

    displayProducts([highest]);

}

// =============================
// Cheapest
// =============================

function cheapestProduct() {

    let cheapest = products[0];

    products.forEach((item) => {

        if (item.price < cheapest.price) {

            cheapest = item;

        }

    });

    displayProducts([cheapest]);

}

// =============================
// Costliest
// =============================

function costliestProduct() {

    let costliest = products[0];

    products.forEach((item) => {

        if (item.price > costliest.price) {

            costliest = item;

        }

    });

    displayProducts([costliest]);

}

// =============================
// Search
// =============================

document.getElementById("search")
.addEventListener("keyup", function () {

    let value =
        this.value.toLowerCase();

    let result = [];

    products.forEach((item) => {

        if (
            item.title
            .toLowerCase()
            .includes(value)
        ) {

            result.push(item);

        }

    });

    displayProducts(result);

});

// =============================
// Buy Now
// =============================

function buyNow(title){

    alert(title + " added successfully!");

}