const Body = () => (
	<div className="body">
		<div className="block"></div>
		<div className="block"></div>
		<style jsx>{`
      .body {
        display: flex;
        justify-content: space-around;
      }

      .block {
        border: 2px solid salmon;
      }
    `}</style>
	</div>
)

export default Body
