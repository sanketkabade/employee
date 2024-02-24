import { useState } from "react";

const EditUserForm = (props) => {
  const [user, setUsers] = useState(props.currentUser);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsers({ ...user, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.name && user.username) {
      props.updateUser(user);
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
          Edit User
        </button>
      </form>
    </>
  );
};
export default EditUserForm;
