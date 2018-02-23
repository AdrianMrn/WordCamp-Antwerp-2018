import { put } from 'redux-saga/effects'
import ScheduleActions from '../Redux/ScheduleRedux'
import { Alert } from 'react-native'
/* import SponsorActions from '../Redux/SponsorRedux' */

// process STARTUP actions
export function * startup (action) {
  yield put(ScheduleActions.trackCurrentTime())
  /* ********************************************************
  * Readonly API Calls are better handled through code push *
  * *********************************************************/
  yield put(ScheduleActions.getScheduleUpdates())

  /* yield put(SponsorActions.getSponsorUpdates()) */

}
