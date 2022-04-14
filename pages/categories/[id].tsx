import { GetStaticProps, GetStaticPaths } from 'next';
import MainLayout from '@/components/layout/mainLayout';
import withAuth from '@/components/HOCs/withAuth';

type Props = {
  item: object;
  errors?: any;
};

const StaticPropsDetail = ({ item, errors }: Props) => {
  if (errors) {
    return (
      <MainLayout>
        <p>
          <span style={{ color: 'red' }}>Error:</span> {errors}
        </p>
      </MainLayout>
    );
  }

  <MainLayout>
    <p>
      <span style={{ color: 'red' }}>Error:</span> {errors}
    </p>
  </MainLayout>;
};

export default withAuth(StaticPropsDetail);

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the paths we want to pre-render based on users
  const paths = [{ params: { id: '123' } }, { params: { id: '143' } }];

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = 123;
    const item = 123;
    // By returning { props: item }, the StaticPropsDetail component
    // will receive `item` as a prop at build time
    return { props: { item } };
  } catch (err) {
    return { props: { errors: err.message } };
  }
};
