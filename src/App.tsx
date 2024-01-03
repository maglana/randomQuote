import React, { useState, useEffect } from "react";
import "./App.css";
import {
	Box,
	Button,
	FormControlLabel,
	RadioGroup,
	Radio,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme, backgroundColor }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : backgroundColor,
	...theme.typography.body2,
	padding: theme.spacing(4),
	margin: "0 60px",
	fontSize: "30px",
	textAlign: "center",
	color: theme.palette.text.secondary,
	height: "500px",
}));

function App() {
	const [quote, setQuote] = useState<string>("");
	const [author, setAuthor] = useState<string>("");
	const [radio, setRadio] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	const handleRandomQuote = async () => {
		const waitTime = 500;

		try {
			const res = await fetch("https://api.quotable.io/random");

			if (!res.ok) {
				setError(`Error: ${res.status}`);
				return;
			}

			const data = await res.json();
			setQuote(data.content);
			setAuthor(data.author);
			setLoading(false);
			setError(null);
		} catch (error) {
			console.error("Error fetching quote:", error);
			setError("Error fetching quote");
			setLoading(false);
		}
	};

	const handleChange = (e) => {
		const target = e.target;
		if (target.checked) {
			setRadio(target.value);
		}
	};

	useEffect(() => {
		handleRandomQuote();
	}, [radio]);

	return (
		<div>
			<div className='WebTitle'>
				<h1 className='WebTitle'>Wylosuj cytat!</h1>
				<i class='fa-regular fa-face-smile'></i>
			</div>
			<Box className='child'>
				<Grid
					container
					spacing={2}
				>
					<Grid
						item
						xs={6}
					>
						<Item
							backgroundColor={
								radio === "red"
									? "red"
									: radio === "yellow"
									? "yellow"
									: "green"
							}
						>
							<Button
								variant='contained'
								onClick={handleRandomQuote}
							>
								Losuj cytat
							</Button>
							<RadioGroup name='radio-buttons-group'>
								<FormControlLabel
									value='green'
									label='Zmień tło na zielone :)'
									control={<Radio />}
									onChange={handleChange}
								/>
								<FormControlLabel
									value='yellow'
									label='Zmień tło na żółte :D'
									control={<Radio />}
									onChange={handleChange}
								/>
								<FormControlLabel
									value='red'
									label='Zmień tło na czerwone :P'
									control={<Radio />}
									onChange={handleChange}
								/>
							</RadioGroup>
						</Item>
					</Grid>
					<Grid
						item
						xs={6}
					>
						<Item
							backgroundColor={
								radio === "red"
									? "red"
									: radio === "yellow"
									? "yellow"
									: "green"
							}
						>
							{loading ? (
								<h1>Loading...</h1>
							) : quote ? (
								<>
									<h2>Wylosowany cytat:</h2>
									<p>{quote}</p>
									<p>- {author}</p>
								</>
							) : (
								<h2>Brak dostępnych cytatów</h2>
							)}
						</Item>
					</Grid>
				</Grid>
			</Box>
		</div>
	);
}

export default App;
