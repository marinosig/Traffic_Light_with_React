import React from "react";
import { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color, setColor] = useState("red");
	const [isPurpleOn, setIsPurpleOn] = useState(false);
	const [listOfLights, setListOfLights] = useState([
		"red",
		"yellow",
		"green",
	]);
	const [cycleRunning, setCycleRunning] = useState();
	//let listOfLights = ["red", "yellow", "green"];
	let i = 0;

	const onTogglePurple = () => {
		setIsPurpleOn(!isPurpleOn);

		if (isPurpleOn) {
			setListOfLights(["red", "yellow", "green", "purple"]);
		} else {
			setListOfLights(["red", "yellow", "green"]);
		}
		console.log("onToggle " + listOfLights);
	};

	const onCycle = () => {
		clearInterval(cycleRunning);
		const interval = setInterval(function () {
			let result = i % listOfLights.length;
			setColor(listOfLights[result]);
			console.log("onCycle " + listOfLights);
			i++;
		}, 1000);
		setCycleRunning(interval);
	};

	const doubleFunction = () => {
		onTogglePurple();
		onCycle();
	};

	return (
		<div>
			<div className="stick"></div>
			<div className="traffic">
				<div
					onClick={() => setColor("red")}
					className={
						"light red" + (color === "red" ? "light red glow" : "")
					}></div>
				<div
					onClick={() => setColor("yellow")}
					className={
						"light yellow" +
						(color === "yellow" ? "light yellow glow" : "")
					}></div>
				<div
					onClick={() => setColor("green")}
					className={
						"light green" +
						(color === "green" ? "light green glow" : "")
					}></div>

				{isPurpleOn === true ? (
					<div
						onClick={() => setColor("purple")}
						className={
							"light purple" +
							(color === "purple" ? "light purple glow" : "")
						}></div>
				) : null}
			</div>
			<p></p>
			<p></p>
			<button onClick={onCycle} className="changeColor">
				Cycle Traffic Light Color
			</button>
			<button onClick={doubleFunction} className="changeColor">
				{isPurpleOn ? "Remove Purple" : "Add Purple"}
			</button>
		</div>
	);
};

export default Home;
