import {
  FETCH_POST,
  FETCH_POST_FAIL,
  FETCH_POST_SUCCESS,
  REFRESH_DATA,
  REFRESH_DATA_FAIL,
  REFRESH_DATA_SUCCESS,
} from '../../constants/post';
import { IPost } from '../../../models/post';

interface IPostState {
  isFetchingPost: boolean;
  isRefreshing: boolean;
  post: IPost | {};
}

const initialState: IPostState = {
  isFetchingPost: true,
  isRefreshing: false,
  post: {},
};

const postReducer = (state = initialState, action) => {
  if (action.type === FETCH_POST) {
    return {
      ...state,
      isFetchingPost: true,
    };
  }

  if (action.type === FETCH_POST_SUCCESS) {
    return {
      ...state,
      isFetchingPost: false,
      post: action.payload.post,
    };
  }

  if (action.type === FETCH_POST_FAIL) {
    return {
      ...state,
      isFetchingPost: false,
    };
  }

  if (action.type === REFRESH_DATA) {
    return {
      ...state,
      isRefreshing: true,
    };
  }

  if (action.type === REFRESH_DATA_SUCCESS) {
    return {
      ...state,
      isRefreshing: false,
      ...action.payload.data,
    };
  }

  if (action.type === REFRESH_DATA_FAIL) {
    return {
      ...state,
      isRefreshing: false,
    };
  }

  return state;
};

export default postReducer;
