import React, { useState } from "react";
import { connect } from "react-redux";
import addReminder from "./Redux/Actions/ActionCreators/AddReminder";
import deleteReminder from "./Redux/Actions/ActionCreators/DeleteReminder";
import moment from "moment";
import clearReminders from "./Redux/Actions/ActionCreators/ClearAllReminders";
import "./App.css";
import swal from "sweetalert";
let App = ({
  addReminder,
  RemindersArray,
  totalReminders,
  clearReminders,
  deleteReminder,
}) => {
  let [text, setText] = useState("");
  const [dueDate, setDueDate] = useState("");
  let todayDate = new Date().toISOString().slice(0, 10);

  return (
    <div className="App mt-4">
      <div className="title bg-success">Reminder Pro</div>
      <div className="count">
        <h6 className="count">
          Count:<span class="badge badge-warning">{totalReminders}</span>
        </h6>
      </div>
      <div className="form-group">
        <form
          onSubmit={(e) => {
            if (text == "   " || text == " " || text == "  ") {
              alert(`Empty Text 😠
             Please type something`);
            } else if (dueDate < todayDate) {
              alert(`INVALID DATE 📅
             You cannot select past date as DUEDATE`);
            } else {
              e.preventDefault();
              setText("");
              addReminder(text, dueDate);
              setDueDate("");
            }
          }}
        >
          <div className="manage-forms">
            <label>
              <h5>Your Task:</h5>
            </label>
            <input
              value={text}
              placeholder="I have to do ..."
              onChange={(e) =>
                setText(e.target.value.substr(0, 40).toUpperCase())
              }
              required
            />
          </div>
          <div className="manage-forms">
            <label>
              <h5>DueDate:</h5>{" "}
            </label>

            <input
              type="datetime-local"
              value={dueDate}
              onChange={(e) => {
                setDueDate(e.target.value);
              }}
              required
            />
          </div>
          <div className="manage-buttons">
            <button type="submit" className="btn mx-3 btn-sm btn-success">
              Add Reminder
            </button>
            <button
              type="button"
              className="btn btn-sm btn-danger"
              onClick={() => {
                if (totalReminders) {
                  swal({
                    title: "Are you sure?",
                    text:
                      "Once deleted, you will not be able see your REMINDERS",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                  }).then((willDelete) => {
                    if (willDelete) {
                      clearReminders();
                      swal("! All Reminders  has been deleted!", {
                        icon: "success",
                      });
                    } else {
                      swal("Don't Worry Your REMINDERS are safe😄 !");
                    }
                  });
                } else {
                  swal("You Dont Have Any Reminder To Delete 😆", {
                    buttons: false,
                    timer: 3000,
                  });
                }
              }}
            >
              {" "}
              Clear Reminders
            </button>
          </div>
        </form>
        <hr />
      </div>
      <div className="lower-Container">
        <h4 style={{ textAlign: "center" }}>
          {" "}
          MY REMINDERS{" "}
          <i style={{ color: "green" }} class="fas  fa-notes-medical"></i>
        </h4>
        <ul>
          {totalReminders ? (
            RemindersArray.map((reminder) => (
              <>
                {" "}
                <div className="manage-reminder">
                  <li className="ml-2" key={reminder.id}>
                    {reminder.text}
                  </li>
                  <i
                    onClick={() => {
                      swal({
                        title: "Are you sure?",
                        text: "Have You Completed This Task",
                        icon: "warning",
                        buttons: true,
                        dangerMode: true,
                      }).then((willDelete) => {
                        if (willDelete) {
                          deleteReminder(reminder.id);
                          swal("The Task Deleted Succesfully", {
                            icon: "success",
                          });
                        } else {
                          swal("Please complete the task before DELETING!");
                        }
                      });
                    }}
                    class="fas fa-trash-alt mr-2"
                  ></i>
                </div>
                <div className="due">
                  <h1
                    style={{ fontSize: "15px" }}
                    className="badge-info badge badge-pill"
                  >
                    {moment(new Date(reminder.dueDate)).fromNow()}
                  </h1>
                </div>
              </>
            ))
          ) : (
            <h5 style={{ textAlign: "center", marginTop: "80px" }}>
              You Don't Have Any Reminders Yet 😢
            </h5>
          )}
        </ul>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    RemindersArray: state.Reminders,
    totalReminders: state.Reminders.length,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addReminder: (text, duedate) => dispatch(addReminder(text, duedate)),

    deleteReminder: (id) => dispatch(deleteReminder(id)),
    clearReminders: () => dispatch(clearReminders()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
