import React from 'react';
import Phonebook from './Phonebook'
import Form from './Form';
import Input from './Input';
import Button from './Button';

const App = (props) => {

    const handleSubmit = (values) =>{
      console.log(values)

    }

    return(
      <div className="app">
        <Phonebook/>
        <Form handleSubmit={handleSubmit}>
          <Input type="text" name="first-name"/>
          <Input type="text" name="last-name"/>
          <Input type="numbers" name="phone"/>
          <Button text="Add user" type="submit"/>
        </Form>
      </div>
    )
}
export default App;
