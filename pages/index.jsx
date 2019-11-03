import { Header } from './components'

const Index = () => (
	<div className="wrapper">
		<Header />
		<p>Hello Next.js bitch</p>
		<style jsx>{`
      .wrapper {
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
      }
    `}</style>
	</div>
)

export default Index
