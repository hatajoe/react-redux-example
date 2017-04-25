/* eslint-disable no-constant-condition */
import { call, put, fork, take } from 'redux-saga/effects'
import * as actions from '../actions'
import * as types from '../actions'
import * as api from '../services/api'

// each entity defines 3 creators { request, success, failure }
const { apiSaveTodo } = actions

const fetch = function * _fetch(entity, apiFn, payload) {
    try {
        yield put(entity.request(payload))
        const response = yield call(apiFn, payload)
        yield put(entity.success(response))
    } catch (e) {
        yield put(entity.failure(e))
    }
}

const watchApiSaveTodo = function * _watchApiSaveTodo() {
    while(true) {
        const action = yield take(types.ADD_TODO)
        yield fetch(apiSaveTodo, api.saveTodo, action.payload)
    }
}

export default function * rootSaga() {
    yield [
        fork(watchApiSaveTodo),
    ]
}