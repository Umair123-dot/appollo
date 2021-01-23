import React from 'react';
import { gql, useMutation } from '@apollo/client';
const addUser=gql`
 mutation($name:  String!) {
     createUser(name: $name){
     name 
     id
 }
}


`;




const AddUser = () => {
    let input;

    const[createUser,{data}]=useMutation(addUser);

    return (
        <div>
        <form
        onSubmit={e => {
          e.preventDefault();
          createUser({ variables: { name: input.value } });
          input.value = '';
        }}  
      >
        <input
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">Add Todo</button>
      </form>


            
        </div>
    )
}

export default AddUser
