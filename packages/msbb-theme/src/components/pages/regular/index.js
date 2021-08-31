import { connect } from "frontity";

import HeadMeta from '../../head-meta';

import Banner from './banner';
import Sidebar from './sidebar';
import Dropdown from './dropdown';

const Regular = ({state, libraries}) => {
        const req = state.source.get(state.router.link);
        const Html2React = libraries.html2react.Component;
        const data  = req.data;

        return(
                <>
                        <HeadMeta/>
                        {data.util.bannerTitle != '' && <Banner title={data.util.bannerTitle} />}
                        <div className={data.util.classes}>
                                <div className="wrapper rowflex">
                                        {data.util.sidebarMenu.length > 0 && <Sidebar data={data} />}
                                        <article className="pgmain">
                                                {data.util.sidebarMenu.length > 0 && <Dropdown data={data} />}
                                                <h1 className="the-title">{data.title}</h1>
                                                <div className="format-text">
                                                        <Html2React html={data.content} />
                                                </div>
                                        </article>
                                </div>
                        </div>
                </>
        )
}

export default connect(Regular);