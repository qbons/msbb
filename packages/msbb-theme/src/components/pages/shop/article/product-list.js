
import ProductItem from "./product-item/";

const ProductList = (props) => {
        const products = props.product.items;
        return(
                <>
                        {products.length > 0 &&
                                <div className="product-list has-ajax products" style={ {minHeight: products.length > 15 ? '100vh' : '1px' }}>
                                        {products.map((v, k) => {
                                                return(
                                                        <ProductItem key={k} data={v}/>
                                                )
                                        })}
                                </div>
                        }
                        {products.length === 0 &&
                                <p style={{textAlign: 'center',display: 'block', width: '100%', fontSize:'16px'}}>Product not found!</p>
                        }
                </>
        )
}

export default ProductList;