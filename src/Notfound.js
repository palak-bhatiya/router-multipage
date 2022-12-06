import { Link } from "react-router-dom";
function Notfound() {
    return (
        <div>
            <h1>Oops! You seem to be lost.</h1>
            <p>Here are some helpful links:</p>
            {/* <Link to='/Home'>Home</Link> */}
            <a href="/">Home</a>
        </div>
    )
}
export default Notfound;