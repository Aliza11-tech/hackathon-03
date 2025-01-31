import FigmaToCode from "./component/Figmatocode";
import Herosection from "./component/Herosection";
import Featured from "./component/Featured";
import Gearup from "./component/Gearup";
import Dontmiss from "./component/Dontmiss";
import Essentials from "./component/Essentials";
import Last from "./component/Last";
import Shoes from "./shoes/page";
export default function Home() {
  return (
    <main>
      <div className="hidden lg:block">
        <Shoes/>
        <Herosection />
        <FigmaToCode />
        <Featured />
        <Gearup />
        <Dontmiss />
        <Essentials />
        <Last />
      </div>
    </main>
  );
}