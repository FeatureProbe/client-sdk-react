import React from 'react';
import { render } from '@testing-library/react';
import { FPConfig, FPUser } from 'featureprobe-client-sdk-js';
import '@testing-library/jest-dom';
import { FetchMock } from "jest-fetch-mock";
import * as data from "./fixtures/toggles.json";
import { AsyncFPProvider, withFPConsumer } from '../src';

const givenConfig: FPConfig = {
  clientSdkKey: 'my-app',
  user: new FPUser(),
  remoteUrl: 'http://127.0.0.1:4007',
  enableAutoReporting: false,
};

const _fetch = fetch as FetchMock;

test('should start SDK with AsyncFPProvider successfully', async () => {
  _fetch.mockResponseOnce(JSON.stringify(data));
  const providerProps = {
    config: givenConfig,
  };

  const App = withFPConsumer((props) => {
    const { toggles } = props;
    return (
      <span>Received: {JSON.stringify(toggles)}</span>
    );
  });

  const FPProvider = await AsyncFPProvider(providerProps.config);
  const { container } = render(
    <FPProvider>
      <App />
    </FPProvider>
  );

  expect(container).toMatchSnapshot();
});





