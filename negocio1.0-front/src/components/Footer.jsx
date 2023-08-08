import React from 'react';
import { FaPhone } from 'react-icons/fa';

import { FaWhatsapp } from 'react-icons/fa';
import { FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi';

function Footer() {
  return (
    <footer className="text-center">
      <small>
        <span>© Patito´s Bebe</span>
        <span className="m-4">-</span>
        <a href="tel:113">
          <FaPhone className="icon" />
          0810-888-1234
        </a>
        <span className="m-4">-</span>
        Seguinos en
        <a
          className="redes facebook"
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiFacebook className="icon" title="Facebook" />
        </a>
        <a
          className="redes twitter"
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiTwitter className="icon" title="Twitter" />
        </a>
        <a
          className="redes instagram"
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiInstagram className="icon" title="Instagram" />
        </a>
        <a
          className="redes"
          style={{ backgroundColor: '#00e676' }}
          href="https://www.whatsapp.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp title="Whatsapp" />
      </a>
      </small>
    </footer>
  );
}

export { Footer };
