/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react';
import { enqueueSnackbar } from 'notistack';

type WebXPanelConfig = {
	host: string;
	ipId: string;
	roomId?: string;
	authToken?: string;
};

const useWebXPanel = (params: WebXPanelConfig) => {
	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		const { WebXPanel, isActive, WebXPanelEvents } =
			window.WebXPanel.getWebXPanel(
				!window.WebXPanel.runsInContainerApp()
			);

		setIsActive(isActive);

		const config: Partial<
			ReturnType<
				typeof window.WebXPanel.getWebXPanel
			>['WebXPanelConfigParams']
		> = params;

		if (isActive) {
			console.log(
				'Initializing XPanel with config: ' + JSON.stringify(config)
			);
			WebXPanel.initialize(config);

			const connectWsListener = () => {
				console.log('WebXPanel websocket connection success');
				enqueueSnackbar('WebXPanel websocket connection success!', {
					variant: 'success',
					autoHideDuration: 3000,
				});
			};

			const errorWsListener = ({ detail }: any) => {
				enqueueSnackbar('WebXPanel websocket connection error!', {
					variant: 'error',
					autoHideDuration: 3000,
				});
				console.log(
					`WebXPanel websocket connection error: ${JSON.stringify(
						detail,
						null,
						2
					)}`
				);
			};

			const connectCipListener = () => {
				enqueueSnackbar('Control system connection established!', {
					variant: 'success',
					autoHideDuration: 3000,
				});
			};

			const authenticationFailedListener = ({ detail }: any) => {
				enqueueSnackbar('WebXPanel authentication failed!', {
					variant: 'error',
					autoHideDuration: 3000,
				});
				console.log(
					`WebXPanel authentication failed: ${JSON.stringify(
						detail,
						null,
						2
					)}`
				);
			};

			const notAuthorizedListener = ({ detail }: any) => {
				enqueueSnackbar('WebXPanel not authorized!', {
					variant: 'error',
					autoHideDuration: 3000,
				});
				console.log(
					`WebXPanel not authorized: ${JSON.stringify(
						detail,
						null,
						2
					)}`
				);
				window.location = detail.redirectTo;
			};

			const disconnectWsListener = ({ detail }: any) => {
				enqueueSnackbar('WebXPanel websocket connection lost!', {
					variant: 'error',
					autoHideDuration: 3000,
				});
				console.log(
					`WebXPanel websocket connection lost: ${JSON.stringify(
						detail,
						null,
						2
					)}`
				);
			};

			const disconnectCipListener = ({ detail }: any) => {
				enqueueSnackbar('WebXPanel CIP connection lost!', {
					variant: 'error',
					autoHideDuration: 3000,
				});
				console.log(
					`WebXPanel CIP connection lost: ${JSON.stringify(
						detail,
						null,
						2
					)}`
				);
			};

			// Adding event listeners
			window.addEventListener(
				WebXPanelEvents.CONNECT_WS,
				connectWsListener
			);
			window.addEventListener(WebXPanelEvents.ERROR_WS, errorWsListener);
			window.addEventListener(
				WebXPanelEvents.CONNECT_CIP,
				connectCipListener
			);
			window.addEventListener(
				WebXPanelEvents.AUTHENTICATION_FAILED,
				authenticationFailedListener
			);
			window.addEventListener(
				WebXPanelEvents.NOT_AUTHORIZED,
				notAuthorizedListener
			);
			window.addEventListener(
				WebXPanelEvents.DISCONNECT_WS,
				disconnectWsListener
			);
			window.addEventListener(
				WebXPanelEvents.DISCONNECT_CIP,
				disconnectCipListener
			);

			// Cleanup function
			return () => {
				window.removeEventListener(
					WebXPanelEvents.CONNECT_WS,
					connectWsListener
				);
				window.removeEventListener(
					WebXPanelEvents.ERROR_WS,
					errorWsListener
				);
				window.removeEventListener(
					WebXPanelEvents.CONNECT_CIP,
					connectCipListener
				);
				window.removeEventListener(
					WebXPanelEvents.AUTHENTICATION_FAILED,
					authenticationFailedListener
				);
				window.removeEventListener(
					WebXPanelEvents.NOT_AUTHORIZED,
					notAuthorizedListener
				);
				window.removeEventListener(
					WebXPanelEvents.DISCONNECT_WS,
					disconnectWsListener
				);
				window.removeEventListener(
					WebXPanelEvents.DISCONNECT_CIP,
					disconnectCipListener
				);
			};
		}
	}, [params]);

	return { isActive };
};

export default useWebXPanel;
