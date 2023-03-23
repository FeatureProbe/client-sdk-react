import FPProvider from './provider';
import useFPClient from './useFPClient';
import useFPToggles from './useFPToggles';
import { withFPConsumer } from './withFPConsumer';
import AsyncFPProvider from './asyncFPProvider';
import { getPlatform, initializePlatform } from 'featureprobe-client-sdk-js';
import { version } from '../package.json';

export { FeatureProbe, FPUser } from 'featureprobe-client-sdk-js';
export type { FPDetail, FPConfig, FPStorageProvider } from 'featureprobe-client-sdk-js';

initializePlatform({
  platform: {
    ...getPlatform(),
    UA: 'REACT/' + version,
  }
});

export {
  FPProvider,
  AsyncFPProvider,
  useFPClient,
  useFPToggles,
  withFPConsumer,
}