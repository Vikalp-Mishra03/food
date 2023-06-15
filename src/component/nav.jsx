// import './App.css'

function nav() {
    return (
        //  react.fragment is like a empty tag
        <>
            <nav>
                <div className="logo-image">
                    <a href="/">
                        <img src="src/assets/img/success.jpg" alt="logo" />
                    </a>
                </div>
                <ul>
                    <li>Home</li>
                    <li>Food</li>
                    <li>About</li>
                    <li>Account</li>
                    <li>Cart</li>
                </ul>
            </nav>
        </>
    )

}

export default nav
