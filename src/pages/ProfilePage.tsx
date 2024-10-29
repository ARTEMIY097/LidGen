import useUser from "../hooks/useUser";

const ProfilePage = () => {
  const query = useUser();

  if (query.isLoading) {
    return (
      <div className="flex w-52 flex-col gap-4">
        <div className="flex items-center gap-4">
          <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
          <div className="flex flex-col gap-4">
            <div className="skeleton h-4 w-20"></div>
            <div className="skeleton h-4 w-28"></div>
          </div>
        </div>
        <div className="skeleton h-32 w-full"></div>
      </div>
    );
  }

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  }

  if (query.isSuccess) {
    const { email, role } = query.data;
    return (
      <div className="flex flex-col gap-4 bg-neutral m-4 p-5 rounded-xl shadow-xl">
        <div className="flex items-center gap-4">
          <div className="flex flex-col gap-4">
            <div>{email}</div>
            <div>{role}</div>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="btn btn-primary">Изменить профиль</button>
          <button className="btn btn-primary">Изменить пароль</button>
        </div>
      </div>
    );
  }
};

export default ProfilePage;
