import * as ActionTypes from '../action_types';

export const addCard              = payload => ({type: ActionTypes.ADD_CARD, payload});
export const transitionCardToLane = payload => ({type: ActionTypes.TRANSITION_CARD_TO_LANE, payload});
