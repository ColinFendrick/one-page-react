import { useState } from 'react'

import { Header, Body } from './components'

const Index = () => {
	const initialData = [
		{
			firstName: 'Wesley',
			lastName: 'Crusher',
			participation: 0.01
		},
		{
			firstName: 'Jean Luc',
			lastName: 'Picard',
			participation: 30
		}, {
			firstName: 'William T',
			lastName: 'Riker',
			participation: 15
		},
		{
			firstName: 'Data',
			lastName: '--',
			participation: 15
		},
		{
			firstName: 'Geordi',
			lastName: 'LaForge',
			participation: 10
		},
		{
			firstName: 'Worf',
			lastName: 'son of Mogh',
			participation: 10
		},
		{
			firstName: 'Beverley',
			lastName: 'Crusher',
			participation: 10
		},
		{
			firstName: 'Deanna',
			lastName: 'Troi',
			participation: 9
		}]
  
	const [data, updateData] = useState(initialData.sort((a, b) => b.participation - a.participation))

	const appendData = item => updateData(prevData => [...prevData, item])	
  
	return <div className="wrapper">
		<Header appendData={appendData} />
		<Body data={data} />
		<style jsx>{`
      .wrapper {
        font-family: Arial, Helvetica, sans-serif;
        height: 100vh;
        width: 100vw;
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
