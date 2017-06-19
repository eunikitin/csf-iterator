import sheet from '../../sheet/2x2-offset/sheet';


export default () => {
  const object = {
    position: {
      column: 3,
      row: 3,
    },
  };

  object.sheet = sheet();

  return object;
};
