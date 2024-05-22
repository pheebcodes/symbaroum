import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ScrollToTop } from "./scroll_to_top.jsx";
import { App } from "./app.jsx";
import { PrintSheet } from "./print_sheet.jsx";

export function Router() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Switch>
          <Route exact path="/character/:id/print" component={PrintSheet} />
          <Route path="/" component={App} />
        </Switch>
      </ScrollToTop>
    </BrowserRouter>
  );
}
