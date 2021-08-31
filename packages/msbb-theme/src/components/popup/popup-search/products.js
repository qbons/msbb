
import Link from '@frontity/components/link';
import Image from "@frontity/components/image";

const Products = ( props ) => {
        const state = props.state;
        const option = props.option;
        
	return (
                <>
                        {option.pshow == 'yes' &&
                                <div className="item">
                                        {option.ptitle != '' && <h2>{option.ptitle}</h2> }
                                        {option.pitem.length > 0 && 
                                                <div className="list">
                                                        {option.pitem.map((item, index) => {
                                                                return(
                                                                        <div key={index} className="pitem">
                                                                                <figure><Link link={item.slug}><Image src={item.img} width="68" /></Link></figure>
                                                                                <div className="caption">
                                                                                        {item.tagline != '' && <span className="tagline">{item.tagline}</span>}
                                                                                        <h3><Link link={item.slug}>{item.title}</Link></h3>
                                                                                        <div className="meta">
                                                                                                {item.package != '' && <span className="package">{item.package}</span>}
                                                                                                <span className="price">{item.price}</span>
                                                                                        </div>
                                                                                </div>
                                                                                <div className="action">
                                                                                        <Link link={item.slug} className="view cvr-bg-af"></Link>
                                                                                        {/* ::TEMP:: ADD TO CART FUNCTIONALITY */}
                                                                                        {(item.variable === 'no' && item.instock === 'yes') &&
                                                                                                <a href="#" className="atc cvr-bg-af"></a>
                                                                                        }
                                                                                </div>
                                                                        </div>
                                                                )
                                                        })}
                                                </div>
                                        }
                                </div>
                        }
                </>
	);
};

export default Products;
