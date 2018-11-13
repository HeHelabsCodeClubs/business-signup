import React from 'react';
import { render} from 'react-dom';
import BusinessSignUp from '../../src';

// function getValues(values) {
//     console.log(values);
// }

const App = () => (
    <BusinessSignUp
    handleSubmit={() => console.log('handle submit')}
    />
);
render(<App />, document.getElementById("root"));