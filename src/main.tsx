import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/pro-solid-svg-icons';
import { far } from '@fortawesome/pro-regular-svg-icons';
import { fal } from '@fortawesome/pro-light-svg-icons';
import { fat } from '@fortawesome/pro-thin-svg-icons';
import { fad } from '@fortawesome/pro-duotone-svg-icons';
import { fass } from '@fortawesome/sharp-solid-svg-icons';
import { fasr } from '@fortawesome/sharp-regular-svg-icons';
import { fasl } from '@fortawesome/sharp-light-svg-icons';
import { fast } from '@fortawesome/sharp-thin-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(fab, fas, far, fal, fat, fad, fass, fasr, fasl, fast);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App />
	</StrictMode>
);
