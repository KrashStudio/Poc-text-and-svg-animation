import { Transition } from "react-transition-group";

const defaultPosition = {
	left: -200,
	top: -100,
	center: 0,
	bottom: 100,
	right: 200,
};

const Fade = ({ in: inProp, from = "center" }) => {
	const duration = 300;

	const isLeftOrRight = from === "left" || from === "right";
	const isTopOrBottom = from === "top" || from === "bottom";

	const defaultStyle = {
		position: "relative",
		left: isLeftOrRight ? defaultPosition[from] : 0,
		top: isTopOrBottom ? defaultPosition[from] : 0,
		transition: `opacity ${duration}ms ease-in-out, ${
			isLeftOrRight ? "left" : "top"
		} ${duration}ms ease-in-out`,
		opacity: 0,
	};

	const enterCss = { opacity: 1, left: 0, top: 0 };
	const exitCss = {
		opacity: 0,
		left: isLeftOrRight ? defaultPosition[from] : 0,
		top: isTopOrBottom ? defaultPosition[from] : 0,
	};

	const transitionStyles = {
		entering: enterCss,
		entered: enterCss,
		exiting: exitCss,
		exited: exitCss,
	};

	return (
		<Transition in={inProp} timeout={duration}>
			{(state) => (
				<div
					style={{
						...defaultStyle,
						...transitionStyles[state],
					}}
				>
					{`I'm a ${from} fade Transition!`}
				</div>
			)}
		</Transition>
	);
};

export default Fade;
