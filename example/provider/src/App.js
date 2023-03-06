import { FPProvider, FPUser } from 'featureprobe-client-sdk-react';
import HocComponent from './components/HocComponent';
import HookComponent from './components/HookComponent';

import './App.css';

function App() {
  return (
    <FPProvider 
      config={{
        remoteUrl: window.location.origin + '/server',
        clientSdkKey: 'client-f0181852abb20940113fb22f6efd9297cbd05577',
        user: new FPUser(),
        refreshInterval: 5000,
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
