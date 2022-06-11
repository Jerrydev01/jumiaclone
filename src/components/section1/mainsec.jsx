import React from 'react'
import Swiper from './swiper'
import SideNave from './sideNave'
import { Link, BrowserRouter as Router } from 'react-router-dom'

const Mainsec = () => {
    return (
        <section className="">
            <Router>
                <div className=" mx-[10rem] mt-[12rem] grid grid-cols-5 gap-7">
                    <div className="row-span-2">
                        <SideNave />
                    </div>
                    <div className="row-span-2 col-span-3 h-full object-cover">
                        < Swiper />
                    </div>
                    <div className="rounded-md">
                        <Link to="/">
                            <img className="rounded-md top-2 relative" src="https://ng.jumia.is/cms/0-1-cpr/2022/may-26/free-delivery-campaign/free-delivery__.png" alt="" />
                        </Link>
                    </div>
                    <div className="">
                        <Link to='/'>
                            <img className="rounded-md bottom-2 relative" src="https://ng.jumia.is/cms/0-1-initiatives/jumia-prime/2022/june/JprimeJA_GIF.gif" alt="" /></Link>
                    </div>

                </div>
            </Router>
        </section>
    )
}

export default Mainsec