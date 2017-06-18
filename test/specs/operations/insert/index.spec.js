import { expect } from 'chai';

import insert from 'Src/operations/insert';


it('should export row function', () => {
  expect(insert.row).to.be.a('function');
});
