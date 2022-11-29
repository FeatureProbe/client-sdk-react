import React, { ReactNode } from 'react'
import { FeatureProbe, FPDetail, FPConfig } from 'featureprobe-client-sdk-js';
import FPContext from './context';

export default async function AsyncFPProvider(config: FPConfig) {
  let toggles: { [key: string]: FPDetail; } | undefined;
  const client = new FeatureProbe(config);

  client.on('update', () => {
    toggles = client.allToggles();
  });

  client.start();

  await client.waitUntilReady();
  toggles = client.allToggles();

  const FPProvider = ({ children }: { children: ReactNode }) => {
    return (
      <FPContext.Provider 
        value={{
          client: client,
          toggles
        }}
      >
        {children}
      </FPContext.Provider>
    );
  };

  return FPProvider;
}
