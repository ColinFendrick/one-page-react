import { useState } from 'react'

const useForm = (initialState = {}, callback) => {
	const [inputs, setInputs] = useState(initialState)

	const handleSubmit = event => {
		if (event) event.preventDefault()
		callback()
	}

	const handleInputChange = event => {
		event.persist()
		// Some trimming and removing leading 0s
		const value = typeof event.target.value === 'string'
			? event.target.value.trim().replace(/^0+/, '')
			: event.target.value

		setInputs(inputs => ({ ...inputs, [event.target.name]: value }))
	}

	return { handleSubmit, handleInputChange, inputs }
}

export default useForm
