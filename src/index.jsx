import { createElement, render } from '../jsx/core'

const InputComponent = props => (
	<input type="text" data-name={props.name} value={props.name} e:keyup={handleEvent} />
)

function handleEvent (e) {
	console.log('event', e.type)
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
			<p style="color: red;" class="title" id="main-title" data-title="true">
				Hello <span>World</span>
			</p>
		</section>
		<section>
			<h3>Test function component</h3>
			<InputComponent name={persons[0]} />
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
			<button class="btn" id="btn" ariaLabel="Submit" e:click={handleEvent} e:mouseover={handleEvent}>Submit</button>
		</section>
	</>
)

const App = document.querySelector('#main')
render(App, elements)
