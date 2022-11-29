import { FeatureProbe, FPDetail } from 'featureprobe-client-sdk-js';
import FPContext from './context';
import { IProviderProps } from './types';

import React, {
  FC,
  PropsWithChildren,
  useEffect,
  useState,
  useRef
} from 'react';

const FPProvider: FC<PropsWithChildren<IProviderProps>> = ({
  config,
  children,
  FPClient
}) => {
  let client = useRef<FeatureProbe>();
  const [toggles, saveToggles] = useState<{ [key: string]: FPDetail; } | undefined>();

  if (!config && !FPClient) {
    throw new Error('config or FPClient is required');
  }

  if (FPClient) {
    client.current = FPClient;
  }

  if (!client.current && config) {
    client.current = new FeatureProbe(config);
  }

  useEffect(() => {
    client.current?.stop();
    client.current?.start();

    client.current?.on('update', () => {
      saveToggles(client.current?.allToggles());
    }); 

    return function cleanup() {
      client.current?.off('update', () => {});
      client.current?.stop();
    };
  }, []);

  return (
    <FPContext.Provider 
      value={{
        client: client.current,
        toggles
      }}
    >
      {children}
    </FPContext.Provider>
  );
};

export default FPProvider;
