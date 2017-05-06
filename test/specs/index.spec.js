import { expect } from 'chai';

import Library from 'Src/index';
import Iterator from 'Src/iterator';
import Sheet from 'Src/sheet';


describe('library', () => {
  it('should return Sheet', () => {
    expect(Library).to.equal(Sheet);
  });

  it('should return Iterator as subobject of Sheet', () => {
    expect(Library.Iterator).to.equal(Iterator);
  });
});
