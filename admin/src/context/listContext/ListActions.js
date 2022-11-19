export const getListStart = () => ({
  type: "GET_LISTS_START",
});

export const getListSuccess = (lists) => ({
  type: "GET_LISTS_SUCCESS",
  payload: lists,
});

export const getListFailure = () => ({
  type: "GET_LISTS_FAILURE",
});

export const createListStart = () => ({
  type: "CREATE_LIST_START",
});

export const createListSuccess = (list) => ({
  type: "CREATE_LIST_SUCCESS",
  payload: list,
});

export const createListFailure = () => ({
  type: "CREATE_LIST_FAILURE",
});

// export const updateMoviesStart = () => ({
//   type: "UPDATE_MOVIES_START",
// });

// export const updateMoviesSuccess = (movie) => ({
//   type: "UPDATE_MOVIES_SUCCESS",
//   payload: movie,
// });

// export const updateMoviesFailure = () => ({
//   type: "UPDATE_MOVIES_FAILURE",
// });

export const deleteListStart = () => ({
  type: "DELETE_LIST_START",
});

export const deleteListSuccess = (id) => ({
  type: "DELETE_LIST_SUCCESS",
  payload: id,
});

export const deleteListFailure = () => ({
  type: "DELETE_LIST_FAILURE",
});
