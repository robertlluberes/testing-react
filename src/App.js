import SubHeader from "./app/components/SubHeader";
import Header from "./app/components/Header";
import MainBanner from "./app/components/MainBanner";
import Services from "./app/components/Services";
import UpcomingMeetings from "./app/components/UpcomingMeetings";
import ApplyNow from "./app/components/ApplyNow";
import OurCourses from "./app/components/OurCourses";
import OurFacts from "./app/components/OurFacts";
import ContactUs from "./app/components/ContactUs";

function App() {
  return (
    <>
      <SubHeader />
      <Header />
      <MainBanner />
      <Services />
      <UpcomingMeetings />
      <ApplyNow />
      <OurCourses />
      <OurFacts />
      <ContactUs />
    </>
  );
}

export default App;
