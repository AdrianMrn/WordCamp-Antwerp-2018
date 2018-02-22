import { call, put } from 'redux-saga/effects'
import ScheduleActions from '../Redux/ScheduleRedux'

export function* getScheduleUpdates(api, action) {
  let response = yield call(api.getTalks)
  if (response.ok) yield put(ScheduleActions.updateSchedule(response.data))
}
