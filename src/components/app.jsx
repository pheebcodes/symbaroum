import { connect } from "react-redux";
import { Route, Redirect, Switch } from "react-router-dom";
import { CharacterEditor } from "./character_editor/index.jsx";
import { CharacterSelector } from "./character_selector.jsx";
import { ActionModal } from "./action_modal.jsx";
import { MessageModal } from "./message_modal.jsx";
import { messages } from "../data/index.js";

function getModal(unreadMessages, modal) {
  if (unreadMessages) {
    return <MessageModal />;
  } else if (modal) {
    return <ActionModal />;
  }
}

function mapState(state) {
  return {
    modal: state.has("modal"),
    unreadMessages: state.get("readMessages", 0) < messages.length,
    printing: state.get("printing", false),
  };
}

export function AppView({ modal, unreadMessages }) {
  return (
    <div className="app-container">
      <div className="app">
        {getModal(unreadMessages, modal)}
        <Switch>
          <Route path="/character/:id" component={CharacterEditor} />
          <Route exact path="/" component={CharacterSelector} />
          <Redirect to="/" />
        </Switch>
      </div>
    </div>
  );
}

export const App = connect(mapState)(AppView);
