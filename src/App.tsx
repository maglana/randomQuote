import React, { useState, useEffect } from "react";
import "./App.css";
import {
	Box,
	TextField,
	FormControlLabel,
	RadioGroup,
	FormLabel,
	FormControl,
} from "@mui/material";
import Radio from "@mui/material/Radio";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(4),
	margin: "0 60px",
	textAlign: "center",
	color: theme.palette.text.secondary,
	height: "500px",
}));

function App() {
	const [animal, setAnimal] = useState<string>("");
	const [img, setImg] = useState<string | null>(null);
	const [radio, setRadio] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	const handleChange = (e) => {
		const target = e.target;
		if (target.checked) {
			setRadio(target.value);
		}
	};

	console.log(radio);

	useEffect(() => {
		const imageUrl = "https://cataas.com/cat" + animal;
		const waitTime = 500;

		const fetchImage = async () => {
			try {
				const res = await fetch(imageUrl);
				if (res.status < 200 || res.status >= 300) {
					setError(res.status);
					return;
				}
				const imageBlob = await res.blob();
				const imageObjectURL = URL.createObjectURL(imageBlob);
				setImg(imageObjectURL);
				setLoading(false);
				setError(null);
			} catch (error) {
				console.error("Error fetching image:", error);
				setError("Error fetching image");
				setLoading(false);
			}
		};

		if (animal !== "") {
			setLoading(true);
			setImg(null);
			setError(null);
		}

		const animalTimer = setTimeout(() => fetchImage(), waitTime);

		return () => {
			clearTimeout(animalTimer);
		};
	}, [animal, radio]);

	return (
		<div>
			<h1>Wybierz zwierzaka!</h1>
			<Box className='child'>
				<Grid
					container
					spacing={2}
				>
					<Grid
						item
						xs={6}
					>
						<Item>
							<FormControl
								noValidate
								autoComplete='off'
							>
								<TextField
									placeholder='Add Name'
									type='text'
									id='pet'
									name='pet'
									onChange={(e) => setAnimal(e.target.value)}
								/>
								<RadioGroup name='radio-buttons-group'>
									<FormControlLabel
										value='green'
										label='Green'
										control={<Radio />}
										onChange={handleChange}
									/>
									<FormControlLabel
										value='blue'
										label='Blue'
										control={<Radio />}
										onChange={handleChange}
									/>
									<FormControlLabel
										value='red'
										label='Red'
										control={<Radio />}
										onChange={handleChange}
									/>
								</RadioGroup>
							</FormControl>
							{!animal && (
								<h1 style={{ marginTop: "2em" }}>
									Use form to generate animal
								</h1>
							)}
						</Item>
					</Grid>
					<Grid
						item
						xs={6}
					>
						<Item>
							{loading && <h1>Loading...</h1>}
							<h2>Wylosowane zwierzę:</h2>
							<img
								src={img}
								alt='random animal'
							/>
						</Item>
					</Grid>
				</Grid>
			</Box>
		</div>
	);
}
export default App;