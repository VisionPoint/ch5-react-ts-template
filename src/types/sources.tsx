import React from 'react';
import { SvgIconProps } from '@mui/material/SvgIcon';
import FontAwesomeIcon from '../components/FontAwesomeIcon'; // Adjust the import path as necessary

interface Source {
	label: string;
	icon: React.ReactElement<SvgIconProps>;
	videoIndex: number;
	audioIndex?: number;
}

const fontAwesomeLibrary = 'fad';

export const sources: Source[] = [
	{
		label: 'IS Software PC',
		icon: <FontAwesomeIcon icon={[fontAwesomeLibrary, 'camera-cctv']} />,
		videoIndex: 6,
	},
	{
		label: 'EH COMMS Lenel',
		icon: <FontAwesomeIcon icon={[fontAwesomeLibrary, 'camera-cctv']} />,
		videoIndex: 33,
	},
	{
		label: 'EH COMMS Workstation PC Desk 1',
		icon: <FontAwesomeIcon icon={[fontAwesomeLibrary, 'computer']} />,
		videoIndex: 1,
	},
	{
		label: 'EH COMMS Radio PC',
		icon: <FontAwesomeIcon icon={[fontAwesomeLibrary, 'tower-cell']} />,
		videoIndex: 19,
	},
	{
		label: 'MT COMMS Lenel',
		icon: <FontAwesomeIcon icon={[fontAwesomeLibrary, 'server']} />,
		videoIndex: 34,
	},
	{
		label: 'MT COMMS Workstation PC Desk 2',
		icon: <FontAwesomeIcon icon={[fontAwesomeLibrary, 'computer']} />,
		videoIndex: 2,
	},
	{
		label: 'MT COMMS Radio PC',
		icon: <FontAwesomeIcon icon={[fontAwesomeLibrary, 'tower-cell']} />,
		videoIndex: 20,
	},
	{
		label: 'EH Lenel',
		icon: <FontAwesomeIcon icon={[fontAwesomeLibrary, 'server']} />,
		videoIndex: 35,
	},
	{
		label: 'EH Camera PC 1-1',
		icon: <FontAwesomeIcon icon={[fontAwesomeLibrary, 'camera-cctv']} />,
		videoIndex: 7,
	},
	{
		label: 'EH Camera PC 1-2',
		icon: <FontAwesomeIcon icon={[fontAwesomeLibrary, 'camera-cctv']} />,
		videoIndex: 8,
	},
	{
		label: 'EH Camera PC 2-1',
		icon: <FontAwesomeIcon icon={[fontAwesomeLibrary, 'camera-cctv']} />,
		videoIndex: 9,
	},
	{
		label: 'EH Camera PC 2-2',
		icon: <FontAwesomeIcon icon={[fontAwesomeLibrary, 'camera-cctv']} />,
		videoIndex: 10,
	},
	{
		label: 'EH Camera PC 3-1',
		icon: <FontAwesomeIcon icon={[fontAwesomeLibrary, 'camera-cctv']} />,
		videoIndex: 11,
	},
	{
		label: 'EH Camera PC 3-2',
		icon: <FontAwesomeIcon icon={[fontAwesomeLibrary, 'camera-cctv']} />,
		videoIndex: 12,
	},
	{
		label: 'EH Workstation PC Desk 3',
		icon: <FontAwesomeIcon icon={[fontAwesomeLibrary, 'computer']} />,
		videoIndex: 3,
	},
	{
		label: 'EH Workstation PC Desk 4',
		icon: <FontAwesomeIcon icon={[fontAwesomeLibrary, 'computer']} />,
		videoIndex: 4,
	},
	{
		label: 'MT Lenel',
		icon: <FontAwesomeIcon icon={[fontAwesomeLibrary, 'server']} />,
		videoIndex: 36,
	},
	{
		label: 'MT Camera PC 1-1',
		icon: <FontAwesomeIcon icon={[fontAwesomeLibrary, 'camera-cctv']} />,
		videoIndex: 13,
	},
	{
		label: 'MT Camera PC 1-2',
		icon: <FontAwesomeIcon icon={[fontAwesomeLibrary, 'camera-cctv']} />,
		videoIndex: 14,
	},
	{
		label: 'MT Camera PC 2-1',
		icon: <FontAwesomeIcon icon={[fontAwesomeLibrary, 'camera-cctv']} />,
		videoIndex: 15,
	},
	{
		label: 'MT Camera PC 2-2',
		icon: <FontAwesomeIcon icon={[fontAwesomeLibrary, 'camera-cctv']} />,
		videoIndex: 16,
	},
	{
		label: 'MT Camera PC 3-1',
		icon: <FontAwesomeIcon icon={[fontAwesomeLibrary, 'camera-cctv']} />,
		videoIndex: 17,
	},
	{
		label: 'MT Camera PC 3-2',
		icon: <FontAwesomeIcon icon={[fontAwesomeLibrary, 'camera-cctv']} />,
		videoIndex: 18,
	},
	{
		label: 'MT Workstation PC Desk 5',
		icon: <FontAwesomeIcon icon={[fontAwesomeLibrary, 'computer']} />,
		videoIndex: 5,
	},
];
