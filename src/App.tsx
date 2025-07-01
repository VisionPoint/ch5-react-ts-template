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
	lighten,
} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppLayout from './components/AppLayout';

// Pages
import AdminPage from './pages/AdminPage';
import Seat1Page from './pages/Seat1Page';
import Seat2Page from './pages/Seat2Page';
import Seat3Page from './pages/Seat3Page';
import Seat4Page from './pages/Seat4Page';
import Seat5Page from './pages/Seat5Page';
import SupervisorPage from './pages/SuperVisorPage';

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
				path: 'seat1',
				element: <Seat1Page />,
			},
			{
				path: 'seat2',
				element: <Seat2Page />,
			},
			{
				path: 'seat3',
				element: <Seat3Page />,
			},
			{
				path: 'seat4',
				element: <Seat4Page />,
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

	return (
		<StyledEngineProvider injectFirst>
			<ThemeProvider
				theme={createTheme({
					palette: {
						mode: 'dark',
						primary: {
							main: '#1E2A44', // Lighten the primary color for better contrast
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
					mixins: {
						toolbar: {
							minHeight: 100,
							'@media (min-width:0px) and (orientation: landscape)':
								{
									minHeight: 100,
								},
							'@media (min-width:600px)': {
								minHeight: 100,
							},
						},
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
