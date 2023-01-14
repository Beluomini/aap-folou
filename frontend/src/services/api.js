//produtos
function getProducts() {
    return fetch("http://localhost:3333/products").then((res) => res.json());
}

function getProductsById(id) {
    return fetch(`http://localhost:3333/products/${id}`).then((res) => res.json());
}

function createProducts(newProduct) {
    console.log(newProduct)
    return fetch('http://localhost:3333/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
    })
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
}

function removeProducts(id) {
    return fetch(`http://localhost:3333/products/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then((res) => res.json())
        .catch((err) => console.log(err));
}

function editProducts(products, id) {
    return fetch(`http://localhost:3333/products/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(products)
    })
        .then((res) => res.json());
}

//pedidos

function getOrders() {
    return fetch("http://localhost:3333/orders").then((res) => res.json());
}

function getOrdersById(id) {
    return fetch(`http://localhost:3333/orders/${id}`).then((res) => res.json());
}

function createOrders(newOrders) {
    return fetch('http://localhost:3333/orders', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newOrders),
    })
        .then((res) => res.json())
        .catch((err) => console.log(err));
}

function removeOrders(id) {
    return fetch(`http://localhost:3333/orders/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then((res) => res.json())
        .catch((err) => console.log(err));
}

function editOrders(orders, id) {
    return fetch(`http://localhost:3333/orders/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(orders)
    })
        .then((res) => res.json())
        .catch((err) => console.log(err));
}


export default {
    getProducts, getProductsById, createProducts, removeProducts, editProducts,
    getOrders, getOrdersById, createOrders, removeOrders, editOrders

};