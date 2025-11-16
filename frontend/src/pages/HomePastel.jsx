import NavbarPastel from '../components/NavbarPastel';
import HeroPastel from '../components/HeroPastel';
import DailyDelightsPastel from '../components/DailyDelightsPastel';
import LimitedEditionPastel from '../components/LimitedEditionPastel';
import SweetStoriesPastel from '../components/SweetStoriesPastel';
import FooterPastel from '../components/FooterPastel';

const HomePastel = ({ cartCount = 0 }) => {
  return (
    <div className="bg-pastel-cream">
      <NavbarPastel cartCount={cartCount} />
      <HeroPastel />
      <DailyDelightsPastel />
      <LimitedEditionPastel />
      <SweetStoriesPastel />
      <FooterPastel />
    </div>
  );
};

export default HomePastel;
