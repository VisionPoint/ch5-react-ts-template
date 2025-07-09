import React from 'react';
import Box from '@mui/material/Box';
import Divider, { DividerProps } from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Paper, { PaperProps } from '@mui/material/Paper';
import Typography, { TypographyProps } from '@mui/material/Typography';

interface Container {
	label?: string;
	heightPercent?: number;
	slotProps?: {
		divider?: DividerProps;
		paper?: PaperProps;
		typography?: TypographyProps;
	};
	children?: React.ReactNode;
}

interface ControlGridContainerProps {
	padding?: number;
	spacing?: number;
	containers: Container[];
}

const ControlGridContainer = ({
	containers,
	spacing,
	padding,
}: ControlGridContainerProps) => {
	return (
		<Grid
			container
			sx={{ height: '100%', p: padding }}
			spacing={spacing || 2}
		>
			{containers.map((container, index) => (
				<Grid
					key={index}
					size={12}
					sx={{
						height: (theme) =>
							`calc(${container.heightPercent}% - ${theme.spacing(
								spacing || 2
							)})`,
					}}
				>
					<Paper
						elevation={8}
						sx={{
							height: '100%',
							display: 'flex',
							flexDirection: 'column',
							...container.slotProps?.paper?.sx,
						}}
						{...container.slotProps?.paper}
					>
						{container.label && (
							<>
								<Typography
									variant='h4'
									component='div'
									textAlign={'center'}
									color='text.secondary'
									sx={{
										p: 1,
										...container.slotProps?.typography?.sx,
									}}
									{...container.slotProps?.typography}
								>
									{container.label}
								</Typography>
								<Divider
									variant='middle'
									{...container.slotProps?.divider}
								/>
							</>
						)}
						{container.children && (
							<Box sx={{ flexGrow: 1 }}>{container.children}</Box>
						)}
					</Paper>
				</Grid>
			))}
		</Grid>
	);
};

export default ControlGridContainer;
