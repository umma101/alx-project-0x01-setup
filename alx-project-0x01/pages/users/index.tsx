import Header from "@/components/layout/Header";

const UsersPage: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="p-6">
        <h1 className="text-3xl font-semibold">Users Page</h1>
        <p className="mt-2 text-gray-600">List of all registered users.</p>
      </div>
    </div>
  );
};

export default UsersPage;
