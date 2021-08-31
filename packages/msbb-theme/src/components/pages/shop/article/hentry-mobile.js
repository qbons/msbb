
const HentryMobile = (props) => {
        return(
                <div className="hentry-mobile clearfix">
                        <h2>Product List</h2>
                        <div className="act">
                                <a href="#" className="cvr-bg trigger-sort" onClick={(e) => {e.preventDefault(); props.setMobileSort(true)}}></a>
                                <a href="#" className="cvr-bg trigger-filter" onClick={(e) => {e.preventDefault(); props.setMobileFilter(true)}}></a>
                        </div>
                </div>
        )
}

export default HentryMobile;