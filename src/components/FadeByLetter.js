import { Transition } from "react-transition-group";

const duration = 400;

const defaultStyle = {
	position: "relative",
	opacity: 0,
	top: -100,
};

const delayMax = 300;

const FadeByLetter = ({ in: inProp, text = "", smooth = true }) => (
	<div style={{ display: "flex", flexDirection: "row" }}>
		{[...text].map((letter, idx) => {
			const delayForThisLetter = (delayMax * (idx + 1)) / text.length;
			const transitionStyles = {
				entering: { top: 0, opacity: 1 },
				entered: { top: 0, opacity: 1 },
				exiting: { top: -100, opacity: 0 },
				exited: { top: -100, opacity: 0 },
			};

			return (
				<Transition in={inProp} timeout={duration}>
					{(state) => (
						<div
							style={{
								marginLeft: [...text][idx - 1] === " " ? 5 : 0,
								transition: `all ${duration}ms ${
									smooth ? "ease" : "cubic-bezier(.29, 1.01, 1, -0.68)"
								} ${delayForThisLetter}ms`,
								...defaultStyle,
								...transitionStyles[state],
							}}
						>
							{letter}
						</div>
					)}
				</Transition>
			);
		})}
	</div>
);

export default FadeByLetter;
