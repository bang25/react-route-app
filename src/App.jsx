
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import RootLayout from './layouts/RootLayout'
import About from './pages/About'
import Contact, { contactAction } from './pages/help/Contact'
import Faq from './pages/help/Faq'
import HelpLayout from './layouts/HelpLayout'
import CareersLayout from './layouts/CareersLayout'
import Careers from './pages/careers/Careers'
import CareerDetails from './pages/careers/CareerDetails.jsx'


const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} >
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='help' element={<HelpLayout />} >
        <Route path='contact' element={<Contact />} action={contactAction}/>
        <Route path='faq' element={<Faq />} />
      </ Route>
      <Route path='careers' element={<CareersLayout />} >
        <Route index element={<Careers />} />
        <Route path=':id' element={<CareerDetails />} />

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
