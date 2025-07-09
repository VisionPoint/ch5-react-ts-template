import { useAtom } from 'jotai';
import { sourceState } from '../state management/atoms';
import { useCrestronSubscribe } from '../hooks/useCrestron';
import React from 'react';

const SourceStateManager = () => {
	const [sources, setSources] = useAtom(sourceState);

	const source1Name = useCrestronSubscribe<string>(
		'string',
		sources[0].nameJoin as string
	);
	const source2Name = useCrestronSubscribe<string>(
		'string',
		sources[1].nameJoin as string
	);
	const source3Name = useCrestronSubscribe<string>(
		'string',
		sources[2].nameJoin as string
	);
	const source4Name = useCrestronSubscribe<string>(
		'string',
		sources[3].nameJoin as string
	);
	const source5Name = useCrestronSubscribe<string>(
		'string',
		sources[4].nameJoin as string
	);
	const source6Name = useCrestronSubscribe<string>(
		'string',
		sources[5].nameJoin as string
	);
	const source7Name = useCrestronSubscribe<string>(
		'string',
		sources[6].nameJoin as string
	);
	const source8Name = useCrestronSubscribe<string>(
		'string',
		sources[7].nameJoin as string
	);
	const source9Name = useCrestronSubscribe<string>(
		'string',
		sources[8].nameJoin as string
	);
	const source10Name = useCrestronSubscribe<string>(
		'string',
		sources[9].nameJoin as string
	);
	const source11Name = useCrestronSubscribe<string>(
		'string',
		sources[10].nameJoin as string
	);
	const source12Name = useCrestronSubscribe<string>(
		'string',
		sources[11].nameJoin as string
	);
	const source13Name = useCrestronSubscribe<string>(
		'string',
		sources[12].nameJoin as string
	);
	const source14Name = useCrestronSubscribe<string>(
		'string',
		sources[13].nameJoin as string
	);
	const source15Name = useCrestronSubscribe<string>(
		'string',
		sources[14].nameJoin as string
	);
	const source16Name = useCrestronSubscribe<string>(
		'string',
		sources[15].nameJoin as string
	);
	const source17Name = useCrestronSubscribe<string>(
		'string',
		sources[16].nameJoin as string
	);
	const source18Name = useCrestronSubscribe<string>(
		'string',
		sources[17].nameJoin as string
	);
	const source19Name = useCrestronSubscribe<string>(
		'string',
		sources[18].nameJoin as string
	);
	const source20Name = useCrestronSubscribe<string>(
		'string',
		sources[19].nameJoin as string
	);
	const source21Name = useCrestronSubscribe<string>(
		'string',
		sources[20].nameJoin as string
	);
	const source22Name = useCrestronSubscribe<string>(
		'string',
		sources[21].nameJoin as string
	);
	const source23Name = useCrestronSubscribe<string>(
		'string',
		sources[22].nameJoin as string
	);
	const source24Name = useCrestronSubscribe<string>(
		'string',
		sources[23].nameJoin as string
	);

	React.useEffect(() => {
		console.log('Source names updated:', {
			source1Name,
			source2Name,
			source3Name,
			source4Name,
			source5Name,
			source6Name,
			source7Name,
			source8Name,
			source9Name,
			source10Name,
			source11Name,
			source12Name,
			source13Name,
			source14Name,
			source15Name,
			source16Name,
			source17Name,
			source18Name,
			source19Name,
			source20Name,
			source21Name,
			source22Name,
			source23Name,
			source24Name,
		});
	}, [
		source1Name,
		source2Name,
		source3Name,
		source4Name,
		source5Name,
		source6Name,
		source7Name,
		source8Name,
		source9Name,
		source10Name,
		source11Name,
		source12Name,
		source13Name,
		source14Name,
		source15Name,
		source16Name,
		source17Name,
		source18Name,
		source19Name,
		source20Name,
		source21Name,
		source22Name,
		source23Name,
		source24Name,
	]);

	React.useEffect(() => {
		if (source1Name !== undefined) {
			setSources((prevSources) => {
				const updatedSources = [...prevSources];
				updatedSources[0] = {
					...updatedSources[0],
					label: source1Name,
				};
				return updatedSources;
			});
		}
	}, [source1Name, setSources]);

	React.useEffect(() => {
		if (source2Name !== undefined) {
			setSources((prevSources) => {
				const updatedSources = [...prevSources];
				updatedSources[1] = {
					...updatedSources[1],
					label: source2Name,
				};
				return updatedSources;
			});
		}
	}, [source2Name, setSources]);

	React.useEffect(() => {
		if (source3Name !== undefined) {
			setSources((prevSources) => {
				const updatedSources = [...prevSources];
				updatedSources[2] = {
					...updatedSources[2],
					label: source3Name,
				};
				return updatedSources;
			});
		}
	}, [source3Name, setSources]);

	React.useEffect(() => {
		if (source4Name !== undefined) {
			setSources((prevSources) => {
				const updatedSources = [...prevSources];
				updatedSources[3] = {
					...updatedSources[3],
					label: source4Name,
				};
				return updatedSources;
			});
		}
	}, [source4Name, setSources]);

	React.useEffect(() => {
		if (source5Name !== undefined) {
			setSources((prevSources) => {
				const updatedSources = [...prevSources];
				updatedSources[4] = {
					...updatedSources[4],
					label: source5Name,
				};
				return updatedSources;
			});
		}
	}, [source5Name, setSources]);

	React.useEffect(() => {
		if (source6Name !== undefined) {
			setSources((prevSources) => {
				const updatedSources = [...prevSources];
				updatedSources[5] = {
					...updatedSources[5],
					label: source6Name,
				};
				return updatedSources;
			});
		}
	}, [source6Name, setSources]);

	React.useEffect(() => {
		if (source7Name !== undefined) {
			setSources((prevSources) => {
				const updatedSources = [...prevSources];
				updatedSources[6] = {
					...updatedSources[6],
					label: source7Name,
				};
				return updatedSources;
			});
		}
	}, [source7Name, setSources]);

	React.useEffect(() => {
		if (source8Name !== undefined) {
			setSources((prevSources) => {
				const updatedSources = [...prevSources];
				updatedSources[7] = {
					...updatedSources[7],
					label: source8Name,
				};
				return updatedSources;
			});
		}
	}, [source8Name, setSources]);

	React.useEffect(() => {
		if (source9Name !== undefined) {
			setSources((prevSources) => {
				const updatedSources = [...prevSources];
				updatedSources[8] = {
					...updatedSources[8],
					label: source9Name,
				};
				return updatedSources;
			});
		}
	}, [source9Name, setSources]);

	React.useEffect(() => {
		if (source10Name !== undefined) {
			setSources((prevSources) => {
				const updatedSources = [...prevSources];
				updatedSources[9] = {
					...updatedSources[9],
					label: source10Name,
				};
				return updatedSources;
			});
		}
	}, [source10Name, setSources]);

	React.useEffect(() => {
		if (source11Name !== undefined) {
			setSources((prevSources) => {
				const updatedSources = [...prevSources];
				updatedSources[10] = {
					...updatedSources[10],
					label: source11Name,
				};
				return updatedSources;
			});
		}
	}, [source11Name, setSources]);

	React.useEffect(() => {
		if (source12Name !== undefined) {
			setSources((prevSources) => {
				const updatedSources = [...prevSources];
				updatedSources[11] = {
					...updatedSources[11],
					label: source12Name,
				};
				return updatedSources;
			});
		}
	}, [source12Name, setSources]);

	React.useEffect(() => {
		if (source13Name !== undefined) {
			setSources((prevSources) => {
				const updatedSources = [...prevSources];
				updatedSources[12] = {
					...updatedSources[12],
					label: source13Name,
				};
				return updatedSources;
			});
		}
	}, [source13Name, setSources]);

	React.useEffect(() => {
		if (source14Name !== undefined) {
			setSources((prevSources) => {
				const updatedSources = [...prevSources];
				updatedSources[13] = {
					...updatedSources[13],
					label: source14Name,
				};
				return updatedSources;
			});
		}
	}, [source14Name, setSources]);

	React.useEffect(() => {
		if (source15Name !== undefined) {
			setSources((prevSources) => {
				const updatedSources = [...prevSources];
				updatedSources[14] = {
					...updatedSources[14],
					label: source15Name,
				};
				return updatedSources;
			});
		}
	}, [source15Name, setSources]);

	React.useEffect(() => {
		if (source16Name !== undefined) {
			setSources((prevSources) => {
				const updatedSources = [...prevSources];
				updatedSources[15] = {
					...updatedSources[15],
					label: source16Name,
				};
				return updatedSources;
			});
		}
	}, [source16Name, setSources]);

	React.useEffect(() => {
		if (source17Name !== undefined) {
			setSources((prevSources) => {
				const updatedSources = [...prevSources];
				updatedSources[16] = {
					...updatedSources[16],
					label: source17Name,
				};
				return updatedSources;
			});
		}
	}, [source17Name, setSources]);

	React.useEffect(() => {
		if (source18Name !== undefined) {
			setSources((prevSources) => {
				const updatedSources = [...prevSources];
				updatedSources[17] = {
					...updatedSources[17],
					label: source18Name,
				};
				return updatedSources;
			});
		}
	}, [source18Name, setSources]);

	React.useEffect(() => {
		if (source19Name !== undefined) {
			setSources((prevSources) => {
				const updatedSources = [...prevSources];
				updatedSources[18] = {
					...updatedSources[18],
					label: source19Name,
				};
				return updatedSources;
			});
		}
	}, [source19Name, setSources]);

	React.useEffect(() => {
		if (source20Name !== undefined) {
			setSources((prevSources) => {
				const updatedSources = [...prevSources];
				updatedSources[19] = {
					...updatedSources[19],
					label: source20Name,
				};
				return updatedSources;
			});
		}
	}, [source20Name, setSources]);

	React.useEffect(() => {
		if (source21Name !== undefined) {
			setSources((prevSources) => {
				const updatedSources = [...prevSources];
				updatedSources[20] = {
					...updatedSources[20],
					label: source21Name,
				};
				return updatedSources;
			});
		}
	}, [source21Name, setSources]);

	React.useEffect(() => {
		if (source22Name !== undefined) {
			setSources((prevSources) => {
				const updatedSources = [...prevSources];
				updatedSources[21] = {
					...updatedSources[21],
					label: source22Name,
				};
				return updatedSources;
			});
		}
	}, [source22Name, setSources]);

	React.useEffect(() => {
		if (source23Name !== undefined) {
			setSources((prevSources) => {
				const updatedSources = [...prevSources];
				updatedSources[22] = {
					...updatedSources[22],
					label: source23Name,
				};
				return updatedSources;
			});
		}
	}, [source23Name, setSources]);

	React.useEffect(() => {
		if (source24Name !== undefined) {
			setSources((prevSources) => {
				const updatedSources = [...prevSources];
				updatedSources[23] = {
					...updatedSources[23],
					label: source24Name,
				};
				return updatedSources;
			});
		}
	}, [source24Name, setSources]);

	return <></>;
};

export default SourceStateManager;
