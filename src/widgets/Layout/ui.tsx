import type { FC } from "react"
import { Outlet } from "react-router"
import Header from "./ui/Header";
import Content from "./ui/Content";

const Layout: FC = () => {
  return (
    <>
      <Header/>
      <Content>
        <Outlet/>
      </Content>
    </>
  )
}

export default Layout