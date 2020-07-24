import React from "react";
import ReactDOM from "react-dom";
// import App from "components/App"
import 'css/index.css';

const Product = ({descripition, category, imgUrl,alt, price}) => {

	const addedToCart = (event) => {
		alert(`Product ${descripition} Added to Cart`)
	} 	
		return (
					<div class="product-item">
						<div>
							<img class="box-img" src={imgUrl} alt={alt}/>
							<div class="category"><span class="category-title">{category}</span></div>
						</div>
						<h3>{descripition}</h3>
						<p class="price">CAD$:{price}</p>
						<p><button onClick={addedToCart}>Add to Cart</button></p>
					</div>
		)
	}
	
	const Products = ({data}) => {
		const productArr = data.map(product => <Product key={product.productID} descripition={product.descripition} category={product.category} imgUrl={product.imgUrl} alt={product.alt} price={product.price} />)
	
		return (
			<main>
				<article class="products-wrapper">
				{productArr}
				</article>
			</main>
		) 
	}
	
	const Header = () => {
		return <header>Header!</header>
	}
	const Footer = () => {
		return <footer>Footer!</footer>
	}

	const App = () => {
  const data = [
    {productID: "0001",descripition: "Beats Studio 3",category: "Earphones",imgUrl: "/src/img/earphone-1.jpg", alt: "Black Beats Studio Earphones",price: "300"},
    {productID: "0002",descripition: "Beats Solo 3",category: "Earphones",imgUrl: "/src/img/earphone-2.jpg",alt: "Red Beats Solo Earphones",price: "249"},
    {productID: "0003",descripition: "Nike AirForce 2",category: "Shoes",imgUrl: "/src/img/shoe-4.jpg",alt: "Red Nike Shoes",price: "125"},
    {productID: "0004",descripition: "Cuttlerly Kit 16pcs",category: "Kitchen",imgUrl: "/src/img/kitchen-1.jpg", alt: "Wood Metal Cutterly Knife and Fork",price: "39"},
    {productID: "0005",descripition: "RadRover 5 Eletric",category: "Bikes",imgUrl: "/src/img/bike-1.jpg",alt:"Eletric Black Bike",price: "1999"}	
    ]

	return (
    <>
    <Header />
    <Products data={data} />
    <Footer />
    </>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));