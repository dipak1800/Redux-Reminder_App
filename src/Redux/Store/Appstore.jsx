import { createStore, applyMiddleware } from "redux";
import reminderReducer from "../Reducer/ReducerFunction/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import { persistStore } from "redux-persist";

const myStore = createStore(reminderReducer, applyMiddleware(logger));
export const persistor = persistStore(myStore);
export default myStore;
