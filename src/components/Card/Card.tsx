import { FC, useEffect, useState } from "react";
import { DevicesTypes } from "./types";
import { db } from "../../firebase/firebase";
import { ref, set, onValue } from "firebase/database";

interface CardProps {
	device: DevicesTypes;
}

const Card: FC<CardProps> = ({ device }: CardProps) => {
	const [isOpen, setIsOpen] = useState<boolean>();
	const nodePath = device.value;

	const handleClick = () => {
		setIsOpen(!isOpen);
		set(ref(db, nodePath), !isOpen);
	};

	useEffect(() => {
		const getValueRef = ref(db, nodePath);
		onValue(getValueRef, (snapshot) => {
			if (snapshot.exists()) {
				const data = snapshot.val();
				setIsOpen(data);
			} else {
				console.log("No data available!");
			}
		});
	}, [nodePath, setIsOpen]);

	return (
		<div className="flex flex-col gap-2 border py-10 bg-white shadow-md rounded-md justify-center items-center text-center">
			<p className="text-xl font-bold text-blue-500">{device.name}</p>
			<button
				onClick={handleClick}
				className="font-semibold rounded-full p-4 bg-blue-500 hover:bg-blue-400 hover:shadow-md text-white duration-200"
			>
				{isOpen ? "OFF" : "ON"}
			</button>
			<div className="flex flex-col justify-center items-center">
				<span>Status: </span>
				<span
					className={`px-2 py-1 text-[10px] ${
						isOpen
							? "bg-green-400 hover:bg-green-300"
							: "bg-red-400 hover:bg-red-300"
					} duration-200 text-white rounded-md cursor-pointer`}
				>
					{isOpen ? "Turned On" : "Turned Off"}
				</span>
			</div>
		</div>
	);
};

export default Card;
