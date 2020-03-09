import React, {useState} from 'react';
import UserTable from "./tables/UserTable"

const App = () => {

  const userData = [
    {id: 1, name: "Mark", username: "M_X_M"},
    {id: 2, name: "Tom", username: "Tom_123"},
    {id: 3, name: "Jerry", username: "Jerry_07"},
  ]

  const [users ,setUsers] = useState(userData)

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users}/>
        </div>
      </div>
    </div>
  )
}

export default App
