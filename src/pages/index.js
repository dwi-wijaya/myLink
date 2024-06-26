import { Inter } from "next/font/google";
import { useUser } from "@/context/user";
import Container from "@/components/layout/Container";
import AppearanceSetting from "@/components/views/appearance/AppearanceSetting";
import WithProtected from "@/hoc/withProtected";
const inter = Inter({ subsets: ["latin"] });
import SignoutToggle from "@/components/toggles/SignoutToggle";
import ThemeToggle from "@/components/toggles/ThemeToggle";
import { NextSeo } from "next-seo";

const Home = () => {
  const user = useUser();
  return (
    <Container>
      <NextSeo title={`myLink`} />
      <ThemeToggle />
      <SignoutToggle />
      <AppearanceSetting />
    </Container>
  );
}
export default WithProtected(Home)