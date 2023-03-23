import React from 'react';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';

import AppTab from './src/navigation/tabs/AppTab';
import configureStore from './src/store/configureStore';
import rootSaga from './src/store/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({}, sagaMiddleware);

enableScreens();
sagaMiddleware.run(rootSaga);

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <AppTab />
    </NavigationContainer>
  </Provider>
);

export default App;
