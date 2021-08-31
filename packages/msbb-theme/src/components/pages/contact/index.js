import { connect } from "frontity";
import Link from '@frontity/components/link';
import Image from "@frontity/components/image";

import HeadMeta from '../../head-meta';
import Sidebar from '../regular/sidebar';
import Dropdown from '../regular/dropdown';
import Banner from '../regular/banner';

const Contact = ({state}) => {
        const req = state.source.get(state.router.link);
        const data  = req.data;
        
        return(
                <>
                        <HeadMeta/>
                        {data.util.bannerTitle != '' && <Banner title={data.util.bannerTitle} />}
                        <div className="inner-page with-bg half-page">
                                {data.util.sidebarMenu.length > 0 &&
                                        <div className="wrapper">
                                                <Dropdown data={data} classes={' darker'} />        
                                        </div>
                                }
                                <div className="hentry">
                                        <div className="wrapper rowflex">
                                                <div>&nbsp;</div>
                                                <h2 className="the-title">{data.title}</h2>
                                        </div>
                                </div>
                                <div className="wrapper rowflex">
                                        {data.util.sidebarMenu.length > 0 && <Sidebar data={data} />}
                                        <article className="pgmain">
                                                {data.content.length > 0 && 
                                                        <div className="layer-wrap contact-wrap">
                                                                {data.content.map((item, index) => {
                                                                        return(
                                                                                <div key={index} className="item">
                                                                                        <figure><Link link={item.url}><Image src={item.img} width="76" /></Link></figure>
                                                                                        <div className="caption">
                                                                                                <h3><Link link={item.url}>{item.title}</Link></h3>
                                                                                                <Link  className={item.key == 'off' ? 'hasund' : ''}  link={item.url}>{item.label}</Link>
                                                                                        </div>
                                                                                </div>
                                                                        )
                                                                })}
                                                        </div>
                                                }
                                        </article>
                                </div>
                        </div>
                </>
        )
}

export default connect(Contact);