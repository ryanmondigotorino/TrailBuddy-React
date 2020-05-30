import { call, put, takeLatest } from 'redux-saga/effects';
import axios from '../api';

const apiGet = (url, data = {}) => axios.get(url, data);

function* signIn({ payload }) {
  const { page = null, size = null } = payload;
  try {
    yield put({ type: 'IS_LOADING', loading: true });
    const { data } = yield call(apiGet, `/business/search?page[number]=${(page) || 1}&page[size]=${(size) || 12}`);
    yield put({ type: 'SIGN_IN_SUCCESS', data });
    yield put({ type: 'IS_LOADING', loading: false });
  } catch (error) {
    yield put({ type: 'IS_ERROR', error: { message: error.message } });
    yield put({ type: 'IS_LOADING', loading: false });
  }
}

function* authWatcher() {
  yield takeLatest('SIGN_IN_SUBMIT', signIn);
}

export default authWatcher;
