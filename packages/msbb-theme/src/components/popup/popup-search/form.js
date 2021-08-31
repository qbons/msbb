// ::TEMP::
const Form = ( props ) => {
        const state = props.state;
	return (
		<div className="searchbar">
                        <form action="http://msbb.test/shop/" method="GET">
                                <input type="text" placeholder="Lacoco Amazonian Diskon 50%" name="search" required="required" />
                                <button type="submit" className="cvr-bg"></button>
                        </form>
                </div>
	);
};

export default Form;
