import data from './data';


export default () => {
  const aoa = [];

  aoa[0] = [data().A1, data().B1];
  aoa[1] = [data().A2, data().B2];

  return aoa;
};
