export function withApp(Component) {
    return function (props) {
        return <Component {...props} />;
    }
}