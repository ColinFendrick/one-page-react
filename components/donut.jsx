import DonutChart from 'react-svg-donut-chart'
import PropTypes from 'prop-types'

import { DonutLegend } from '.'

const Donut = ({ data }) => {
	const colors = [
		'#2C97DD', '#BDC3C7', '#9C56B8', '#E74A34', '#15BA99'
	]

	const transformedData = data.map(({ firstName, lastName, participation }, i) => ({
		value: participation * 100, stroke: colors[i % 5], strokeWidth: 6, label: `${firstName} ${lastName}`
	}))

	return <div className="donut-container width-std">
		<div className="donut-chart-container">
			<DonutChart data={transformedData} />
		</div>
		<DonutLegend data={transformedData} />
		<style jsx>{`
			.donut-container {
				width: 40%;
				display: flex;
				justify-content: space-between;
			}

			.donut-chart-container {
				width: 50%;
			}
			`}</style>
		{/* Styles for the donut */}
		<style jsx global>{`
			.donut-chart-container svg circle {
				stroke-width: 9;
			}
			`}</style>
	</div>
}

Donut.propTypes = {
	data: PropTypes.array.isRequired
}

export default Donut
