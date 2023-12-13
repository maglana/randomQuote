import "./App.css";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper);

function App() {
	return (
		<Box>
			<Grid
				container
				spacing={2}
			>
				<Grid
					item
					xs={6}
				>
					1
				</Grid>
				<Grid
					item
					xs={6}
				>
					2
				</Grid>
			</Grid>
		</Box>
	);
}

export default App;
