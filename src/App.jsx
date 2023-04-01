import './App.css'
import Banner from './components/Banner'
import Header from './components/Header'
import Nav from './components/Nav'
import About from './components/About'
import Service from './components/Service'
import Work from './components/Work'
import Contact from './components/Contact'

function App() {

  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Service />
      <Work />
      <Contact />
      <div className='h-[4000px]'></div>
    </div>
  )
}

export default App
