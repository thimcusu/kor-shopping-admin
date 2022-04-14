import { GetStaticProps } from 'next';
import Link from 'next/link';
import Api from 'shared/config/api'; 
import { User } from '@/types/user';
import MainLayout from '../../components/layout/mainLayout';
import withAuth from '@/components/HOCs/withAuth';

type Props = {
  items: User[];
};

const CategoryPage = ({ items }: Props) => (
  <MainLayout>
    <h1>Category List</h1>
    <p>
      Example fetching data from inside <code>getStaticProps()</code>.
    </p>
    <p className="bg-gray-300 text-blue-400">You are currently on: /users</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </MainLayout>
);

export const getStaticProps: GetStaticProps = async () => {
  const items: User[] = [];
  return { props: { items } };
};

export default withAuth(CategoryPage);
