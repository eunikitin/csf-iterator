import data from './data';
import aoa from './data-aoa';


export default () => {
  const object = {
    sheet: {
      width: 4,
      height: 4,
    },
    content: {
      width: 2,
      height: 2,
    },
    first: {
      column: 3,
      row: 3,
    },
    last: {
      column: 4,
      row: 4,
    },
  };

  object.data = data();
  object.aoa = aoa();

  return object;
};
