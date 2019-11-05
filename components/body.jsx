import PropTypes from 'prop-types'

import { Table, Donut } from '.'

const Body = ({ data }) => {
	return <div className="body centered">
		<div className="title">
			<h3>Data</h3>
			Lorem ipsum dolor sit amet consectetur adipisicing elit.
		</div>
		<div className="graphs width-std">
			<Table data={data} />
			<Donut data={data} />
		</div>
		<style jsx>{`
      .body {
        flex-direction: column;
        width: 100%;
        margin-top: 10px;
      }

      .title {
        text-align: center;
        max-width: 70%;
        margin: 10px 0;
      }

      .graphs {
				display: flex;
				justify-content: space-between;
        align-items: flex-start;
      }
    `}</style>
	</div>
}

Body.propTypes = {
	data: PropTypes.array
}

export default Body
