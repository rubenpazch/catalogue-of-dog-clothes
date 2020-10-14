import * as actionsTypes from '../actionsType';

const getToursAsync = result => ({
  type: actionsTypes.FETCH_TOURS_SUCCESS,
  tours: result,
});

/* const getGetToken = result => ({
  type: actionsTypes.FETCH_TOKEN,
  token: result,
}); */

export default getToursAsync;
