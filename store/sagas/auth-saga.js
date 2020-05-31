import { call, put, takeLatest } from 'redux-saga/effects';
import axios from '../api';

const apiPost = (url, data = {}) => axios.post(url, data);

function* signIn({ payload }) {
  try {
    yield put({ type: 'IS_LOADING', loading: true });
    const { data } = yield call(apiPost, '/api/login', payload);
    yield put({ type: 'SIGN_IN_SUCCESS', data });
    yield put({ type: 'IS_LOADING', loading: false });
    yield put({ type: 'SIGN_IN_SUCCESS', data: null });
  } catch (error) {
    yield put({ type: 'IS_ERROR',  error });
    yield put({ type: 'IS_LOADING', loading: false });
  }
}

function* signUp({ payload }) {
  try {
    yield put({ type: 'IS_LOADING', loading: true });
    const { data } = yield call(apiPost, '/api/register', payload);
    yield put({ type: 'SIGN_UP_SUCCESS', data });
    yield put({ type: 'IS_LOADING', loading: false });
    yield put({ type: 'SIGN_UP_SUCCESS', data: null });
  } catch (error) {
    yield put({ type: 'IS_ERROR',  error });
    yield put({ type: 'IS_LOADING', loading: false });
  }
}

function* authWatcher() {
  yield takeLatest('SIGN_IN_SUBMIT', signIn);
  yield takeLatest('SIGN_UP_SUBMIT', signUp);
}

export default authWatcher;
