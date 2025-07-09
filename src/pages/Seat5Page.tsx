import React from 'react';

import ControlGridContainer from '../components/ControlGridContainer';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

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

const Seat5Page = () => {
	const [selectedSource, setSelectedSource] = useCrestronSignal<number>(
		'number',
		joinMap.analog['Source Select'] as string
	);
	const sources = useAtomValue(sourceState);

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
											disableColumns={[0, 1, 2, 3, 4, 5]}
											layoutEditMode={false}
										/>
									</Grid>
									<Grid size={6} offset={3}>
										<WorkstationContainer
											label='Desk Monitors'
											color={'success.main'}
											monitors={[
												{
													label: 'Monitor 1',
													source: sources.find(
														(s) =>
															s.videoIndex ===
															desk5Monitor1CurrentSource
													)?.label,
													sourceIcon: sources.find(
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
															onPointerUp: () => {
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
													sourceIcon: sources.find(
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
															onPointerUp: () => {
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
													sourceIcon: sources.find(
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
															onPointerUp: () => {
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
													sourceIcon: sources.find(
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
															onPointerUp: () => {
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
												source.groups.includes(5)
										)
										.map((source) => (
											<Grid size={4} key={source.label}>
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

export default Seat5Page;
