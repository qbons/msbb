import { connect } from "frontity";

import HeadMeta from '../../head-meta';
import Sidebar from '../regular/sidebar';
import Dropdown from '../regular/dropdown';
import Banner from '../regular/banner';

import Form from './form';

const Reseller = ({state}) => {
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
                                                <div className="layer-wrap resell-wrap">
                                                        <div className="subhentry">
                                                                {data.content.title != '' && <h2>{data.content.title}</h2>}
                                                                {data.content.subtitle != '' &&
                                                                        <div className="format-text">
                                                                                <p>{data.content.subtitle}</p>
                                                                        </div>
                                                                }
                                                        </div>
                                                        <Form state={state}/>
                                                </div>
                                        </article>
                                </div>
                        </div>
                </>
        )
}

export default connect(Reseller);