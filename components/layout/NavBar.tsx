const NavBar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b bg-white/70 backdrop-blur">
      <div className="flex justify-between items-center gap-8">
        <div>
          <div>Logo</div>
          <div>Webdev.blog</div>
        </div>
        <div>Search</div>
        <div className="flex gap-4">
          <div>Theme</div>
          <div>Notifications</div>
          <div>Usermenu</div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
