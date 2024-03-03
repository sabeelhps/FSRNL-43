import React from 'react';
import Product from "../Product/Product";

const ProductList = (props) => {
    return (
        <div>
             {
                props.products.map(function (product) {
                    return <Product
                        key={product.id}
                        title={product.title}
                        price={product.price}
                        description={product.description}
                        image={product.image}
                />
            })
      }
        </div>
    )
}

export default ProductList