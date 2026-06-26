import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Beranda from "./pages/Beranda";
import About from "./pages/About";
import Solutions from "./pages/Solutions";
import AssetIntelligence from "./pages/AssetIntelligence";
import ReliabilityIntelligence from "./pages/ReliabilityIntelligence";
import RiskIntelligence from "./pages/RiskIntelligence";
import DigitalEngineering from "./pages/DigitalEngineering";
import AiDecisionSupport from "./pages/AiDecisionSupport";
import Consultation from "./pages/Consultation";
import PlatformArchitecture from "./pages/PlatformArchitecture";
import Industries from "./pages/Industries";
import OilGas from "./pages/OilGas";
import PortsMaritime from "./pages/PortsMaritime";
import PowerUtilities from "./pages/PowerUtilities";
import Manufacturing from "./pages/Manufacturing";
import Academy from "./pages/Academy";
import ResourcesLibrary from "./pages/ResourcesLibrary";
import ResourcesArticles from "./pages/ResourcesArticles";
import ResourcesCaseStudies from "./pages/ResourcesCaseStudies";
import ResourcesWhitepapers from "./pages/ResourcesWhitepapers";
import ResourcesWebinars from "./pages/ResourcesWebinars";
import ResourcesDownloads from "./pages/ResourcesDownloads";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Beranda />} />
        <Route path="/about" element={<About />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/solutions/asset-intelligence" element={<AssetIntelligence />} />
        <Route path="/solutions/reliability-intelligence" element={<ReliabilityIntelligence />} />
        <Route path="/solutions/risk-intelligence" element={<RiskIntelligence />} />
        <Route path="/solutions/digital-engineering" element={<DigitalEngineering />} />
        <Route path="/solutions/ai-decision-support" element={<AiDecisionSupport />} />
        <Route path="/solutions/consultation" element={<Consultation />} />
        <Route path="/solutions/academy" element={<Academy />} />
        <Route path="/platform" element={<PlatformArchitecture />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/industries/oil-gas" element={<OilGas />} />
        <Route path="/industries/ports-maritime" element={<PortsMaritime />} />
        <Route path="/industries/power-utilities" element={<PowerUtilities />} />
        <Route path="/industries/manufacturing" element={<Manufacturing />} />
        <Route path="/resources" element={<ResourcesLibrary />} />
        <Route path="/resources/articles" element={<ResourcesArticles />} />
        <Route path="/resources/case-studies" element={<ResourcesCaseStudies />} />
        <Route path="/resources/whitepapers" element={<ResourcesWhitepapers />} />
        <Route path="/resources/webinars" element={<ResourcesWebinars />} />
        <Route path="/resources/downloads" element={<ResourcesDownloads />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Route>
    </Routes>
  );
}

export default App;
