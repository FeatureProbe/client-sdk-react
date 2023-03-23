import { FeatureProbe, FPConfig, FPDetail } from 'featureprobe-client-sdk-js';

export interface IContext {
  client?: FeatureProbe,
  toggles?: { [key: string]: FPDetail } | undefined,
}

export interface IProviderProps {
  config?: FPConfig,
  FPClient?: FeatureProbe,
}