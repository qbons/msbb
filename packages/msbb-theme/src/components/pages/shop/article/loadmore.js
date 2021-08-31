import ScrollTrigger from 'react-scroll-trigger';

const Loadmore = (props) =>{
        const setArgs = props.setArgs;
        const next = props.product.next;
        function handleOnview(){
                setArgs((prevState) => ({
                        ...prevState,
                        page: parseInt(next)
                }));
        }
        return(
                <ScrollTrigger onEnter={handleOnview} ><div style={{display:'block',width:'100%',height:'1px'}}></div></ScrollTrigger>
        )
}
export default Loadmore;