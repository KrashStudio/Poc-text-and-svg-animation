import { Transition } from "react-transition-group";
var randomColor = require("randomcolor");

const duration = 1000;

const delayMax = 300;

const FullAnimation = ({ in: inProp, text = "", smooth = true }) => (
	<div style={{ display: "flex", flexDirection: "row" }}>
		{[...text].map((letter, idx) => {
			const delayForThisLetter = (delayMax * (idx + 1)) / text.length;
			const rotate = Math.random() * 360;
			const top = Math.random() * 200 - 100;
			const left = Math.random() * 200 - 100;

			const defaultStyle = {
				position: "relative",
				opacity: 0,
				top: top,
				left: left,
				color: "white",
				transform: `rotate(${rotate}deg)`,
			};

			const enterTransition = {
				top: 0,
				left: 0,
				opacity: 1,
				color: randomColor({
					luminosity: "light",
				}),
				transform: `rotate(0deg)`,
			};
			const exitTransition = {
				top: top,
				left: left,
				opacity: 0,
				color: "white",
				transform: `rotate(${rotate}deg)`,
			};

			const transitionStyles = {
				entering: enterTransition,
				entered: enterTransition,
				exiting: exitTransition,
				exited: exitTransition,
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

export default FullAnimation;
