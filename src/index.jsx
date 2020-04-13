import { createElement, render, dispatchEvent } from '../jsx/core'

const InputComponent = props => (
	<input type="text" data-name={props.name} value={props.name} e:keyup={handleEvent} />
)

function handleEvent (e) {
	console.log('event', e.type, this)
	dispatchEvent(this, 'helloguy')
}

function handleCustomEvent (e) {
	console.log('customEvent', e.type, this)
}

const persons = ['John Doe', 'Mickael Emphys', 'Henry pleyd']

const elements = (
	<>
		<section>
			<h3>Test conditional</h3>
			<h1 class="title" if={persons.length}>
				Hello
				<span class="label"> world</span>
			</h1>
		</section>
		<section>
			<h3>Test DOM attributes</h3>
			<p style="color: red;" class="title" id="main-title" data-title="true" aria-label="Text">
				Hello <span>World</span>
			</p>
		</section>
		<section>
			<h3>Test function component</h3>
			<InputComponent name={persons[1]} />
		</section>
		<section>
			<h3>Test loop</h3>
			<ul>
				{persons.map((name, index) => (
					<li>
						<label>
							<span>Name </span>
							<InputComponent name={name} />
						</label>
					</li>
				))}
			</ul>
		</section>
		<section>
			<h3>Test events</h3>
			<button
				id="main-btn"
				class="btn"
				aria-label="Submit"
				data-text="Submit"
				tabIndex="1"
				className="btn2"
				onClick={handleEvent}
				onHelloGuy={handleCustomEvent}
			>
				Submit
			</button>
		</section>
	</>
)

const App = document.querySelector('#main')
render(App, elements)
