import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';

import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { useNavigate } from 'react-router-dom';

const ShutdownPopup = () => {
	const [open, setOpen] = React.useState(false);

	const navigate = useNavigate();

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<React.Fragment>
			<IconButton
				color='inherit'
				size={'large'}
				onClick={handleClickOpen}
			>
				<PowerSettingsNewIcon fontSize='large' />
			</IconButton>
			<Dialog open={open} onClose={handleClose}>
				<DialogTitle>{'Confirm Shutdown'}</DialogTitle>
				<DialogContent dividers>
					<DialogContentText>
						Are you sure you want to shut down the room? This will
						clear video routing and also shut down all displays.
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button color='secondary' onClick={handleClose}>
						Cancel
					</Button>
					<Button
						variant='contained'
						color='error'
						onClick={() => {
							handleClose();
							navigate('/splash', { replace: true });
						}}
						autoFocus
					>
						Confirm
					</Button>
				</DialogActions>
			</Dialog>
		</React.Fragment>
	);
};

export default ShutdownPopup;
