import { Routes, Route } from 'react-router-dom'
import { routes } from './pages/route'
import NotFoundPage from './pages/NotFoundPage'

export default function App(props) {
  return (
    <Routes>
      {routes.map(({ path, element: RouteComponent }) => {
        return (
          <Route key={path} path={path} element={<RouteComponent />}></Route>
        )
      })}
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  )
}
