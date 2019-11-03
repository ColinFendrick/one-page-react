import DonutChart from 'react-donut-chart'
import PropTypes from 'prop-types'

const Donut = ({ data }) => {
	const dataForChart = data.map(({ firstName, lastName, participation }) => ({
		label: `${firstName} ${lastName}`,
		value: participation
	}))
  
	const colors = [
		'#2C97DD', '#BDC3C7', '#9C56B8', '#E74A34', '#15BA99'
	]

	return <div>
		<DonutChart
			data={dataForChart}
			colors={colors}
			strokeColor='white'
			innerRadius={0.5}
			outerRadius={0.8}
			height={450}
			width={400}
			clickToggle={false}
		/>
		<style jsx>{`
      .donutchart .donutchart-innertext {
        font-size: 0;
        background-color: yellow;
      }
    `}</style>
	</div>
}

Donut.propTypes = {
	data: PropTypes.array.isRequired
}

export default Donut
