import kegListReducer from '../../reducers/keg-list-reducer';
import * as c from '../../actions/ActionTypes';

describe('keg list reducer', () => {

  let action;
  const currentState ={
    1 : {
      names: 'henry whine herds',
      brand: 'ipa',
      price: 350,
      alcoholContent: 12.0,
      pintsLeft: 124,
      id: 1 },
    2: {
      names: 'rubinator',
      brand: 'edgefiled',
      price: 225,
      alcoholContent: 9.0,
      pintsLeft: 100,
      id: 2,
    }
  };


  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(kegListReducer({}, { type: null })).toEqual({});
  });


  test('Should successfully add new keg data to masterKegList', () => {
      const { names, brand, price, alcoholContent, pintsLeft, id } = currentState;
      action = {
        type: c.ADD_KEG,
        names: names,
        brand: brand,
        price: price,
        alcoholContent: alcoholContent,
        pintsLeft: pintsLeft,
        id: id
      };

    expect(kegListReducer({}, action)).toEqual({
      [id] : {
        names: names,
        brand: brand,
        price: price,
        alcoholContent: alcoholContent,
        pintsLeft: pintsLeft,
        id: id
      }
    });
  });

  test('Should successfully delete a keg', () => {
    action = {
      type: c.DELETE_KEG,
      id: 1
    };
    expect(kegListReducer(currentState, action)).toEqual({
      2: {
        names: 'rubinator',
        brand: 'edgefiled',
        price: 225,
        alcoholContent: 9.0,
        pintsLeft: 100,
        id: 2,
      }
    });
  });
});


