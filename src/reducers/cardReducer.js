import * as ActionTypes from '../action_types';
import _ from 'lodash'
import moment from 'moment';

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

    case ActionTypes.EDIT_CARD: {
      const {id, title, description} = action.payload

      const cards = state.cards.map(card => {
        if (card.id === id) {
          return {...card, title, description};
        } else {
          return card;
        }
      })

      return {...state, cards}
    }

    case ActionTypes.REMOVE_CARD: {
      const {id} = action.payload

      const cards = state.cards.filter(card => {
        console.log(card.id, id)
        return _.parseInt(card.id) !== _.parseInt(id);
      })

      return {...state, cards}
    }

    case ActionTypes.TRANSITION_CARD_TO_LANE: {
      const {laneId, cardId} = action.payload

      const cards = state.cards.map(card => {
        if (card.id === cardId) {
          return {...card, laneId, transitionedAt: moment()};
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
