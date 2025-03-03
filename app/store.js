import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import reducer from './reducer';
import storage from 'redux-persist/lib/storage';

/* const store = createStore(reducer, {
    suggestionList: [],
    categoryList: [],
}) */
const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

const store = createStore(persistedReducer)
const persistor = persistStore(store)

export { store , persistor};