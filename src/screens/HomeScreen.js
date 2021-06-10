import data from '../data.js'
const homeScreen = {
    render: async () =>{
        const {products} = data;
        const response = await fetch("http://localhost:3000/api/teddies", {
        headers: {
            'Content-Type': 'application.json',
        }
        });
        if (!response || !response.ok) {
            return `<div>Error in getting data</div>`;
        }
        const products = await response.json()


        return `
        <ul class="products">
        ${products.map( (product) => `
        <li>
            <div class="product">
                <a href="#${product._id}">
                    <img src="${product.image}" alt="${product.name}">
                </a>
                <div class="product-name">
                    <a href="#">${product.name}</a>
                </div>
                <div class="product-description">
                    ${product.description}
                </div>
                <div class="product-price">
                    ${product.price}
                </div>
            </div>
        </li>
        `
        )
        .join('\n')}
        </ul>`
    },
};
export default homeScreen;