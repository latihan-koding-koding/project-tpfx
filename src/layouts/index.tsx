import Link from 'next/link';
import React, { useRef } from 'react';

import { Button } from '../components/Button/Button';
import Text from '../components/Text/Text';
import Footer from './Footer';
import Navbar, { menuList, NavbarRefInterface } from './Navbar';

const Layout: React.FC<{ children?: React.ReactNode }> = (props) => {
  const navbarRef = useRef<NavbarRefInterface>();

  return (
    <div className="drawer drawer-end" data-theme="bumblebee">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="flex flex-col items-center drawer-content min-h-screen">
        <Navbar navbarRef={navbarRef} />
        <div className="flex-1 w-full" onClickCapture={() => navbarRef.current?.closeMenu()}>
          {props.children}
        </div>
        <Footer />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 text-base-content bg-gray-100">
          <div className="mb-6">
            <a
              href="https://clientarea.tpfx.co.id/"
              target="_blank"
              rel="noreferrer"
              className="w-full"
            >
              <Button
                variant="primary"
                paddingHorizontal={24}
                paddingVertical={6}
                className="w-full"
              >
                <Text fontWeight={600} className="text-white" textAlign="center">
                  Client Area
                </Text>
              </Button>
            </a>
          </div>
          {menuList.map((menu, i) => {
            if (menu.label !== 'Home') {
              return (
                <div key={i}>
                  {!!(i - 1) && <div className="border my-3 border-primary-gold-1" />}
                  <Text fontWeight={700} fontSize={18}>
                    {menu.label}
                  </Text>
                  {menu.submenuData?.subMenu.map((submenu, i) => {
                    return (
                      <Link href={menu.path + submenu.path} key={i} passHref>
                        <li>
                          <Text as={'a'} fontWeight={600}>
                            {submenu.label}
                          </Text>
                        </li>
                      </Link>
                    );
                  })}
                </div>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
};
export default Layout;
