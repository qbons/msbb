import { connect } from "frontity";
import Image from "@frontity/components/image";

import HeadMeta from '../../head-meta';
import Carousel from './carousel';

const Block = ({state, libraries}) => {
        const req = state.source.get(state.router.link);
        const Html2React = libraries.html2react.Component;
        const data  = req.data;
        const content = data.content;
        return(
                <>
                        <HeadMeta/>
                        <div className="inner-page ">
                                <div className="wrapper">
                                        {data.title != '' && <h1 className="the-title brown" style={{textTransform: 'uppercase'}}>{data.title}</h1> }
                                        <div className="block-list">
                                                {content.block.length > 0 &&
                                                        <>
                                                                {content.block.map((item, index) => {
                                                                        let classes = 'block fully';
                                                                        if(item.align == 'left'){
                                                                                classes = 'block halfy lefty'
                                                                        }else if(item.align == 'right'){
                                                                                classes = 'block halfy righty'
                                                                        }
                                                                        return(
                                                                                <div className={classes} key={index}>
                                                                                        {item.img != '' && <figure><Image src={item.img} /></figure>}
                                                                                        <div className="caption">
                                                                                                {item.title != '' && <h2 className="subtitle">{item.title}</h2>}
                                                                                                {item.text != '' &&
                                                                                                        <div className="format-text">
                                                                                                                <Html2React html={item.text} />
                                                                                                        </div>
                                                                                                }
                                                                                        </div>
                                                                                </div>
                                                                        )
                                                                })}
                                                        </>
                                                }
                                                {content.slider.length > 0 &&
                                                        <div className="block slidy">
                                                                {content.title != '' && <h2 className="subtitle">{content.title}</h2>}
                                                                {content.slider.length > 0 && 
                                                                        <Carousel slider={content.slider.length}>
                                                                                {content.slider.map((item, index) => {
                                                                                        return(
                                                                                                <div className="item" key={index}>
                                                                                                        {(typeof item.img != 'undefined' && item.img != '') && <figure><div className="rounder"><Image src={item.img} /></div></figure>}
                                                                                                        <div className="caption">
                                                                                                                {item.title != '' && <h3>{item.title}</h3>}
                                                                                                                {item.text != '' &&
                                                                                                                        <div className="format-text">
                                                                                                                                <Html2React html={item.text} />
                                                                                                                        </div>
                                                                                                                }
                                                                                                        </div>
                                                                                                </div>
                                                                                        )
                                                                                })}
                                                                        </Carousel>
                                                                }
                                                        </div>
                                                }
                                        </div>
                                </div>
                        </div>
                </>
        )
}

export default connect(Block);