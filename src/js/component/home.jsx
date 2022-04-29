import { useState, useEffect } from "react";
import React from "react";

//create your first component
const Home = () => {
	const [color, setColor] = useState("red");
	const [isPurpleOn, setIsPurpleOn] = useState(false);
	const [listOfLights, setListOfLights] = useState([]);
	const [cycleRunning, setCycleRunning] = useState();
	//let listOfLights = ["red", "yellow", "green"];
	let i = 0;
	const onTogglePurple = () => {
		console.log("onToggle " + listOfLights);
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
	useEffect(() => {
		setListOfLights(["red", "yellow", "green", "purple"]);
	}, []);
	const onClick = () => {
		onTogglePurple();
		onCycle();
	};
	return (
		<div className="container">
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
					<div className="trafficPurple">
						<div
							onClick={() => setColor("purple")}
							className={
								"light purple" +
								(color === "purple" ? "light purple glow" : "")
							}></div>
					</div>
				) : null}
			</div>
			<p></p>

			<button onClick={onCycle} className="Cycle">
				Cycle
			</button>
			<p></p>
			<button onClick={onClick} className="changeColor">
				{isPurpleOn ? "Remove Purple" : "Add Purple"}
			</button>
		</div>
	);
};
export default Home;
