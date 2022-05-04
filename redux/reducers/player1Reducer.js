import initState from "../initState";

const player1Reducer = (state = initState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "GET_P1_PLUS":
            console.log('reducer====>', state)
            return state + payload;

        case "GET_P1_MINUS":
            return state - payload;
        
        case "GET_P1_RESET":
            return state = payload;

        default:
            return state;
    }
};

export default player1Reducer;