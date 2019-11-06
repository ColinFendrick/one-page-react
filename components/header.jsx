import PropTypes from 'prop-types'

import { useForm } from '../hooks'

const Header = ({ updateData }) => {
	const initialState = {
		firstName: '', lastName: '', participation: 0
	}

	const { inputs, handleInputChange, handleSubmit } = useForm(initialState, () => updateData(inputs))

	return <div className="header centered">
		<form onSubmit={handleSubmit} className="header-wrapper width-std">

			<input
				type="text"
				name="firstName"
				placeholder="First Name"
				onChange={handleInputChange}
				value={inputs.firstName}
				minLength="3"
				pattern="[A-Za-z]+"
				title="Must be at least three letters"
				required>
			</input>
			<input
				type="text"
				name="lastName"
				placeholder="Last Name"
				onChange={handleInputChange}
				value={inputs.lastName}
				minLength="3"
				pattern="[A-Za-z]+"
				title="Must be at least three letters"
				required>
			</input>
			<input
				type="number"
				name="participation"
				placeholder="Participation"
				onChange={handleInputChange}
				value={inputs.participation}
				required
				min="1"
				max="100">
			</input>
			<button type="submit">Send</button>

		</form>
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
      }

      button:hover,
      button:active,
      button:focus {
        background-color: white;
        color: #04bbe2;
        outline: none;
      }
    `}
		</style>
	</div>
}

Header.propTypes = {
	updateData: PropTypes.func
}

export default Header
