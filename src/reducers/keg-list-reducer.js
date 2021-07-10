/* eslint-disable import/no-anonymous-default-export */
import * as c from "./../actions/ActionTypes";

export default (state = {}, action) => {
  const { names, brand, price, alcoholContent, pintsLeft, id } = action;
  switch (action.type) {
	case c.ADD_KEG:
		return Object.assign({}, state, {
			[id]: {
				names: names,
				brand: brand,
				price: price,
				alcoholContent: alcoholContent,
				pintsLeft: pintsLeft,
				id: id
			}
		});
	case c.DELETE_KEG:
		const newState = { ...state };
		delete newState[id];
		return newState;
	default:
		return state;
  }
};