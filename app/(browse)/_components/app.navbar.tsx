import Logo from '@/components/shared/logo'
import { SidebarTrigger } from '@/components/ui/sidebar'
import React from 'react'

function AppNavbar() {
  return (
    <div className='w-full h-20 bg-sidebar border-b px-4 mt-2 rounded-lg border sticky top-2 z-50'>
        <div className="flex items-center justify-between h-full">
            <Logo/>
            <div className="flex items-center lg:gap-x-1 gap-x-1">
                <SidebarTrigger/>
            </div>
        </div>
    </div>
  )
}

export default AppNavbar