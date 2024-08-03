import BackgroundImage from "./BackgroundImage";

function Header() {
  return (
    <header>
      <BackgroundImage />
      <h1 className="first-heading">
        Word<span className="first-heading--thin">Analytics</span>
      </h1>
    </header>
  );
}

export default Header;
