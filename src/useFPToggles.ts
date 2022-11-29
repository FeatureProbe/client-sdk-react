import { useContext } from 'react';
import FPContext from './context';

const useFPToggles = () => {
  const { toggles } = useContext(FPContext);
  return toggles;
};

export default useFPToggles;
