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
	margin: "0 40px",
	textAlign: "center",
	color: theme.palette.text.secondary,
	height: "500px",
}));

function App() {
	return (
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
								placeholder='Add Cat Name'
								type='text'
								id='cat'
							/>
							<RadioGroup name='radio-buttons-group'>
								<FormControlLabel
									type='text'
									value='green'
									label='Green'
									control={<Radio />}
								/>
								<FormControlLabel
									type='text'
									value='blue'
									label='Blue'
									control={<Radio />}
								/>
								<FormControlLabel
									type='text'
									value='red'
									label='Red'
									control={<Radio />}
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
	);
}

export default App;
