import DEV from './develop';
import PROD from './production';
import TEST from './test';

const setConfiguration = () => {
  if (process.env.NODE_ENV === 'producton') {
    process.env.NODE_ENV = PROD.NODE_ENV;
    return PROD;
  }
  if (process.env.NODE_ENV === 'test') {
    process.env.NODE_ENV = TEST.NODE_ENV;
    return TEST;
  }
  process.env.NODE_ENV = DEV.NODE_ENV;
  return DEV;
};

export default setConfiguration();
