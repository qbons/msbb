import {useState, useEffect} from 'react';
import { connect } from "frontity";

import HeadMeta from '../../head-meta';
import Sidebar from '../regular/sidebar';
import Dropdown from '../regular/dropdown';
import Accordion from './accordion';

const FAQ = ({state, libraries}) => {
        const req = state.source.get(state.router.link);
        const data  = req.data;
        const [faqList, setFaqList] = useState([]);
        useEffect(() => {
                if(data.content.item.length > 0){
                        setFaqList(data.content.item);
                }
        }, []);

        function searchHandler(e){                
                let filtered = [];
                data.content.item.filter(searchingFor(e.target.value)).map((child, c) => {
                        filtered.push(child);
                });
                setFaqList(filtered);
        }

        function searchingFor(term){
                return function(x) {
                        return (
                                x.title.toLowerCase().includes(term.toLowerCase()) || 
                                x.question.toLowerCase().includes(term.toLowerCase()) || 
                                !term
                         );
                };
        }
        
        return(
                <>
                        <HeadMeta/>
                        <div className="banner-search">
                                <div className="wrapper">
                                        {data.util.bannerTitle != '' && <h2>{data.util.bannerTitle}</h2>}
                                        <form className="filter-faq-item" onSubmit={(e) => e.preventDefault()}>
                                                <input type="text"  placeholder="Search.." onChange={searchHandler} />
                                                <button className="cvr-bg" type="submit"></button>
                                        </form>
                                </div>
                        </div>
                        <div className="inner-page half-page">
                                <div className="wrapper rowflex">
                                        {data.util.sidebarMenu.length > 0 && <Sidebar data={data} />}
                                        <article className="pgmain">
                                                {data.util.sidebarMenu.length > 0 && <Dropdown data={data} />}
                                                <h1 className="the-title">{data.title}</h1>
                                                {faqList.length > 0 && 
                                                        <div className="faq-list">
                                                                {faqList.map((item, index) => {
                                                                        return(
                                                                                <Accordion key={index} data={item} libraries={libraries}/>
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

export default connect(FAQ);