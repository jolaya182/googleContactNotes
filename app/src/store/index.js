
/* *
  title: store.js 

  date: 7/19/2019

  author:  javier olaya

  description: redux store for future modules
         
 */
import { createStore } from 'redux';
import rootReducers from './reducers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel2
}

const persistReducer = persistReducer(persistConfig, rootReducers)

export default () => {
  let store = createStore(persistReducer);
  let persistor = persistStore(store);
  return { store, persistor }
}
