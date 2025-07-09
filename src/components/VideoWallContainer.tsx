import React from 'react';

import Destination, { DestinationProps } from '../components/Destination';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

import {
	useCrestronPublish,
	useCrestronSignal,
	useCrestronSubscribe,
} from '../hooks/useCrestron';
import { useAtom, useAtomValue } from 'jotai';
import {
	layoutDisplaysCheckedState,
	sourceState,
} from '../state management/atoms';
import joinMap from '../types/joinMap';
import { validGroups } from '../types';

export interface VideoWallContainerProps {
	layoutEditMode: boolean;
	disableColumns?: number[];
	disableRows?: number[];
	disable?: number[][];
	hideColumns?: number[];
	hideRows?: number[];
	hide?: number[][];
}

interface VideoWallDestinationProps extends DestinationProps {
	cols: number;
	rows: number;
	hidden?: boolean;
}

//const videoWallDisplayGridWidth = 12 / 7;
const VideoWallContainer = ({
	layoutEditMode,
	hideColumns,
	hideRows,
	hide,
	disableColumns,
	disableRows,
	disable,
}: VideoWallContainerProps) => {
	const sources = useAtomValue(sourceState);

	const videoWall2CurrentSource = useCrestronSubscribe<number>(
		'number',
		joinMap.analog['Display 2 Current Source'] as string
	);
	const videoWall3CurrentSource = useCrestronSubscribe<number>(
		'number',
		joinMap.analog['Display 3 Current Source'] as string
	);
	const videoWall4CurrentSource = useCrestronSubscribe<number>(
		'number',
		joinMap.analog['Display 4 Current Source'] as string
	);
	const videoWall5CurrentSource = useCrestronSubscribe<number>(
		'number',
		joinMap.analog['Display 5 Current Source'] as string
	);
	const videoWall6CurrentSource = useCrestronSubscribe<number>(
		'number',
		joinMap.analog['Display 6 Current Source'] as string
	);
	const videoWall7CurrentSource = useCrestronSubscribe<number>(
		'number',
		joinMap.analog['Display 7 Current Source'] as string
	);

	const videoWall9CurrentSource = useCrestronSubscribe<number>(
		'number',
		joinMap.analog['Display 9 Current Source'] as string
	);
	const videoWall10CurrentSource = useCrestronSubscribe<number>(
		'number',
		joinMap.analog['Display 10 Current Source'] as string
	);
	const videoWall11CurrentSource = useCrestronSubscribe<number>(
		'number',
		joinMap.analog['Display 11 Current Source'] as string
	);
	const videoWall12CurrentSource = useCrestronSubscribe<number>(
		'number',
		joinMap.analog['Display 12 Current Source'] as string
	);
	const videoWall13CurrentSource = useCrestronSubscribe<number>(
		'number',
		joinMap.analog['Display 13 Current Source'] as string
	);
	const videoWall14CurrentSource = useCrestronSubscribe<number>(
		'number',
		joinMap.analog['Display 14 Current Source'] as string
	);

	const onClickVideoWallDisplay2 = useCrestronPublish<boolean>(
		'boolean',
		joinMap.digital['Display 2 Press'] as string
	);
	const onClickVideoWallDisplay3 = useCrestronPublish<boolean>(
		'boolean',
		joinMap.digital['Display 3 Press'] as string
	);
	const onClickVideoWallDisplay4 = useCrestronPublish<boolean>(
		'boolean',
		joinMap.digital['Display 4 Press'] as string
	);
	const onClickVideoWallDisplay5 = useCrestronPublish<boolean>(
		'boolean',
		joinMap.digital['Display 5 Press'] as string
	);
	const onClickVideoWallDisplay6 = useCrestronPublish<boolean>(
		'boolean',
		joinMap.digital['Display 6 Press'] as string
	);
	const onClickVideoWallDisplay7 = useCrestronPublish<boolean>(
		'boolean',
		joinMap.digital['Display 7 Press'] as string
	);
	const onClickVideoWallDisplay9 = useCrestronPublish<boolean>(
		'boolean',
		joinMap.digital['Display 9 Press'] as string
	);

	const onClickVideoWallDisplay10 = useCrestronPublish<boolean>(
		'boolean',
		joinMap.digital['Display 10 Press'] as string
	);
	const onClickVideoWallDisplay11 = useCrestronPublish<boolean>(
		'boolean',
		joinMap.digital['Display 11 Press'] as string
	);
	const onClickVideoWallDisplay12 = useCrestronPublish<boolean>(
		'boolean',
		joinMap.digital['Display 12 Press'] as string
	);
	const onClickVideoWallDisplay13 = useCrestronPublish<boolean>(
		'boolean',
		joinMap.digital['Display 13 Press'] as string
	);
	const onClickVideoWallDisplay14 = useCrestronPublish<boolean>(
		'boolean',
		joinMap.digital['Display 14 Press'] as string
	);

	const [group1, setGroup1] = useCrestronSignal<boolean>(
		'boolean',
		joinMap.digital['Video Wall Enable Group 1'] as string
	);
	const [group2, setGroup2] = useCrestronSignal<boolean>(
		'boolean',
		joinMap.digital['Video Wall Enable Group 2'] as string
	);
	const [group3, setGroup3] = useCrestronSignal<boolean>(
		'boolean',
		joinMap.digital['Video Wall Enable Group 3'] as string
	);
	const [group4, setGroup4] = useCrestronSignal<boolean>(
		'boolean',
		joinMap.digital['Video Wall Enable Group 4'] as string
	);
	const [group5, setGroup5] = useCrestronSignal<boolean>(
		'boolean',
		joinMap.digital['Video Wall Enable Group 5'] as string
	);

	const [displaysChecked, setDisplaysChecked] = useAtom<number[]>(
		layoutDisplaysCheckedState
	);

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
	}, [
		displaysChecked,
		group1,
		group2,
		group3,
		group4,
		group5,
		setGroup1,
		setGroup2,
		setGroup3,
		setGroup4,
		setGroup5,
	]);

	const handleGroupSelection = React.useCallback(
		(index: number, checked: boolean) => {
			setDisplaysChecked((prev) => {
				if (checked) {
					return Array.from(new Set([...prev, index]));
				}

				// If unchecked, remove the index from the array along with any grouped indices
				let updatedPrev = prev;
				if (group1 && validGroups.group1.includes(index)) {
					updatedPrev = updatedPrev.filter(
						(id) => !validGroups.group1.includes(id)
					);
				}
				if (group2 && validGroups.group2.includes(index)) {
					updatedPrev = updatedPrev.filter(
						(id) => !validGroups.group2.includes(id)
					);
				}
				if (group3 && validGroups.group3.includes(index)) {
					updatedPrev = updatedPrev.filter(
						(id) => !validGroups.group3.includes(id)
					);
				}
				if (group4 && validGroups.group4.includes(index)) {
					updatedPrev = updatedPrev.filter(
						(id) => !validGroups.group4.includes(id)
					);
				}
				if (group5 && validGroups.group5.includes(index)) {
					updatedPrev = updatedPrev.filter(
						(id) => !validGroups.group5.includes(id)
					);
				}

				updatedPrev = updatedPrev.filter((id) => id !== index);

				return Array.from(new Set(updatedPrev));
			});
		},
		[group1, group2, group3, group4, group5, setDisplaysChecked]
	);

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
				source: sources.find(
					(s) => s.videoIndex === videoWall2CurrentSource
				)?.label,
				sourceIcon: sources.find(
					(s) => s.videoIndex === videoWall2CurrentSource
				)?.icon,
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
				source: sources.find(
					(s) => s.videoIndex === videoWall3CurrentSource
				)?.label,
				sourceIcon: sources.find(
					(s) => s.videoIndex === videoWall3CurrentSource
				)?.icon,
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
				source: sources.find(
					(s) => s.videoIndex === videoWall4CurrentSource
				)?.label,
				sourceIcon: sources.find(
					(s) => s.videoIndex === videoWall4CurrentSource
				)?.icon,
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
				source: sources.find(
					(s) => s.videoIndex === videoWall5CurrentSource
				)?.label,
				sourceIcon: sources.find(
					(s) => s.videoIndex === videoWall5CurrentSource
				)?.icon,
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
				source: sources.find(
					(s) => s.videoIndex === videoWall6CurrentSource
				)?.label,
				sourceIcon: sources.find(
					(s) => s.videoIndex === videoWall6CurrentSource
				)?.icon,
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
				source: sources.find(
					(s) => s.videoIndex === videoWall7CurrentSource
				)?.label,
				sourceIcon: sources.find(
					(s) => s.videoIndex === videoWall7CurrentSource
				)?.icon,
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
				source: sources.find(
					(s) => s.videoIndex === videoWall9CurrentSource
				)?.label,
				sourceIcon: sources.find(
					(s) => s.videoIndex === videoWall9CurrentSource
				)?.icon,
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
				source: sources.find(
					(s) => s.videoIndex === videoWall10CurrentSource
				)?.label,
				sourceIcon: sources.find(
					(s) => s.videoIndex === videoWall10CurrentSource
				)?.icon,
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
				source: sources.find(
					(s) => s.videoIndex === videoWall11CurrentSource
				)?.label,
				sourceIcon: sources.find(
					(s) => s.videoIndex === videoWall11CurrentSource
				)?.icon,
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
				source: sources.find(
					(s) => s.videoIndex === videoWall12CurrentSource
				)?.label,
				sourceIcon: sources.find(
					(s) => s.videoIndex === videoWall12CurrentSource
				)?.icon,
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
				source: sources.find(
					(s) => s.videoIndex === videoWall13CurrentSource
				)?.label,
				sourceIcon: sources.find(
					(s) => s.videoIndex === videoWall13CurrentSource
				)?.icon,
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
				source: sources.find(
					(s) => s.videoIndex === videoWall14CurrentSource
				)?.label,
				sourceIcon: sources.find(
					(s) => s.videoIndex === videoWall14CurrentSource
				)?.icon,
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
			group1,
			group2,
			group3,
			group4,
			group5,
			handleGroupSelection,
			displaysChecked,
			sources,
		]
	);

	return (
		<ImageList
			sx={{ width: '100%', height: '100%', alignContent: 'center' }}
			variant='quilted'
			cols={hideColumns ? 7 - hideColumns.length : 7}
			rowHeight={117}
		>
			{videoWallDisplayProps
				.filter((display, i) => {
					const colPosition = i % 7;
					const rowPosition = Math.floor(i / 7);

					return (
						!hideColumns?.includes(colPosition) &&
						!hideRows?.includes(rowPosition)
					);
				})
				.map((display, i) => {
					const colPosition = i % 7;
					const rowPosition = Math.floor(i / 7);

					return (
						<ImageListItem
							key={i}
							cols={display.cols}
							rows={display.rows}
							sx={{
								display: display.hidden ? 'none' : 'block',
							}}
						>
							<Destination
								{...display}
								{...(display.rows === 2
									? { minHeight: 220 }
									: { minHeight: 100 })}
								disabled={
									(disable &&
										disable[rowPosition] &&
										disable[rowPosition].includes(
											colPosition
										)) ||
									(disableColumns &&
										disableColumns.includes(colPosition)) ||
									(disableRows &&
										disableRows.includes(rowPosition))
								}
							/>
						</ImageListItem>
					);
				})}
		</ImageList>
	);
};

export default VideoWallContainer;
