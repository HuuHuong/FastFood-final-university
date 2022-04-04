import {View, Text} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {QueryClientProvider, QueryClient} from 'react-query';
import {PersistGate} from 'redux-persist/integration/react';
import {ThemeProvider} from '@theme';
import {NavigationApp, NavigationUtils} from '@navigation';
import {persistor, store} from '@redux';
const queryClient = new QueryClient();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ThemeProvider>
          <PersistGate loading={null} persistor={persistor}>
            <NavigationApp
              ref={(navigatorRef: any) =>
                NavigationUtils.setTopLevelNavigator(navigatorRef)
              }
            />
          </PersistGate>
        </ThemeProvider>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
