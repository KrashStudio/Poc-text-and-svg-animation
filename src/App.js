import React from "react";
import "./App.css";
import Fade from "./components/Fade";
import FadeByLetter from "./components/FadeByLetter";
import FullAnimation from "./components/FullAnimation";
import PaperWithButton from "./components/PaperWithButton";
import Rotate from "./components/Rotate";
import Zoom from "./components/Zoom";

const App = () => {
	const [fadeIsIn, setFadeIsIn] = React.useState(false);
	const [fadeByLetterIsIn, setFadeByLetterIsIn] = React.useState(false);
	const [fadeByLetterSmoothIsIn, setFadeByLetterSmoothIsIn] =
		React.useState(false);
	const [fadeLeftIsIn, setFadeLeftIsIn] = React.useState(false);
	const [fadeRightIsIn, setFadeRightIsIn] = React.useState(false);
	const [fadeTopIsIn, setFadeTopIsIn] = React.useState(false);
	const [fadeBottomIsIn, setFadeBottomIsIn] = React.useState(false);
	const [rotateIsIn, setRotateIsIn] = React.useState(false);
	const [zoomIsIn, setZoomIsIn] = React.useState(false);
	const [fullAnimationIsIn, setFullAnimationIsIn] = React.useState(false);

	const setAllTransition = (value) => {
		setFadeIsIn(value);
		setFadeByLetterIsIn(value);
		setFadeByLetterSmoothIsIn(value);
		setFadeLeftIsIn(value);
		setFadeRightIsIn(value);
		setFadeTopIsIn(value);
		setFadeBottomIsIn(value);
		setRotateIsIn(value);
		setZoomIsIn(value);
		setFullAnimationIsIn(value);
	};

	return (
		<div className="App">
			<header className="App-header">
				<div>
					<button className="button" onClick={() => setAllTransition(true)}>
						ACTIVE ALL
					</button>
					<button className="button" onClick={() => setAllTransition(false)}>
						RESET ALL
					</button>
				</div>
				<div className="App-line">
					<PaperWithButton onClick={() => setFadeIsIn((e) => !e)}>
						<Fade in={fadeIsIn} />
					</PaperWithButton>
					<PaperWithButton onClick={() => setFadeLeftIsIn((e) => !e)}>
						<Fade in={fadeLeftIsIn} from="left" />
					</PaperWithButton>
					<PaperWithButton onClick={() => setFadeRightIsIn((e) => !e)}>
						<Fade in={fadeRightIsIn} from="right" />
					</PaperWithButton>
					<PaperWithButton onClick={() => setFadeTopIsIn((e) => !e)}>
						<Fade in={fadeTopIsIn} from="top" />
					</PaperWithButton>
				</div>
				<div className="App-line">
					<PaperWithButton onClick={() => setFadeBottomIsIn((e) => !e)}>
						<Fade in={fadeBottomIsIn} from="bottom" />
					</PaperWithButton>
					<PaperWithButton onClick={() => setRotateIsIn((e) => !e)}>
						<Rotate in={rotateIsIn} />
					</PaperWithButton>
					<PaperWithButton onClick={() => setZoomIsIn((e) => !e)}>
						<Zoom in={zoomIsIn} />
					</PaperWithButton>
					<PaperWithButton onClick={() => setFadeByLetterSmoothIsIn((e) => !e)}>
						<FadeByLetter
							in={fadeByLetterSmoothIsIn}
							text="Fade by letter smooth"
						/>
					</PaperWithButton>
				</div>
				<div className="App-line">
					<PaperWithButton onClick={() => setFadeByLetterIsIn((e) => !e)}>
						<FadeByLetter
							in={fadeByLetterIsIn}
							text="Fade by letter"
							smooth={false}
						/>
					</PaperWithButton>
					<PaperWithButton onClick={() => setFullAnimationIsIn((e) => !e)}>
						<FullAnimation
							in={fullAnimationIsIn}
							text="Full animation"
							smooth={true}
						/>
					</PaperWithButton>
				</div>
			</header>
		</div>
	);
};

export default App;
