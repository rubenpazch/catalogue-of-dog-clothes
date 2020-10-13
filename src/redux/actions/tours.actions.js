import * as actionsTypes from '../actionsType';

const getToursAsync = result => ({
  type: actionsTypes.FETCH_TOURS_SUCCESS,
  tours: result,
});

export default getToursAsync;
