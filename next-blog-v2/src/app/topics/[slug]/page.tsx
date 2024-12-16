import PostCreateForm from '@/components/posts/PostCreateForm';
import PostList from '@/components/posts/post-list';
import { fetchPostsByTopicSlug } from '@/db/queries/posts';

interface TopicShowPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const TopicShowPage = async ({ params }: TopicShowPageProps) => {
  const { slug } = await params;

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-2xl font-bold mb-2">{slug}</h1>
        <PostList fetchData={() => fetchPostsByTopicSlug(slug)} />
      </div>
      <div className="">
        <PostCreateForm slug={slug} />
      </div>
    </div>
  );
};

export default TopicShowPage;