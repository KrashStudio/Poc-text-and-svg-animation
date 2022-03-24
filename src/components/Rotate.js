import { Transition } from "react-transition-group";

const duration = 300;

const defaultStyle = {
	transition: `transform ${duration}ms ease-in-out, opacity ${duration}ms ease-in-out`,
	opacity: 0,
};

const transitionStyles = {
	entering: { transform: "rotate(0deg)", opacity: 1 },
	entered: { transform: "rotate(0deg)", opacity: 1 },
	exiting: { transform: "rotate(-180deg)", opacity: 0 },
	exited: { transform: "rotate(-180deg)", opacity: 0 },
};

const Rotate = ({ in: inProp }) => (
	<Transition in={inProp} timeout={duration}>
		{(state) => (
			<div
				style={{
					...defaultStyle,
					...transitionStyles[state],
				}}
			>
				I'm a rotate Transition!
			</div>
		)}
	</Transition>
);

export default Rotate;
