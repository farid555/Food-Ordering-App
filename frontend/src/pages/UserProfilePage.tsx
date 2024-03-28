import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";
import { useUpdateMyUser, useGetMyUser } from "@/api/MyUserApi";

const UserProfilePage = () => {
  const { currentUser, isLoading: isGetLoading } = useGetMyUser();
  const { updateUser, isLoading: isUpdateloading } = useUpdateMyUser();

  if (isGetLoading) {
    return <span>Loading...</span>;
  }

  if (!currentUser) {
    return <span>Unable to load user profile</span>;
  }
  return (
    <UserProfileForm
      currentUser={currentUser}
      onSave={updateUser}
      isLoading={isUpdateloading}
    />
  );
};

export default UserProfilePage;
