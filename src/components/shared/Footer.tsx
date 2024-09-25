import { CONTACT_INFO } from '@/constants/index';
import Link from 'next/link';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12 text-white">
      <div className="container mx-auto grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-6">
        {/* Company Description */}
        <div className="flex flex-col justify-between">
          <Link href="/" className="mb-4 flex items-center">
            <h3 className="text-2xl font-bold">Glow Arabia Trading Est.</h3>
          </Link>
          <p className="mb-6 max-w-md leading-relaxed text-gray-400">
            Glow Arabia Trading Est specializes in the supply of industrial and
            building materials. We offer a full range of products including
            mechanical, construction, safety, and electrical equipment.
          </p>

          {/* Social Links */}
          <div className="mt-4 flex space-x-4">
            <Link
              href="https://www.instagram.com/glowarabiaest/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram
                size={24}
                className="transition hover:text-gray-300"
              />
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=100083703429397"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF
                size={24}
                className="transition hover:text-gray-300"
              />
            </Link>
          </div>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="text-lg font-semibold">Important Links</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <Link
                href="/usage-agreement"
                className="transition hover:text-gray-300"
              >
                Usage Agreement
              </Link>
            </li>
            <li>
              <Link
                href="/replacement-policy"
                className="transition hover:text-gray-300"
              >
                Replacement Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <ul className="mt-4 space-y-3">
            {CONTACT_INFO.map(({ id, Icon, displayText, href }) => (
              <li key={id}>
                <Link
                  href={href}
                  target="_blank"
                  className="flex items-center transition hover:text-gray-300"
                >
                  <Icon size={24} className="hover:text-gray-300" />
                  <span className="ml-3">{displayText}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} Glow Arabia Trading Est. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
