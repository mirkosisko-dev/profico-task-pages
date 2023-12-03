import { FC, useState } from "react";
import Header from "../header";
import DividerLine from "../dividerLine";
import { MobileNavbar, DesktopNavbar } from "../navbar";
import { navLinks } from "../navbar/constants";
import { useAuthState } from "@/features/auth/context/AuthContext";

interface ILayoutProps {
  children: React.ReactNode;
  isLanding: boolean;
}

const Layout: FC<ILayoutProps> = ({ children, isLanding }) => {
  const [activeCategory, setActiveCategory] = useState(navLinks[0].category);

  const { isConnecting } = useAuthState();

  console.log({ isConnecting });

  if (isConnecting) return <div>Connecting...</div>;

  return (
    <div className="layout">
      <Header isLanding={isLanding} />
      <MobileNavbar
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <DividerLine />
      <main className="main">
        <DesktopNavbar
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        {children}
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
