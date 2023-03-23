import {
  FETCH_NEWS,
  FETCH_NEWS_FAIL,
  FETCH_NEWS_SUCCESS,
  REFRESH_DATA,
  REFRESH_DATA_FAIL,
  REFRESH_DATA_SUCCESS,
} from '../../constants/news';
import { IPost } from '../../../models/post';

interface INewsState {
  isFetchingNews: boolean;
  isRefreshing: boolean;
  news: IPost[] | [];
}

const initialState: INewsState = {
  isFetchingNews: true,
  isRefreshing: false,
  news: [],
};

const newsReducer = (state = initialState, action) => {
  if (action.type === FETCH_NEWS) {
    return {
      ...state,
      isFetchingNews: true,
    };
  }

  if (action.type === FETCH_NEWS_SUCCESS) {
    return {
      ...state,
      isFetchingNews: false,
      news: action.payload.news,
    };
  }

  if (action.type === FETCH_NEWS_FAIL) {
    return { ...state, isFetchingNews: false };
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
      ...action.payload.data,
      isRefreshing: false,
    };
  }

  if (action.type === REFRESH_DATA_FAIL) {
    return { ...state, isRefreshing: false };
  }

  return state;
};

export default newsReducer;
