import ADD_REMINDER from "../ActionConstants/AddReminder";
const addReminder = (text, duedate) => {
  return {
    type: ADD_REMINDER,
    payload: text,
    payload1: duedate,
  };
};
export default addReminder;
