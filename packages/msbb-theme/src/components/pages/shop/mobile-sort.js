import { useState } from "react";

const MobileSort = (props) => {
        const setArgs = props.setArgs;
        const theArgs = props.theArgs;
        
        const sort = [
                { value: 'stock', label: 'Sort by stock' },
                { value: 'date', label: 'Sort by latest' },
                { value: 'popularity', label: 'Sort by popularity' },
                { value: 'rating', label: 'Sort by rating' },
                { value: 'price', label: 'Price low to high' },
                { value: 'price-desc', label: 'Price high to low' },
        ];
        const [sorted, setSorted] = useState({value:theArgs.sort});

        function handleSortChange(e){
                e.preventDefault();
                setArgs((prevState) => ({
                        ...prevState,
                        sort:sorted.value,
                        page: '1'
                }));
                props.setMobileSort(false);
        }

        function handleReset(e){
                e.preventDefault();
                setArgs({
                        purpose: [],
                        category: [],
                        rating: [],
                        brand: [],
                        price: [],
                        sort: 'stock',
                        show: '16',
                        search: '',
                        page: '1'
                });
                props.setMobileSort(false);
        }

        return(
                <div className="popmsort clearfix">
                        <div className="xholder">
                                <div className="fhead">
                                        <a href="#" className="clearfix" onClick={(e) => { e.preventDefault(); props.setMobileSort(false);  }}>
                                                <span>Urutkan</span>
                                                <b className="cvr-bg"></b>
                                        </a>
                                </div>
                                <div className="fbody">
                                        <div className="dotdio blocky">
                                                {sort.map((v, k) => {
                                                        return(
                                                                <label key={k}><input type="radio" name="msort" value={v.value} onChange={(e) => setSorted(v)} checked={sorted.value == v.value} /><span>{v.label}</span></label>
                                                        )
                                                })}
                                        </div>
                                </div>
                                <div className="ffoot">
                                        <a href="#" className="cvr-bg-bf ic-reset" onClick={handleReset}>Reset</a>
                                        <a href="#" className="button btn-fullwidth" onClick={handleSortChange}>Apply</a>
                                </div>
                        </div>
                </div>
        )
}

export default MobileSort;