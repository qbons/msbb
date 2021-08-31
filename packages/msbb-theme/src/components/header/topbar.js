// ::PASS::
import { connect, } from 'frontity';

const Topbar = ({state}) => {
        const option = state.theme.options;
        return(
                <>
                        {option.headerPromo !== '' &&
                                <div className="topbar">
                                        <div className="wrapper">
                                                <div className="txt">
                                                        <div className="holder">
                                                                <p>{option.headerPromo}</p>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        }
                </>
        )
}

export default connect(Topbar);