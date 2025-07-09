import ButtonBase from '@mui/material/ButtonBase';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const SplashPage = () => {
	const navigate = useNavigate();

	const seat: string =
		import.meta.env.VITE_PANEL_IP_ID === '0x11'
			? 'seat1'
			: import.meta.env.VITE_PANEL_IP_ID === '0x12'
			? 'seat2'
			: import.meta.env.VITE_PANEL_IP_ID === '0x13'
			? 'seat3'
			: import.meta.env.VITE_PANEL_IP_ID === '0x14'
			? 'seat4'
			: import.meta.env.VITE_PANEL_IP_ID === '0x15'
			? 'seat5'
			: import.meta.env.VITE_PANEL_IP_ID === '0x16'
			? 'supervisor'
			: 'admin';

	return (
		<ButtonBase onClick={() => navigate(`/${seat}`, { replace: true })}>
			<Grid
				container
				sx={{ height: '100vh', width: '100vw', bgcolor: '#fff' }}
			>
				<Grid
					size={12}
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Stack
						spacing={8}
						direction={'row'}
						sx={{
							p: 8,
							flex: 'auto',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<img
							src='./assets/PW-LOGO.png'
							//style={{ width: '550px' }}
						/>
						<Typography color='primary.main' sx={{ fontSize: 140 }}>
							Command Center
						</Typography>
					</Stack>
				</Grid>
				<Grid
					size={12}
					sx={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Typography variant='h3' color='primary.main'>
						Press anywhere to continue...
					</Typography>
				</Grid>
			</Grid>
		</ButtonBase>
	);
};

export default SplashPage;
