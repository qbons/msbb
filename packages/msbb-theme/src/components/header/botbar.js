// ::PASS::
import BotbarTopline from './botbar-topline';
import BotbarBotline from './botbar-botline';

const Botbar = () => {
	return (
		<>
			<div className="botbar">
                                <div className="wrapper">
                                        <BotbarTopline/>
                                        <BotbarBotline/>
                                </div>
                        </div>
		</>
	);
};

export default Botbar;
