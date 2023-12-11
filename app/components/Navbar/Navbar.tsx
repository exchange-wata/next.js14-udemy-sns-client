import Link from 'next/link';
import React from 'react';
import { NavbarLink } from './Navbar/NavbarLink';

const Navbar = () => {
  return (
    <header className='bg-gray-700 p-4 text-white'>
      <div className='container mx-auto flex justify-between items-center'>
        <h1 className='font-semibold text-xl'>
          <NavbarLink
            href={'/'}
            displayName={'SNS Clone'}
            clazzName={'text-2xl font-medium'}
          />
        </h1>
        <nav>
          <ul className='flex space-x-4'>
            {
              // user ? (
              // <>
              // <NavbarLink href={`/profile/${user.id}`} displayName={'プロフィール'}
              // clazzName={"bg-white text-gray-900 py-2 px-3 rounded-lg font-medium"} />
              //   <button
              //   onClick={logout}
              //   className={'bg-white text-gray-900 py-2 px-3 rounded-lg font-medium'} />
              // </>
              // ) :
              <>
                <NavbarLink
                  href={'/login'}
                  displayName={'ログイン'}
                  clazzName={
                    'bg-white text-gray-900 py-2 px-3 rounded-lg font-medium'
                  }
                />
                <NavbarLink
                  href={'/signup'}
                  displayName={'サインアップ'}
                  clazzName={
                    'bg-white text-gray-900 py-2 px-3 rounded-lg font-medium'
                  }
                />
              </>
              // )
            }
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
