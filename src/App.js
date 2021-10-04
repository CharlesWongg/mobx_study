import AppView from "./pages/AppView";
import appState from "./stores/appState";
import { configure } from "mobx";

configure({ enforceActions: 'observed' })

function App() {
  return (
    <div>
      <AppView appState={appState}/>
    </div>
  );
}

export default App;
