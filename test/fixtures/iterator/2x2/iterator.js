import sheet from '../../sheet/2x2/sheet';


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
