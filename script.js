async function productApi() {
  try{ 
    await fetch("https://fakestoreapi.com/products?limit=5")
    .then((res) => res.json()) 
    .then((data) => {
      const productsCon = document.getElementById("api");
      data.forEach((product) => {
        const Container = document.createElement("div");
        Container.classList.add("product"); // Add a class for styling

        const h3 = document.createElement("h3");
        h3.innerText = `${product.title}`;
        Container.appendChild(h3);

        const p = document.createElement("p");
        p.classList.add("price");
        p.innerText = "$" + `${product.price}`;
        Container.appendChild(p);

        const p1 = document.createElement("p");
        p1.innerText = "$" + `${product.description}`;
        Container.appendChild(p1);

        const span = document.createElement("span");
        span.innerText = `${product.rating.rate}`;
        Container.appendChild(span);

        const Img = document.createElement("img");
        Img.classList.add("img");
        Img.src = `${product.image}`;
        Container.appendChild(Img);

        // Add the product container to the page
        productsCon.appendChild(Container);
      });
    });
}catch (error) {
    console.error("Error:", error.message);
    const productsCon = document.getElementById("api");
    const errorMessage = document.createElement("p");
    errorMessage.innerText = "Sorry, we couldn't fetch the products at the moment. Please try again later.";
    productsCon.appendChild(errorMessage);
}

}

productApi();
const Abid = document.getElementById('abid');
setInterval(() => {
    Abid.innerText = "Ecommerce";
}, 3000);
