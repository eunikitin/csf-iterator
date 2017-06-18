import data from './data';


export default () => {
  const aoa = [];

  aoa[2] = [];
  aoa[3] = [];
  aoa[2][2] = data().C3;
  aoa[2][3] = data().D3;
  aoa[3][2] = data().C4;
  aoa[3][3] = data().D4;

  return aoa;
};
