import React from "react";

export function withApp(Component) {
    return function () {
        console.log('withApp.js');
        const item = 'App';

        return (
            <Component item={item} />
        );
    }
}