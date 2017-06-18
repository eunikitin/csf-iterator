import data from './data';
import aoa from './data-aoa';


export default () => {
  const object = {
    sheet: {
      width: 5,
      height: 2,
    },
    content: {
      width: 5,
      height: 2,
    },
    first: {
      column: 1,
      row: 1,
    },
    last: {
      column: 5,
      row: 2,
    },
  };

  object.aoa = aoa();
  object.data = data();

  return object;
};

