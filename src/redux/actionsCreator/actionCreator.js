import { TEST } from '../actions/action';

export const actionCreatorTest = (data) => {
    return { type: TEST, payload: data };
}