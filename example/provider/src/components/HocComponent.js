import { withFPConsumer } from 'featureprobe-client-sdk-react';

function HocComponent(props) {
  return (
    <div style={{marginTop: '20px'}}>
      <div>HOC</div>
      <samp>{`console.log(props.toggles)`}</samp>
      <div>{JSON.stringify(props.toggles)}</div>
    </div>
  );
}

export default withFPConsumer(HocComponent);
