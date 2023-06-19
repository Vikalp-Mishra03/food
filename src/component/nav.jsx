import React from "react"
// import {Fahousechimney} from 'react-icons';
function nav() {
    return (
        //  react.fragment is like a empty tag
        <>
            <nav>
                <div class="logo-image">
                    <img src="https://deepthought.education/assets/images/logo/logo.svg" alt="logo" />
                    {/* <img src="src/assets/img/logo 1.png" alt=""/> */}
                </div>
                <ul>
                    <li>
                        {/* <i class="fa-solid fa-house-chimney"><Fahousechimney/></i> */}
                        <img src="src/assets/img/home.png" alt="" />
                    </li>
                    <li>
                       <img src="src/assets/img/tools.png" alt="" />
                    </li>
                    <li className="noti">
                        <img src="src/assets/img/noti.png" alt="" />
                    </li>
                    <div class="image">
                        <img src="https://s3-alpha-sig.figma.com/img/7ac8/5301/b9bfc59f733c9f17f2bede82c41154f1?Expires=1687737600&Signature=GriNUAjP-Bmk2wsrSsPicWWzihWxB3pqK3iLL-fUvPzQXYOfklFEbEMIVd5uaIjzLLEXuwfCbFZmxt05HuAPv24UJg3ovWvDPqVoN4iuwnLYxv9P1CwnaacFDbd9o9WbSBaLSWQg~zvgTKCIR~nCi3NTUN0zrPAPeFuSklzKuaynXz2BnGd-0qsnrxb9TSf5w1P9aDgZaxQFFKJ6V0pngMgFlw7yq78Rbw3nZRwDxPSauYdMBxhQywwWzw4yE54HZvVEqgcWLsFdJIRwc5EWBouQLdkIYS4F6BDcwTlI-c6Z1r8x0l1OmfA1MxPsAC8gm6HXsmL7z2FoHAjxD33BXQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                            alt="" />
                    </div>
                    <div class="menu">
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                    </div>
                </ul>
            </nav>
        </>
    )

}

export default nav
