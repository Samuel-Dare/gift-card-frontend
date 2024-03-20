import {
  FaAddressCard,
  FaEnvelope,
  FaLocationArrow,
  FaPhone,
  FaWhatsapp,
} from 'react-icons/fa';
import H1 from '../ui/H1';
import Animation from '../utils/Animation';

function ContactUs() {
  return (
    <div className="md:mx-10">
      <H1 title="Contact Us" />
      <Animation type="2">
        <p className="mb-4 font-semibold">
          You can reach our 24/7 customer representatives via:
        </p>
        <p className="text-gray-700 mb-2 flex gap-1">
          <i className="mt-1 text-colorBrand2">
            <FaEnvelope />
          </i>
          <span className="font-semibold">Email:</span>{' '}
          <a href="mailto:probrandhandlers@qualityservice.com">
            support@giftcard.com
          </a>
        </p>
        <p className="text-gray-700 mb-2 flex gap-1">
          <i className="mt-1 text-colorBrand2">
            <FaPhone />
          </i>
          <span className="font-semibold">Phone:</span>{' '}
          <a href="tel:+2348154005211">+2348010101010</a>
        </p>
        <p className="text-gray-700 mb-2 flex gap-1">
          <i className="mt-1 text-colorBrand2">
            <FaWhatsapp />
          </i>
          <span className="font-semibold">WhatsApp:</span>{' '}
          <a href="">+2348010101010</a>
        </p>
        <p className="text-gray-700 flex gap-1">
          <i className="mt-1 text-colorBrand2">
            <FaAddressCard />
          </i>
          <span className="font-semibold">Head Office:</span>
          123 Dominion Plaza, Ikota, Lekki-Ajah, Lagos
        </p>
      </Animation>
    </div>
  );
}

export default ContactUs;
