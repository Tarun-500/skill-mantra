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
import ProgramPartners from "./components/ProgramPartner";
import CCAFeatures from "./components/CCAFeatures";
import ProgramFeatures from "./components/ProgramFeatures";
import DreamsComponent from "./components/Dream";
import StepTimeline from "./components/StepTimeline";
import AssetSlider from "./components/AssetSlider";
import CourseComponent from "./components/CourseComponent";
import CounselingComponent from "./components/CounselingComponent";
import TestimonialComponent from "./components/Testimonial";
import TargetSegmentCarousel from "./components/TargetSegment";

export default function Home() {
  return (
    <>
      <Header />
      <CourseComponent />
      <CounselingComponent />
      <MeterComponent />
      <TestimonialComponent />
      <TrustedCompanies />
      <DreamsComponent />

      <TargetSegmentCarousel />

      <ProgramPartners />
      <AssetSlider />

      <CCAFeatures />

      <ProgramFeatures />
      <JobAssistance />
      <FinancePartner />
      <StepTimeline />
      <ToolsPlatform />
      <WhoCanJoin />
      <WhoWeAre />
      <CounselingForm />
      <CourseSlider />
    </>
  );
}
