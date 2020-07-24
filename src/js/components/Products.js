import React from 'react';

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


export default Products;