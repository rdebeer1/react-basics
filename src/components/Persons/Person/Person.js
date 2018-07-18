import React, { Fragment } from 'react';
import PropTypes from 'prop-types'

import classes from './Person.css';
import withClass from '../../../hoc/withClass' 
import { AuthContext } from '../../../containers/App'

const person = (props) =>  {
  return (
    <Fragment>
      <AuthContext.Consumer>
        {auth => auth ? <p>I'm authenticated!</p> : null}
      </AuthContext.Consumer>
      <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
      <p>{props.children}</p>
      <input 
        type='text' 
        onChange={props.changed} 
        value={props.name} />
    </Fragment>
  )
};

person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
}

export default withClass(person, classes.Person);
