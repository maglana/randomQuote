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
	const [animal, setAnimal] = useState("");
	const [img, setImg] = useState("");
	const [radio, setRadio] = useState("");
	const [loading, setLoading] = useState("");
	const [error, setError] = useState(null);

	const handleChange = (e) => {
		const target = e.target;
		if (target.checked) {
			setRadio(target.value);
		}
	};

	console.log(radio);

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
						</Item>
					</Grid>
					<Grid
						item
						xs={6}
					>
						<Item>
							<h2>Wylosowane zwierzę:</h2>
						</Item>
					</Grid>
				</Grid>
			</Box>
		</div>
	);
}

export default App;
