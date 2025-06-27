import {
	RouterProvider,
	createMemoryRouter as createRouter,
} from 'react-router-dom';
import { useMemo } from 'react';
import useWebXPanel from './hooks/useWebXPanel';
import {
	createTheme,
	ThemeProvider,
	StyledEngineProvider,
} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppLayout from './components/AppLayout';
import Typography from '@mui/material/Typography';

// Initialize eruda for panel/app debugging capabilities (in dev mode only)
if (import.meta.env.VITE_APP_ENV === 'development') {
	import('eruda').then(({ default: eruda }) => {
		eruda.init();
	});
}

const router = createRouter([
	{
		path: '/splash',
		element: <>Splash Screen</>,
	},
	{
		path: '/',
		element: <AppLayout />,
		children: [
			{
				path: 'test',
				element: <Typography>Test Page</Typography>,
			},
			{
				path: 'test2',
				element: <Typography>Test Page 2</Typography>,
			},
		],
	},
]);

function App() {
	const webXPanelConfig = useMemo(
		() => ({
			ipId: import.meta.env.VITE_PANEL_IP_ID,
			host: import.meta.env.VITE_PROCESSOR_IP,
			//roomId: '',
			authToken: import.meta.env.VITE_PROCESSOR_AUTH_TOKEN,
		}),
		[]
	); // Dependencies array is empty, so this object is created only once

	useWebXPanel(webXPanelConfig);

	return (
		<StyledEngineProvider injectFirst>
			<ThemeProvider
				theme={createTheme({
					palette: {
						mode: 'dark',
						primary: {
							main: '#1E2A44',
						},
						secondary: {
							main: '#12A8DF',
						},
						// background: {
						// 	default: 'rgb(247,247,252)',
						// 	paper: '#FFFFFF',
						// },
						// text: {
						// 	primary: 'rgba(0, 0, 0, 0.87)',
						// 	secondary: 'rgba(0, 0, 0, 0.87) !important',
						// },
					},
				})}
			>
				<CssBaseline enableColorScheme />
				<RouterProvider router={router} />
			</ThemeProvider>
		</StyledEngineProvider>
	);
}

export default App;
