import { useContext } from 'react';
import FPContext from './context';

const useFPClient = () => {
  const { client } = useContext(FPContext);
  return client;
};

export default useFPClient;
