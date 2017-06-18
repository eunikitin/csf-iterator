import sheet from '../../sheet/5x2/sheet';


export default () => {
  const object = {
    position: {
      column: 1,
      row: 1,
    },
  };

  object.sheet = sheet();

  return object;
};
