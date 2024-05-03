import Image from "next/image";
import { Inter } from "next/font/google";
import LoginForm from "@/components/form/LoginForm";
import { useUser } from "@/context/user";
import Container from "@/components/layout/Container";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const user = useUser();
  return (
    <Container>
      Heelo
    </Container>
  );
}
