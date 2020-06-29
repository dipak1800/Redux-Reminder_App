import reminderReducer from "./ReminderReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [reminderReducer],
};
export default persistReducer(persistConfig, reminderReducer);
