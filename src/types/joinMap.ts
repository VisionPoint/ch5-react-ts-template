type SignalNames =
	| 'System Startup'
	| 'System Shutdown'
	| 'Display 1 Power On'
	| 'Display 1 Power Off'

	//! Presets
	| 'Video Routing Preset 1 Press'
	| 'Video Routing Preset 2 Press'
	| 'Video Routing Preset 3 Press'
	| 'Video Routing Preset 4 Press'
	| 'Video Routing Preset 5 Press'
	| 'Video Routing Preset 1 Name'
	| 'Video Routing Preset 2 Name'
	| 'Video Routing Preset 3 Name'
	| 'Video Routing Preset 4 Name'
	| 'Video Routing Preset 5 Name'

	//! Video Wall Configuration
	| 'Video Wall Enable Group 1'
	| 'Video Wall Enable Group 2'
	| 'Video Wall Enable Group 3'
	| 'Video Wall Enable Group 4'
	| 'Video Wall Enable Group 5'

	//! Source Signals
	| 'Source Select'
	| 'Source 1 Name'
	| 'Source 2 Name'
	| 'Source 3 Name'
	| 'Source 4 Name'
	| 'Source 5 Name'
	| 'Source 6 Name'
	| 'Source 7 Name'
	| 'Source 8 Name'
	| 'Source 9 Name'
	| 'Source 10 Name'
	| 'Source 11 Name'
	| 'Source 12 Name'
	| 'Source 13 Name'
	| 'Source 14 Name'
	| 'Source 15 Name'
	| 'Source 16 Name'
	| 'Source 17 Name'
	| 'Source 18 Name'
	| 'Source 19 Name'
	| 'Source 20 Name'
	| 'Source 21 Name'
	| 'Source 22 Name'
	| 'Source 23 Name'
	| 'Source 24 Name'
	| 'Source 25 Name'
	| 'Source 26 Name'
	| 'Source 27 Name'
	| 'Source 28 Name'
	| 'Source 29 Name'
	| 'Source 30 Name'
	| 'Source 31 Name'
	| 'Source 32 Name'
	| 'Source 33 Name'
	| 'Source 34 Name'
	| 'Source 35 Name'
	| 'Source 36 Name'
	| 'Source 37 Name'
	| 'Source 38 Name'
	| 'Source 39 Name'
	| 'Source 40 Name'

	//! Display Signals
	| 'Display Group 1 Press'
	| 'Display Group 2 Press'
	| 'Display Group 3 Press'
	| 'Display Group 4 Press'
	| 'Display Group 5 Press'
	| 'Display 1 Press'
	| 'Display 2 Press'
	| 'Display 3 Press'
	| 'Display 4 Press'
	| 'Display 5 Press'
	| 'Display 6 Press'
	| 'Display 7 Press'
	| 'Display 8 Press'
	| 'Display 9 Press'
	| 'Display 10 Press'
	| 'Display 11 Press'
	| 'Display 12 Press'
	| 'Display 13 Press'
	| 'Display 14 Press'
	| 'Desk 1 Monitor 1 Press'
	| 'Desk 1 Monitor 2 Press'
	| 'Desk 1 Monitor 3 Press'
	| 'Desk 1 Monitor 4 Press'
	| 'Desk 2 Monitor 1 Press'
	| 'Desk 2 Monitor 2 Press'
	| 'Desk 2 Monitor 3 Press'
	| 'Desk 2 Monitor 4 Press'
	| 'Desk 3 Monitor 1 Press'
	| 'Desk 3 Monitor 2 Press'
	| 'Desk 3 Monitor 3 Press'
	| 'Desk 3 Monitor 4 Press'
	| 'Desk 4 Monitor 1 Press'
	| 'Desk 4 Monitor 2 Press'
	| 'Desk 4 Monitor 3 Press'
	| 'Desk 4 Monitor 4 Press'
	| 'Desk 5 Monitor 1 Press'
	| 'Desk 5 Monitor 2 Press'
	| 'Desk 5 Monitor 3 Press'
	| 'Desk 5 Monitor 4 Press'
	| 'Supervisor Monitor 1 Press'
	| 'Supervisor Monitor 2 Press'
	| 'Display Group 1 Name'
	| 'Display Group 2 Name'
	| 'Display Group 3 Name'
	| 'Display Group 4 Name'
	| 'Display Group 5 Name'
	| 'Display 1 Name'
	| 'Display 2 Name'
	| 'Display 3 Name'
	| 'Display 4 Name'
	| 'Display 5 Name'
	| 'Display 6 Name'
	| 'Display 7 Name'
	| 'Display 8 Name'
	| 'Display 9 Name'
	| 'Display 10 Name'
	| 'Display 11 Name'
	| 'Display 12 Name'
	| 'Display 13 Name'
	| 'Display 14 Name'
	| 'Desk 1 Monitor 1 Name'
	| 'Desk 1 Monitor 2 Name'
	| 'Desk 1 Monitor 3 Name'
	| 'Desk 1 Monitor 4 Name'
	| 'Desk 2 Monitor 1 Name'
	| 'Desk 2 Monitor 2 Name'
	| 'Desk 2 Monitor 3 Name'
	| 'Desk 2 Monitor 4 Name'
	| 'Desk 3 Monitor 1 Name'
	| 'Desk 3 Monitor 2 Name'
	| 'Desk 3 Monitor 3 Name'
	| 'Desk 3 Monitor 4 Name'
	| 'Desk 4 Monitor 1 Name'
	| 'Desk 4 Monitor 2 Name'
	| 'Desk 4 Monitor 3 Name'
	| 'Desk 4 Monitor 4 Name'
	| 'Desk 5 Monitor 1 Name'
	| 'Desk 5 Monitor 2 Name'
	| 'Desk 5 Monitor 3 Name'
	| 'Desk 5 Monitor 4 Name'
	| 'Supervisor Monitor 1 Name'
	| 'Supervisor Monitor 2 Name'
	| 'Display Group 1 Current Source'
	| 'Display Group 2 Current Source'
	| 'Display Group 3 Current Source'
	| 'Display Group 4 Current Source'
	| 'Display Group 5 Current Source'
	| 'Display 1 Current Source'
	| 'Display 2 Current Source'
	| 'Display 3 Current Source'
	| 'Display 4 Current Source'
	| 'Display 5 Current Source'
	| 'Display 6 Current Source'
	| 'Display 7 Current Source'
	| 'Display 8 Current Source'
	| 'Display 9 Current Source'
	| 'Display 10 Current Source'
	| 'Display 11 Current Source'
	| 'Display 12 Current Source'
	| 'Display 13 Current Source'
	| 'Display 14 Current Source'
	| 'Desk 1 Monitor 1 Current Source'
	| 'Desk 1 Monitor 2 Current Source'
	| 'Desk 1 Monitor 3 Current Source'
	| 'Desk 1 Monitor 4 Current Source'
	| 'Desk 2 Monitor 1 Current Source'
	| 'Desk 2 Monitor 2 Current Source'
	| 'Desk 2 Monitor 3 Current Source'
	| 'Desk 2 Monitor 4 Current Source'
	| 'Desk 3 Monitor 1 Current Source'
	| 'Desk 3 Monitor 2 Current Source'
	| 'Desk 3 Monitor 3 Current Source'
	| 'Desk 3 Monitor 4 Current Source'
	| 'Desk 4 Monitor 1 Current Source'
	| 'Desk 4 Monitor 2 Current Source'
	| 'Desk 4 Monitor 3 Current Source'
	| 'Desk 4 Monitor 4 Current Source'
	| 'Desk 5 Monitor 1 Current Source'
	| 'Desk 5 Monitor 2 Current Source'
	| 'Desk 5 Monitor 3 Current Source'
	| 'Desk 5 Monitor 4 Current Source'
	| 'Supervisor Monitor 1 Current Source'
	| 'Supervisor Monitor 2 Current Source';

const digitalJoinMap: Partial<Record<SignalNames, string>> = {
	'System Startup': '1',
	'System Shutdown': '2',
	'Display 1 Power On': '14',
	'Display 1 Power Off': '15',

	'Video Routing Preset 1 Press': '21',
	'Video Routing Preset 2 Press': '22',
	'Video Routing Preset 3 Press': '23',
	'Video Routing Preset 4 Press': '24',
	'Video Routing Preset 5 Press': '25',

	'Video Wall Enable Group 1': '27',
	'Video Wall Enable Group 2': '28',
	'Video Wall Enable Group 3': '29',
	'Video Wall Enable Group 4': '30',
	'Video Wall Enable Group 5': '31',

	'Display Group 1 Press': '132',
	'Display Group 2 Press': '133',
	'Display Group 3 Press': '134',
	'Display Group 4 Press': '135',
	'Display Group 5 Press': '136',

	'Display 1 Press': '101',
	'Display 2 Press': '102',
	'Display 3 Press': '103',
	'Display 4 Press': '104',
	'Display 5 Press': '105',
	'Display 6 Press': '106',
	'Display 7 Press': '107',
	'Display 8 Press': '108',
	'Display 9 Press': '109',
	'Display 10 Press': '110',
	'Display 11 Press': '111',
	'Display 12 Press': '112',
	'Display 13 Press': '113',
	'Display 14 Press': '114',

	'Desk 1 Monitor 1 Press': '0',
	'Desk 1 Monitor 2 Press': '0',
	'Desk 1 Monitor 3 Press': '0',
	'Desk 1 Monitor 4 Press': '0',
	'Desk 2 Monitor 1 Press': '0',
	'Desk 2 Monitor 2 Press': '0',
	'Desk 2 Monitor 3 Press': '0',
	'Desk 2 Monitor 4 Press': '0',
	'Desk 3 Monitor 1 Press': '115',
	'Desk 3 Monitor 2 Press': '116',
	'Desk 3 Monitor 3 Press': '117',
	'Desk 3 Monitor 4 Press': '118',
	'Desk 4 Monitor 1 Press': '120',
	'Desk 4 Monitor 2 Press': '121',
	'Desk 4 Monitor 3 Press': '122',
	'Desk 4 Monitor 4 Press': '123',
	'Desk 5 Monitor 1 Press': '125',
	'Desk 5 Monitor 2 Press': '126',
	'Desk 5 Monitor 3 Press': '127',
	'Desk 5 Monitor 4 Press': '128',
	'Supervisor Monitor 1 Press': '130',
	'Supervisor Monitor 2 Press': '131',
};

const analogJoinMap: Partial<Record<SignalNames, string>> = {
	'Source Select': '1',

	'Display 1 Current Source': '101',
	'Display 2 Current Source': '102',
	'Display 3 Current Source': '103',
	'Display 4 Current Source': '104',
	'Display 5 Current Source': '105',
	'Display 6 Current Source': '106',
	'Display 7 Current Source': '107',
	'Display 8 Current Source': '108',
	'Display 9 Current Source': '109',
	'Display 10 Current Source': '110',
	'Display 11 Current Source': '111',
	'Display 12 Current Source': '112',
	'Display 13 Current Source': '113',
	'Display 14 Current Source': '114',
	'Desk 3 Monitor 1 Current Source': '115',
	'Desk 3 Monitor 2 Current Source': '116',
	'Desk 3 Monitor 3 Current Source': '117',
	'Desk 3 Monitor 4 Current Source': '118',
	'Desk 4 Monitor 1 Current Source': '120',
	'Desk 4 Monitor 2 Current Source': '121',
	'Desk 4 Monitor 3 Current Source': '122',
	'Desk 4 Monitor 4 Current Source': '123',
	'Desk 5 Monitor 1 Current Source': '125',
	'Desk 5 Monitor 2 Current Source': '126',
	'Desk 5 Monitor 3 Current Source': '127',
	'Desk 5 Monitor 4 Current Source': '128',
	'Display Group 1 Current Source': '130',
	'Display Group 2 Current Source': '131',
	'Display Group 3 Current Source': '132',
	'Display Group 4 Current Source': '133',
	'Display Group 5 Current Source': '134',
	'Supervisor Monitor 1 Current Source': '135',
	'Supervisor Monitor 2 Current Source': '136',
};

const stringJoinMap: Partial<Record<SignalNames, string>> = {
	'Video Routing Preset 1 Name': '1',
	'Video Routing Preset 2 Name': '2',
	'Video Routing Preset 3 Name': '3',
	'Video Routing Preset 4 Name': '4',
	'Video Routing Preset 5 Name': '5',

	'Source 1 Name': '11',
	'Source 2 Name': '12',
	'Source 3 Name': '13',
	'Source 4 Name': '14',
	'Source 5 Name': '15',
	'Source 6 Name': '16',
	'Source 7 Name': '17',
	'Source 8 Name': '18',
	'Source 9 Name': '19',
	'Source 10 Name': '20',
	'Source 11 Name': '21',
	'Source 12 Name': '22',
	'Source 13 Name': '23',
	'Source 14 Name': '24',
	'Source 15 Name': '25',
	'Source 16 Name': '26',
	'Source 17 Name': '27',
	'Source 18 Name': '28',
	'Source 19 Name': '29',
	'Source 20 Name': '30',
	'Source 21 Name': '31',
	'Source 22 Name': '32',
	'Source 23 Name': '33',
	'Source 24 Name': '34',
	'Source 25 Name': '35',
	'Source 26 Name': '36',
	'Source 27 Name': '37',
	'Source 28 Name': '38',
	'Source 29 Name': '39',
	'Source 30 Name': '40',
	'Source 31 Name': '41',
	'Source 32 Name': '42',
	'Source 33 Name': '43',
	'Source 34 Name': '44',
	'Source 35 Name': '45',
	'Source 36 Name': '46',
	'Source 37 Name': '47',
};

const joinMap = {
	digital: digitalJoinMap,
	analog: analogJoinMap,
	serial: stringJoinMap,
};

export default joinMap;
