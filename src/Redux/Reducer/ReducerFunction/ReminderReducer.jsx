import initialReminderState from "../InitialState/initialReminderState";
import ADD_REMINDER from "../../Actions/ActionConstants/AddReminder";
import DELETE_REMINDER from "../../Actions/ActionConstants/DeleteReminder";
import ClearAllReminders from "../../Actions/ActionConstants/ClearAllReminders";

const reminderReducer = (state = initialReminderState, action) => {
  switch (action.type) {
    case ADD_REMINDER:
      let Reminders = {
        ...state,
        Reminders: state.Reminders.concat({
          text: action.payload,
          id: Math.random(),
          dueDate: action.payload1,
        }),
      };

      return Reminders;
    case DELETE_REMINDER:
      return {
        ...state,
        Reminders: state.Reminders.filter(
          (reminder) => reminder.id !== action.payload
        ),
      };
    case ClearAllReminders:
      return {
        ...state,
        Reminders: [],
      };
    default:
      return state;
  }
};
export default reminderReducer;
