import $ from 'jquery';
import { browserHistory } from 'react-router'

export default function getUser(formValues){
  return function (dispatch){
    $.ajax({
      url: 'https://rails-wsidt.herokuapp.com/signin',
      type: 'POST',
      data: JSON.stringify({user: {name: formValues.name, password: formValues.password}}),
      dataType: 'json',
      contentType: 'application/json; charset=utf-8'
    }).done(function(response){
      if(response.error){
        alert(response.error)
      } else {
        localStorage.setItem('jwt', response.jwt)
        dispatch({type: 'LOGIN_USER', current_user: response.current_user})
        browserHistory.push('/menu')
      }
    })
    // 1. make an ajax request to my rails
    // 2. rails will create the user, and in exchange give me back a
    // jwt, user_id
    // 3. store the jwt in local storage
    // 4. update the store that we are logged in, current_user id
    // 5. redirect to my task resource
  }
}
