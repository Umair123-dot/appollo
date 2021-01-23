import React, { Fragment, useState, useEffect } from 'react'
import { gql, useLazyQuery, useMutation } from '@apollo/client';
import {Container,CssBaseline,Button,TextField} from '@material-ui/core';
import HeaderComponent from './HeaderComponent';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import UserInterface from './UserInterface';

const useStyles = makeStyles({
    table: {
      minWidth: 500,
    },
  });


function createData(Roll,User) {
  return { Roll, User };
}



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

const DELETE_USER = gql`
  mutation ($id: Int!) {
      deleteUser(id: $id) {
          id
          name
      }
  }
`;
const Update = () => {
    const [user, setUser] = useState('');
    const [userId, setUserId] = useState('');
    const [editMode, setEditMode] = useState(false);

    const handleChange = ({ target: { value } }) => setUser(value);

    const [users, { loading, error, data }] = useLazyQuery(USERS);
    const [updateUser] = useMutation(UPDATE_USER);
    const [createUser] = useMutation(CREATE_USER);
    const [deleteUser] = useMutation(DELETE_USER);

    useEffect(() => {
        users();
    }, [users])

    const onSubmitHandler = (ev) => {
        ev.preventDefault();
        if (!user.trim()) return console.log('User field is empty...');
        if (editMode) {
            // update mutation logics
            updateUser({ variables: { id: userId, name: user } }).then(() => {
                setUser('');
                setEditMode(false);
                setUserId('');
            })
        } else {
            // create mutation logics
            createUser({ variables: { name: user } }).then(() => setUser(''))
        }
        users();
    }
    //Edit Function for edit mod
    const onEdit = id => {
        const u = data.users.find((user) => user.id === id);
        setUser(u.name);
        setEditMode(true);
        setUserId(id);
    }


    const onDelete = id => {
        deleteUser({ variables: { id } }).then(() => {
            if (editMode) {
                setUser('');
                setEditMode(false);
                setUserId('')
            }
            users();
        })
    }

    const classes = useStyles();




    if (loading || !data) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <Fragment>
         <UserInterface />
        <CssBaseline />
        <Container style={{backgroundColor:"#efefef"}}>
       
        <HeaderComponent></HeaderComponent>
        <form style={{display:'flex',justifyContent:'center',marginBottom:'50px',marginTop:'50px'}}
                onSubmit={onSubmitHandler}
            >
              <TextField 
        id="outlined-secondary"
        label="Username"
        variant="outlined"
        color="Primary"
        value={user}
        onChange={handleChange}
      />
                {/* <input
                    value={user}
                    onChange={handleChange}
                /> */}
                <Button type="submit" variant="contained" color="primary" style={{marginLeft:'10px',height:'55px'}}>{editMode ? 'Update' : 'Save'}</Button>
                {/* <button type="submit">{editMode ? 'Update' : 'Save'}</button> */}
            </form>
            <br />


            <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead style={{backgroundColor:'grey',color:'blue'}}>
          <TableRow>
            <TableCell>Roll (For User)</TableCell>
            <TableCell align="right" >User Name</TableCell>
            <TableCell align="right">Edit</TableCell>
            <TableCell align="right">Delete</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
        {data.users.map(({ id, name }, i) => (
            <TableRow key={id}>
              <TableCell component="th" scope="row">
                {id}
              </TableCell>
              <TableCell align="right">{name}</TableCell>
              <TableCell align="right">
              <EditOutlinedIcon  onClick={() => onEdit(id)}></EditOutlinedIcon>

             
                                
              </TableCell>
              <TableCell align="right">
              <DeleteIcon onClick={() => onDelete(id)}></DeleteIcon>
              
              </TableCell>

              {/* <TableCell align="right">{row.fat}</TableCell> */}
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

            {/* this is the Table work
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
                        <tr key={i}>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>
                                <input type='button' value='edit' onClick={() => onEdit(id)} />
                                <input type='button' value='delete' onClick={() => onDelete(id)} />
                            </td>
                        </tr>
                    ))};
                </tbody>
            </table> */}
            
            </Container>
            
        </Fragment>
    );
}

export default Update
