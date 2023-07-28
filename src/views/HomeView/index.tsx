import React, { FC } from 'react'
import MainLayout from "../../layouts/MainLayout";


type IHomeViewProps = {
}

const HomeView: FC<IHomeViewProps> = (props: IHomeViewProps) => {
    return (
        <MainLayout>
            <div>
                HomeView
            </div>
        </MainLayout>
    )
}
export default HomeView;
