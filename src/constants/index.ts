import { BadgeCheck, Medal, Phone } from 'lucide-react';
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

export const CONTACT_INFO = [
  {
    id: 1,
    href: 'https://salla.sa/grte/whatsapp/send',
    label: 'Whatsapp',
    Icon: FaWhatsapp,
    displayText: '+966506330259',
  },
  {
    id: 2,
    href: 'tel:+966506330259',
    label: 'Phone',
    Icon: FaPhoneAlt,
    displayText: '+966506330259',
  },
  {
    id: 3,
    href: 'mailto:aw@glowarabiatrading.com',
    label: 'Email',
    Icon: FaEnvelope,
    displayText: 'aw@glowarabiatrading.com',
  },
];

export const features = [
  {
    id: '1',
    Icon: BadgeCheck,
    title: 'International Trademarks',
    description: 'العلامات التجارية الدولية',
  },
  {
    id: '2',
    Icon: Phone,
    title: 'Service Around The Clock',
    description: 'خدمة على مدار الساعه',
  },
  {
    id: '3',
    Icon: Medal,
    title: 'After-Sales Service',
    description: 'خدمات ما بعد البيع',
  },
];
