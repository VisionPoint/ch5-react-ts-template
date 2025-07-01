import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import HelpIcon from '@mui/icons-material/Help';
import SettingsIcon from '@mui/icons-material/Settings';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { useAtomValue } from 'jotai';
import { pageTitleState } from '../state management/atoms';

const PageTitleBar = () => {
	const pageTitle = useAtomValue(pageTitleState);

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static'>
				<Toolbar
					sx={{ display: 'flex', justifyContent: 'space-between' }}
				>
					<Box sx={{ width: 241 }} />
					<Typography variant='h6' component='div' fontSize={36}>
						{pageTitle}
					</Typography>
					<Stack direction='row' spacing={4}>
						<IconButton color='inherit' size={'large'}>
							<HelpIcon fontSize='large' />
						</IconButton>
						<IconButton color='inherit' size={'large'}>
							<SettingsIcon fontSize='large' />
						</IconButton>
						<IconButton color='inherit' size={'large'}>
							<PowerSettingsNewIcon fontSize='large' />
						</IconButton>
					</Stack>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default PageTitleBar;
