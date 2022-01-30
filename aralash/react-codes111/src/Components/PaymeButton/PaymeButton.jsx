import React from 'react';
import { styled } from '@mui/styles';
import Button from '@mui/material/Button';

const PaymeButton = styled(Button)({
	background: '#3cc !important',
	border: 0,
	borderRadius: 3,
	boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
	color: 'white !important',
	height: 48,
	padding: '0 30px',
});

function BrandButton({ children }) {
	return <PaymeButton>{children}</PaymeButton>;
}

export default BrandButton;
