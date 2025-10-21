import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import Application from './components/Application';
import store from './store';

// Create main element
const mainElement = document.createElement('div');
document.body.appendChild(mainElement);

// Render components using React 18 createRoot API
const root = createRoot(mainElement);
root.render(
    <StrictMode>
        <Provider store={store}>
            <Application />
        </Provider>
    </StrictMode>,
);
