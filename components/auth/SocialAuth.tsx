import { FaGithub, FaGoogle } from "react-icons/fa";
import Button from "../common/Button";

const SocialAuth = () => {
  return (
    <div className="flex gap-2 flex-col md:flex-row justify-center">
      <Button
        label="Continue with GitHub"
        icon={FaGithub}
        outlined
        small
        onClick={() => {}}
      />
      <Button
        label="Continue with Google"
        icon={FaGoogle}
        outlined
        small
        onClick={() => {}}
      />
    </div>
  );
};

export default SocialAuth;
