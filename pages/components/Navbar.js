import React from 'react'
import Image from 'next/image'
import avater from '/img/Avater.PNG'

const style={
    wrapper: `h-16 w-full bg-black text-white flex md:justify-around items-center px-60 fixed z-20`,
    leftMenu: `flex gap-3`,
    logo: `text-3xl text-white flex cursor-pointer mr-16`,
    menuItem: `text-lg text-white font-medium flex items-center mx-4 cursor-ponter`,
    rightMenu: `flex gap-3 items-center`,
    userImageContainer: `mr-2`,
    userImage: ` h-10 w-10 mr-4 rounded-full p-px object-cover cursor-pointer`,
    loginButton: `flex items-center cursor-pointer rounded-full hover:bg-[#333333] px-4 py-1`,
    loginTexr: ` ml-2 `,

}

const currentUser='0x8939c3B6f90f63B99F809be3A59492c18AAaa56A'

const Navbar=() => {
    return (
        <div className={style.wrapper}>
            <div className={style.leftMenu}>
                <div className={style.logo}>
                    Uber
                </div>
                <div className={style.menuItem}>Ride</div>
                <div className={style.menuItem}>Drive</div>
                <div className={style.menuItem}>More</div>
            </div>
            <div className={style.rightMenu}>
                <div className={style.menuItem}>Help</div>
                <div className={style.menuItem}>Val</div>
                <div className={style.userImageContainer}>
                    <Image src={avater} width={40} height={40} alt={avater} className={style.userImage} />
                </div>
                {currentUser? (
                    <div>{currentUser.slice(0,6)}...{currentUser.slice(39)}</div>

                ):(
                    <div>Please Log In</div>

                )}

            </div>
        </div>
    )
}

export default Navbar