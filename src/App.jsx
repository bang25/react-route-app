
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import RootLayout from './layouts/RootLayout'
import About from './pages/About'
import Contact from './pages/help/Contact'
import Faq from './pages/help/Faq'
import HelpLayout from './layouts/HelpLayout'
import CareersLayout from './layouts/CareersLayout'
import Careers from './pages/careers/Careers'


const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} >
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='help' element={<HelpLayout />} >
        <Route path='contact' element={<Contact />} />
        <Route path='faq' element={<Faq />} />
      </ Route>
      <Route path='careers' element={<CareersLayout />} >
        <Route index element={<Careers />} />
      </ Route>
    </Route>
  )
)
function App() {
  return(
    <RouterProvider router={route} />
  )
}

export default App
