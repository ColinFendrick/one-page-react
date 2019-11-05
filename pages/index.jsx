import useAxios from 'axios-hooks'

import { Header, Body, Loader } from '../components'

const Index = () => {
	const [{ data: getData, loading: getLoading, error: getError }, refetch] = useAxios('http://localhost:3001/items')

	const [
		{ loading: putLoading, error: putError },
		executePost
	] = useAxios(
		{
			url: 'http://localhost:3001/items',
			method: 'POST'
		},
		{ manual: true }
	)

	const updateData = async data => {
		await executePost({ data })
		refetch()
	}

	if (getLoading || putLoading) return <Loader />
	if (getError || putError) return <p>Error!</p>
  
	return <div className="wrapper">
		<Header appendData={item => updateData(item)} />
		<Body data={getData} />
		<style jsx>{`
	    .wrapper {
	      font-family: Arial, Helvetica, sans-serif;
	      display: flex;
	      flex-direction: column;
	    }

	    :global(.centered) {
	      display: flex;
	      justify-content: center;
	      align-items: center;
	    }

	    :global(.width-std) {
	      width: 66%;
	    }
	  `}</style>
	</div>
}

export default Index
