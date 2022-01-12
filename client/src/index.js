import React from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter,
  Routes, Route
 } from 'react-router-dom'

// components
import App from './App';
import { User } from './components';

// rQuery
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from "react-query/devtools";
import { queryClient } from './rQuery'

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/user/:id" element={<User />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

