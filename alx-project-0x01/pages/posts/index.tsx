import Header from "@/components/layout/Header";

const PostsPage: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="p-6">
        <h1 className="text-3xl font-semibold">Posts Page</h1>
        <p className="mt-2 text-gray-600">Here you’ll find all the posts.</p>
      </div>
    </div>
  );
};

export default PostsPage;
