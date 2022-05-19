import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StateProvider } from './StateProvider';
import reducer,{initialState} from './reducer'
import { Auth0Provider } from '@auth0/auth0-react';
import App1 from './App1';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
  
  
    //  <Auth0Provider>
 <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
      // </Auth0Provider>
  
    
  ,
  document.getElementById('root')
);

