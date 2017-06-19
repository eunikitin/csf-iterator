import sheet from '../../sheet/1x1-offset/sheet';


export default () => {
  const object = {
    position: {
      column: 2,
      row: 2,
    },
  };

  object.sheet = sheet();

  return object;
};
