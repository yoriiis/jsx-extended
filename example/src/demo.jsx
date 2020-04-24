import { createElement, render, dispatchEvent } from '../../dist/jsx.esm.js'
import './demo.css'
console.log(createElement, render, dispatchEvent)
function handleEvent (e) {
	console.log('event', e.type, this)
}

function triggerCustomEvent (e) {
	console.log('triggerCustomEvent', e.type, this)
	dispatchEvent('hello', document.querySelector('#section-custom-event'))
}

function onCustomEventReceived (e) {
	this.classList.toggle('colored')
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
		<section>
			<h3 className="sectionTitle">SVG</h3>
			<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 48 48" width="50px" height="50px"><g><circle id="Oval" class="st0" cx="24" cy="24" r="24" fill="#fbd971"/><path class="st1" d="M24 41.1c-7.6 0-13.7-6.2-13.7-13.7 0-.6.5-1.1 1.1-1.1.6 0 1.1.5 1.1 1.1 0 6.3 5.1 11.4 11.4 11.4s11.4-5.1 11.4-11.4c0-.6.5-1.1 1.1-1.1.6 0 1.1.5 1.1 1.1.2 7.6-5.9 13.7-13.5 13.7z" fill="#d8b11a"/><path fill="#e64c3c" d="M14.3 12.2c.5-1.1 1.6-1.9 3-1.9 1.8 0 3.1 1.5 3.2 3.2 0 0 .1.4-.1 1.2-.3 1.1-.9 2-1.7 2.8l-4.4 3.8-4.3-3.8c-.8-.7-1.4-1.7-1.7-2.8-.2-.8-.1-1.2-.1-1.2.2-1.8 1.5-3.2 3.2-3.2 1.4 0 2.4.8 2.9 1.9z"/><path fill="#e64c3c" d="M33.6 12.2c.5-1.1 1.6-1.9 3-1.9 1.8 0 3.1 1.5 3.2 3.2 0 0 .1.4-.1 1.2-.3 1.1-.9 2-1.7 2.8l-4.4 3.8-4.3-3.8c-.8-.7-1.4-1.7-1.7-2.8-.2-.8-.1-1.2-.1-1.2.2-1.8 1.5-3.2 3.2-3.2 1.3 0 2.4.8 2.9 1.9z"/></g></svg>
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
			<button class="btn" onClick={handleEvent}>
				Submit
			</button>
		</section>
		<section id="section-custom-event" onHello={onCustomEventReceived}>
			<h3 className="sectionTitle">Test custom event</h3>
			<button class="btn" onClick={triggerCustomEvent}>
				Submit
			</button>
		</section>
	</>
)

render(elements, document.getElementById('app'))
