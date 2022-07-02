import { BrowserRouter } from "react-router-dom";
import { NavigationMenu } from "@shopify/app-bridge-react";
import Routes from "./Routes";
import { Provider as ReduxProvider } from 'react-redux'
import {
  AppBridgeProvider,
  GraphQLProvider,
  PolarisProvider,
} from "./components";
import { store } from "./store";
export default function App() {
  // Any .tsx or .jsx files in /pages will become a route
  // See documentation for <Routes /> for more info
  const pages = import.meta.globEager("./pages/**/!(*.test.[jt]sx)*.([jt]sx)");

  return (
    <ReduxProvider store={store} >
      <PolarisProvider>
        <BrowserRouter>
          <AppBridgeProvider>
            <GraphQLProvider>
              <Routes pages={pages} />
            </GraphQLProvider>
          </AppBridgeProvider>
        </BrowserRouter>
      </PolarisProvider>
    </ReduxProvider>
  );
}
