import React from 'react'
import { gql,useQuery } from '@apollo/client';


const userinfo=gql`
   query User{
       users{
           id 
           name
       }
   }


`;


function Dogs()  {
    
    const { loading, error, data } = useQuery(userinfo);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
    return data.users.map(({id,name},i)=>{
      return(
      <div key={id}>
        <p>{id}:{name}</p>

        </div>);

    })


// const client = ...client

   
}

export default Dogs
