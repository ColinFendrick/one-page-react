import { Table } from '.'

const Body = () => {
	const tableData = [{
		firstName: 'Colin',
		lastName: 'Whips ass',
		participation: 0.8
	}]
  
	return <div className="body centered">
		<div className="title">
			<h3>Data</h3>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
		</div>
		<div className="graphs centered width70">
			<Table data={tableData} />
			<div className="graph">GRAOH 2</div>
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
        border: 2px solid green;
        align-items: flex-start;
      }

      .graph {
        width: 40%;
        height: 250px;
        margin: 10px;
        border: 1px solid teal;
      }
    `}</style>
	</div>
}

export default Body
