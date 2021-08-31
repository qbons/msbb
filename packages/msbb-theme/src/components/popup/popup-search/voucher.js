// ::PASS::
import Link from '@frontity/components/link';

const Voucher = ( props ) => {
        const option = props.option;
	return (
                <>
                        {option.vshow == 'yes' &&
                                <div className="item voucher">
                                        {option.vtitle != '' && <h2>{option.vtitle}</h2>}
                                        {option.vitem.length > 0 &&
                                                <>
                                                        {option.vitem.map((item, index) =>{
                                                                return(
                                                                        <p key={index} className={item.classes}><Link link={item.slug}><span>{item.type}</span> {item.text}</Link></p>
                                                                )
                                                        })}
                                                </>
                                        }
                                </div>
                        }
                </>
	);
};

export default Voucher;
