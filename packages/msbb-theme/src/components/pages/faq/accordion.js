import  { useState } from 'react';
import SlideToggle from "react-slide-toggle";

const Accordion = (props) => {
        const item = props.data;
        const Html2React = props.libraries.html2react.Component;
        const [isActive, setActive] = useState(false);
        return(
                <SlideToggle
                        collapsed="true"
                        onExpanding={({ range, progress, hasReversed }) => {
                                setActive(true);
                        }}
                        onCollapsing={({ range, progress, hasReversed }) => {
                                setActive(false);
                        }}
                >
                        {({ toggle, setCollapsibleElement }) => (
                                <>
                                        <div className="item">
                                                {item.question != '' && <h2>{item.question}</h2>}
                                                <div className={isActive ? "accord-item expanded" : "accord-item"}>
                                                        {item.title != '' && <div className="acc-head" onClick={toggle}><h3>{item.title}</h3></div>}
                                                        {item.text != '' &&
                                                                <div className="acc-body" ref={setCollapsibleElement}>
                                                                        <div className="format-text">
                                                                                <Html2React html={item.text} />
                                                                        </div>
                                                                </div>
                                                        }
                                                </div>
                                        </div>
                                </>
                        )}
                </SlideToggle>
        )
}
export default Accordion;