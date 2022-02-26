export const ADD_CARD = "ADD_CARD";
export const DELETE_CARD = "DELETE_CARD";
export const UPDATE_CARD = "UPDATE_CARD";
export const RECEIVE_CARDS = "RECEIVE_CARDS";


export const add_card = (card) => {
    return {
        type: ADD_CARD,
        card
    }
}

export const receive_cards = (cards) => {
    return {
        type: RECEIVE_CARDS,
        cards
    }
}