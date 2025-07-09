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

	//! Display Signals
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
	| 'Display 1 Current Source'
	| 'Display 2 Current Source'
	| 'Display 3 Current Source'
	| 'Display 4 Current Source'
	| 'Display 5 Current Source'
	| 'Display 6 Current Source'
	| 'Display 7 Current Source'
	| 'Display 8 Current Source'
	| 'Display 9 Current Source'
	| 'Display 10 Current Source';

const digitalJoinMap: Partial<Record<SignalNames, string>> = {
	'System Startup': '1',
	'System Shutdown': '2',
	'Display 1 Power On': '11',
	'Display 1 Power Off': '12',

	'Display 1 Press': '51',
	'Display 2 Press': '52',
};

const analogJoinMap: Partial<Record<SignalNames, string>> = {
	'Source Select': '1',

	'Display 1 Current Source': '51',
	'Display 2 Current Source': '52',
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
};

const joinMap = {
	digital: digitalJoinMap,
	analog: analogJoinMap,
	serial: stringJoinMap,
};

export default joinMap;
