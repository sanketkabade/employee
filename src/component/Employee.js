import { useState } from "react";
import userList from "./userList";
import UserTable from "../tables/Usertables";
import AddUserForm from "../Forms/AddUserForm";
import EditUserForm from "../Forms/EditUserForm";

const Employee = () => {
  const [users, setUsers] = useState(userList); //get the data from userList Component and set it to  users variable

  const addUser = (newuser) => {
    newuser.id = users.length + 1; //increae the lenght of the existing array
    setUsers([...users, newuser]); //setUsers methode is use to set new user in array
    alert("User Added Successfully");
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id)); // it show data except givent id
  };

  const [editing, setEditing] = useState(false);
  const initUser = { id: null, name: "", username: "" };
  const [currentUser, setCurrentUser] = useState(initUser);

  const editUser = (id, user) => {
    setEditing(true);
    setCurrentUser(user);
  };
  const updateUser = (newUser) => {
    setUsers(
      users.map((user) => (user.id === currentUser.id ? newUser : user))
    );
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          {editing ? (
            <div className="col-md-4">
              <h2> Edit User</h2>
              <EditUserForm
                setEditing={editing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div className="col-md-4">
              <h2> Add User</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
          <div className="col-md-8">
            <h2> List of User</h2>
            <UserTable
              Users={users}
              deleteUser={deleteUser}
              editUser={editUser}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Employee;
