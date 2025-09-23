const User = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  // could fetch user data here using the id param
  return <>User Profile {id}</>;
};

export default User;
