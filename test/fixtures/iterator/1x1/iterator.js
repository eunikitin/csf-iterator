import sheet from '../../sheet/1x1/sheet';


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
