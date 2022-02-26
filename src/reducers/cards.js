
import { ADD_CARD, DELETE_CARD, RECEIVE_CARDS, UPDATE_CARD } from '../actions/cards';

const cards = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_CARDS:
            return [...action.cards];
        case ADD_CARD:

            return [state, ...action.card]
        case DELETE_CARD:
            return state.filter((card) => card.id === action.id);
        case UPDATE_CARD:
            return state.filter(card => card.id === action.id).push({ ...action.card });
        default:
            return state;

    }
}

export default cards;