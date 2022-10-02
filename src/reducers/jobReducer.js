import { ACTIONS } from "../constantsFile";

export default function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return { isLoading: true, jobsList: [] };
    case ACTIONS.GET_DATA:
      return {
        ...state,
        isLoading: false,
        jobsList: action.payload.jobs,
        total: action.payload.total,
      };
    case ACTIONS.ERROR:
      return {
        ...state,
        isLoading: false,
        jobsList: [],
        error: action.payload.error,
      };
    default:
      return state;
  }
}
