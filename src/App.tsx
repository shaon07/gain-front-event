import { Provider } from "react-redux";
import "./App.css";
import { RoutesProvider } from "./Routes";
import { persistor, store } from "./context/redux/store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RoutesProvider />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
