import { useFPClient } from 'featureprobe-client-sdk-react';

function HookComponent() {
  const client = useFPClient();
  return (
    <div style={{marginTop: '20px'}}>
      <div>Hook</div>
      <samp>{`console.log(JSON.stringify(client.boolDetail('campaign_allow_list')))`}</samp>
      <div>{JSON.stringify(client.boolDetail('campaign_allow_list'))}</div>
    </div>
  );
}

export default HookComponent;
