import { useRouter } from "next/router";
import Header from "../components/Header";
import { HEADER_EXCLUSIONS } from "../helpers/Constants";
const Layout = ({ children }) => {
  const { pathname } = useRouter();
  if (HEADER_EXCLUSIONS.includes(pathname)) {
    return (
      <>
        <main>{children}</main>
      </>
    );
  }
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};
export default Layout;
