
const DEFAULT_STATE = {
    buyItem: [],
    confirm: {},
};

export const clothReducer = (state = DEFAULT_STATE, { type, payload }) => {
    switch (type) {
        case "BUY_ITEM": {
            const data = state.buyItem;
            data.push(payload);
            console.log(data);
            return { ...state }
        }

        case "RESET_ITEM": {
            state.buyItem = payload;
            
            console.log(state.confirm);
            return { ...state }
        }

        case "CONFIRM": {
            state.confirm = payload;
            
            console.log(state.confirm);
            return { ...state }
        }
        default:
            return state;
    }
}