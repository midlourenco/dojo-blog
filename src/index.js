import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'


//tutorias used in this page:
//***react */
//https://www.youtube.com/watch?v=j942wKiXFu8

//***React query */
//https://www.youtube.com/watch?v=x1rQ61otgtU
//•	https://www.youtube.com/watch?v=VtWkSCZX0Ec&list=PLC3  y8-rFHvwjTELCrPrcZlo6blLBUspd2

//***React testing library */
//https://www.youtube.com/watch?v=3ugQRXRToFA&list=PL4cUxeGkcC9gm4_-5UsNmLqMosM-dzuvQ&index=8

const queryClient = new QueryClient()


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
  </QueryClientProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
