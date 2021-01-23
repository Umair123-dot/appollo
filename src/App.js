import React from 'react';
import AddUser from './AddUser';
import Dogs from './dogs';
import Update from './Update';
import UserInterface from './UserInterface';



function App()
{
  return(
    <div>
      {/* <Dogs />
      <AddUser /> */}
      <Update />
      
    </div>

  );
}
export default App;

// import react from 'react';
// import { ApolloClient, InMemoryCache } from '@apollo/client';
// import { useQuery, gql } from '@apollo/client';
// import { ApolloProvider } from '@apollo/client';
// import AddTodo from './Up';

// const client = new ApolloClient({
//   uri: 'https://48p1r2roz4.sse.codesandbox.io',
//   cache: new InMemoryCache()
// });


// // const client = ...

// client
//   .query({
//     query: gql`
//       query GetRates {
//         rates(currency: "USD") {
//           currency
//         }
//       }
//     `
//   })
//   .then(result => console.log(result));

// function App() {
 
// const EXCHANGE_RATES = gql`
//   query GetExchangeRates {
//     rates(currency: "USD") {
//       currency
//       rate
//       name
//     }
//   }
// `;

// function ExchangeRates() {
//   const { loading, error, data } = useQuery(EXCHANGE_RATES);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error :(</p>;

//   return data.rates.map(({ currency, rate,name }) => (
//     <div key={currency}>
//       <p>
//         {name}:{currency}: {rate}
//       </p>
//     </div>
//   ));
// }
//   return (
//     <ApolloProvider client={client}>
//     <div>
//      <ExchangeRates>

//      </ExchangeRates>
//      <AddTodo>
       
//      </AddTodo>
//     </div>
//   </ApolloProvider>
//   );
// }

// export default App;
