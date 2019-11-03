const Body = () => (
	<div className="body centered">
		<div className="title">
			<h3>Data</h3>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
		</div>
		<div className="graphs width70">
			<div className="graph">GRAPH 1</div>
			<div className="graph">GRAOH 2</div>
		</div>
		<style jsx>{`
      .body {
        flex-direction: column;
        width: 100%;
        margin-top: 10px;
      }

      .title {
        border: 2px solid red;
        text-align: center;
        max-width: 70%;
        margin: 10px 0;
      }

      .graphs {
        border: 2px solid green;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .graph {
        border: 2px solid teal;
        width: 40%;
        height: 250px;
        margin: 0 10px;
      }
    `}</style>
	</div>
)

export default Body
