import React, { useState } from 'react'


import { Account, Help } from './HeaderModal'
import { ClickOutside } from './clickOutside';

const HeaderNav = () => {

    // const [search, setSearch] = useState('')
    const [topNavModal, setTopNavModal] = useState(false);
    const [topNavModal2, setTopNavModal2] = useState(false);


    // toggling modal for both account
    const handleTopModal = () => {
        if (topNavModal === false) {
            setTopNavModal(true);
        } else {
            setTopNavModal(false)
        }
    }
    // toggling modal for help
    const handleTopModal2 = () => {
        if (topNavModal2 === true) {
            setTopNavModal2(false);
        } else {
            setTopNavModal2(true)
        }
    }


    console.log(handleTopModal)

    const handleSearch = (e) => {
        e.preventDefault()
    }

    return (
        <section>
            <div className="grid grid-cols-[20%,1fr] justify-between items-center px-[10rem] fixed w-full shadow-md bg-white z-50">
                <img className="w-[134px] h-[30]" src="https://1000logos.net/wp-content/uploads/2022/02/Jumia-Logo-500x281.png" alt="" />

                <div className="flex items-center justify-between">
                    <form className="flex items-center gap-3" action="">
                        <div className="flex items-center h-full w-[500px] border-[1px] border-[#c7c7cd] py-3 px-5 rounded-md">
                            <i className="text-[20px] text-[#75757A] mr-3 fa-solid fa-magnifying-glass"></i>
                            <input className=" w-full outline-none text-[16px] " type="text" placeholder='Search products, brands and Categories' />
                        </div>
                        <button
                            className="bg-[#FE9900] hover:bg-[#ef9610]  text-white text-[14px] py-4 px-6 rounded-md shadow-md"
                            type='button'
                            onClick={handleSearch}
                        >SEARCH</button>
                    </form>
                    <div onClick={handleTopModal} className={` py-4 px-3 relative ${topNavModal === true ? 'bg-[#EDEDED] rounded-md' : ''}`}>
                        <div className="hover:text-[#FE9900]">
                            <h4><i className="fa-regular fa-user"></i> Account <i className={topNavModal === false ? 'fa-solid fa-angle-down' : 'fa-solid fa-angle-up'}></i></h4>
                        </div>
                        <div className="absolute">
                            {topNavModal === true ? <Account /> : ''}
                        </div>
                    </div>
                    <div onClick={handleTopModal2} className={` py-4 px-3 ${topNavModal2 === true ? 'bg-[#EDEDED] rounded-md' : ''}`}>
                        <div className="hover:text-[#FE9900]">
                            <h4><i className="fa-regular fa-circle-question"></i> Help <i className={topNavModal2 === false ? 'fa-solid fa-angle-down' : 'fa-solid fa-angle-up'}></i> </h4>
                        </div>
                        <div className="absolute">
                            {topNavModal2 === true ? <Help /> : ''}
                        </div>
                    </div>
                    <div className="hover:text-[#FE9900] py-4 px-3">
                        <h4> <i className="fa-solid fa-cart-shopping"></i> Cart</h4>
                    </div>
                </div>
            </div>
            <ClickOutside show={topNavModal} onClickOutside={() => { setTopNavModal(false) }} />
            <ClickOutside show={topNavModal2} onClickOutside={() => { setTopNavModal2(false) }} />
        </section >
    )
}

export default HeaderNav