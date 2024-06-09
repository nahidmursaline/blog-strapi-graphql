import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { router } from './Router/Routes.jsx'

const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
})

ReactDOM.createRoot(document.getElementById('root')).render(
 <div className='max-w-7xl mx-auto'>
  <ApolloProvider client={client}>
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </ApolloProvider>
 </div>
)
