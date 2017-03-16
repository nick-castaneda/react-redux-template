
// Action creators create actions that are passed along to reducers and
// middleware! These may seem redundant, but the bigger our apps get,
// the more important action conformity will be for stability.
export function newLandos(lando) {
  const action = {
    type: 'NEW_LANDO',
    lando: lando
  }
  console.log(action);
  return action;
}
