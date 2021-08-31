import Select from 'react-select'
import { useState } from 'react';
import toast from 'react-hot-toast';

const ProductUtil = (props) => {
        const setArgs = props.setArgs;
        const [query, setQuery] = useState('');
        const [isSearch, setSearch] = useState(false);
        const sort = [
                { value: 'stock', label: 'Sort by stock' },
                { value: 'date', label: 'Sort by latest' },
                { value: 'popularity', label: 'Sort by popularity' },
                { value: 'rating', label: 'Sort by rating' },
                { value: 'price', label: 'Price low to high' },
                { value: 'price-desc', label: 'Price high to low' },
        ];
        const show = [
                { value: '16', label: 'Show 16 Products' },
                { value: '24', label: 'Show 24 Products' },
                { value: '32', label: 'Show 32 Products' },
                { value: '64', label: 'Show 64 Products' }                
        ];
        function option(theme){
               return {
                        ...theme,
                        borderRadius: '10px',
                        colors: {
                                ...theme.colors,
                                primary25: '#ddd',
                                primary50: '#ddd',
                                primary: '#dcba93',
                                neutral0: '#f9f9f9'
                        }
               }
        }

       function handleSortChange(value){
               setArgs((prevState) => ({
                        ...prevState,
                        sort:value.value,
                        page: '1'
                }));
       }

       function handleShowChange(value){
                setArgs((prevState) => ({
                        ...prevState,
                        show:value.value,
                        page: '1'
                }));
        }

        function handleSearch(){
                if(query != '' || isSearch ){
                        const term = isSearch ? '' : query;
                        setQuery(isSearch ? '' : query);
                        setArgs((prevState) => ({
                                ...prevState,
                                search:term,
                                page: '1'
                        }))
                        setSearch(!isSearch);
                }else{
                        toast.error('Please input search query');
                }
        }

        return(
                <div className="product-util">
                        <Select id="sort" options={sort} className="selectdrop" classNamePrefix="drop"
                                theme={theme => (option(theme))}
                                onChange={(value) => handleSortChange(value)}
                                defaultValue={sort[0]}
                        />
                        <Select id="show" options={show} className="selectdrop" classNamePrefix="drop"
                                theme={theme => (option(theme))}
                                onChange={(value) => handleShowChange(value)}
                                defaultValue={show[0]}
                        />
                        <div className="search">
                                <fieldset className={isSearch ? 'hasval' : ''}>
                                        {!isSearch && <input type="text" placeholder="Search.." onChange={(e) => setQuery(e.target.value)} value={query} />}
                                        {isSearch && <input type="text" placeholder="Search.." readOnly="readonly" value={query} />}
                                        <button className="cvr-bg" onClick={handleSearch}></button>
                                </fieldset>
                        </div>
                </div>
        )
}

export default ProductUtil;