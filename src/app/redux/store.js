
import { createStore } from 'redux'
import RootReducer from './reducers/RootReducer'


let store = createStore(
  RootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => {
  // console.log(store.getState())
})

export default store