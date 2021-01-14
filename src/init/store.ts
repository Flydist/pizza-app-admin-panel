import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import { rootReducer } from './rootReducer'
import { middleware, sagaMiddleware } from './middleware'
import { rootSaga } from './rootSaga'

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))

sagaMiddleware.run(rootSaga)
