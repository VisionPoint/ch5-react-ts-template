import React from 'react';
import { useSetAtom } from 'jotai';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import SecurityIcon from '@mui/icons-material/Security';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import SettingsIcon from '@mui/icons-material/Settings';
import StateButton from './StateButton';
import { pageTitleState } from '../state management/atoms';
import PageTitleBar from './PageTitleBar';

const navWidth = 2.25; // ~2 - 2.5 is a good range
const audioWidth = 0; // ~1.5 - 2 is a good range
const contentWidth = 12 - audioWidth; // 10.25 * 8px = 82px

const AppLayout = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const setPageTitle = useSetAtom(pageTitleState);

	React.useEffect(() => {
		// Set the page title based on the current route
		const path = location.pathname.split('/')[1];
		document.title = path
			? `Command Center - ${path.toUpperCase()}`
			: 'Command Center';

		switch (path) {
			case 'seat1':
				setPageTitle('EH-COMMS (Seat 1)');
				break;
			case 'seat2':
				setPageTitle('MT COMMS (Seat 2)');
				break;
			case 'seat3':
				setPageTitle('EH (Seat 3)');
				break;
			case 'seat4':
				setPageTitle('EH (Seat 4)');
				break;
			case 'seat5':
				setPageTitle('MT (Seat 5)');
				break;
			case 'supervisor':
				setPageTitle('Supervisor');
				break;
			case 'admin':
				setPageTitle('Admin');
				break;
			default:
				setPageTitle('Command Center');
		}
	}, [location.pathname, setPageTitle]);

	return (
		<>
			<Grid
				container
				sx={{
					display: 'flex',
					height: '100vh',
				}}
			>
				<Grid
					component={'nav'}
					size={navWidth}
					sx={{
						p: 4,
					}}
				>
					<Stack spacing={4}>
						<StateButton
							icon={<CrisisAlertIcon fontSize='large' />}
							label={['EH-COMMS', '(Seat 1)']}
							active={location.pathname === '/seat1'}
							slotProps={{
								button: {
									onClick: () => navigate('/seat1'),
								},
							}}
						/>

						<StateButton
							icon={<CrisisAlertIcon fontSize='large' />}
							label={['MT COMMS', '(Seat 2)']}
							active={location.pathname === '/seat2'}
							slotProps={{
								button: {
									onClick: () => navigate('/seat2'),
								},
							}}
						/>
						<StateButton
							icon={<SecurityIcon fontSize='large' />}
							label={['EH (Seat 3)']}
							active={location.pathname === '/seat3'}
							slotProps={{
								button: {
									onClick: () => navigate('/seat3'),
								},
							}}
						/>

						<StateButton
							icon={<SecurityIcon fontSize='large' />}
							label={['EH (Seat 4)']}
							active={location.pathname === '/seat4'}
							slotProps={{
								button: {
									onClick: () => navigate('/seat4'),
								},
							}}
						/>

						<StateButton
							icon={<SecurityIcon fontSize='large' />}
							label={['MT (Seat 5)']}
							active={location.pathname === '/seat5'}
							slotProps={{
								button: {
									onClick: () => navigate('/seat5'),
								},
							}}
						/>

						<StateButton
							icon={<AdminPanelSettingsIcon fontSize='large' />}
							label={['Supervisor']}
							active={location.pathname === '/supervisor'}
							slotProps={{
								button: {
									onClick: () => navigate('/supervisor'),
								},
							}}
						/>

						<StateButton
							icon={<SettingsIcon fontSize='large' />}
							label={['Admin']}
							active={location.pathname === '/admin'}
							slotProps={{
								button: {
									onClick: () => navigate('/admin'),
								},
							}}
						/>
					</Stack>
				</Grid>
				<Grid component={Paper} size={12 - navWidth} sx={{ p: 0 }}>
					<PageTitleBar />
					<Grid
						container
						sx={{
							height: 'calc(100vh - 100px)',
						}}
					>
						<Grid size={contentWidth} sx={{ height: '100%', p: 1 }}>
							<Outlet />
						</Grid>
						{audioWidth > 0 && (
							<Grid
								size={audioWidth}
								sx={{ height: '100%', p: 1 }}
							>
								<Paper>Audio Controls</Paper>
							</Grid>
						)}
					</Grid>
				</Grid>
			</Grid>
		</>
	);
};

export default AppLayout;
