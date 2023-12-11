import Link from 'next/link';

type Props = {
  href: string;
  displayName: string;
  clazzName: string;
};

export const NavbarLink = ({ href, displayName, clazzName }: Props) => {
  return (
    <>
      <Link href={href} className={clazzName}>
        {displayName}
      </Link>
    </>
  );
};
