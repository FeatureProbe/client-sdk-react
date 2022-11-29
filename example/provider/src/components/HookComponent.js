import { useFPToggles } from 'featureprobe-client-sdk-react';

function HookComponent() {
  const toggles = useFPToggles();
  return (
    <div style={{marginTop: '20px'}}>
      <div>Hook</div>
      <samp>{`console.log(useFPToggles())`}</samp>
      <samp>{``}</samp>
      <div>{JSON.stringify(toggles)}</div>
    </div>
  );
}

export default HookComponent;
