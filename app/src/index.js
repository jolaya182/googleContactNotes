/* *
  title: index.js 

  date: 6/22/2019

  author:  javier olaya

  description: index of the main page that holds the entire application 
         
 */
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducers from './reducers';
import App from './components/App';
import { persisGate, PersistGate } from 'redux-persist/integration/react';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import ErrorBoundary from './components/ErrorBoundary';

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2
}
const PersistReducer = persistReducer(persistConfig, rootReducers);
const store = createStore(PersistReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
let persistor = persistStore(store);

/* define the state properties of the index */
ReactDom.render((
  <Provider store={store}>
    <ErrorBoundary>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </ErrorBoundary>
  </Provider>
), document.getElementById("app"));
