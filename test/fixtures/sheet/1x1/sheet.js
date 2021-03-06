import data from './data';
import aoa from './data-aoa';


export default () => {
  const object = {
    sheet: {
      width: 1,
      height: 1,
    },
    content: {
      width: 1,
      height: 1,
    },
    first: {
      column: 1,
      row: 1,
    },
    last: {
      column: 1,
      row: 1,
    },
  };

  object.data = data();
  object.aoa = aoa();

  return object;
};
