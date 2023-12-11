import Link from 'next/link';

type Props = {
  href: string;
  displayName: string;
  clazzName: string;
};

export const NavbarLink = ({ href, displayName, clazzName }: Props) => {
  return (
    <>
      <Link
        href={href}
        // className='bg-white text-gray-900 py-2 px-3 rounded-lg font-medium'
        className={clazzName}
      >
        {displayName}
      </Link>
    </>
  );
};
