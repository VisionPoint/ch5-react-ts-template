import React from 'react';
import { useSetAtom } from 'jotai';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
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
		document.title = path ? `${path.toUpperCase()}` : 'Test Application';

		switch (path) {
			case 'test1':
				setPageTitle('Test 1');
				break;
			case 'test2':
				setPageTitle('Test 2');
				break;
			default:
				setPageTitle('Test');
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
						p: 3,
					}}
				>
					<Stack
						spacing={4}
						sx={{ height: '100%' }}
						//justifyContent={'space-between'}
					>
						<StateButton
							icon={<CrisisAlertIcon sx={{ fontSize: 60 }} />}
							label={['Test 1']}
							active={location.pathname === '/test1'}
							slotProps={{
								button: {
									onClick: () => navigate('/test1'),
								},
								stack: {
									sx: {
										py: 1,
									},
								},
							}}
						/>

						<StateButton
							icon={<CrisisAlertIcon sx={{ fontSize: 60 }} />}
							label={['Test 2']}
							active={location.pathname === '/test2'}
							slotProps={{
								button: {
									onClick: () => navigate('/test2'),
								},
								stack: {
									sx: {
										py: 1,
									},
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
