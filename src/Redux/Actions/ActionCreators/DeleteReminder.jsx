import DELETE_REMINDER from "../ActionConstants/DeleteReminder";
const deleteReminder = (id) => {
  return {
    type: DELETE_REMINDER,
    payload: id,
  };
};
export default deleteReminder;
