import data from './data';
import aoa from './data-aoa';


export default () => {
  const object = {
    sheet: {
      width: 2,
      height: 2,
    },
    content: {
      width: 1,
      height: 1,
    },
    first: {
      column: 2,
      row: 2,
    },
    last: {
      column: 2,
      row: 2,
    },
  };

  object.data = data();
  object.aoa = aoa();

  return object;
};
