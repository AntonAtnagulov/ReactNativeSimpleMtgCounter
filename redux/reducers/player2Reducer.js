import initState from "../initState";

const player2Reducer = (state = initState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "GET_P2_PLUS":
            return state + payload;

        case "GET_P2_MINUS":
            return state - payload;

        case "GET_P2_RESET":
            return state = payload;

        default:
            return state;
    }
};

export default player2Reducer;