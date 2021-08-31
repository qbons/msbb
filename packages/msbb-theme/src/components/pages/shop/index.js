import { connect } from "frontity";
import { useState, useEffect } from "react";
import axios from 'axios';
import { animateScroll as scroll } from 'react-scroll';

import HeadMeta from '../../head-meta';

import Loading from "./loading";
import Article from './article/';
import Sidebar from './sidebar/';
import MobileFilter from "./mobile-filter";
import MobileSort from "./mobile-sort";

const Shop = ({state, libraries}) => {
        const req = state.source.get(state.router.link);
        const [data,setData]  = useState(req.data);
        const [product, setProduct] = useState(req.data.content.products);
        const [isLoading, setLoading] = useState(false);
        const [count, setCount] = useState(0);
        const [isMobileSort, setMobileSort] = useState(false);
        const [isMobileFilter, setMobileFilter] = useState(false);
        const [args, setArgs] = useState({
                purpose: [],
                category: req.isProductCat ? [req.data.id] : [],
                rating: [],
                brand: req.isProductBrand ? [req.data.id] : [],
                price: [],
                sort: 'stock',
                show: '16',
                search: '',
                page: '1'
        });

        useEffect(() => {
                setProduct(req.data.content.products);

                //UNCHECK FILTER IF ROUTE CHANGED
                let checkbox = document.getElementsByClassName("checkbox");
                if(checkbox.length > 0){
                        for(let i=0; i<=checkbox.length; i++) {
                                if(typeof checkbox[i] != 'undefined'){
                                        checkbox[i].checked = false;      
                                }
                        }
                }

                setArgs({
                        purpose: [],
                        category: req.isProductCat ? [req.data.id] : [],
                        rating: [],
                        brand: req.isProductBrand ? [req.data.id] : [],
                        price: [],
                        sort: 'stock',
                        show: '16',
                        search: '',
                        page: '1'
                })

        }, [req])

        useEffect(() => {
                if(count){
                        if(!isLoading){
                                setLoading(true);
                                axios.post(state.theme.api + 'product',  args ).then(res => {
                                        if(res.data.current == 1){
                                                setProduct(res.data);
                                                scroll.scrollToTop();
                                                setLoading(false);
                                        }else{
                                                if(res.data.items.length > 0){
                                                        let newItems = product.items;[...product.items, res.data.items.map((v,k) => {return v})];
                                                        res.data.items.map((v,k) => {
                                                                newItems = [...newItems, v];
                                                        })
                                                        res.data.items = newItems;
                                                        setProduct(res.data);
                                                }
                                                setLoading(false);
                                        }
                                }); 
                        } 
                }else{
                        setCount(1);
                }
        }, [args])

        return(
                <>
                        <HeadMeta/>
                        <div id="inner-product" className="inner-product">
                                {isLoading && <Loading/>}
                                <div className="wrapper wider rowflex">
                                        <Sidebar data={data} setArgs={setArgs} />
                                        <Article state={state} data={data} setArgs={setArgs} product={product} isLoading={(isLoading || req.isFetching) ? true : false } setMobileSort={setMobileSort} setMobileFilter={setMobileFilter} />
                                </div>
                                <MobileFilter theArgs={args} setArgs={setArgs} setMobileFilter={setMobileFilter} data={data} isMobileFilter={isMobileFilter}/> 
                                {isMobileSort && <MobileSort theArgs={args} setArgs={setArgs} setMobileSort={setMobileSort} /> }
                        </div>
                </>
        )
}

export default connect(Shop);