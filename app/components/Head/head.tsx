import Head from 'next/head';
import React from 'react';

type Props = {
  name: string;
};

const Header = ({ name }: Props) => {
  return (
    <Head>
      <title>{name}</title>
    </Head>
  );
};

export default Header;
