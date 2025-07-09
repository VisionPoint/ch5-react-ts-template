import Destination, { DestinationProps } from '../components/Destination';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

interface WorkstationContainerProps {
	label: string;
	color: string;
	hideMonitorLabels?: boolean;
	monitors: DestinationProps[];
}

const WorkstationContainer = ({
	label,
	color,
	hideMonitorLabels,
	monitors,
}: WorkstationContainerProps) => {
	return (
		<Box
			sx={{
				p: 0.5,
				border: 1,
				borderColor: color,
				borderRadius: 2,
				bgcolor: color,
				//height: `100%`,
			}}
		>
			<Typography
				variant='h6'
				textAlign={'center'}
				color='text.secondary'
				noWrap
				gutterBottom={hideMonitorLabels ? true : false}
			>
				{label}
			</Typography>
			<Grid
				container
				spacing={1}
				//sx={{ height: (theme) => `calc(100% - ${theme.spacing(4)})` }}
			>
				{monitors.map((monitor, index) => (
					<Grid
						key={index}
						size={12 / monitors.length}
						sx={{
							display: 'flex',
							justifyContent: 'center',
							flexDirection: 'column',
						}}
					>
						<Destination
							{...(hideMonitorLabels
								? Object.fromEntries(
										Object.entries(monitor).filter(
											([key]) => key !== 'label'
										)
								  )
								: monitor)}
							minHeight={106}
						/>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default WorkstationContainer;
