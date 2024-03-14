import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tachykardia from "./pages/erc/tachykardia/Tachykardia";
import Bradykardia from "./pages/erc/bradykardia/Bradykardia";
import SharedLeyout from "./pages/SharedLeyout";
import Unstable from "./pages/erc/tachykardia/Unstable";
import QRSwidth from "./pages/erc/tachykardia/QRSwidth";
import RegIreg from "./pages/erc/tachykardia/RegIreg";
import Vagus from "./pages/erc/tachykardia/Vagus";
import Adenosin from "./pages/erc/tachykardia/Adenosin";
import Verapamil from "./pages/erc/tachykardia/Verapamil";
import Ekv from "./pages/erc/tachykardia/Ekv";
import FiP from "./pages/erc/tachykardia/FiP";
import RegIregWide from "./pages/erc/tachykardia/RegIregWide";
import FiPwide from "./pages/erc/tachykardia/FiPwide";
import VentricTachy from "./pages/erc/tachykardia/VentricTachy";
import Atropin from "./pages/erc/bradykardia/Atropin";
import Adrenalin from "./pages/erc/bradykardia/Adrenalin";
import RizikoAsystolie from "./pages/erc/bradykardia/RizikoAsystolie";
import Alternativy from "./pages/erc/bradykardia/Alternativy";
import Erc from "./pages/erc/Erc";
import PBLS from "./pages/erc/PBLS/PBLS";
import PBLSnotBreathing from "./pages/erc/PBLS/PBLSnotBreathing";
import PBLScpr from "./pages/erc/PBLS/PBLScpr";
import PALS from "./pages/erc/PALS/PALS";
import PALSrytmus from "./pages/erc/PALS/PALSrytmus";
import Vyboj from "./pages/erc/PALS/Vyboj";
import PALSadrenalin from "./pages/erc/PALS/PALSadrenalin";
import Farmakológia from "./pages/farmakologia/Farmakológia";
import NLS from "./pages/erc/NLS/NLS";
import FirstMinute from "./pages/erc/NLS/FirstMinute";
import AfterFirstMinute from "./pages/erc/NLS/AfterFirstMinute";
import After2FirstMinute from "./pages/erc/NLS/After2FirstMinute";
import AfterFinalFirstMinute from "./pages/erc/NLS/AfterFinalFirstMinute";
import Itemlist from "./pages/itemlist/ItemList";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLeyout />}>
          <Route index element={<Home />} />
          <Route path="farmakológia" element={<Farmakológia />} />
          <Route path="unstable" element={<Unstable />} />
          <Route path="tachykardia" element={<Tachykardia />} />
          <Route path="erc" element={<Erc />} />
          <Route path="bradykardia" element={<Bradykardia />} />
          <Route path="qrswidth" element={<QRSwidth />} />
          <Route path="regireg" element={<RegIreg />} />
          <Route path="vagus" element={<Vagus />} />
          <Route path="adenosin" element={<Adenosin />} />
          <Route path="verapamil" element={<Verapamil />} />
          <Route path="ekv" element={<Ekv />} />
          <Route path="fip" element={<FiP />} />
          <Route path="regiregwide" element={<RegIregWide />} />
          <Route path="fipwide" element={<FiPwide />} />
          <Route path="ventrictachy" element={<VentricTachy />} />
          <Route path="atropin" element={<Atropin />} />
          <Route path="adrenalin" element={<Adrenalin />} />
          <Route path="rizikoasystolie" element={<RizikoAsystolie />} />
          <Route path="alternativy" element={<Alternativy />} />
          <Route path="pbls" element={<PBLS />} />
          <Route path="pblsnotbreathing" element={<PBLSnotBreathing />} />
          <Route path="pblscpr" element={<PBLScpr />} />
          <Route path="pals" element={<PALS />} />
          <Route path="palsrytmus" element={<PALSrytmus />} />
          <Route path="vyboj" element={<Vyboj />} />
          <Route path="palsadrenalin" element={<PALSadrenalin />} />
          <Route path="nls" element={<NLS />} />
          <Route path="firstminute" element={<FirstMinute />} />
          <Route path="afterfirstminute" element={<AfterFirstMinute />} />
          <Route path="after2firstminute" element={<After2FirstMinute />} />
          <Route path="afterfinalfirstminute" element={<AfterFinalFirstMinute />} />
          <Route path="itemlist" element={<Itemlist/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
