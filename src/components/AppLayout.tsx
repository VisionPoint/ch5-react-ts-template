import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { Outlet, useNavigate } from 'react-router-dom';

const AppLayout = () => {
	const navigate = useNavigate();

	return (
		<Grid
			container
			sx={{
				display: 'flex',
				height: '100vh',
			}}
		>
			<Grid
				component={'nav'}
				size={'grow'}
				sx={{
					p: 4,
				}}
			>
				<Stack spacing={4}>
					<Button
						variant='contained'
						onClick={() => navigate('/test')}
					>
						Test
					</Button>
					<Button
						variant='contained'
						onClick={() => navigate('/test2')}
					>
						Test 2
					</Button>
					<Button
						variant='contained'
						onClick={() => navigate('/splash')}
					>
						Splash
					</Button>
				</Stack>
			</Grid>
			<Grid component={Paper} size={9} sx={{ p: 1 }}>
				<Outlet />
			</Grid>
			<Grid size={'grow'} component='audio'>
				<>Audio Controls</>
			</Grid>
		</Grid>
	);
};

export default AppLayout;
