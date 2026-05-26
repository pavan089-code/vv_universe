import JamHero from "../components/jam/JamHero";
import EventInvite from "../components/jam/EventInvite";
import EventDetails from "../components/jam/EventDetails";
import PaymentSection from "../components/jam/PaymentSection";
import RegistrationForm from "../components/jam/RegistrationForm";

const JamSession = () => {
  return (
    <div className="bg-black text-white">
      <JamHero />

      <EventInvite />

      <EventDetails />

      <PaymentSection />

      <div id="register" className="scroll-mt-24">
        <RegistrationForm />
      </div>
    </div>
  );
};

export default JamSession;
