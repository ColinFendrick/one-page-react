import { Header, Body } from './components'

const Index = () => (
	<div className="wrapper">
		<Header />
		<Body />
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

      :global(.width70) {
        width: 70%;
      }
    `}</style>
	</div>
)

export default Index
