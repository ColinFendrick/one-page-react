import { Table, Donut } from '.'

const Body = () => {
	const data = [{
		firstName: 'Colin',
		lastName: 'Whips ass',
		participation: 0.05
	}, {
		firstName: 'Danny',
		lastName: 'Sucks big scrot',
		participation: 0.15
	},
	{
		firstName: 'Danny',
		lastName: 'Sucks big scrot',
		participation: 0.2
	},
	{
		firstName: 'Danny',
		lastName: 'Sucks big scrot',
		participation: 0.2
	},
	{
		firstName: 'Danny',
		lastName: 'Sucks big scrot',
		participation: 0.4
	}]

	return <div className="body centered">
		<div className="title">
			<h3>Data</h3>
			Lorem ipsum dolor sit amet consectetur adipisicing elit.
		</div>
		<div className="graphs width-std">
			<Table data={data} />
			<Donut data={data} />
		</div>
		<style jsx global>{`
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

export default Body
