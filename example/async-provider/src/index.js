import React from 'react';
import ReactDOM from 'react-dom/client';
import { AsyncFPProvider, FPUser } from 'featureprobe-client-sdk-react';

import App from './App';
import './index.css';

(async () => {
  const FPProvider = await AsyncFPProvider({
    togglesUrl: window.location.origin + '/server/api/client-sdk/toggles',
    eventsUrl:  window.location.origin + '/server/api/events',
    clientSdkKey: 'client-f0181852abb20940113fb22f6efd9297cbd05577',
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
