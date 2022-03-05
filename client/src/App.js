import React from 'react';

import VideoPlayer from './components/VideoPlayer';
import Options from './components/Options';
import Notifications from './components/Notifications';
import { makeStyles } from '@mui/styles';

import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles(() => ({
	appBar: {
		borderRadius: 15,
		margin: '30px 100px',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		width: '600px',
		border: '2px solid black'
	},
	image: {
		marginLeft: '15px'
	},
	wrapper: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		width: '100%'
	}
}));

const App = () => {
	const classes = useStyles();

	return (
		<div className={classes.wrapper}>
			<AppBar className={classes.appBar} position="static" color="inherit">
				<Typography variant="h2" align="center">
					Video Chat
				</Typography>
			</AppBar>
			<VideoPlayer />
			<Options>
				<Notifications />
			</Options>
		</div>
	);
};

export default App;
