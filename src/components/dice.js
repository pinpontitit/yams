import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faDiceOne,
	faDiceTwo,
	faDiceThree,
	faDiceFour,
	faDiceFive,
	faDiceSix,
} from "@fortawesome/free-solid-svg-icons";

export default function Dice() {
	var dices = [
		<FontAwesomeIcon size="5x" color="white" icon={faDiceOne} />,
		<FontAwesomeIcon size="5x" color="white" icon={faDiceTwo} />,
		<FontAwesomeIcon size="5x" color="white" icon={faDiceThree} />,
		<FontAwesomeIcon size="5x" color="white" icon={faDiceFour} />,
		<FontAwesomeIcon size="5x" color="white" icon={faDiceFive} />,
		<FontAwesomeIcon size="5x" color="white" icon={faDiceSix} />,
	];

	var randomDice1 = dices[Math.floor(Math.random() * 6)];
	var randomDice2 = dices[Math.floor(Math.random() * 6)];
	var randomDice3 = dices[Math.floor(Math.random() * 6)];
	var randomDice4 = dices[Math.floor(Math.random() * 6)];
	var randomDice5 = dices[Math.floor(Math.random() * 6)];

	return (
		<div>
			{randomDice1}
			{randomDice2}
			{randomDice3}
			{randomDice4}
			{randomDice5}
		</div>
	);
}
