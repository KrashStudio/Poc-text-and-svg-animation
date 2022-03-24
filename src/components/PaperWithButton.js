import "./PaperWithButton.css";

const PaperWithButton = ({ children, onClick }) => {
	return (
		<div className="paper-with-button">
			{children}
			<button className="button" onClick={onClick}>
				Test
			</button>
		</div>
	);
};

export default PaperWithButton;
