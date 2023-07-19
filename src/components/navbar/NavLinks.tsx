import Link from 'next/link';
import { useState } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { links } from './MyLinks';

const NavLinks = () => {
  const [heading, setHeading] = useState('');
  const [subHeading, setSubHeading] = useState('');
  return (
    <>
      {links.map((link, k1: number) => (
        <div key={k1}>
          <div className="px-3 text-left md:cursor-pointer group">
            <h1
              className="py-1 flex justify-between items-center md:pr-0 pr-5 group font-semibold"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading('');
                setSubHeading('');
              }}>
              {link.name}
              <span className="text-xl md:hidden inline">
                {heading === link.name ? (
                  <BsChevronUp className="text-[1rem] text-[#bc2449]" />
                ) : (
                  <BsChevronDown className="text-[1rem] text-[rgba(0,0,0,0.2)]" />
                )}
              </span>
              <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <BsChevronDown className="text-[1rem] text-[rgba(0,0,0,0.2)]" />
              </span>
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                  <div className="py-3">
                    <div
                      className="w-4 h-4 left-3 absolute 
                    mt-1 bg-white rotate-45"></div>
                  </div>
                  <div className="bg-white p-5 grid grid-cols-3 gap-10">
                    {link.sublinks.map((mySubLinks, k2: number) => (
                      <div key={k2}>
                        <h1 className="text-lg font-semibold">
                          {mySubLinks.Head}
                        </h1>
                        {mySubLinks.sublink.map((slink, k3: number) => (
                          <li
                            key={k3}
                            className="text-sm text-gray-600 my-2.5">
                            <Link
                              href={slink.link}
                              className="hover:text-primary">
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? 'md:hidden' : 'hidden'}
          `}>
            {/* sublinks */}
            {link.sublinks.map((slinks, k4: number) => (
              <div key={k4}>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading('')
                    }
                    className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center md:pr-0 pr-5">
                    {slinks.Head}

                    <span className="text-xl md:mt-1 md:ml-2 inline">
                      {subHeading === slinks.Head ? (
                        <BsChevronUp className="text-[1rem] text-[#bc2449]" />
                      ) : (
                        <BsChevronDown className="text-[1rem] text-[rgba(0,0,0,0.2)]" />
                      )}
                    </span>
                  </h1>
                  <div
                    className={`${
                      subHeading === slinks.Head ? 'md:hidden' : 'hidden'
                    }`}>
                    {slinks.sublink.map((slink, k5: number) => (
                      <li
                        key={k5}
                        className="py-3 pl-14">
                        <Link href={slink.link}>{slink.name}</Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
