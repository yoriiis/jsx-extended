import Rlite from '../core'

const InputComponent = props => {
	return (
		<input type="text" data-name={props.name} value={props.name} e:keyup={handleEvent} />
	)
}
function handleEvent (e) {
	console.log('event', e.type)
}

const elements = (
	<>
		<h1 style="color: red;" className="title" id="main-title">Hello World</h1>
		<p>Hello,<span>world!</span></p>
		<InputComponent name="John" />
		<button className="btn" id="btn" ariaLabel="Submit" e:click={handleEvent}>Submit</button>
	</>
)

const App = document.querySelector('#main')
Rlite.render(App, elements)
