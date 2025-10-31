import React from 'react'
import { MyDock } from '@/components/ui/MyDock'

const Navbar = () => {
  return (
    <>
    <div className="fixed bottom-10 left-0 w-full p-4 flex justify-center z-50">
    <MyDock />
    </div>
    </>
  )
}

export default Navbar