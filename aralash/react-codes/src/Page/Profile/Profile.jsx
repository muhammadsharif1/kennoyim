import React from 'react';

// Components
import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import BrandButton from '../../Components/PaymeButton/PaymeButton';

import useToken from '../../Hooks/useToken';

const useStyles = makeStyles({
	firstButton: {
		display: 'inline-block',
		background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
		border: 0,
		borderRadius: 3,
		boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
		color: 'white',
		height: 48,
		padding: '0 30px',
		marginLeft: '20px !important',
	},

	linearReverse: {
		background: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)',
	},
});

function Profile() {
	const [setToken] = useToken(true);
	const classes = useStyles();

	return (
		<>
			<h1>Profile</h1>

			<Button
				className={classes.linearReverse}
				onClick={() => setToken(false)}
				color='error'
				variant='contained'
				size='small'>
				Log out
			</Button>
{/* 
			<Button
				className={classes.firstButton}
				color='error'
				variant='contained'
				size='small'>
				Log out
			</Button> */}

			{/* <BrandButton>Payme</BrandButton> */}
		</>
	);
}

export default Profile;
