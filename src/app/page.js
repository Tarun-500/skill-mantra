import styles from "./page.module.css";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import ToolsPlatform from "./components/ToolsPlatform";
import FinancePartner from "./components/FinancePartner";
import WhoCanJoin from "./components/WhoCanJoin";
import WhoWeAre from "./components/WhoWeAre";
import CounselingForm from "./components/CounselingForm";
import CourseSlider from "./components/Slider";
import MeterComponent from "./components/Meter";
import JobAssistance from "./components/JobAssistance";
import TrustedCompanies from "./components/TrustedCompanies";
import ProgramPartners from "./components/ProgrammPartner";
import CCAFeatures from "./components/CCAFeatures";
import ProgramFeatures from "./components/ProgramFeatures";
import DreamsComponent from "./components/Dream";
import StepTimeline from "./components/StepTimeline";
import AssetSlider from "./components/AssetSlider";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <ToolsPlatform
        headingText="Our Tools Platform"
      />
      <MeterComponent />
      <AssetSlider />
      <CCAFeatures />
      <DreamsComponent />
      <ProgramPartners />
      <ProgramFeatures />
      <TrustedCompanies />
      <JobAssistance />
      <StepTimeline />
      <FinancePartner />
      <WhoCanJoin />
      <WhoWeAre />
      <CounselingForm />
      <CourseSlider />
    </div>
  );
}
