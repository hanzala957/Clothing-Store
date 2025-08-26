let total = 0;

function addToCart(name, price) {
  
  let li = document.createElement("li");
  li.textContent = name + " - $" + price;
  document.getElementById("cart-items").appendChild(li);

  
  total += price;
  document.getElementById("total").textContent = total;
}

const products = document.querySelectorAll('.product');

function revealProducts() {
  const windowHeight = window.innerHeight;
  
  products.forEach(product => {
    const productTop = product.getBoundingClientRect().top;

    if (productTop < windowHeight - 100) {
      product.classList.add('show'); 
    }
  });
}

window.addEventListener('scroll', revealProducts);


revealProducts();

