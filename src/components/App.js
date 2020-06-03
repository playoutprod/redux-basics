import React from 'react';
import Phonebook from './Phonebook'
import Button from './Button';

const App = (props) => {

    const handleSubmit = (e) =>{

    }

    return(
      <div className="app">
        <Phonebook/>
        <Form>
          <Input type="text" name="first-name"/>
          <Input type="text" name="last-name"/>
          <Input type="numbers" name="phone"/>
          <Button handleClick={handleSubmit} text="Add user"/>
        </Form>
      </div>
    )
}
export default App;
