export const BEST_PUP_UPDATED = 'BEST_PUP_UPDATED';

// Action creators create actions that are passed along to reducers and
// middleware! These may seem redundant, but the bigger our apps get,
// the more important action conformity will be for stability.
export const updateBestPup = newBestPup => ({
  type: BEST_PUP_UPDATED,
  newBestPup,
});
