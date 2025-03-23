import { sayHello } from '@/utils/actions';

async function SingleUserPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  sayHello(slug);

  return <div>SingleUserPage</div>;
}
export default SingleUserPage;
