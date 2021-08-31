import * as actions from '../../actions/index';
import * as c from '../../actions/ActionTypes';

describe('tap room actions', () => {
  it('addKeg should create ADD_KEG action', () => {
    expect(actions.addKeg({name: 'Tyrannical IPA', brand: 'Fort George',priceByKeg: 120, alcoholContent: 8.4, pintsLeft: 124, id: 1})).toEqual({
      type: c.ADD_KEG,
      name: 'Tyrannical IPA',
      brand: 'Fort George',
      priceByKeg: 120,
      alcoholContent: 8.4,
      pintsLeft: 124,
      id: 1
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });

  it('deleteKeg should create DELETE_KEG action', () => {
    expect(actions.deleteKeg(1)).toEqual({
      type: c.DELETE_KEG,
      id: 1
    });
  });
});