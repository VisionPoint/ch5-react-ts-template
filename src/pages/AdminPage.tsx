import React from 'react';

import ControlGridContainer from '../components/ControlGridContainer';

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import VideoSettingsIcon from '@mui/icons-material/VideoSettings';

import { darken, lighten, useTheme } from '@mui/material/styles';
import {
	useCrestronPublish,
	useCrestronSignal,
	useCrestronSubscribe,
} from '../hooks/useCrestron';
import StateButton from '../components/StateButton';
import { useAtomValue } from 'jotai';
import { sourceState } from '../state management/atoms';
import joinMap from '../types/joinMap';
import VideoWallContainer from '../components/VideoWallContainer';
import WorkstationContainer from '../components/WorkstationContainer';

const AdminPage = () => {
	const theme = useTheme();
	const [value, setValue] = React.useState(0);
	const [selectedSource, setSelectedSource] = useCrestronSignal<number>(
		'number',
		joinMap.analog['Source Select'] as string
	);
	const [layoutEditMode, setLayoutEditMode] = React.useState<boolean>(false);

	const sources = useAtomValue(sourceState);

	const onClickDesk1Monitor1 = useCrestronPublish<boolean>(
		'boolean',
		joinMap.digital['Desk 1 Monitor 1 Press'] as string
	);
	const onClickDesk2Monitor1 = useCrestronPublish<boolean>(
		'boolean',
		joinMap.digital['Desk 2 Monitor 1 Press'] as string
	);
	const onClickDesk3Monitor1 = useCrestronPublish<boolean>(
		'boolean',
		joinMap.digital['Desk 3 Monitor 1 Press'] as string
	);
	const onClickDesk3Monitor2 = useCrestronPublish<boolean>(
		'boolean',
		joinMap.digital['Desk 3 Monitor 2 Press'] as string
	);
	const onClickDesk3Monitor3 = useCrestronPublish<boolean>(
		'boolean',
		joinMap.digital['Desk 3 Monitor 3 Press'] as string
	);
	const onClickDesk3Monitor4 = useCrestronPublish<boolean>(
		'boolean',
		joinMap.digital['Desk 3 Monitor 4 Press'] as string
	);
	const onClickDesk4Monitor1 = useCrestronPublish<boolean>(
		'boolean',
		joinMap.digital['Desk 4 Monitor 1 Press'] as string
	);
	const onClickDesk4Monitor2 = useCrestronPublish<boolean>(
		'boolean',
		joinMap.digital['Desk 4 Monitor 2 Press'] as string
	);
	const onClickDesk4Monitor3 = useCrestronPublish<boolean>(
		'boolean',
		joinMap.digital['Desk 4 Monitor 3 Press'] as string
	);
	const onClickDesk4Monitor4 = useCrestronPublish<boolean>(
		'boolean',
		joinMap.digital['Desk 4 Monitor 4 Press'] as string
	);
	const onClickDesk5Monitor1 = useCrestronPublish<boolean>(
		'boolean',
		joinMap.digital['Desk 5 Monitor 1 Press'] as string
	);
	const onClickDesk5Monitor2 = useCrestronPublish<boolean>(
		'boolean',
		joinMap.digital['Desk 5 Monitor 2 Press'] as string
	);
	const onClickDesk5Monitor3 = useCrestronPublish<boolean>(
		'boolean',
		joinMap.digital['Desk 5 Monitor 3 Press'] as string
	);
	const onClickDesk5Monitor4 = useCrestronPublish<boolean>(
		'boolean',
		joinMap.digital['Desk 5 Monitor 4 Press'] as string
	);
	const onClickSupervisorDeskMonitor1 = useCrestronPublish<boolean>(
		'boolean',
		joinMap.digital['Supervisor Monitor 1 Press'] as string
	);
	const onClickSupervisorDeskMonitor2 = useCrestronPublish<boolean>(
		'boolean',
		joinMap.digital['Supervisor Monitor 2 Press'] as string
	);

	const desk1Monitor1CurrentSource = useCrestronSubscribe<number>(
		'number',
		joinMap.analog['Desk 1 Monitor 1 Current Source'] as string
	);
	const desk2Monitor1CurrentSource = useCrestronSubscribe<number>(
		'number',
		joinMap.analog['Desk 2 Monitor 1 Current Source'] as string
	);
	const desk3Monitor1CurrentSource = useCrestronSubscribe<number>(
		'number',
		joinMap.analog['Desk 3 Monitor 1 Current Source'] as string
	);
	const desk3Monitor2CurrentSource = useCrestronSubscribe<number>(
		'number',
		joinMap.analog['Desk 3 Monitor 2 Current Source'] as string
	);
	const desk3Monitor3CurrentSource = useCrestronSubscribe<number>(
		'number',
		joinMap.analog['Desk 3 Monitor 3 Current Source'] as string
	);
	const desk3Monitor4CurrentSource = useCrestronSubscribe<number>(
		'number',
		joinMap.analog['Desk 3 Monitor 4 Current Source'] as string
	);
	const desk4Monitor1CurrentSource = useCrestronSubscribe<number>(
		'number',
		joinMap.analog['Desk 4 Monitor 1 Current Source'] as string
	);
	const desk4Monitor2CurrentSource = useCrestronSubscribe<number>(
		'number',
		joinMap.analog['Desk 4 Monitor 2 Current Source'] as string
	);
	const desk4Monitor3CurrentSource = useCrestronSubscribe<number>(
		'number',
		joinMap.analog['Desk 4 Monitor 3 Current Source'] as string
	);
	const desk4Monitor4CurrentSource = useCrestronSubscribe<number>(
		'number',
		joinMap.analog['Desk 4 Monitor 4 Current Source'] as string
	);
	const desk5Monitor1CurrentSource = useCrestronSubscribe<number>(
		'number',
		joinMap.analog['Desk 5 Monitor 1 Current Source'] as string
	);
	const desk5Monitor2CurrentSource = useCrestronSubscribe<number>(
		'number',
		joinMap.analog['Desk 5 Monitor 2 Current Source'] as string
	);
	const desk5Monitor3CurrentSource = useCrestronSubscribe<number>(
		'number',
		joinMap.analog['Desk 5 Monitor 3 Current Source'] as string
	);
	const desk5Monitor4CurrentSource = useCrestronSubscribe<number>(
		'number',
		joinMap.analog['Desk 5 Monitor 4 Current Source'] as string
	);
	const supervisorDeskMonitor1CurrentSource = useCrestronSubscribe<number>(
		'number',
		joinMap.analog['Supervisor Monitor 1 Current Source'] as string
	);
	const supervisorDeskMonitor2CurrentSource = useCrestronSubscribe<number>(
		'number',
		joinMap.analog['Supervisor Monitor 2 Current Source'] as string
	);

	const onChange = (
		event: React.MouseEvent<HTMLElement>,
		newValue: number
	) => {
		if (newValue !== null) setValue(newValue);
	};

	return (
		<>
			<Backdrop
				open={layoutEditMode}
				sx={(theme) => ({
					color: '#fff',
					zIndex: theme.zIndex.drawer + 1,
				})}
			>
				{/* <Typography variant='h4' sx={{ color: 'text.primary', mb: 2 }}>
					Edit Video Wall Layout
				</Typography> */}
			</Backdrop>
			<ControlGridContainer
				padding={1}
				spacing={2}
				containers={[
					{
						label: 'Destinations (Video Wall & Workstation Monitors)',
						heightPercent: 55,
						children: (
							<Box
								sx={{
									height: '100%',
									display: 'flex',
									flexDirection: 'column',
								}}
							>
								<Box sx={{ p: 0 }}>
									<ToggleButtonGroup
										fullWidth
										size='large'
										value={value}
										exclusive
										onChange={onChange}
									>
										<ToggleButton value={0}>
											<Stack direction='row' spacing={2}>
												<ViewComfyIcon />
												<Typography>
													Video Wall
												</Typography>
											</Stack>
										</ToggleButton>
										<ToggleButton value={1}>
											<Stack direction='row' spacing={2}>
												<PersonalVideoIcon />
												<Typography>
													Workstations
												</Typography>
											</Stack>
										</ToggleButton>
										<ToggleButton value={2}>
											<Stack direction='row' spacing={2}>
												<SaveAsIcon />
												<Typography>
													Video Presets
												</Typography>
											</Stack>
										</ToggleButton>
									</ToggleButtonGroup>
								</Box>
								{value === 0 && (
									<Grid
										container
										spacing={0}
										sx={{
											p: 1,
											flexGrow: 1,
											alignItems: 'center',
											position: 'relative',
											zIndex: (theme) =>
												layoutEditMode
													? theme.zIndex.drawer + 2
													: 'auto',
										}}
									>
										<Button
											size='large'
											variant='contained'
											color='info'
											startIcon={<VideoSettingsIcon />}
											sx={{
												position: 'absolute',
												top: 32,
												right: 32,
												//display: 'none',
											}}
											onClick={() => {
												setLayoutEditMode(
													!layoutEditMode
												);
											}}
										>
											Edit Layout
										</Button>
										<Grid size={12}>
											<VideoWallContainer
												disableColumns={[0]}
												layoutEditMode={layoutEditMode}
											/>
										</Grid>
									</Grid>
								)}
								{value === 1 && (
									<Grid
										container
										spacing={1}
										sx={{
											p: 1,
											flex: 'auto',
											alignContent: 'space-around',
										}}
									>
										<Grid size={3}>
											<WorkstationContainer
												label='Supervisor'
												color={lighten(
													theme.palette.error.main,
													0.25
												)}
												monitors={[
													{
														label: 'Monitor 1',
														source: sources.find(
															(s) =>
																s.videoIndex ===
																supervisorDeskMonitor1CurrentSource
														)?.label,
														sourceIcon:
															sources.find(
																(s) =>
																	s.videoIndex ===
																	supervisorDeskMonitor1CurrentSource
															)?.icon,
														slotProps: {
															button: {
																onPointerDown:
																	() => {
																		onClickSupervisorDeskMonitor1(
																			true
																		);
																	},
																onPointerUp:
																	() => {
																		onClickSupervisorDeskMonitor1(
																			false
																		);
																	},
															},
														},
													},
													{
														label: 'Monitor 2',
														source: sources.find(
															(s) =>
																s.videoIndex ===
																supervisorDeskMonitor2CurrentSource
														)?.label,
														sourceIcon:
															sources.find(
																(s) =>
																	s.videoIndex ===
																	supervisorDeskMonitor2CurrentSource
															)?.icon,
														slotProps: {
															button: {
																onPointerDown:
																	() => {
																		onClickSupervisorDeskMonitor2(
																			true
																		);
																	},
																onPointerUp:
																	() => {
																		onClickSupervisorDeskMonitor2(
																			false
																		);
																	},
															},
														},
													},
												]}
											/>
										</Grid>
										<Grid size={1.5}>
											<WorkstationContainer
												label='EH-COMMS (Seat 1)'
												color={lighten(
													theme.palette.secondary
														.main,
													0.25
												)}
												monitors={[
													{
														label: 'Monitor 1',
														source: sources.find(
															(s) =>
																s.videoIndex ===
																desk1Monitor1CurrentSource
														)?.label,
														sourceIcon:
															sources.find(
																(s) =>
																	s.videoIndex ===
																	desk1Monitor1CurrentSource
															)?.icon,
														slotProps: {
															button: {
																onPointerDown:
																	() => {
																		onClickDesk1Monitor1(
																			true
																		);
																	},
																onPointerUp:
																	() => {
																		onClickDesk1Monitor1(
																			false
																		);
																	},
															},
														},
													},
												]}
											/>
										</Grid>
										<Grid size={1.5}>
											<WorkstationContainer
												label='MT-COMMS (Seat 2)'
												color={lighten(
													theme.palette.success.main,
													0.25
												)}
												monitors={[
													{
														label: 'Monitor 1',
														source: sources.find(
															(s) =>
																s.videoIndex ===
																desk2Monitor1CurrentSource
														)?.label,
														sourceIcon:
															sources.find(
																(s) =>
																	s.videoIndex ===
																	desk2Monitor1CurrentSource
															)?.icon,
														slotProps: {
															button: {
																onPointerDown:
																	() => {
																		onClickDesk2Monitor1(
																			true
																		);
																	},
																onPointerUp:
																	() => {
																		onClickDesk2Monitor1(
																			false
																		);
																	},
															},
														},
													},
												]}
											/>
										</Grid>

										<Grid size={6}>
											<WorkstationContainer
												label='EH (Seat 3)'
												color={
													theme.palette.secondary.main
												}
												monitors={[
													{
														label: 'Monitor 1',
														source: sources.find(
															(s) =>
																s.videoIndex ===
																desk3Monitor1CurrentSource
														)?.label,
														sourceIcon:
															sources.find(
																(s) =>
																	s.videoIndex ===
																	desk3Monitor1CurrentSource
															)?.icon,
														slotProps: {
															button: {
																onPointerDown:
																	() => {
																		onClickDesk3Monitor1(
																			true
																		);
																	},
																onPointerUp:
																	() => {
																		onClickDesk3Monitor1(
																			false
																		);
																	},
															},
														},
													},
													{
														label: 'Monitor 2',
														source: sources.find(
															(s) =>
																s.videoIndex ===
																desk3Monitor2CurrentSource
														)?.label,
														sourceIcon:
															sources.find(
																(s) =>
																	s.videoIndex ===
																	desk3Monitor2CurrentSource
															)?.icon,
														slotProps: {
															button: {
																onPointerDown:
																	() => {
																		onClickDesk3Monitor2(
																			true
																		);
																	},
																onPointerUp:
																	() => {
																		onClickDesk3Monitor2(
																			false
																		);
																	},
															},
														},
													},
													{
														label: 'Monitor 3',
														source: sources.find(
															(s) =>
																s.videoIndex ===
																desk3Monitor3CurrentSource
														)?.label,
														sourceIcon:
															sources.find(
																(s) =>
																	s.videoIndex ===
																	desk3Monitor3CurrentSource
															)?.icon,
														slotProps: {
															button: {
																onPointerDown:
																	() => {
																		onClickDesk3Monitor3(
																			true
																		);
																	},
																onPointerUp:
																	() => {
																		onClickDesk3Monitor3(
																			false
																		);
																	},
															},
														},
													},
													{
														label: 'Monitor 4',
														source: sources.find(
															(s) =>
																s.videoIndex ===
																desk3Monitor4CurrentSource
														)?.label,
														sourceIcon:
															sources.find(
																(s) =>
																	s.videoIndex ===
																	desk3Monitor4CurrentSource
															)?.icon,
														slotProps: {
															button: {
																onPointerDown:
																	() => {
																		onClickDesk3Monitor4(
																			true
																		);
																	},
																onPointerUp:
																	() => {
																		onClickDesk3Monitor4(
																			false
																		);
																	},
															},
														},
													},
												]}
											/>
										</Grid>
										<Grid size={6}>
											<WorkstationContainer
												label='EH (Seat 4)'
												color={darken(
													theme.palette.secondary
														.main,
													0.25
												)}
												monitors={[
													{
														label: 'Monitor 1',
														source: sources.find(
															(s) =>
																s.videoIndex ===
																desk4Monitor1CurrentSource
														)?.label,
														sourceIcon:
															sources.find(
																(s) =>
																	s.videoIndex ===
																	desk4Monitor1CurrentSource
															)?.icon,
														slotProps: {
															button: {
																onPointerDown:
																	() => {
																		onClickDesk4Monitor1(
																			true
																		);
																	},
																onPointerUp:
																	() => {
																		onClickDesk4Monitor1(
																			false
																		);
																	},
															},
														},
													},
													{
														label: 'Monitor 2',
														source: sources.find(
															(s) =>
																s.videoIndex ===
																desk4Monitor2CurrentSource
														)?.label,
														sourceIcon:
															sources.find(
																(s) =>
																	s.videoIndex ===
																	desk4Monitor2CurrentSource
															)?.icon,
														slotProps: {
															button: {
																onPointerDown:
																	() => {
																		onClickDesk4Monitor2(
																			true
																		);
																	},
																onPointerUp:
																	() => {
																		onClickDesk4Monitor2(
																			false
																		);
																	},
															},
														},
													},
													{
														label: 'Monitor 3',
														source: sources.find(
															(s) =>
																s.videoIndex ===
																desk4Monitor3CurrentSource
														)?.label,
														sourceIcon:
															sources.find(
																(s) =>
																	s.videoIndex ===
																	desk4Monitor3CurrentSource
															)?.icon,
														slotProps: {
															button: {
																onPointerDown:
																	() => {
																		onClickDesk4Monitor3(
																			true
																		);
																	},
																onPointerUp:
																	() => {
																		onClickDesk4Monitor3(
																			false
																		);
																	},
															},
														},
													},
													{
														label: 'Monitor 4',
														source: sources.find(
															(s) =>
																s.videoIndex ===
																desk4Monitor4CurrentSource
														)?.label,
														sourceIcon:
															sources.find(
																(s) =>
																	s.videoIndex ===
																	desk4Monitor4CurrentSource
															)?.icon,
														slotProps: {
															button: {
																onPointerDown:
																	() => {
																		onClickDesk4Monitor4(
																			true
																		);
																	},
																onPointerUp:
																	() => {
																		onClickDesk4Monitor4(
																			false
																		);
																	},
															},
														},
													},
												]}
											/>
										</Grid>
										<Grid size={6}>
											<WorkstationContainer
												label='MT (Seat 5)'
												color={'success.main'}
												monitors={[
													{
														label: 'Monitor 1',
														source: sources.find(
															(s) =>
																s.videoIndex ===
																desk5Monitor1CurrentSource
														)?.label,
														sourceIcon:
															sources.find(
																(s) =>
																	s.videoIndex ===
																	desk5Monitor1CurrentSource
															)?.icon,
														slotProps: {
															button: {
																onPointerDown:
																	() => {
																		onClickDesk5Monitor1(
																			true
																		);
																	},
																onPointerUp:
																	() => {
																		onClickDesk5Monitor1(
																			false
																		);
																	},
															},
														},
													},
													{
														label: 'Monitor 2',
														source: sources.find(
															(s) =>
																s.videoIndex ===
																desk5Monitor2CurrentSource
														)?.label,
														sourceIcon:
															sources.find(
																(s) =>
																	s.videoIndex ===
																	desk5Monitor2CurrentSource
															)?.icon,
														slotProps: {
															button: {
																onPointerDown:
																	() => {
																		onClickDesk5Monitor2(
																			true
																		);
																	},
																onPointerUp:
																	() => {
																		onClickDesk5Monitor2(
																			false
																		);
																	},
															},
														},
													},
													{
														label: 'Monitor 3',
														source: sources.find(
															(s) =>
																s.videoIndex ===
																desk5Monitor3CurrentSource
														)?.label,
														sourceIcon:
															sources.find(
																(s) =>
																	s.videoIndex ===
																	desk5Monitor3CurrentSource
															)?.icon,
														slotProps: {
															button: {
																onPointerDown:
																	() => {
																		onClickDesk5Monitor3(
																			true
																		);
																	},
																onPointerUp:
																	() => {
																		onClickDesk5Monitor3(
																			false
																		);
																	},
															},
														},
													},
													{
														label: 'Monitor 4',
														source: sources.find(
															(s) =>
																s.videoIndex ===
																desk5Monitor4CurrentSource
														)?.label,
														sourceIcon:
															sources.find(
																(s) =>
																	s.videoIndex ===
																	desk5Monitor4CurrentSource
															)?.icon,
														slotProps: {
															button: {
																onPointerDown:
																	() => {
																		onClickDesk5Monitor4(
																			true
																		);
																	},
																onPointerUp:
																	() => {
																		onClickDesk5Monitor4(
																			false
																		);
																	},
															},
														},
													},
												]}
											/>
										</Grid>
									</Grid>
								)}
							</Box>
						),
					},
					{
						label: 'Source Selection',
						heightPercent: 45,
						children: (
							<Box>
								<Grid container spacing={1} sx={{ p: 1 }}>
									{sources.map((source) => (
										<Grid size={2} key={source.label}>
											<StateButton
												//orientation='horizontal'
												icon={React.cloneElement(
													source.icon,
													{
														svg: {
															sx: {
																height: 40,
																width: 40,
															},
														},
													}
												)}
												label={[source.label]}
												slotProps={{
													typography: {
														fontSize: 16,
													},
													button: {
														sx: {
															height: 90,
														},
														fullWidth: true,
														onClick: () => {
															setSelectedSource(
																source.videoIndex
															);
														},
													},
												}}
												active={
													selectedSource ===
													source.videoIndex
												}
											/>
										</Grid>
									))}
								</Grid>
							</Box>
						),
					},
				]}
			/>
		</>
	);
};

export default AdminPage;
