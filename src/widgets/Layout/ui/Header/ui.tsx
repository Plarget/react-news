import type {FC} from "react"
import Logo from "@/shared/ui/Logo";
import Button from "@/shared/ui/Button";
import {useNavigate} from "react-router";
import "./Header.pcss"

const Header: FC = () => {
  const navigate = useNavigate()

  return (
    <header className="header">
      <div className="header__inner container">
        <Logo className="header__logo"/>
        <Button className="header__button button--main-3" onClick={() => navigate("/create-article")}>
          Создать статью
        </Button>
      </div>
    </header>
  )
}

export default Header