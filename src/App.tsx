import { BookSection } from "./funnel/BookSection";
import { ChoiceSection } from "./funnel/ChoiceSection";
import { ConsultationIncentiveSection } from "./funnel/ConsultationIncentiveSection";
import { HeroSection } from "./funnel/HeroSection";
import { MeetAuthorSection } from "./funnel/MeetAuthorSection";
// import { OfferStackSection } from "./funnel/OfferStackSection";
import { OtherWorksSection } from "./funnel/OtherWorksSection";
import { PainPointRecognitionSection } from "./funnel/PainPointRecognitionSection";
// import { PersonalMessageSection } from "./funnel/PersonalMessageSection";
import { SocialProofSection } from "./funnel/SocialProofSection";
import { StickyOfferBar } from "./funnel/StickyOfferBar";

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(190,147,98,0.12),transparent_32%),linear-gradient(180deg,#f8f5f1_0%,#fbf9f6_100%)] [font-family:'Avenir_Next','Segoe_UI',sans-serif] text-[#4f453d] antialiased">
      <StickyOfferBar />
      <main className='mx-auto w-[calc(100%-32px)] max-w-[1200px] pb-20 pt-10 max-[900px]:w-[calc(100%-24px)] max-[900px]:pt-7 max-[640px]:w-[calc(100%-18px)] max-[640px]:pb-14'>
        <HeroSection />
        <MeetAuthorSection />
        <PainPointRecognitionSection />
        <BookSection />
        <SocialProofSection />
        <OtherWorksSection />
        {/* <PersonalMessageSection /> */}
        {/* <OfferStackSection /> */}
        <ConsultationIncentiveSection />
        <ChoiceSection />
      </main>
    </div>
  );
}

export default App;
