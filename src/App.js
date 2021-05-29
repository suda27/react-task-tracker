import Header from "./components/Header";
import Login from './components/Login';
import Tasks from "./components/Tasks";
import { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/About";
// import UserPool from './UserPool';
// const Axios = require('axios');
import Axios from 'axios';
import {PrintOut, PrintOutLoud,getCallApi} from './helper/ApiHelper';

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([]);

  const Name = 'Sudarsan';
 
  useEffect(() => {
    const getTasks = async () => {
      const taskFromServer = await fetchTasks();
      setTasks(taskFromServer);

      getCallApi();

      // const dataTemp = await authorizerRequest();
      // console.log(dataTemp)
    };
    getTasks();

  }, []);

  //Fetch Tasks
  const fetchTasks = async () => {  
    const res = await Axios.get('http://localhost:5000/tasks', {});
    return res.data;
  };

  //Authorizer Request
  const authorizerRequest = async () => {
    const  Token = 'eyJraWQiOiJtaHJZUW9mR2Y5UzRGVXJOVzNjcktlbmNaMFwvYjNDMUVTeUNMZVl1SlYrUT0iLCJhbGciOiJSUzI1NiJ9.eyJhdF9oYXNoIjoiX29jVkkxLXBKN0RkbGl5Q0QtZHpPZyIsInN1YiI6Ijk0ZjMwMzczLTc4Y2UtNDQ0ZC1iMWI0LTA4OTdkNDRmODE4ZiIsImNvZ25pdG86Z3JvdXBzIjpbInVzLWVhc3QtMV9JSThleURYcG9fR29vZ2xlIl0sImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX0lJOGV5RFhwbyIsImNvZ25pdG86dXNlcm5hbWUiOiJnb29nbGVfMTEyNDkyNTc2MDczNzQ4NTIyMTg5Iiwibm9uY2UiOiJoV3ZLQjVYOTBjX21oVXFMSy1OcEtZOGhDcG9fYkthMFQyYmlWVlVCRHNvV2RTTnBUUUxTejBZZXZDcHozNkFTWkNnRkJoekZxaWZEdDZNTkp5bE4yZ0hydFRFdmF4aExfd0hBc2lfS2prTGlRV2d4dUJOVGk0VW9ZQlJHVmV2VElWMDFmVllqeF9iVTgzNlRCSUhGZXFmdW5nbFVWTTdoZlI3ak9GdkNOZVkiLCJwaWN0dXJlIjoiaHR0cHM6XC9cL2xoMy5nb29nbGV1c2VyY29udGVudC5jb21cL2EtXC9BT2gxNEdoTGdETDExWXlTeXphUTVBRTcwMU1tbXFYb2xWU09LU0l3Zk5PTi1BPXM5Ni1jIiwiYXVkIjoiM2plZ25jYzRzbjZoMnZpbWNvNTBiNnBpbzEiLCJpZGVudGl0aWVzIjpbeyJ1c2VySWQiOiIxMTI0OTI1NzYwNzM3NDg1MjIxODkiLCJwcm92aWRlck5hbWUiOiJHb29nbGUiLCJwcm92aWRlclR5cGUiOiJHb29nbGUiLCJpc3N1ZXIiOm51bGwsInByaW1hcnkiOiJ0cnVlIiwiZGF0ZUNyZWF0ZWQiOiIxNjIxNzc4MDk3OTgzIn1dLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTYyMTc3ODA5OCwibmFtZSI6InN1ZGFyc2FuIHByYWJha2FyYW4iLCJleHAiOjE2MjE3ODE2OTgsImlhdCI6MTYyMTc3ODA5OCwiZW1haWwiOiJzdWRhcnNhbnNvbGFpQGdtYWlsLmNvbSJ9.KsEGUMoZoxCpdP7Im3QOPF4YsPvTye0F9MHrSctl8PEE-sfSO2QZoRrdGFUfmrh15BbcNeojwpXCpa8lnFAUDX76rlIslxspYPFi56MFOmjjO_UFJA6CPJGnutCfUUZ0_4q4iKfcDs_frD2OO2XJhQrAi6GGWXg3HMFTsxP-r6b_R_H47CDEuNE_Q9udRFWNLP8GuYQcyiQXuqF2-f8z8uFYgsTkLOPedVQUjhAi-cPeLTqfQKIqEdzXDWOYC1DWyKK4nNm0hWG0-L3Txa9g5cESvLpqkrV17iL62_ZlGMfffTkfNLsoAlmfyU7BhyxVx6UG7P2N2Qgw6ci0IMHRbg'; //'1eyJraWQiOiJtaHJZUW9mR2Y5UzRGVXJOVzNjcktlbmNaMFwvYjNDMUVTeUNMZVl1SlYrUT0iLCJhbGciOiJSUzI1NiJ9.eyJhdF9oYXNoIjoiWVV5N25CSm1RbkFBYWc4dGdHSWpIdyIsInN1YiI6IjRhMjUyZWVmLTg4MmYtNGMyMC1iNGEwLWQ3NzFlYWJkNDhmYyIsImNvZ25pdG86Z3JvdXBzIjpbInVzLWVhc3QtMV9JSThleURYcG9fR29vZ2xlIl0sImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX0lJOGV5RFhwbyIsImNvZ25pdG86dXNlcm5hbWUiOiJnb29nbGVfMTEwMTMzOTcxNDk3MTI4ODY1NjkxIiwibm9uY2UiOiJ1TFFHd1BHcWNYTlV1VHdBd0NVdUhPejV5bGJLN3pjRkppYWxpRDBUalZ0OHhsZkhLSTJjV0YzS0wyZU5xZWpHRVdUd213ZnFQT2ZVdzFJaGRxOUVweFlMQXc4X2FKZGxRel9zUXN2bXo5NFVRN1F6dEZJWWpJQWFaMmc5NG04TEZMMVNYQ3pCLTNCaUNEMXZPSDdkV1ZIZFl4aTBIUWRhSTFNUmNwZzFpSTQiLCJwaWN0dXJlIjoiaHR0cHM6XC9cL2xoMy5nb29nbGV1c2VyY29udGVudC5jb21cL2EtXC9BT2gxNEdnTlBGM2wxTzdVd283dEJZUzZoNy1TcUM1Y1hodklNNHlPX2lrYT1zOTYtYyIsImF1ZCI6IjNqZWduY2M0c242aDJ2aW1jbzUwYjZwaW8xIiwiaWRlbnRpdGllcyI6W3sidXNlcklkIjoiMTEwMTMzOTcxNDk3MTI4ODY1NjkxIiwicHJvdmlkZXJOYW1lIjoiR29vZ2xlIiwicHJvdmlkZXJUeXBlIjoiR29vZ2xlIiwiaXNzdWVyIjpudWxsLCJwcmltYXJ5IjoidHJ1ZSIsImRhdGVDcmVhdGVkIjoiMTYyMTc1MjkxODc1OCJ9XSwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2MjE3NjAwMTIsIm5hbWUiOiJTdWRhcnNhbiBTYW4iLCJleHAiOjE2MjE3NjM2MTIsImlhdCI6MTYyMTc2MDAxMiwiZW1haWwiOiJzdXNhc2FuMjdAZ21haWwuY29tIn0.fkbHDIUxUnPQ750x2QpZKYbK8kdAbBl2sW_RJnRrZIqfA_TniqLFnZj2WxZ-hVcXt464OhUjclFMbOxAGf2fSkOfXZAfQBfNjB8RAoVEk9ba5mR3BpxnVNVvzkZfWSRu4BKNnRCjMKnPhlKQ3aR-gDH-ATJjZt8a9SftIqJqaklsyYrBAE0hbxnCYl_aVVhenM9sb7HVttv9g702o5TFYeupNwofXbIW-yl8cZnlgr5Duy-J3S-FpiYEM8iFQFR5Z1pxSH9EGQUuooTGRC68Yr8JMwKRAsqmDgljEOKrjfxf09GdfRpube7fdR_M5rSIRu2CuHUAP2vW4yK2JDHU2Q';

    Axios.interceptors.request.use( request =>{
    request.headers['Authorization'] = Token;
      if(Name === '1Sudarsan'){
        console.log(Token)
        return request;
      }
      return request;
    },error =>{
      console.log('Header Authorization Token is incorrect/expired',error)
      return Promise.reject(error);
    })
    const res = await Axios.get("https://qh8ff4qe0k.execute-api.us-east-1.amazonaws.com/dev/get-user/123",{})
    return res.data;
  };
  //Fetch Individual Task
  const fetchTask = async id => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();
    return data;
  };

  // Add Task
  const addTask = async task => {
    const resTemp = await Axios.post('http://localhost:5000/tasks/',task,{
      headers: {
        "Content-Type": "application/json"
      }
      
    })

    const data = resTemp.data;//await res.json();
    console.log('Response Data: ',data)
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
  


  return (
    <Router>
      <div className="container">
        <Header
          title="Task Tracker"
          onAdd={() => setShowAddTask(!showAddTask)}
          showAddTask={showAddTask}
        />
         <Route path="/login" component={Login} />
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
