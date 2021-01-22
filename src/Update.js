import React, { Fragment, useState } from 'react'
import { gql, useQuery, useMutation } from '@apollo/client';

const USERS = gql`
   query {
       users{
           id 
           name
       }
   }


`;
const UPDATE_USER = gql`
mutation($id:Int!,$name:String!){
    updateUser(id:$id,name:$name){
    id 
    name
    }
  }
  
`;
const CREATE_USER = gql`
mutation($name:String!){
    createUser(name:$name){
        id 
        name
    }
  }
  
`;
const Update = () => {
    const [user, setUser] = useState('');
    const [editMode, setEditMode] = useState(false);

    const handleChange = ({ target: { value } }) => setUser(value);

    const { loading, error, data } = useQuery(USERS);
    const [updateUser] = useMutation(UPDATE_USER);
    const [createUser] = useMutation(CREATE_USER);
    // const [deleteUser] = useMutation(DELETE_USER);

    const onSubmitHandler = (ev) => {
        ev.preventDefault();
        if (editMode) {
            // update mutation logics
        } else {
            
        }
    }

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <Fragment>
            <form
                onSubmit={onSubmitHandler}
            >
                <input
                    value={user}
                    onChange={handleChange}
                />
                <button type="submit">{editMode ? 'Update' : 'Save'}</button>
            </form>
            <table>
                <thead>
                    <tr>
                        <th>User Id</th>
                        <th>User Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.users.map(({ id, name }, i) => (
                        <tr>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>
                                <input type='button' value='edit' />
                                <input type='button' value='delete' />
                            </td>
                        </tr>
                    ))};
                    </tbody>
            </table>
        </Fragment>
    );
}

export default Update
