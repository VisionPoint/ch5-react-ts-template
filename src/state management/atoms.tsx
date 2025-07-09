import { atom } from 'jotai';
import React from 'react';
import { SvgIconProps } from '@mui/material/SvgIcon';
import FontAwesomeIcon, {
	FontAwesomeIconProps,
} from '../components/FontAwesomeIcon'; // Adjust the import path as necessary
import joinMap from '../types/joinMap';

export const pageTitleState = atom<string>('Command Center');

interface Source {
	label: string;
	icon: React.ReactElement<SvgIconProps | FontAwesomeIconProps>;
	videoIndex: number;
	audioIndex?: number;
	nameJoin?: string;
	groups?: number[];
}

const fontAwesomeLibrary = 'fad';
export const sourceState = atom<Source[]>([
	{
		label: 'EH COMMS Workstation PC Desk 1',
		icon: <FontAwesomeIcon icon={[fontAwesomeLibrary, 'computer']} />,
		videoIndex: 1,
		nameJoin: joinMap.serial['Source 1 Name'],
		groups: [1],
	},
	{
		label: 'MT COMMS Workstation PC Desk 2',
		icon: <FontAwesomeIcon icon={[fontAwesomeLibrary, 'computer']} />,
		videoIndex: 2,
		nameJoin: joinMap.serial['Source 2 Name'],
		groups: [2],
	},
	{
		label: 'EH Workstation PC Desk 3',
		icon: <FontAwesomeIcon icon={[fontAwesomeLibrary, 'computer']} />,
		videoIndex: 3,
		nameJoin: joinMap.serial['Source 3 Name'],
		groups: [3],
	},
	{
		label: 'EH Workstation PC Desk 4',
		icon: <FontAwesomeIcon icon={[fontAwesomeLibrary, 'computer']} />,
		videoIndex: 4,
		nameJoin: joinMap.serial['Source 4 Name'],
		groups: [4],
	},
	{
		label: 'MT Workstation PC Desk 5',
		icon: <FontAwesomeIcon icon={[fontAwesomeLibrary, 'computer']} />,
		videoIndex: 5,
		nameJoin: joinMap.serial['Source 5 Name'],
		groups: [5],
	},
	{
		label: 'IS Software PC',
		icon: <FontAwesomeIcon icon={[fontAwesomeLibrary, 'camera-cctv']} />,
		videoIndex: 6,
		nameJoin: joinMap.serial['Source 6 Name'],
	},
	{
		label: 'EH Camera PC 1-1',
		icon: <FontAwesomeIcon icon={[fontAwesomeLibrary, 'camera-cctv']} />,
		videoIndex: 13,
		nameJoin: joinMap.serial['Source 13 Name'],
		groups: [3, 4],
	},
	{
		label: 'EH Camera PC 1-2',
		icon: <FontAwesomeIcon icon={[fontAwesomeLibrary, 'camera-cctv']} />,
		videoIndex: 14,
		nameJoin: joinMap.serial['Source 14 Name'],
		groups: [3, 4],
	},
	{
		label: 'EH Camera PC 2-1',
		icon: <FontAwesomeIcon icon={[fontAwesomeLibrary, 'camera-cctv']} />,
		videoIndex: 15,
		nameJoin: joinMap.serial['Source 15 Name'],
		groups: [3, 4],
	},
	{
		label: 'EH Camera PC 2-2',
		icon: <FontAwesomeIcon icon={[fontAwesomeLibrary, 'camera-cctv']} />,
		videoIndex: 16,
		nameJoin: joinMap.serial['Source 16 Name'],
		groups: [3, 4],
	},
	{
		label: 'EH Camera PC 3-1',
		icon: <FontAwesomeIcon icon={[fontAwesomeLibrary, 'camera-cctv']} />,
		videoIndex: 17,
		nameJoin: joinMap.serial['Source 17 Name'],
		groups: [3, 4],
	},
	{
		label: 'EH Camera PC 3-2',
		icon: <FontAwesomeIcon icon={[fontAwesomeLibrary, 'camera-cctv']} />,
		videoIndex: 18,
		nameJoin: joinMap.serial['Source 18 Name'],
		groups: [3, 4],
	},
	{
		label: 'MT Camera PC 1-1',
		icon: <FontAwesomeIcon icon={[fontAwesomeLibrary, 'camera-cctv']} />,
		videoIndex: 19,
		nameJoin: joinMap.serial['Source 19 Name'],
		groups: [5],
	},
	{
		label: 'MT Camera PC 1-2',
		icon: <FontAwesomeIcon icon={[fontAwesomeLibrary, 'camera-cctv']} />,
		videoIndex: 20,
		nameJoin: joinMap.serial['Source 20 Name'],
		groups: [5],
	},
	{
		label: 'MT Camera PC 2-1',
		icon: <FontAwesomeIcon icon={[fontAwesomeLibrary, 'camera-cctv']} />,
		videoIndex: 21,
		nameJoin: joinMap.serial['Source 21 Name'],
		groups: [5],
	},
	{
		label: 'MT Camera PC 2-2',
		icon: <FontAwesomeIcon icon={[fontAwesomeLibrary, 'camera-cctv']} />,
		videoIndex: 22,
		nameJoin: joinMap.serial['Source 22 Name'],
		groups: [5],
	},
	{
		label: 'MT Camera PC 3-1',
		icon: <FontAwesomeIcon icon={[fontAwesomeLibrary, 'camera-cctv']} />,
		videoIndex: 23,
		nameJoin: joinMap.serial['Source 23 Name'],
		groups: [5],
	},
	{
		label: 'MT Camera PC 3-2',
		icon: <FontAwesomeIcon icon={[fontAwesomeLibrary, 'camera-cctv']} />,
		videoIndex: 24,
		nameJoin: joinMap.serial['Source 24 Name'],
		groups: [5],
	},
	{
		label: 'EH COMMS Radio PC',
		icon: <FontAwesomeIcon icon={[fontAwesomeLibrary, 'tower-cell']} />,
		videoIndex: 11,
		nameJoin: joinMap.serial['Source 11 Name'],
		groups: [1],
	},
	{
		label: 'MT COMMS Radio PC',
		icon: <FontAwesomeIcon icon={[fontAwesomeLibrary, 'tower-cell']} />,
		videoIndex: 12,
		nameJoin: joinMap.serial['Source 12 Name'],
		groups: [2],
	},
	{
		label: 'EH COMMS Lenel',
		icon: <FontAwesomeIcon icon={[fontAwesomeLibrary, 'server']} />,
		videoIndex: 7,
		nameJoin: joinMap.serial['Source 7 Name'],
		groups: [1],
	},
	{
		label: 'MT COMMS Lenel',
		icon: <FontAwesomeIcon icon={[fontAwesomeLibrary, 'server']} />,
		videoIndex: 8,
		nameJoin: joinMap.serial['Source 8 Name'],
		groups: [2],
	},
	{
		label: 'EH Lenel',
		icon: <FontAwesomeIcon icon={[fontAwesomeLibrary, 'server']} />,
		videoIndex: 9,
		nameJoin: joinMap.serial['Source 9 Name'],
		groups: [3, 4],
	},
	{
		label: 'MT Lenel',
		icon: <FontAwesomeIcon icon={[fontAwesomeLibrary, 'server']} />,
		videoIndex: 10,
		nameJoin: joinMap.serial['Source 10 Name'],
		groups: [5],
	},
]);

export const layoutDisplaysCheckedState = atom<number[]>([]);
