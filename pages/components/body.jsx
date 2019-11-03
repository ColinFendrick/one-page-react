import { Table, Donut } from '.'

const Body = () => {
	const data = [{
		firstName: 'Colin',
		lastName: 'Whips ass',
		participation: 0.8
	}, {
		firstName: 'Danny',
		lastName: 'Sucks big scrot',
		participation: 0.2
	}]
  
	return <div className="body centered">
		<div className="title">
			<h3>Data</h3>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
		</div>
		<div className="graphs centered width70">
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
        border: 2px solid green;
        align-items: flex-start;
      }
    `}</style>
	</div>
}

export default Body
