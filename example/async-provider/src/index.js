import React from 'react';
import ReactDOM from 'react-dom/client';
import { AsyncFPProvider, FPUser } from 'featureprobe-client-sdk-react';

import App from './App';
import './index.css';

(async () => {
  const FPProvider = await AsyncFPProvider({
    togglesUrl: window.location.origin + '/server/api/client-sdk/toggles',
    eventsUrl:  window.location.origin + '/server/api/events',
    clientSdkKey: 'client-29765c7e03e9cb49c0e96357b797b1e47e7f2dee',
    user: new FPUser(),
    refreshInterval: 3000,
  });

  const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(
    <React.StrictMode>
      <FPProvider>
        <App />
      </FPProvider>
    </React.StrictMode>
  );
})();
