import FormSection from '../components/FormSection';
import HeroSection from '../components/HeroSection';
import MapSection from '../components/MapSection';
import MotivesSection from '../components/MotivesSection';
import ScheduleSection from '../components/ScheduleSection';
import SpeakersSection from '../components/SpeakersSection';
import WhatsAppButton from '../components/WhatsAppButton';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FormSection />
      <MotivesSection />
      <SpeakersSection />
      <MapSection />
      <ScheduleSection />
      <WhatsAppButton />
    </>
  );
}
