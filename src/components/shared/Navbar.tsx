'use client';

import { LogOut, UserRoundPen } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const adminRoute = pathname.includes(process.env.NEXT_PUBLIC_USERID!);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const correctPassword = process.env.NEXT_PUBLIC_PASSWORD!;

  const handleAdminClick = () => {
    const enteredPassword = prompt('Please enter the admin password:');
    if (enteredPassword === correctPassword) {
      setIsAuthenticated(true);
      router.push(`/${process.env.NEXT_PUBLIC_USERID!}`);
    } else {
      alert('Incorrect password!');
    }
  };

  return (
    <nav className="bg-white shadow-default">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://cdn.salla.sa/cdn-cgi/image/fit=scale-down,width=400,height=400,onerror=redirect,format=auto/XpNgj/YzeIcDTGnA5E7R3INMfjRtWg4phI9RXHfetgQI2L.png"
            alt="logo"
            width={50}
            height={50}
          />
          <Image
            src="https://cdn.salla.sa/XpNgj/KBrwtZoSnpgWWk7kLci6FKOwIHFz30VkmXCbbscn.png"
            alt="logo"
            width={50}
            height={50}
          />
        </Link>

        <div>
          {/* Admin Icon and Logout if authenticated */}
          <div className="flex items-center gap-4">
            {!adminRoute ? (
              <UserRoundPen
                className="size-7 cursor-pointer transition hover:text-primary"
                onClick={handleAdminClick}
              />
            ) : (
              <LogOut
                className="size-7 cursor-pointer transition hover:text-primary"
                onClick={() => router.push('/')}
              />
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
