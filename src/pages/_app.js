import Overlay from "@/components/layout/Overlay";
import Sidebar from "@/components/layout/Sidebar";
import SignoutToggle from "@/components/toggles/SignoutToggle";
import ThemeToggle from "@/components/toggles/ThemeToggle";
import { AuthStateChangeProvicer } from "@/context/auth";
import { UserProvider } from "@/context/user";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import dynamic from "next/dynamic";
import { Outfit, Poppins } from 'next/font/google'
import { Toaster } from "react-hot-toast";

const outfit = Outfit({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})
const ProgressBar = dynamic(
  () => import('../components/elements/ProgressBar'),
  { ssr: false }
);

export default function App({ Component, pageProps }) {
  return <>
    <ThemeProvider attribute='class'>
      <UserProvider>
        <AuthStateChangeProvicer>
          <ProgressBar />
          <ThemeToggle />
          <SignoutToggle/>
          <Toaster
            toastOptions={{
              style: {
                background: "rgb(var(--container-color))",
                color: "var(--text-color)",
              },
            }}
            position="top-right"
          />

          <Sidebar />
          <main className={`${outfit.className} group/main lg:ml-[80px]  ml-0`}>
            <Overlay />
            <Component {...pageProps} />
            <div className="theme-glass glass"/>
            <div className="group-[.sidebar-expanded]/main:w-[9.5rem] sidebar-glass glass"/>
          </main>
        </AuthStateChangeProvicer>
      </UserProvider>
    </ThemeProvider>
  </>
}
