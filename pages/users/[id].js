import { useRouter } from "next/router";
import { Space, Table, Tag } from "antd";
import { COLUMNS } from "../helpers/Constants";

export default function ({ user }) {
  return <Table dataSource={[user]} columns={COLUMNS} pagination={false} />;
}
export async function getServerSideProps({ params }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const user = await res.json();
  return {
    props: { user },
  };
}
