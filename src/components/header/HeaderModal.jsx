import { Link, BrowserRouter as Router } from 'react-router-dom'

export const Account = () => {
    return (
        <Router>

            <div className="w-[10vw] mt-8 p-5 translate-x-[-15px] bg-white px-6 shadow-md rounded-md">
                <Link to="/">
                    SIGN IN
                </Link>
                <hr />
                <div className="">
                    <Link className="flex items-center gap-5" to="/">
                        <h2><i className="fa-regular fa-user"></i></h2>
                        <p>My account</p>
                    </Link>
                </div>
                <div className="">
                    <Link to="/"></Link>
                </div>
                <div className="">
                    <Link to="/"></Link>
                </div>

            </div>
        </Router>
    )
}
export const Help = () => {
    return (
        <Router>

            <div className="w-[10vw] mt-8 p-5 translate-x-[-25px] bg-white px-6 shadow-md rounded-md">
                <Link to="/">
                    SIGN IN
                </Link>
                <hr />
                <div className="">
                    <Link to="/">
                        <p><i className="fa-regular fa-user"></i></p>
                        <p>My account</p>
                    </Link>
                </div>
                <div className="">
                    <Link to="/"></Link>
                </div>
                <div className="">
                    <Link to="/"></Link>
                </div>

            </div>
        </Router>
    )
}

