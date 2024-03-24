import TanstackProvider from "../(services)/tanstackProvider";
import Test from "./Test";
import Hero from "./componenets/ Hero";

export default function Home() {
  return (
    <div className="">
      <Hero />
      home
      {/* <TanstackProvider>
        <Test />
      </TanstackProvider> */}
    </div>
  );
}
