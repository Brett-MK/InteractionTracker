import { CircularProgress } from '@material-ui/core';

const CircularProgressIndicator = () => (
  <div style={{
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }}
  >
    <CircularProgress />
  </div>
);

export default CircularProgressIndicator;
