import React from 'react';

import ControlGridContainer from '../components/ControlGridContainer';
import Destination, { DestinationProps } from '../components/Destination';

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import CableIcon from '@mui/icons-material/Cable';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import VideoSettingsIcon from '@mui/icons-material/VideoSettings';

import { darken, lighten, useTheme } from '@mui/material/styles';
import {
	useCrestronPublish,
	useCrestronSignal,
	useCrestronSubscribe,
} from '../hooks/useCrestron';
import { sources } from '../types/sources';
import StateButton from '../components/StateButton';
import { group } from 'console';

interface VideoWallContainerProps {
	layoutEditMode: boolean;
}

interface VideoWallDestinationProps extends DestinationProps {
	cols: number;
	rows: number;
	hidden?: boolean;
}

const validGroups = {
	group1: [2, 3, 9, 10],
	group2: [3, 4, 10, 11],
	group3: [4, 5, 11, 12],
	group4: [5, 6, 12, 13],
	group5: [6, 7, 13, 14],
};

//const videoWallDisplayGridWidth = 12 / 7;
const VideoWallContainer = ({ layoutEditMode }: VideoWallContainerProps) => {
	const videoWall2CurrentSource = useCrestronSubscribe<string>(
		'string',
		'101'
	);
	const videoWall3CurrentSource = useCrestronSubscribe<string>(
		'string',
		'102'
	);
	const videoWall4CurrentSource = useCrestronSubscribe<string>(
		'string',
		'103'
	);
	const videoWall5CurrentSource = useCrestronSubscribe<string>(
		'string',
		'104'
	);
	const videoWall6CurrentSource = useCrestronSubscribe<string>(
		'string',
		'105'
	);
	const videoWall7CurrentSource = useCrestronSubscribe<string>(
		'string',
		'106'
	);

	const videoWall9CurrentSource = useCrestronSubscribe<string>(
		'string',
		'107'
	);
	const videoWall10CurrentSource = useCrestronSubscribe<string>(
		'string',
		'108'
	);
	const videoWall11CurrentSource = useCrestronSubscribe<string>(
		'string',
		'109'
	);
	const videoWall12CurrentSource = useCrestronSubscribe<string>(
		'string',
		'110'
	);
	const videoWall13CurrentSource = useCrestronSubscribe<string>(
		'string',
		'111'
	);
	const videoWall14CurrentSource = useCrestronSubscribe<string>(
		'string',
		'112'
	);

	const onClickVideoWallDisplay2 = useCrestronPublish<boolean>(
		'boolean',
		'102'
	);
	const onClickVideoWallDisplay3 = useCrestronPublish<boolean>(
		'boolean',
		'103'
	);
	const onClickVideoWallDisplay4 = useCrestronPublish<boolean>(
		'boolean',
		'104'
	);
	const onClickVideoWallDisplay5 = useCrestronPublish<boolean>(
		'boolean',
		'105'
	);
	const onClickVideoWallDisplay6 = useCrestronPublish<boolean>(
		'boolean',
		'106'
	);
	const onClickVideoWallDisplay7 = useCrestronPublish<boolean>(
		'boolean',
		'107'
	);
	const onClickVideoWallDisplay9 = useCrestronPublish<boolean>(
		'boolean',
		'109'
	);

	const onClickVideoWallDisplay10 = useCrestronPublish<boolean>(
		'boolean',
		'110'
	);
	const onClickVideoWallDisplay11 = useCrestronPublish<boolean>(
		'boolean',
		'111'
	);
	const onClickVideoWallDisplay12 = useCrestronPublish<boolean>(
		'boolean',
		'112'
	);
	const onClickVideoWallDisplay13 = useCrestronPublish<boolean>(
		'boolean',
		'113'
	);
	const onClickVideoWallDisplay14 = useCrestronPublish<boolean>(
		'boolean',
		'114'
	);

	const [displaysChecked, setDisplaysChecked] = React.useState<number[]>([]);

	const [group1, setGroup1] = React.useState<boolean>(false);
	const [group2, setGroup2] = React.useState<boolean>(false);
	const [group3, setGroup3] = React.useState<boolean>(false);
	const [group4, setGroup4] = React.useState<boolean>(false);
	const [group5, setGroup5] = React.useState<boolean>(false);

	React.useEffect(() => {
		const _group1 =
			validGroups.group1.every((id) => displaysChecked.includes(id)) &&
			!group2;

		const _group2 =
			validGroups.group2.every((id) => displaysChecked.includes(id)) &&
			!group1 &&
			!group3;
		const _group3 =
			validGroups.group3.every((id) => displaysChecked.includes(id)) &&
			!group2 &&
			!group4;
		const _group4 =
			validGroups.group4.every((id) => displaysChecked.includes(id)) &&
			!group3 &&
			!group5;
		const _group5 =
			validGroups.group5.every((id) => displaysChecked.includes(id)) &&
			!group4;

		if (_group1 !== group1) {
			setGroup1(_group1);
			return;
		}

		if (_group2 !== group2) {
			setGroup2(_group2);
			return;
		}

		if (_group3 !== group3) {
			setGroup3(_group3);
			return;
		}

		if (_group4 !== group4) {
			setGroup4(_group4);
			return;
		}

		if (_group5 !== group5) {
			setGroup5(_group5);
			return;
		}
	}, [displaysChecked, group1, group2, group3, group4, group5]);

	const handleGroupSelection = (index: number, checked: boolean) => {
		setDisplaysChecked((prev) => {
			console.log('handleGroupSelection', {
				index,
				checked,
				displaysChecked: Array.from(prev),
				group1,
				validGroup1: validGroups.group1.includes(index),
				group2,
				validGroup2: validGroups.group2.includes(index),
				group3,
				validGroup3: validGroups.group3.includes(index),
				group4,
				validGroup4: validGroups.group4.includes(index),
				group5,
				validGroup5: validGroups.group5.includes(index),
			});

			if (checked) {
				return Array.from(new Set([...prev, index]));
			}

			// If unchecked, remove the index from the array along with any grouped indices
			if (group1 && validGroups.group1.includes(index)) {
				prev = prev.filter((id) => !validGroups.group1.includes(id));
			}
			if (group2 && validGroups.group2.includes(index)) {
				prev = prev.filter((id) => !validGroups.group2.includes(id));
			}
			if (group3 && validGroups.group3.includes(index)) {
				prev = prev.filter((id) => !validGroups.group3.includes(id));
			}
			if (group4 && validGroups.group4.includes(index)) {
				prev = prev.filter((id) => !validGroups.group4.includes(id));
			}
			if (group5 && validGroups.group5.includes(index)) {
				prev = prev.filter((id) => !validGroups.group5.includes(id));
			}

			prev = prev.filter((id) => id !== index);

			return Array.from(new Set(prev));
		});
	};

	const videoWallDisplayProps: VideoWallDestinationProps[] = React.useMemo(
		() => [
			{
				source: 'Alarms (EH & MT)',
				sourceIcon: <LocalFireDepartmentIcon />,
				color: 'warning.main',
				borderColor: 'warning.main',
				disabled: true,
				rows: 1,
				cols: 1,
			},
			{
				source: videoWall2CurrentSource,
				sourceIcon: <CableIcon />,
				color: 'info.main',
				borderColor: 'info.main',
				slotProps: {
					button: {
						onPointerDown: () => {
							onClickVideoWallDisplay2(true);
						},
						onPointerUp: () => {
							onClickVideoWallDisplay2(false);
						},
					},
				},
				showCheckbox: layoutEditMode,
				checked: displaysChecked.includes(2),
				onChecked: (checked) => handleGroupSelection(2, checked),
				cols: group1 ? 2 : 1,
				rows: group1 ? 2 : 1,
			},
			{
				source: videoWall3CurrentSource,
				sourceIcon: <CableIcon />,
				color: 'info.main',
				borderColor: 'info.main',
				slotProps: {
					button: {
						onPointerDown: () => {
							onClickVideoWallDisplay3(true);
						},
						onPointerUp: () => {
							onClickVideoWallDisplay3(false);
						},
					},
				},
				showCheckbox: layoutEditMode,
				checked: displaysChecked.includes(3),
				onChecked: (checked) => handleGroupSelection(3, checked),
				cols: group2 ? 2 : 1,
				rows: group2 ? 2 : 1,
				hidden: group1,
			},
			{
				source: videoWall4CurrentSource,
				sourceIcon: <CableIcon />,
				color: 'info.main',
				borderColor: 'info.main',
				slotProps: {
					button: {
						onPointerDown: () => {
							onClickVideoWallDisplay4(true);
						},
						onPointerUp: () => {
							onClickVideoWallDisplay4(false);
						},
					},
				},
				showCheckbox: layoutEditMode,
				checked: displaysChecked.includes(4),
				onChecked: (checked) => handleGroupSelection(4, checked),
				cols: group3 ? 2 : 1,
				rows: group3 ? 2 : 1,
				hidden: group2,
			},
			{
				source: videoWall5CurrentSource,
				sourceIcon: <CableIcon />,
				color: 'info.main',
				borderColor: 'info.main',
				slotProps: {
					button: {
						onPointerDown: () => {
							onClickVideoWallDisplay5(true);
						},
						onPointerUp: () => {
							onClickVideoWallDisplay5(false);
						},
					},
				},
				showCheckbox: layoutEditMode,
				checked: displaysChecked.includes(5),
				onChecked: (checked) => handleGroupSelection(5, checked),
				cols: group4 ? 2 : 1,
				rows: group4 ? 2 : 1,
				hidden: group3,
			},
			{
				source: videoWall6CurrentSource,
				sourceIcon: <CableIcon />,
				color: 'info.main',
				borderColor: 'info.main',
				slotProps: {
					button: {
						onPointerDown: () => {
							onClickVideoWallDisplay6(true);
						},
						onPointerUp: () => {
							onClickVideoWallDisplay6(false);
						},
					},
				},
				showCheckbox: layoutEditMode,
				checked: displaysChecked.includes(6),
				onChecked: (checked) => handleGroupSelection(6, checked),
				cols: group5 ? 2 : 1,
				rows: group5 ? 2 : 1,
				hidden: group4,
			},
			{
				source: videoWall7CurrentSource,
				sourceIcon: <CableIcon />,
				color: 'success.main',
				borderColor: 'success.main',
				slotProps: {
					button: {
						onPointerDown: () => {
							onClickVideoWallDisplay7(true);
						},
						onPointerUp: () => {
							onClickVideoWallDisplay7(false);
						},
					},
				},
				showCheckbox: layoutEditMode,
				checked: displaysChecked.includes(7),
				onChecked: (checked) => handleGroupSelection(7, checked),
				cols: 1,
				rows: 1,
				hidden: group5,
			},
			{
				source: 'Alarms (RTRC)',
				sourceIcon: <LocalFireDepartmentIcon />,
				color: 'warning.main',
				borderColor: 'warning.main',
				disabled: true,
				rows: 1,
				cols: 1,
			},
			{
				source: videoWall9CurrentSource,
				sourceIcon: <CableIcon />,
				color: 'info.main',
				borderColor: 'info.main',
				slotProps: {
					button: {
						onPointerDown: () => {
							onClickVideoWallDisplay9(true);
						},
						onPointerUp: () => {
							onClickVideoWallDisplay9(false);
						},
					},
				},
				showCheckbox: layoutEditMode,
				checked: displaysChecked.includes(9),
				onChecked: (checked) => handleGroupSelection(9, checked),
				cols: 1,
				rows: 1,
				hidden: group1,
			},
			{
				source: videoWall10CurrentSource,
				sourceIcon: <CableIcon />,
				color: 'info.main',
				borderColor: 'info.main',
				slotProps: {
					button: {
						onPointerDown: () => {
							onClickVideoWallDisplay10(true);
						},
						onPointerUp: () => {
							onClickVideoWallDisplay10(false);
						},
					},
				},
				showCheckbox: layoutEditMode,
				checked: displaysChecked.includes(10),
				onChecked: (checked) => handleGroupSelection(10, checked),
				cols: 1,
				rows: 1,
				hidden: group1 || group2,
			},
			{
				source: videoWall11CurrentSource,
				sourceIcon: <CableIcon />,
				color: 'info.main',
				borderColor: 'info.main',
				slotProps: {
					button: {
						onPointerDown: () => {
							onClickVideoWallDisplay11(true);
						},
						onPointerUp: () => {
							onClickVideoWallDisplay11(false);
						},
					},
				},
				showCheckbox: layoutEditMode,
				checked: displaysChecked.includes(11),
				onChecked: (checked) => handleGroupSelection(11, checked),
				cols: 1,
				rows: 1,
				hidden: group2 || group3,
			},
			{
				source: videoWall12CurrentSource,
				sourceIcon: <CableIcon />,
				color: 'info.main',
				borderColor: 'info.main',
				slotProps: {
					button: {
						onPointerDown: () => {
							onClickVideoWallDisplay12(true);
						},
						onPointerUp: () => {
							onClickVideoWallDisplay12(false);
						},
					},
				},
				showCheckbox: layoutEditMode,
				checked: displaysChecked.includes(12),
				onChecked: (checked) => handleGroupSelection(12, checked),
				cols: 1,
				rows: 1,
				hidden: group3 || group4,
			},
			{
				source: videoWall13CurrentSource,
				sourceIcon: <CableIcon />,
				color: 'info.main',
				borderColor: 'info.main',
				slotProps: {
					button: {
						onPointerDown: () => {
							onClickVideoWallDisplay13(true);
						},
						onPointerUp: () => {
							onClickVideoWallDisplay13(false);
						},
					},
				},
				showCheckbox: layoutEditMode,
				checked: displaysChecked.includes(13),
				onChecked: (checked) => handleGroupSelection(13, checked),
				cols: 1,
				rows: 1,
				hidden: group4 || group5,
			},
			{
				source: videoWall14CurrentSource,
				sourceIcon: <CableIcon />,
				color: 'success.main',
				borderColor: 'success.main',
				slotProps: {
					button: {
						onPointerDown: () => {
							onClickVideoWallDisplay14(true);
						},
						onPointerUp: () => {
							onClickVideoWallDisplay14(false);
						},
					},
				},
				showCheckbox: layoutEditMode,
				checked: displaysChecked.includes(14),
				onChecked: (checked) => handleGroupSelection(14, checked),
				cols: 1,
				rows: 1,
				hidden: group5,
			},
		],
		[
			videoWall2CurrentSource,
			videoWall3CurrentSource,
			videoWall4CurrentSource,
			videoWall5CurrentSource,
			videoWall6CurrentSource,
			videoWall7CurrentSource,
			videoWall9CurrentSource,
			videoWall10CurrentSource,
			videoWall11CurrentSource,
			videoWall12CurrentSource,
			videoWall13CurrentSource,
			videoWall14CurrentSource,
			onClickVideoWallDisplay2,
			onClickVideoWallDisplay3,
			onClickVideoWallDisplay4,
			onClickVideoWallDisplay5,
			onClickVideoWallDisplay6,
			onClickVideoWallDisplay7,
			onClickVideoWallDisplay9,
			onClickVideoWallDisplay10,
			onClickVideoWallDisplay11,
			onClickVideoWallDisplay12,
			onClickVideoWallDisplay13,
			onClickVideoWallDisplay14,
			layoutEditMode,
			setDisplaysChecked,
			group1,
			group2,
			group3,
			group4,
			group5,
			handleGroupSelection,
			displaysChecked,
		]
	);

	return (
		<ImageList
			sx={{ width: '100%', height: '100%', alignContent: 'center' }}
			variant='quilted'
			cols={7}
			rowHeight={117}
		>
			{videoWallDisplayProps.map((display, i) => (
				<ImageListItem
					key={i}
					cols={display.cols}
					rows={display.rows}
					sx={{ display: display.hidden ? 'none' : 'block' }}
				>
					<Destination
						{...display}
						{...(display.rows === 2 ? { minHeight: 238 } : {})}
					/>
				</ImageListItem>
			))}
		</ImageList>
	);
};

interface WorkstationsContainerProps {
	label: string;
	color: string;
	monitors: DestinationProps[];
}

const WorkstationsContainer = ({
	label,
	color,
	monitors,
}: WorkstationsContainerProps) => {
	return (
		<Box
			sx={{
				p: 1,
				border: 1,
				borderColor: color,
				borderRadius: 2,
				bgcolor: color,
			}}
		>
			<Typography
				variant='h6'
				textAlign={'center'}
				color='text.secondary'
			>
				{label}
			</Typography>
			<Grid container spacing={1}>
				{monitors.map((monitor, index) => (
					<Grid key={index} size={12 / monitors.length}>
						<Destination {...monitor} />
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

const AdminPage = () => {
	const theme = useTheme();
	const [value, setValue] = React.useState(0);
	const [selectedSource, setSelectedSource] = useCrestronSignal<number>(
		'number',
		'1'
	);
	const [layoutEditMode, setLayoutEditMode] = React.useState<boolean>(false);

	const onClickDesk1Monitor1 = useCrestronPublish<boolean>('boolean', '81');
	const onClickDesk2Monitor1 = useCrestronPublish<boolean>('boolean', '82');
	const onClickDesk3Monitor1 = useCrestronPublish<boolean>('boolean', '83');
	const onClickDesk3Monitor2 = useCrestronPublish<boolean>('boolean', '84');
	const onClickDesk3Monitor3 = useCrestronPublish<boolean>('boolean', '85');
	const onClickDesk3Monitor4 = useCrestronPublish<boolean>('boolean', '86');
	const onClickDesk4Monitor1 = useCrestronPublish<boolean>('boolean', '87');
	const onClickDesk4Monitor2 = useCrestronPublish<boolean>('boolean', '88');
	const onClickDesk4Monitor3 = useCrestronPublish<boolean>('boolean', '89');
	const onClickDesk4Monitor4 = useCrestronPublish<boolean>('boolean', '90');
	const onClickDesk5Monitor1 = useCrestronPublish<boolean>('boolean', '91');
	const onClickDesk5Monitor2 = useCrestronPublish<boolean>('boolean', '92');
	const onClickDesk5Monitor3 = useCrestronPublish<boolean>('boolean', '93');
	const onClickDesk5Monitor4 = useCrestronPublish<boolean>('boolean', '94');

	const onChange = (
		event: React.MouseEvent<HTMLElement>,
		newValue: number
	) => {
		setValue(newValue);
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
												layoutEditMode={layoutEditMode}
											/>
										</Grid>
									</Grid>
								)}
								{value === 1 && (
									<Grid container spacing={2} sx={{ p: 1 }}>
										<Grid size={3}>
											<WorkstationsContainer
												label='EH-COMMS (Seat 1)'
												color={lighten(
													theme.palette.primary.main,
													0.25
												)}
												monitors={[
													{
														label: 'Monitor 1',
														source: 'HDMI 1',
														sourceIcon: (
															<CableIcon />
														),
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
										<Grid size={3}>
											<WorkstationsContainer
												label='MT-COMMS (Seat 2)'
												color={lighten(
													theme.palette.secondary
														.main,
													0.25
												)}
												monitors={[
													{
														label: 'Monitor 1',
														source: 'HDMI 1',
														sourceIcon: (
															<CableIcon />
														),
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
											<WorkstationsContainer
												label='EH (Seat 3)'
												color={
													theme.palette.primary.main
												}
												monitors={[
													{
														label: 'Monitor 1',
														source: 'HDMI 1',
														sourceIcon: (
															<CableIcon />
														),
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
														source: 'HDMI 2',
														sourceIcon: (
															<CableIcon />
														),
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
														source: 'HDMI 1',
														sourceIcon: (
															<CableIcon />
														),
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
														source: 'HDMI 2',
														sourceIcon: (
															<CableIcon />
														),
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
											<WorkstationsContainer
												label='EH (Seat 4)'
												color={darken(
													theme.palette.primary.main,
													0.25
												)}
												monitors={[
													{
														label: 'Monitor 1',
														source: 'HDMI 1',
														sourceIcon: (
															<CableIcon />
														),
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
														source: 'HDMI 2',
														sourceIcon: (
															<CableIcon />
														),
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
														source: 'HDMI 1',
														sourceIcon: (
															<CableIcon />
														),
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
														source: 'HDMI 2',
														sourceIcon: (
															<CableIcon />
														),
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
											<WorkstationsContainer
												label='MT (Seat 5)'
												color={'secondary.main'}
												monitors={[
													{
														label: 'Monitor 1',
														source: 'HDMI 1',
														sourceIcon: (
															<CableIcon />
														),
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
														source: 'HDMI 2',
														sourceIcon: (
															<CableIcon />
														),
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
														source: 'HDMI 1',
														sourceIcon: (
															<CableIcon />
														),
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
														source: 'HDMI 2',
														sourceIcon: (
															<CableIcon />
														),
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
												orientation='horizontal'
												icon={source.icon}
												label={[source.label]}
												slotProps={{
													typography: {
														fontSize: 18,
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
