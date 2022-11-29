import { useFPClient } from 'featureprobe-client-sdk-react';


function HookComponent() {
  const client = useFPClient();
  return (
    <div style={{marginTop: '20px'}}>
      <div>Hook</div>
      <samp>{`console.log(JSON.stringify(client.boolDetail('demo_features')))`}</samp>
      <div>{JSON.stringify(client.boolDetail('demo_features'))}</div>
    </div>
  );
}

export default HookComponent;
