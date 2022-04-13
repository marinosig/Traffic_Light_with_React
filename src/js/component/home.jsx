import React from "react";
import { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color, setColor] = useState("red");
	const [randonLight, setRandonLight] = useState("light red glow");
	let listOfLights = ["light red", "light yellow", "light green"];
	let i = 0;

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
			</div>
			<p></p>
			<p></p>
			<button
				onClick={() =>
					setInterval(function () {
						i++;
						let result = i % listOfLights.length;
						let traficLight = listOfLights[result] + " glow";
						console.log(traficLight);
					}, 1000)
				}
				className="changeColor">
				Cycle Traffic Light Color
			</button>
		</div>
	);
};

export default Home;
