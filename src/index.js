import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import { store } from './Redux/Store'
import { AppProvider } from './context/AppContext';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <AppProvider>
  <Provider store={store}>
    <App/>
  </Provider>
  </AppProvider>
)
reportWebVitals();
