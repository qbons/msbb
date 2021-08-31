

import HentryMobile from './hentry-mobile';
import ProductUtil from './product-util';
import ProductList from './product-list';
import Loadmore from './loadmore';
import Brands from './brands';

const Article = (props) => {
        const data = props.data;
        const product = props.product;
        const state = props.state;
        const req = state.source.get(state.router.link);
        return(
                <article className="promain">
                        <HentryMobile data={data} setMobileSort={props.setMobileSort}  setMobileFilter={props.setMobileFilter} />
                        {req.isProductBrand && <Brands state={state} /> }
                        <ProductUtil data={data} setArgs={props.setArgs}  />
                        <ProductList  product={product} />
                        {(!props.isLoading && product.items.length > 0 && product.next !== 'no') && <Loadmore product={product} setArgs={props.setArgs} />}
                </article>
        )
}

export default Article;