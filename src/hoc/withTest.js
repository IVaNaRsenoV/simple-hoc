import React from "react";
import { useDispatch } from 'react-redux';
import { actionCreatorTest } from '../redux/actionsCreator/actionCreator';

export function withTest(Component) {

    return function ({ test }) {

        const dispatch = useDispatch();
        const onSubmit = () => { return dispatch(actionCreatorTest(test)); }

        return <Component onSubmit={onSubmit} />;
    }
}