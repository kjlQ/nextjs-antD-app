import { Button, Space } from "antd";
import Link from "next/link";
import { PAGES } from "../helpers/Constants";
const Header = () => {
  return (
    <Space className="header" size={"large"} wrap>
      {PAGES.map((pageItem) => (
        <Link href={pageItem.path}>
          <Button size="large" type="text">
            {pageItem.page}
          </Button>
        </Link>
      ))}
    </Space>
  );
};
export default Header;
