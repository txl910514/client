import {add} from '../actions/testAction'
import { put } from 'redux-saga/effects'

export default function* rootSage()
{
    yield put({ type: 'ADD',text:'ddd'})
}