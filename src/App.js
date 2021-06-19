import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/About";
import { useSelector, useDispatch } from "react-redux";
import Button from "./components/Button";
import { increment } from "./actions";
// import UserPool from './UserPool';

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      // const dataTemp = await authorizerRequest();
      // console.log(dataTemp)
      const taskFromServer = await fetchTasks();
      setTasks(taskFromServer);
    };
    getTasks();
  }, []);

  //Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data;
  };

  //Authorizer Request
  const authorizerRequest = async () => {
    const token =
      "eyJraWQiOiJtaHJZUW9mR2Y5UzRGVXJOVzNjcktlbmNaMFwvYjNDMUVTeUNMZVl1SlYrUT0iLCJhbGciOiJSUzI1NiJ9.eyJhdF9oYXNoIjoiWVV5N25CSm1RbkFBYWc4dGdHSWpIdyIsInN1YiI6IjRhMjUyZWVmLTg4MmYtNGMyMC1iNGEwLWQ3NzFlYWJkNDhmYyIsImNvZ25pdG86Z3JvdXBzIjpbInVzLWVhc3QtMV9JSThleURYcG9fR29vZ2xlIl0sImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX0lJOGV5RFhwbyIsImNvZ25pdG86dXNlcm5hbWUiOiJnb29nbGVfMTEwMTMzOTcxNDk3MTI4ODY1NjkxIiwibm9uY2UiOiJ1TFFHd1BHcWNYTlV1VHdBd0NVdUhPejV5bGJLN3pjRkppYWxpRDBUalZ0OHhsZkhLSTJjV0YzS0wyZU5xZWpHRVdUd213ZnFQT2ZVdzFJaGRxOUVweFlMQXc4X2FKZGxRel9zUXN2bXo5NFVRN1F6dEZJWWpJQWFaMmc5NG04TEZMMVNYQ3pCLTNCaUNEMXZPSDdkV1ZIZFl4aTBIUWRhSTFNUmNwZzFpSTQiLCJwaWN0dXJlIjoiaHR0cHM6XC9cL2xoMy5nb29nbGV1c2VyY29udGVudC5jb21cL2EtXC9BT2gxNEdnTlBGM2wxTzdVd283dEJZUzZoNy1TcUM1Y1hodklNNHlPX2lrYT1zOTYtYyIsImF1ZCI6IjNqZWduY2M0c242aDJ2aW1jbzUwYjZwaW8xIiwiaWRlbnRpdGllcyI6W3sidXNlcklkIjoiMTEwMTMzOTcxNDk3MTI4ODY1NjkxIiwicHJvdmlkZXJOYW1lIjoiR29vZ2xlIiwicHJvdmlkZXJUeXBlIjoiR29vZ2xlIiwiaXNzdWVyIjpudWxsLCJwcmltYXJ5IjoidHJ1ZSIsImRhdGVDcmVhdGVkIjoiMTYyMTc1MjkxODc1OCJ9XSwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2MjE3NjAwMTIsIm5hbWUiOiJTdWRhcnNhbiBTYW4iLCJleHAiOjE2MjE3NjM2MTIsImlhdCI6MTYyMTc2MDAxMiwiZW1haWwiOiJzdXNhc2FuMjdAZ21haWwuY29tIn0.fkbHDIUxUnPQ750x2QpZKYbK8kdAbBl2sW_RJnRrZIqfA_TniqLFnZj2WxZ-hVcXt464OhUjclFMbOxAGf2fSkOfXZAfQBfNjB8RAoVEk9ba5mR3BpxnVNVvzkZfWSRu4BKNnRCjMKnPhlKQ3aR-gDH-ATJjZt8a9SftIqJqaklsyYrBAE0hbxnCYl_aVVhenM9sb7HVttv9g702o5TFYeupNwofXbIW-yl8cZnlgr5Duy-J3S-FpiYEM8iFQFR5Z1pxSH9EGQUuooTGRC68Yr8JMwKRAsqmDgljEOKrjfxf09GdfRpube7fdR_M5rSIRu2CuHUAP2vW4yK2JDHU2Q";
    const res = await fetch(
      "https://qh8ff4qe0k.execute-api.us-east-1.amazonaws.com/dev/get-user/123",
      {
        method: "GET",
        headers: {
          Authorization: token
        }
      }
    );
    const data = await res.json();
    return data;
  };
  //Fetch Individual Task
  const fetchTask = async id => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  };

  // Add Task
  const addTask = async task => {
    const res = await fetch("http://localhost:5000/tasks/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(task)
    });

    const data = await res.json();

    setTasks([...tasks, data]);

    // const id = Math.floor(Math.random() * 10000) + 1;
    // const newTask = { id, ...task };
    // console.log(newTask);

    // setTasks([...tasks, newTask]);
  };

  // Delete Task
  const deleteTask = async id => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE"
    });

    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleReminder = async id => {
    const toggleTaskReminder = await fetchTask(id);
    const updaTask = {
      ...toggleTaskReminder,
      reminder: !toggleTaskReminder.reminder
    };

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updaTask)
    });

    const data = await res.json();

    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  const counter = useSelector(state => state.counter);

  const dispatch = useDispatch();

  return (
    <Router>
      <div className="container">
        <h1>Counter : {counter}</h1>
        <Button
          color="green"
          text="Increment"
          onClick={() => dispatch(increment(5))}
        />
        <Header
          title="Task Tracker"
          onAdd={() => setShowAddTask(!showAddTask)}
          showAddTask={showAddTask}
        />

        <Route
          path="/"
          exact
          render={props => (
            <>
              {showAddTask && <AddTask onAdd={addTask} />}
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}
                />
              ) : (
                "No Tasks"
              )}
            </>
          )}
        />
        <Route path="/about" component={About} />

        <Footer />
      </div>
    </Router>
  );
};

export default App;
