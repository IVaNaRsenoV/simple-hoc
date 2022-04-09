import { withTest } from '../../hoc/withTest';

function Test1(props) {
    const { onSubmit } = props;

    return (
        <input type='submit' onClick={onSubmit} value='test 1' />
    );
}

export default withTest(Test1);