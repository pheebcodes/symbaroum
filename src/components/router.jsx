import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ScrollToTop } from "./scroll_to_top.jsx";
import { App } from "./app.jsx";
import { PrintSheet } from "./print_sheet.jsx";

function WrappedPrintSheet(props) {
  return <PrintSheet {...props} />;
}

function WrappedApp(props) {
  return <App {...props} />;
}

export function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Switch>
          <Route
            exact
            path="/character/:id/print"
            component={WrappedPrintSheet}
          />
          <Route path="/" component={WrappedApp} />
        </Switch>
      </ScrollToTop>
    </BrowserRouter>
  );
}
