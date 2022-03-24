import { Transition } from "react-transition-group";

const duration = 300;

const defaultStyle = {
	display: "flex",
	margin: 0,

	transition: `opacity ${duration}ms ease-in-out, font-size ${duration}ms`,
	opacity: 0,
	fontSize: 0,
	minHeight: 26,
};

const transitionStyles = {
	entering: { opacity: 1, fontSize: 26 },
	entered: { opacity: 1, fontSize: 26 },
	exiting: { opacity: 0, fontSize: 0 },
	exited: { opacity: 0, fontSize: 0 },
};

const Zoom = ({ in: inProp }) => (
	<Transition in={inProp} timeout={duration}>
		{(state) => (
			<div>
				<p
					style={{
						...defaultStyle,
						...transitionStyles[state],
					}}
				>
					I'm a zoom
				</p>
				<p
					style={{
						...defaultStyle,
						...transitionStyles[state],
					}}
				>
					Transition!
				</p>
			</div>
		)}
	</Transition>
);

export default Zoom;
