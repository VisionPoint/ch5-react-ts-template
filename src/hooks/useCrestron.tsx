import * as React from 'react';

export declare type IBaseState<T> = T;
export declare type IBaseEventAction<T> = (value: T) => void;

export declare type IBaseSignal<TState, TAction> = [TState, TAction];
export declare type StateCallback<T> = (value: T, signalName?: string) => void;

export function useCrestronPublish<T extends number | string | boolean>(
	signalType: 'number' | 'string' | 'boolean',
	signalName: string
): IBaseEventAction<T> {
	return (value: T) =>
		window.CrComLib.publishEvent(signalType, signalName, value);
}

export function useCrestronSubscribe<T extends number | string | boolean>(
	signalType: 'number' | 'string' | 'boolean',
	signalName: string,
	callback?: StateCallback<T>
): IBaseState<T> {
	const [state, setState] = React.useState<T>(
		(signalType === 'number'
			? 0
			: signalType === 'string'
			? ''
			: false) as T
	);
	const callbackRef = React.useRef<StateCallback<T> | undefined>(undefined);

	React.useEffect(() => {
		callbackRef.current = callback;
	}, [callback]);

	React.useEffect(() => {
		const id = window.CrComLib.subscribeState(
			signalType,
			signalName,
			(value: T) => {
				setState(value);

				if (callbackRef.current) {
					callbackRef.current(value, signalName);
				}
			}
		);

		return () => {
			window.CrComLib.unsubscribeState(signalType, signalName, id);
		};
	}, [signalType, signalName]);

	return state;
}

export function useCrestronSignal<T extends number | string | boolean>(
	signalType: 'number' | 'string' | 'boolean',
	signalName: string,
	callback?: StateCallback<T>
): IBaseSignal<IBaseState<T>, IBaseEventAction<T>> {
	const state = useCrestronSubscribe(signalType, signalName, callback);
	const action = useCrestronPublish(signalType, signalName);

	return [state, action];
}
