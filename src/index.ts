import FPProvider from './provider';
import useFPClient from './useFPClient';
import useFPToggles from './useFPToggles';
import { withFPConsumer } from './withFPConsumer';
import AsyncFPProvider from './asyncFPProvider';

export { FeatureProbe, FPUser } from 'featureprobe-client-sdk-js';
export type { FPDetail, FPConfig, FPStorageProvider } from 'featureprobe-client-sdk-js';

export {
  FPProvider,
  AsyncFPProvider,
  useFPClient,
  useFPToggles,
  withFPConsumer,
}