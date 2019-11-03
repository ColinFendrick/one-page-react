const Header = () => (
	<div className="header centered">
		<div className="header-wrapper width70">
			<input type="text" placeholder="First Name"></input>
			<input type="text" placeholder="Last Name"></input>
			<input type="text" placeholder="Participation"></input>
			<button type="submit">Send</button>
		</div>
		<style jsx>{`
      .header {
        background-color: #04bbe2;
        width: 100%;
        height: 150px;
      }
      
      .header-wrapper {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      input {
        height: 25%;
        width: 25%;
        margin: 0 10px;
        border: none;
        padding-left: 10px;
      }

      input:focus,
      input:active {
        outline: 3px solid #cdcdcd;
      }

      button {
        height: 25%;
        background-color: transparent;
        border-color: white;
        width: 12%;
        text-align: center;
        color: white;
        text-transform: uppercase;
        font-size: 110%;
        font-weight: bold;
        cursor: pointer;
        transition: background-color 0.2s, color 0.2s;
        -webkit-transition: background-color 0.2s, color 0.2s;
        -moz-transition: background-color 0.2s, color 0.2s;
        -o-transition: background-color 0.2s, color 0.2s;
      }

      button:hover {
        background-color: white;
        color: #04bbe2;
      }
    `}
		</style>
	</div>
)

export default Header
