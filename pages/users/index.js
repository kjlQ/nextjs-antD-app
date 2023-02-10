import Link from "next/link";
import { Button } from "antd";

const Users = ({ users }) => {
  return (
    <div>
      <ul className="users-list">
        {users.map((user) => (
          <div key={user.id} className="list-item">
            <Link href={`/users/${user.id}`}>
              <Button type="primary" size="medium">
                Explore
              </Button>
            </Link>
            <li>{user.name}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};
export default Users;

export async function getStaticProps(context) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return {
    props: { users },
  };
}
