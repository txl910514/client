import {createStore, applyMiddleware,compose} from 'redux';
import reducers from '../reducers';
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../middleware/saga'

const sagaMiddleware = createSagaMiddleware();

export default function storeConfig()
{
    let storeMiddleware = compose(applyMiddleware(sagaMiddleware));
    const store = createStore(reducers,storeMiddleware);
    sagaMiddleware.run(rootSaga);
    return {store}
}
