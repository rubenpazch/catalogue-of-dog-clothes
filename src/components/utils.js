import { getStates, getCategorizedStates } from '../static_data/data';

export function matchStateToTerm(state, value) {
  return (
    state.city.toLowerCase().indexOf(value.toLowerCase()) !== -1
  );
}

export function matchStateToTermWithHeaders(state, value) {
  return (
    state.header
    || state.city.toLowerCase().indexOf(value.toLowerCase()) !== -1
  );
}

/**
 * An example of how to implement a relevancy-based sorting method. States are
 * sorted based on the location of the match - For example, a search for "or"
 * will return "Oregon" before "North Carolina" even though "North Carolina"
 * would normally sort above Oregon. Strings where the match is in the same
 * location (or there is no match) will be sorted alphabetically - For example,
 * a search for "or" would return "North Carolina" above "North Dakota".
 */
export function sortStates(a, b, value) {
  const aLower = a.city.toLowerCase();
  const bLower = b.city.toLowerCase();
  const valueLower = value.toLowerCase();
  const queryPosA = aLower.indexOf(valueLower);
  const queryPosB = bLower.indexOf(valueLower);
  if (queryPosA !== queryPosB) {
    return queryPosA - queryPosB;
  }
  return aLower < bLower ? -1 : 1;
}

export function fakeRequest(value, cb) {
  return setTimeout(cb, 500, value
    ? getStates().filter(state => matchStateToTerm(state, value))
    : getStates());
}

export function fakeCategorizedRequest(value, cb) {
  setTimeout(cb, 500, value
    ? getCategorizedStates().filter(state => matchStateToTermWithHeaders(state, value))
    : getCategorizedStates());
}
