import TanstackProvider from "../(services)/tanstackProvider";
import Test from "./Test";

export default function Home() {
  return (
    <div className="">
      home
      <TanstackProvider>
        <Test />
      </TanstackProvider>
    </div>
  );
}
