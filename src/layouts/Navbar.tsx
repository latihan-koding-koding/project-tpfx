import { Button } from '@components/Button/Button';
import Text from '@components/Text/Text';
import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import Link from 'next/link';
import React, {
  MutableRefObject,
  ReactNode,
  useEffect,
  useImperativeHandle,
  useState
} from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

export interface MenuItemPropsInterface {
  isActive?: boolean;
  label: string;
  handleClick: () => void;
}

const Divider = styled.div`
  border: 1px solid #ffffff;
  height: 25px;
  margin: 0 18px 0 9px;
  width: 1px;
`;

const MenuItemText = styled.a`
  ${tw`btn btn-ghost btn-sm no-animation relative`}
  padding: 0 9px;

  .indicator {
    background-color: white;
    border-radius: 50;
    bottom: 0;
    height: 2px;
    position: absolute;
    transition: all 0.1s ease-in;
    width: 0;
  }
  .active {
    width: calc(100% - 16px);
  }
`;

const ActiveIndicator = styled.div``;

const MenuItem = (props: MenuItemPropsInterface) => {
  return (
    <MenuItemText onClick={props.handleClick}>
      <Text fontWeight={700} className="hover:text-primary-gold-1 text-white">
        {props.label}
      </Text>
      <ActiveIndicator className={`indicator ${props.isActive ? 'active' : ''}`} />
    </MenuItemText>
  );
};

type MenuKeyType =
  | 'home'
  | 'trading'
  | 'instrument'
  | 'partnership'
  | 'platform'
  | 'market-analysis'
  | 'academy'
  | 'about-us';

interface SubmenuInterface {
  label: string;
  desc: string;
  path?: string;
}

interface SubmenuItemInterface {
  title: string;
  subMenu: Array<SubmenuInterface>;
}

interface MenuItemInterface {
  key: MenuKeyType;
  label: string;
  path: string;
  submenuData?: SubmenuItemInterface;
}

export const menuList: Array<MenuItemInterface> = [
  {
    key: 'home',
    label: 'Home',
    path: '/'
  },
  {
    key: 'trading',
    label: 'Trading',
    path: '/trading',
    submenuData: {
      title: 'Trading',
      subMenu: [
        { label: 'Account Type', desc: 'Pilih jenis akun trading Anda', path: '/account-type' },
        { label: 'Instrument', desc: 'Produk trading', path: '/instruments' },
        {
          label: 'Spread & Leverage',
          desc: 'Keunggulan spread dan leverage dari TPFx',
          path: '/spread-leverage'
        },
        {
          label: 'Deposit & Withdraw',
          desc: 'Keunggulan deposit dan withdraw di TPFx',
          path: '/deposit-withdraw'
        }
      ]
    }
  },
  // {
  //   key: 'instrument',
  //   label: 'Instrument',
  //   path: '/instrument',
  //   submenuData: {
  //     title: 'Instrument',
  //     subMenu: [
  //       { label: 'Forex', desc: 'Trading lebih dari 20 pasang mata uang', path: '/forex' },
  //       { label: 'Crude Oil', desc: 'Trading di minyak mentah', path: '/crude-oil' },
  //       {
  //         label: 'Indices & Dow Jones',
  //         desc: 'Indeks saham Asia dan AS siap Anda tradingkan',
  //         path: '/indices-dow-jones'
  //       }
  //     ]
  //   }
  // },
  {
    key: 'partnership',
    label: 'Partnership',
    path: '/partnership',
    submenuData: {
      title: 'Partnership',
      subMenu: [
        { label: 'IB Program', desc: 'Dapatkan keuntungan menjadi IB di TPFx', path: '/ib-program' }
      ]
    }
  },
  {
    key: 'platform',
    label: 'Platform',
    path: '/platform',
    submenuData: {
      title: 'Platform',
      subMenu: [
        { label: 'MT4', desc: 'Platform trading terbaik', path: '/mt4' },
        { label: 'Calculator', desc: 'Hitung keuntungan trading Anda', path: '/calculator' }
      ]
    }
  },
  {
    key: 'market-analysis',
    label: 'Market Analysis',
    path: '/market-analysis',
    submenuData: {
      title: 'Market Analysis',
      subMenu: [
        { label: 'News', desc: 'Dapatkan berita penting yang akan datang', path: '/news' },
        {
          label: 'Economic Calendar',
          desc: 'Pelajari perilisan data penting yang akan datang',
          path: '/economic-calendar'
        }
      ]
    }
  },
  {
    key: 'academy',
    label: 'Academy',
    path: '/academy',
    submenuData: {
      title: 'Academy',
      subMenu: [
        { label: 'Webinar ', desc: 'Dapatkan informasi webinar', path: '/webinar' },
        { label: 'E-Book', desc: 'Pelajari ilmu trading dari TPFx', path: '/e-book' }
      ]
    }
  },
  {
    key: 'about-us',
    label: 'Tentang Kami',
    path: '/about-us',
    submenuData: {
      title: 'About Us',
      subMenu: [
        {
          label: 'Company Profile',
          desc: 'Pelajari lebih jauh tentang TPFx',
          path: '/company-profile'
        },
        { label: 'license', desc: 'Regulasi dari TPFx', path: '/license' },
        { label: 'Gallery', desc: 'Kenal lebih jauh dengan TPFx', path: '/gallery' },
        { label: 'Contact Us', desc: 'Hubungi Kami lebih lanjut', path: '/contact-us' }
      ]
    }
  }
];

const StyledNavbarContainer = styled.div`
  height: 74px;
  z-index: 1000;
  ${tw` shadow-lg text-neutral-content bg-primary-gray-4 sticky top-0 w-full px-6 flex `}

  .navbar-desktop {
    @media (max-width: 1120px) {
      display: none;
    }
  }
  .navbar-mobile {
    display: none;
    @media (max-width: 1120px) {
      display: flex;
    }
  }
`;

const StyledSubmenuContainer = styled.div`
  background-color: rgba(34, 34, 35, 0.8);
  left: 0;
  top: 68px;
  ${tw`absolute w-full flex overflow-hidden`}
  ${({ isShown }: { isShown: boolean }) => (isShown ? '' : 'transform: scaleY(0)')};
  transform-origin: top;
  transition: all 0.05s ease-in;
`;
const SubmenuContainer = ({ isOpen, children }: { isOpen: boolean; children: ReactNode }) => {
  return <StyledSubmenuContainer isShown={isOpen}>{children}</StyledSubmenuContainer>;
};

export interface NavbarRefInterface {
  closeMenu: () => void;
}
export interface NavbarPropsInterface {
  navbarRef: MutableRefObject<NavbarRefInterface | undefined>;
}

const Navbar = ({ navbarRef }: NavbarPropsInterface) => {
  const router = useRouter();
  const [activeRoute, setActiveRoute] = useState<string>('/');
  const [selectedMenu, setSelectedMenu] = useState<MenuItemInterface | null>(null);

  useEffect(() => {
    let route = router.pathname as typeof activeRoute;
    route = route.split('/')[1] || 'home';

    setActiveRoute(route);
  }, [router.pathname]);

  const handleClickMenu = (data: typeof menuList[0]) => () => {
    if (selectedMenu === data) {
      return handleCloseSubmenu();
    }
    if (data.submenuData) {
      const menu = menuList.find((menu) => menu.key === data.key) || null;
      setSelectedMenu(menu);
    } else {
      handleCloseSubmenu();
    }
  };

  const handleCloseSubmenu = () => setSelectedMenu(null);

  useImperativeHandle(navbarRef, () => ({
    closeMenu: handleCloseSubmenu
  }));

  return (
    <StyledNavbarContainer>
      <div className="navbar max-w-7xl flex m-auto flex-1">
        <div className="flex-1" onClick={handleCloseSubmenu}>
          <Link href="/" passHref>
            <div className="cursor-pointer">
              <Image alt="tpfx-logo" src="/images/Tpfx.png" height={44.67} width={100} />
            </div>
          </Link>
        </div>
        <div className="navbar-desktop">
          {menuList.map((list, i) => {
            if (list.path !== '/')
              return (
                <MenuItem
                  {...list}
                  key={i}
                  isActive={list.key === activeRoute}
                  handleClick={handleClickMenu(list)}
                />
              );
          })}
          <Divider />
          <a href="https://clientarea.tpfx.co.id/" target="_blank" rel="noreferrer">
            <Button variant="primary" paddingHorizontal={24} paddingVertical={6}>
              <Text fontWeight={600} className="text-white">
                Client Area
              </Text>
            </Button>
          </a>
        </div>
        <div className="navbar-mobile">
          <label className="btn btn-square btn-ghost" htmlFor="my-drawer-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
      </div>
      <SubmenuContainer isOpen={!!selectedMenu}>
        <div className="max-w-7xl flex justify-center flex-1 px-6 mt-5 mb-12 ">
          <div className="flex-1 px-9 ">
            <Text fontSize={24} textTransform="capitalize" fontWeight={600} className="text-white">
              {selectedMenu?.submenuData?.title}
            </Text>
            <div className="flex">
              {selectedMenu?.submenuData?.subMenu.map((submenu, i) => (
                <Link key={i} href={selectedMenu.path + submenu.path} passHref>
                  <div className="mt-3 mr-4 cursor-pointer ">
                    <Text
                      fontSize={18}
                      textTransform="capitalize"
                      fontWeight={600}
                      className="mb-1 text-primary-gold-1 hover:text-white "
                    >
                      {submenu.label}
                    </Text>
                    <Text
                      textTransform="capitalize"
                      fontWeight={400}
                      fontFamily="Inter"
                      className="text-white flex max-w-[240px]"
                    >
                      {submenu.desc}
                    </Text>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </SubmenuContainer>
    </StyledNavbarContainer>
  );
};

export default Navbar;
