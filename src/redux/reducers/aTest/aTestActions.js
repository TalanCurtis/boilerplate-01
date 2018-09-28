// Types
export const UPDATE_ATEST = "UPDATE_ATEST";

// Actions
export function updateATest(text) {
  const payload = {aTest: text }
  const type = UPDATE_ATEST
  return {type, payload};
}



