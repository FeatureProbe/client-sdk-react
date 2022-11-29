import { FPProvider, FPUser } from 'featureprobe-client-sdk-react';
import HocComponent from './components/HocComponent';
import HookComponent from './components/HookComponent';

import './App.css';

function App() {
  return (
    <FPProvider 
      config={{
        togglesUrl: window.location.origin + '/server/api/client-sdk/toggles',
        eventsUrl:  window.location.origin + '/server/api/events',
        clientSdkKey: 'client-29765c7e03e9cb49c0e96357b797b1e47e7f2dee',
        user: new FPUser(),
        refreshInterval: 3000,
      }}
    >
      <div className="App">
        <div>FeatureProbe Client SDK for React</div>
        <div>Provider</div>
        <HocComponent />
        <HookComponent />
      </div>
    </FPProvider>
  );
}

export default App;
