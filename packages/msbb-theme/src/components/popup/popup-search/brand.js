// ::PASS::

import BrandCarousel from "./brand-carousel";
import Link from '@frontity/components/link';
import Image from "@frontity/components/image";

const Brand = ( props ) => {
        const state = props.state;
        const option = props.option;
	return (
		<>
                        {option.bshow == 'yes' && 
                                <div className="item brand">
                                        {option.btitle != '' && <h2>{option.btitle}</h2>}
                                        {option.bitem.length > 0 &&
                                                <BrandCarousel state={state}>
                                                        {option.bitem.map((item, index) => {
                                                                return(
                                                                        <Link key={index} link={item.slug} ><Image src={item.img} width="100" /></Link>
                                                                )
                                                        })}
                                                </BrandCarousel>
                                        }
                                </div>
                        }
                </>
	);
};

export default Brand;
