import jsx, { render, dispatchEvent } from '../../dist/jsx'
import './demo.css'

function handleEvent (e) {
	console.log('event', e.type, this)
}

function triggerCustomEvent (e) {
	console.log('triggerCustomEvent', e.type, this)
	dispatchEvent('hello', document.querySelector('#section-custom-event'))
}

function onCustomEventReceived (e) {
	this.setAttribute('style', 'background-color: #272b30; color: #fff;')
}

const InputComponent = props => (
	<input type="text" data-name={props.name} value={props.name} onKeyup={handleEvent} />
)

const persons = ['John Doe', 'Mickael Emphys', 'Henry pleyd']

const elements = (
	<>
		<section>
			<h3 className="sectionTitle">Conditional</h3>
			<p if={persons.length}>I'm visible</p>
			<p if={persons.length === 0}>I'm invisible</p>
		</section>
		<section style={{ backgroundColor: '#272b30', color: '#fff' }}>
			<h3 className="sectionTitle">HTML attributes</h3>
			<p style="color: #ffe300;" class="text" id="text-1" data-type="content" aria-label="Text">
				I've multiple `data-attribute`
			</p>
		</section>
		<section>
			<h3 className="sectionTitle">Function component with props and events keyup</h3>
			<InputComponent name={persons[1]} />
		</section>
		<section>
			<h3 className="sectionTitle">Loop</h3>
			<ul>
				{persons.map((name, index) => (
					<li>
						<label>
							<span>
								Name <em if={index === 0}>I'm visible</em>
							</span>
							<InputComponent if={index > 0} name={name} />
						</label>
					</li>
				))}
			</ul>
		</section>
		<section>
			<h3 className="sectionTitle">Test events click</h3>
			<button
				class="btn"
				onClick={handleEvent}
			>
				Submit
			</button>
		</section>
		<section id="section-custom-event" onHello={onCustomEventReceived}>
			<h3 className="sectionTitle">Test custom event</h3>
			<button
				class="btn"
				onClick={triggerCustomEvent}
			>
				Submit
			</button>
		</section>
	</>
)

render(elements, document.getElementById('app'))
