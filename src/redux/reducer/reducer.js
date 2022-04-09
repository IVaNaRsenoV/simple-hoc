import { TEST } from '../actions/action';

const initialState = {
    test: 'test',
};

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case TEST:
            return { ...state, test: payload };
        default:
            return 'state'
    }
}