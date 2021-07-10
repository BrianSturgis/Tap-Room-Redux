import * as c from './ActionTypes';

export const addKeg = (keg) => {
  const { names, brand, price, alcoholContent, pintsLeft, id } = keg;
  return {
    type: c.ADD_KEG,
    names,
    brand,
    price,
    alcoholContent,
    pintsLeft,
    id
  }
}

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const deleteKeg = id => ({
  type: c.DELETE_KEG,
  id
});
