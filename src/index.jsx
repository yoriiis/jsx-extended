import Rlite from '../jsx/core'

// const InputComponent = props => {
// 	return (
// 		<input type="text" data-name={props.name} value={props.name} e:keyup={handleEvent} />
// 	)
// }
const InputComponent = props => (
	<input type="text" data-name={props.name} value={props.name} e:keyup={handleEvent} />
)

function handleEvent (e) {
	console.log('event', e.type)
}

const test = true

const elements = (
	<>
		<h1 class="title" >
			Hello
			<span class="label" if={test}>world</span>
		</h1>
		{/* <h1 style="color: red;" class="title" id="main-title">Hello World</h1>
		<p>Hello,<span>world!</span></p>
		<InputComponent name="John" />
		<button class="btn" id="btn" ariaLabel="Submit" e:click={handleEvent}>Submit</button> */}
	</>
)

const App = document.querySelector('#main')
Rlite.render(App, elements)
