import Footer from "../(src)/componenets/Footer";
import Header from "../(src)/componenets/Header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
