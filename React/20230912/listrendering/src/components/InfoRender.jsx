import { useState } from "react";

function UserItem({ user }) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <li onClick={() => setShowInfo(!showInfo)}>
      {user.name}
      {showInfo ? (
        <div>
          <p>Email: {user.email}</p>
          <p>job: {user.job}</p>
        </div>
      ) : (
        ""
      )}
    </li>
  );
}

function UserList({ users }) {
  return (
    <ul>
      {users.map((item) => {
        return <UserItem key={item.id} user={item} />;
      })}
    </ul>
  );
}

function InfoRender() {
  const users = [
    { id: 1, name: "Alice", email: "alice@example.com", job: "Engineer" },
    { id: 2, name: "Bob", email: "bob@example.com", job: "Designer" },
    { id: 3, name: "Charlie", email: "charlie@example.com", job: "Manager" },
  ];

  return (
    <>
      <h1>User List</h1>
      <UserList users={users} />
    </>
  );
}

export default InfoRender;
