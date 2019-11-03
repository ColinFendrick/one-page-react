import { Header, Body } from './components'

const Index = () => (
	<div className="wrapper">
		<Header />
		<Body />
		<style jsx>{`
      .wrapper {
        height: 100vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
      }
    `}</style>
	</div>
)

export default Index
