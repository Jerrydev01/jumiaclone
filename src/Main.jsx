import React from 'react'

import HeaderNav from "./components/header/HeaderNav";
import MainSec from './components/section1/mainsec';

const Main = () => {
    return (
        <main>
            <div className="px-[10rem] mb-5">
                <img src="https://ng.jumia.is/cms/0-6-anniversary/2022/ts.png" alt="" />
            </div>
            <HeaderNav />
            <MainSec />
        </main>
    )
}

export default Main