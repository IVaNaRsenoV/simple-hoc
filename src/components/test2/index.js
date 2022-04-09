import { withTest } from '../../hoc/withTest';

function Test2(props) {
    const { onSubmit } = props;

    return (
        <input type='submit' onClick={onSubmit} value='test 2' />
    );
}

export default withTest(Test2);