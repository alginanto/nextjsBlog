const NavBar = () => {
    return (<nav className="sticky top-0 z-50 border-b  backdrop-blur">
        <div className="flex justify-center items-center gap-8" >
            <div>
                <div>Logo</div>
                <div>Webdev.blog</div>
            </div>
            <div>Search</div>
            <div>
                <div>theme</div>
                <div>Notifications</div>
                <div>Usermenu</div>
            </div>
        </div>
        </nav>);
}
 
export default NavBar;