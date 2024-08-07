document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    updateCartDisplay(cart);
});

function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const existingItemIndex = cart.findIndex(item => item.name === name);
    if (existingItemIndex > -1) {
        cart[existingItemIndex].quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay(cart);
    alert(`Đã thêm ${name} vào giỏ hàng.`);
}
document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    updateCartDisplay(cart);
});

function updateCartDisplay(cart) {
    const cartItemsDiv = document.getElementById('cart-items');
    const totalPriceElem = document.getElementById('total-price');
    let total = 0;

    if (!cartItemsDiv || !totalPriceElem) return;

    cartItemsDiv.innerHTML = '';

    cart.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
                <img src="images-cart/${item.name}.jpg"
                class="pd-img">
                <div class="info-pdcart"> <h3>${item.name}</h3>
                    <p>Đơn giá: ${item.price.toLocaleString()} &#8363;</p>
                    <p>Số lượng: ${item.quantity}</p>
                    <button onclick="decreaseQuantity(${index})" class="-1">-</button>
                    <button onclick="increaseQuantity(${index})" class="+1">+</button>
                    <button onclick="removeFromCart(${index})" class="remove">
                        <svg width="18px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="#d01c24" class="cursor-pointer"><path d="M8.5 4H11.5C11.5 3.17157 10.8284 2.5 10 2.5C9.17157 2.5 8.5 3.17157 8.5 4ZM7.5 4C7.5 2.61929 8.61929 1.5 10 1.5C11.3807 1.5 12.5 2.61929 12.5 4H17.5C17.7761 4 18 4.22386 18 4.5C18 4.77614 17.7761 5 17.5 5H16.4456L15.2521 15.3439C15.0774 16.8576 13.7957 18 12.2719 18H7.72813C6.20431 18 4.92256 16.8576 4.7479 15.3439L3.55437 5H2.5C2.22386 5 2 4.77614 2 4.5C2 4.22386 2.22386 4 2.5 4H7.5ZM5.74131 15.2292C5.85775 16.2384 6.71225 17 7.72813 17H12.2719C13.2878 17 14.1422 16.2384 14.2587 15.2292L15.439 5H4.56101L5.74131 15.2292ZM8.5 7.5C8.77614 7.5 9 7.72386 9 8V14C9 14.2761 8.77614 14.5 8.5 14.5C8.22386 14.5 8 14.2761 8 14V8C8 7.72386 8.22386 7.5 8.5 7.5ZM12 8C12 7.72386 11.7761 7.5 11.5 7.5C11.2239 7.5 11 7.72386 11 8V14C11 14.2761 11.2239 14.5 11.5 14.5C11.7761 14.5 12 14.2761 12 14V8Z" fill="inherit"></path></svg>
                    </button>
                    <hr class="hr-cart">
                </div>
        `;
        cartItemsDiv.appendChild(itemDiv);
        total += item.price * item.quantity;
    });

    totalPriceElem.textContent = total.toLocaleString();
}

function increaseQuantity(index) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    cart[index].quantity += 1;
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay(cart);
}

function decreaseQuantity(index) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay(cart);
    }
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartDisplay(cart);
}
