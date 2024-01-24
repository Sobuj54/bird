import ActionButtons from "../../components/NavigationMenu/ActionButtons";
import NavigationMenu from "../../components/NavigationMenu/NavigationMenu";
import Logo from "../../components/logo/Logo";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center pr-10 lg:px-20 sticky top-0 h-24 z-50 bg-white w-full">
      <div className="px-4">
        <div>
          <Logo></Logo>
        </div>
      </div>
      <div className="flex items-center">
        <NavigationMenu></NavigationMenu>
        <ActionButtons></ActionButtons>
      </div>
    </div>
  );
};

export default NavBar;
