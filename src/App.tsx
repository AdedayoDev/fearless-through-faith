import { BookSection } from "./funnel/BookSection";
import { ChoiceSection } from "./funnel/ChoiceSection";
import { HeroSection } from "./funnel/HeroSection";
import { MeetAuthorSection } from "./funnel/MeetAuthorSection";
import { OfferStackSection } from "./funnel/OfferStackSection";
import { OtherWorksSection } from "./funnel/OtherWorksSection";
import { PainPointRecognitionSection } from "./funnel/PainPointRecognitionSection";
import { PersonalMessageSection } from "./funnel/PersonalMessageSection";
import { SocialProofSection } from "./funnel/SocialProofSection";
import { StickyOfferBar } from "./funnel/StickyOfferBar";

function App() {
  return (
    <div className='page-shell'>
      <StickyOfferBar />
      <main className='page-shell__main'>
        <HeroSection />
        <PainPointRecognitionSection />
        <MeetAuthorSection />
        <BookSection />
        <SocialProofSection />
        <OtherWorksSection />
        <PersonalMessageSection />
        <OfferStackSection />
        <ChoiceSection />
      </main>
    </div>
  );
}

export default App;
