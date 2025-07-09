import React from 'react';

import ControlGridContainer from '../components/ControlGridContainer';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { useTheme } from '@mui/material/styles';
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

const Seat3Page = () => {
	const theme = useTheme();
	const [selectedSource, setSelectedSource] = useCrestronSignal<number>(
		'number',
		joinMap.analog['Source Select'] as string
	);
	const sources = useAtomValue(sourceState);

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

	return (
		<>
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
								<Grid
									container
									spacing={0}
									sx={{
										p: 1,
										flexGrow: 1,
										alignItems: 'center',
										position: 'relative',
									}}
								>
									<Grid size={12}>
										<VideoWallContainer
											disableColumns={[0, 6]}
											layoutEditMode={false}
										/>
									</Grid>
									<Grid size={6} offset={3}>
										<WorkstationContainer
											label='Desk Monitors'
											color={theme.palette.secondary.main}
											monitors={[
												{
													label: 'Monitor 1',
													source: sources.find(
														(s) =>
															s.videoIndex ===
															desk3Monitor1CurrentSource
													)?.label,
													sourceIcon: sources.find(
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
															onPointerUp: () => {
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
													sourceIcon: sources.find(
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
															onPointerUp: () => {
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
													sourceIcon: sources.find(
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
															onPointerUp: () => {
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
													sourceIcon: sources.find(
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
															onPointerUp: () => {
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
								</Grid>
							</Box>
						),
					},
					{
						label: 'Source Selection',
						heightPercent: 45,
						children: (
							<Box>
								<Grid container spacing={2} sx={{ p: 1 }}>
									{sources
										.filter(
											(source) =>
												!source.groups ||
												source.groups.includes(3)
										)
										.map((source) => (
											<Grid size={4} key={source.label}>
												<StateButton
													orientation='horizontal'
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
															fontSize: 24,
														},
														button: {
															sx: {
																height: 116,
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

export default Seat3Page;
