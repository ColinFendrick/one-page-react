import PropTypes from 'prop-types'

const DonutLegend = ({ data }) => (
	<div className="donut-legend">
		{data.map(({ label, stroke }, i) => (
			<div key={i} className="donut-legend-row">
				<div className="donut-legend-rect" style={{ backgroundColor: stroke }}></div>
				<div className="donut-legend-text" style={{ color: stroke }}>
					<div>{label}</div>
				</div>
			</div>
		))}
		<style jsx>{`
      .donut-legend {
        width: 40%;
        height: 100px;
        font-size: 0.7em;
        display: flex;
        flex-direction: column;
        align-items: stretch;
      }

      .donut-legend-row {
        display: flex;
        align-items: stretch;
        margin: 7px 0;
        height: 20px;
      }

      .donut-legend-rect {
        width: 20px; 
        margin-right: 4px;
        border-radius: 2px;
      }

      .donut-legend-text {
        display: flex;
        align-items: center;
      }
      `}</style>
	</div>
)

DonutLegend.propTypes = {
	data: PropTypes.array.isRequired
}

export default DonutLegend
