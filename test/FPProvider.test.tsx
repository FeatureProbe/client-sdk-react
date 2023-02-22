import React from 'react';
import { render, screen } from '@testing-library/react';
import { FeatureProbe, FPConfig, FPUser } from 'featureprobe-client-sdk-js';
import '@testing-library/jest-dom';
import { FetchMock } from "jest-fetch-mock";
import FPProvider from '../src/provider';
import * as data from "./fixtures/toggles.json";

const givenConfig: FPConfig = {
  clientSdkKey: 'my-app',
  user: new FPUser(),
  remoteUrl: 'http://127.0.0.1:4007',
  enableAutoReporting: false,
};

const _fetch = fetch as FetchMock;

test('should start SDK with config successfully', () => {
  _fetch.mockResponseOnce(JSON.stringify(data));
  const providerProps = {
    config: givenConfig,
  };

  const { container } = render(
    <FPProvider config={providerProps.config}>
      <div>abc</div>
    </FPProvider>
  );

  expect(container).toMatchSnapshot();
});

test('should start SDK with FPClient successfully', () => {
  _fetch.mockResponseOnce(JSON.stringify(data));
  const providerProps = {
    config: givenConfig,
  };

  const client = new FeatureProbe(providerProps.config);

  const { container } = render(
    <FPProvider FPClient={client}>
      <div>FeatureProbe</div>
    </FPProvider>
  );

  expect(container).toMatchSnapshot();
});
