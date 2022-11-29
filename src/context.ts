import { createContext } from 'react';
import { IContext } from './types';

const FPContext = createContext<IContext>(null as never);

export default FPContext;
