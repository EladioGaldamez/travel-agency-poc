import {SET_SELECTED_INFO } from '../types'

const initialState = {
  info: null,
}

export default function (state = initialState, action) {
  const { type, info } = action
  switch (type) {
    case SET_SELECTED_INFO:
      return { ...state, info }
    default:
      return state
  }
}
