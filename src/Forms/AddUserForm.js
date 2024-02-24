import { useState } from "react";

const AddUserForm = (props) => {
  const initUser = { id: null, name: " ", username: " " };
  const [user, setUsers] = useState(initUser);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsers({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.name && user.username) {
      handleChange(e, props.addUser(user));
    }
  };
  return (
    <>
      <form className=" row g-4">
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={user.name}
        />
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleChange}
        />
        <button className="btn btn-success" onClick={handleSubmit}>
          Add User
        </button>
      </form>
    </>
  );
};
export default AddUserForm;
