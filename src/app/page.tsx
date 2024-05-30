import Tasks from "./tasks/page";
import { Provider } from "react-redux";
import store from "./tasks/tools/redux/store";

export default function Home() {
  return (
    // <Provider store={store}>
      <Tasks/>
    // </Provider>
  );
}
