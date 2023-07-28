


import React, { ReactNode } from 'react'
import MainHeader from "./MainHeader";




const MainLayout = ({ children }: { children?: ReactNode }) => {
    return (
        <div>
            <MainHeader />
            {children}
        </div>
    )
}
export default MainLayout;