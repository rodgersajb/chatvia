import { BiDotsVerticalRounded } from "react-icons/bi";
import Image from "next/image";

const Profile = () => {

    // track active through state to determine whether accordion is active
  return (
    <>
      <div className="w-[20%] flex flex-col items-center">
        <div className="flex items-center justify-between">
          <h2>My Profile</h2>
          <BiDotsVerticalRounded />
        </div>
        <div>
          <Image
            src="/alex3.jpg"
            alt="A picture of Alex who happened to develop this app!"
            width={50}
            height={50}
          />
          <h4>Alex Rodgers</h4>
          <h5>Active</h5>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, dolores culpa officia tenetur fugit excepturi placeat iste quis vitae saepe in quidem iure sunt beatae vero incidunt, exercitationem, quaerat nulla.</p>
      </div>
    </>
  );
};

export default Profile;
