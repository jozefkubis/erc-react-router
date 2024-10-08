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
import TraumatickyPacient from "./pages/erc/traumaKPR/TraumatickyPacient";
import ALS from "./pages/erc/traumaKPR/ALS";
import TraumaPostup from "./pages/erc/traumaKPR/TraumaPostup";
import ROSC from "./pages/erc/traumaKPR/ROSC";
import EndCPR from "./pages/erc/traumaKPR/EndCPR";
import Transport from "./pages/erc/traumaKPR/Transport";
import PPPC from "./pages/erc/traumaKPR/PPPC";
import ResTorak from "./pages/erc/traumaKPR/ResTorak";
import TTaVF from "./pages/erc/nahodna hypotermia/TTaVF";
import PoruchVed from "./pages/erc/nahodna hypotermia/PoruchVed";
import TransportDoNem from "./pages/erc/nahodna hypotermia/TransportDoNem";
import KardInstabMimoNemocnice from "./pages/erc/nahodna hypotermia/KardInstabMimoNemocnice";
import Transport2 from "./pages/erc/nahodna hypotermia/Transport2";
import TransportECLS from "./pages/erc/nahodna hypotermia/TransportECLS";
import HT2aleboHT3 from "./pages/erc/nahodna hypotermia/HT2aleboHT3";
import VFnie from "./pages/erc/nahodna hypotermia/VFnie";
import AkekolvekAno from "./pages/erc/nahodna hypotermia/AkekolvekAno";
import VsetkyNie from "./pages/erc/nahodna hypotermia/VsetkyNie";
import TransportVFnie from "./pages/erc/nahodna hypotermia/TransportVFnie";
import PrognostikaciaNaBenefit from "./pages/erc/nahodna hypotermia/PrognostikaciaNaBenefit";
import UkoncenieKPR from "./pages/erc/nahodna hypotermia/UkoncenieKPR";
import MultiorgZlyhanie from "./pages/erc/nahodna hypotermia/MultiorgZlyhanie";
import VyzadujeKPR from "./pages/erc/hypertermia/VyzadujeKPR";
import KPRano from "./pages/erc/hypertermia/KPRano";
import KPRnie from "./pages/erc/hypertermia/KPRnie";
import Dezorientovany from "./pages/erc/hypertermia/Dezorientovany";
import StudenaVoda from "./pages/erc/hypertermia/StudenaVoda";
import SodikVkrvi from "./pages/erc/hypertermia/SodikVkrvi";
import Dehydratovany from "./pages/erc/hypertermia/Dehydratovany";
import IneSympt from "./pages/erc/hypertermia/IneSympt";
import Prepustenie from "./pages/erc/hypertermia/Prepustenie";
import Hypoglykemia from "./pages/erc/hypertermia/Hypoglykemia";
import SodikVkrviAno from "./pages/erc/hypertermia/SodikVkrviAno";
import DehydratovanyAno from "./pages/erc/hypertermia/DehydratovanyAno";
import Hyponatriemia from "./pages/erc/hypertermia/Hyponatriemia";
import ZastavitChladenie from "./pages/erc/hypertermia/ZastavitChladenie";
import Monitorovanie from "./pages/erc/hypertermia/Monitorovanie";
import CasJeKluc from "./pages/erc/hypertermia/CasJeKluc";

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
          <Route
            path="afterfinalfirstminute"
            element={<AfterFinalFirstMinute />}
          />
          <Route path="itemlist" element={<Itemlist />} />
          <Route path="traumatickypacient" element={<TraumatickyPacient />} />
          <Route path="als" element={<ALS />} />
          <Route path="traumapostup" element={<TraumaPostup />} />
          <Route path="rosc" element={<ROSC />} />
          <Route path="endcpr" element={<EndCPR />} />
          <Route path="transport" element={<Transport />} />
          <Route path="pppc" element={<PPPC />} />
          <Route path="restorak" element={<ResTorak />} />
          <Route path="ttavf" element={<TTaVF />} />
          <Route path="poruchved" element={<PoruchVed />} />
          <Route path="transportdonem" element={<TransportDoNem />} />
          <Route
            path="kardinstabmimonemocnice"
            element={<KardInstabMimoNemocnice />}
          />
          <Route path="transport2" element={<Transport2 />} />
          <Route path="transportecls" element={<TransportECLS />} />
          <Route path="ht2aleboht3" element={<HT2aleboHT3 />} />
          <Route path="vfnie" element={<VFnie />} />
          <Route path="akekolvekano" element={<AkekolvekAno />} />
          <Route path="vsetkynie" element={<VsetkyNie />} />
          <Route path="transportvfnie" element={<TransportVFnie />} />
          <Route
            path="prognostikacianabenefit"
            element={<PrognostikaciaNaBenefit />}
          />
          <Route path="ukonceniekpr" element={<UkoncenieKPR />} />
          <Route path="multiorgzlyhanie" element={<MultiorgZlyhanie />} />
          <Route path="vyzadujekpr" element={<VyzadujeKPR />} />
          <Route path="kprano" element={<KPRano />} />
          <Route path="kprnie" element={<KPRnie />} />
          <Route path="dezorientovany" element={<Dezorientovany />} />
          <Route path="studenavoda" element={<StudenaVoda />} />
          <Route path="sodikvkrvi" element={<SodikVkrvi />} />
          <Route path="dehydratovany" element={<Dehydratovany />} />
          <Route path="inesympt" element={<IneSympt />} />
          <Route path="prepustenie" element={<Prepustenie />} />
          <Route path="hypoglykemia" element={<Hypoglykemia />} />
          <Route path="sodikvkrviano" element={<SodikVkrviAno />} />
          <Route path="dehydratovanyano" element={<DehydratovanyAno />} />
          <Route path="hyponatriemia" element={<Hyponatriemia />} />
          <Route path="zastavitchladenie" element={<ZastavitChladenie />} />
          <Route path="monitorovanie" element={<Monitorovanie />} />
          <Route path="casjekluc" element={<CasJeKluc />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
