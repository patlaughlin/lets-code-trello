import * as ActionTypes from '../action_types';
import _ from 'lodash'

const initState = {
  cards: [
    {
      createdAt: new Date(),
      laneId: 0,
      title: "foobar",
      description: "asdsdsdsdassssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss"
    },
    {
      createdAt: new Date(),
      laneId: 0,
      title: "foobar",
      description: "asdsdsdsdassssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss"
    },
    {
      createdAt: new Date(),
      laneId: 0,
      title: "foobar",
      description: "asdsdsdsdassssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss"
    }
  ]
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

    default:
      return state;
  }
};

export default userReducer;
