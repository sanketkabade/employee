const UserTable = (props) => {
  return (
    <>
      <div>
        <table className=" table table-striped table-border">
          <thead>
            <tr>
              <th>NO</th>
              <th>Name</th>
              <th>UserId</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {props.Users.length > 0 ? (
              props.Users.map((user) => {
                const { id, name, username } = user;
                return (
                  <tr>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{username}</td>
                    <td>
                       
                      <button
                        className="btn btn-sucess"
                        onClick={() => props.deleteUser(id)}
                      > Delete </button>

                       <button className="btn btn-sucess"
                        onClick={() => props.deleteUser(id)}
                      > Delete </button>
                      <button className="btn btn-sucess"
                         onClick={()=> props.editUser(id,user)}
                      > Edit </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={4}> Record not found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default UserTable;
