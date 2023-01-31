import Router from "./Navigation/router";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <div className="h-full m-0">
      <SnackbarProvider anchorOrigin={{ horizontal: "right", vertical: "top" }}>
        <Router />
      </SnackbarProvider>
    </div>
  );
}

export default App;
