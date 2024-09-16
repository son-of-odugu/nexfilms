import { Account } from "../account";
import Brand from "../brand";
import BreadCrumb from "../breadcrumbs";
import MobileNav from "../navigation/mobileNav";
import SearchBar from "../searchBar";
import ThemeToggle from "../theme/themeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between border-b border-neutral-200 bg-background px-2.5 py-8 dark:border-neutral-800">
      <div className="flex items-center justify-center gap-x-2 bg-background">
        <MobileNav />
        <div className="hidden lg:block">
          <Brand />
        </div>
      </div>
      <SearchBar />
      <BreadCrumb />
      <div className="flex items-center justify-between gap-x-3">
        <ThemeToggle />
        <Account />
      </div>
    </header>
  );
}
