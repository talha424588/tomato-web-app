import logo from '../../Assets/logo.png';

function Navbar()
{
    return (
        <>
        <div className="navbar">
            <img src={logo} alt="logo" className="logo" />
        </div>
        </>
    )
}
export default Navbar;