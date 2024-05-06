import { Inter } from "next/font/google";
import { useUser } from "@/context/user";
import Container from "@/components/layout/Container";
import AppearanceSetting from "@/components/views/appearance/AppearanceSetting";
import WithProtected from "@/hoc/withProtected";
const inter = Inter({ subsets: ["latin"] });

const  Home = () => {
  const user = useUser();
  return (
    <Container>
      <AppearanceSetting />
    </Container>
  );
}
export default WithProtected(Home)