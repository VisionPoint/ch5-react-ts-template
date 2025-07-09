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
import SourceStateManager from './components/SourceStateManager';
import SplashPage from './pages/SplashPage';

// Initialize eruda for panel/app debugging capabilities (in dev mode only)
if (import.meta.env.VITE_APP_ENV === 'development') {
	import('eruda').then(({ default: eruda }) => {
		eruda.init();
	});
}

const router = createRouter([
	{
		path: '/splash',
		element: <SplashPage />,
	},
	{
		path: '/',
		element: <AppLayout />,
		children: [
			{
				path: 'test1',
				element: <Typography>Test Page</Typography>,
			},
			{
				path: 'seat5',
				element: <Seat5Page />,
			},
			{
				path: 'supervisor',
				element: <SupervisorPage />,
			},
			{
				path: 'admin',
				element: <AdminPage />,
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

	const visionPointTheme = createTheme({
		palette: {
			mode: 'dark',
			primary: {
				main: '#BF97C6',
			},
			secondary: {
				main: '#F15D22',
			},
		},
	});

	const zoomTheme = createTheme({
		palette: {
			mode: 'light',
			primary: {
				main: '#0E72ED',
			},
			secondary: {
				main: '#F26D21',
			},
		},
	});

	const clientTheme = createTheme({
		palette: {
			mode: 'dark',
			primary: {
				main: '#1E2A44',
			},
			secondary: {
				main: '#12A8DF',
			},
		},
	});

	return (
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={visionPointTheme}>
				<CssBaseline enableColorScheme />
				<SourceStateManager />
				<RouterProvider router={router} />
			</ThemeProvider>
		</StyledEngineProvider>
	);
}

export default App;
