import Container from "./Container";
import ThemeToggle from "./ThemeToggle";

const NavBar = () => {
  return (
    <nav className="sticky top-0 border-b z-50 bg-white dark:bg-slate-950">
      <Container>
        <div className="flex justify-between items-center gap-8">
          <div className="flex items-center gap-1 cursor-pointer">
            <div>Logo</div>
            <div>Webdev.blog</div>
          </div>
          <div>Search</div>
          <div className="flex gap-5 sm:gap-8 items-center">
            <ThemeToggle />
            <div>Notifications</div>
            <div>Usermenu</div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
