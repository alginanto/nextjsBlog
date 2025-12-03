import RegisterForm from "@/components/auth/RegisterForm";
import Container from "@/components/layout/Container";
import { db } from "@/lib/db";

const Register = async() => {
  await db.user
  return (
    <Container>
      <RegisterForm />
    </Container>
  );
};

export default Register;
