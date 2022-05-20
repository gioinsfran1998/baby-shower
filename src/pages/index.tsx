import { Fragment, ReactChild, ReactFragment, ReactPortal } from 'react';

import AboutMe from '@/components/Shared/AboutMe/AboutMe';
import DateContent from '@/components/Shared/DateContent/DateContent';
import Event from '@/components/Shared/Event/Event';
import Gallery from '@/components/Shared/Gallery/Gallery';
import Gifts from '@/components/Shared/Gifts/Gifts';
import Header from '@/components/Shared/Header/Header';
import Layout from '@/components/Shared/Layout/Layout';

const Home = () => {
  return (
    <Layout>
      <Header />
      <AboutMe />
      <DateContent />
      <Gallery />
      <Gifts />
      <Event />
    </Layout>
  );
};

Home.getLayout = function getLayout(
  page: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined
) {
  return <Fragment>{page}</Fragment>;
};

export default Home;
