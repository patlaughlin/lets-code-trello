import * as ActionTypes from '../action_types';
import _ from 'lodash'

const initState = {
  cards: []
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_CARD: {
      const {laneId, title, description, createdAt} = action.payload
      return {
        ...state, cards: [...state.cards, {
          id: _.uniqueId(),
          createdAt,
          laneId,
          title,
          description
        }]
      }
    }

    case ActionTypes.TRANSITION_CARD_TO_LANE: {
      const {laneId, cardId} = action.payload

      const cards = state.cards.map(card => {
        if (card.id === cardId) {
          return {...card, laneId};
        } else {
          return card;
        }
      })

      return {...state, cards}
    }

    default:
      return state;
  }
};

export default userReducer;
