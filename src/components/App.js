import React from 'react';
import Phonebook from './Phonebook'
import Form from './Form';
import Input from './Input';
import Button from './Button';

const App = (props) => {

    return(
      <div className="app">

        <Form>
          <Input type="text" name="first-name"/>
          <Input type="text" name="last-name"/>
          <Input type="numbers" name="phone"/>
          <Button text="Add user" type="submit"/>
        </Form>

        <Phonebook/>
        
      </div>
    )
}
export default App;
