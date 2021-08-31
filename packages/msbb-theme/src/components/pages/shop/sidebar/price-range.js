import { useState } from 'react';
import { Range, getTrackBackground } from 'react-range';
import numeral from "numeral";

numeral.register('locale', 'id', {
	delimiters: {
		thousands: '.',
		decimal: ','
	},
	abbreviations: {
		thousand: 'k',
		million: 'm',
		billion: 'b',
		trillion: 't'
	},
	currency: {
		symbol: 'Rp '
	}
});
numeral.locale('id');

const PriceRange = (data) => {
	const [values, setValues] = useState([parseInt(data.min), parseInt(data.max)]);
	const STEP = 1;
	const MIN = parseInt(data.min);
	const MAX = parseInt(data.max);
	const setPrice = data.setPrice;
	const rtl = false;
	
	return (
		<>
			<div className="pricing"><b className="from">{numeral(values[0]).format("$ 0,0")} - </b><b className="to">{numeral(values[1]).format("$ 0,0")}</b></div>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					flexWrap: 'wrap'
				}}
			>
				<Range
					draggableTrack
					values={values}
					step={STEP}
					min={MIN}
					max={MAX}
					rtl={rtl}
					onChange={(values) => {
						setValues(values);
					}}
					onFinalChange={(values) => {
						setPrice(values);
					}}
					renderTrack={({ props, children }) => (
						<div
							onMouseDown={
								props.onMouseDown
							}
							onTouchStart={
								props.onTouchStart
							}
							style={{
								...props.style,
								
								display: 'flex',
								width: '100%'
							}}
						>
							<div
								ref={props.ref}
								style={{
									height: '5px',
									width: '100%',
									borderRadius:'2.5px',
									background: getTrackBackground(
										{
											values,
											colors: [
												'#c9c9c9',
												'#e0a459',
												'#c9c9c9'
											],
											min: MIN,
											max: MAX,
											rtl
										}
									),
									alignSelf: 'center'
								}}
							>
								{children}
							</div>
						</div>
					)}
					renderThumb={({ props, isDragged }) => (
						<div
							{...props}
							style={{
								...props.style,
								height: '24px',
								width: '24px',
								borderRadius:'50%',
								backgroundColor:'#e0a459',
								border: '1px solid #e0a459',
								display: 'block',
								cursor: 'w-resize',
								boxShadow: 'inset 0 0 0 3px #fff'
							}}
						/>
					)}
				/>
			</div>
		</>
	);
};

export default PriceRange;
