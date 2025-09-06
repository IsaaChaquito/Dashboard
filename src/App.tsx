import { useState } from 'react'
import './App.css'
import Layout from './components/Layout/Layout'


function App() {
  const [count, setCount] = useState(0)

  return (
    // <div className='APP-CONTAINER flex justify-center w-full min-h-screen bg-gray-400 text-center'>
      
    //   <div className='DASHBOARD-CONTAINER flex flex-grow flex-col items-center justify-center w-full bg-white text-black'>
    //     <header className='HEADER bg-blue-200 w-full p-4 fixed top-0'>
    //       <h1 className='text-2xl font-bold'>Dashboard</h1>
    //     </header>

    //     <section className='MAIN flex justify-center w-full h-fulll p-4 bg-blue-300 '>
    //       <div className='left-sidebar-menu hidden sm:inline-block'>Left menú</div>
    //       <div className='content z-10'>Content</div>
    //       <div className='right-sidebar hidden sm:inline-block'>Right menú</div>
    //     </section>

    //     <footer className='FOOTER bg-blue-400 w-full p-4 fixed bottom-0'>
    //       <p className='text-sm'>&copy; 2024 My Dashboard</p>
    //     </footer>
    //   </div>


    // </div>

    <Layout 
      children={
        <div className='h-screend'>Content</div>
      }>

    </Layout>
  )
}

export default App
