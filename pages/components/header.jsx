const Header = () => (
	<div className="header">
		<input type="text" placeholder="First Name"></input>
		<input type="text" placeholder="Last Name"></input>
		<input type="text" placeholder="Participation"></input>
		<button type="submit">Send</button>
		<style jsx>{`
      .header {
        background-color: #04bbe2;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 150px;
      }

      input {
        height: 30%;
        width: 15%;
        margin: 0 10px;
        border: none;
        padding-left: 10px;
      }

      button {
        height: 30%;
        background-color: transparent;
        border-color: white;
        width: 12%;
        text-align: center;
        color: white;
        text-transform: uppercase;
        font-size: 110%;
        cursor: pointer;
      }

      button:hover {
        background-color: white;
        color: #04bbe2;
        transition: background-color 0.4s, color 0.4s;
        -webkit-transition: background-color 0.4s, color 0.4s;
        -moz-transition: background-color 0.4s, color 0.4s;
        -o-transition: background-color 0.4s, color 0.4s;
      }
    `}
		</style>
	</div>
)

export default Header
