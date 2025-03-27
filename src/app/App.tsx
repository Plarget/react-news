import {withProviders} from "./providers";
import {Route, Routes} from "react-router";
import Layout from "@/widgets/Layout";
import MainPage from "@/pages/MainPage";
import CreateArticlePage from "@/pages/CreateArticlePage";
import EditArticlePage from "@/pages/EditArticlePage";
import './styles'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<MainPage/>}/>
        <Route path="create-article" element={<CreateArticlePage/>}/>
        <Route path="edit-article/:id" element={<EditArticlePage/>}/>
      </Route>
    </Routes>
  )
}

export default withProviders(App)
