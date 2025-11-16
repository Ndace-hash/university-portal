import { Facebook, Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo and branding */}
          <div className="md:col-span-1">
            <div className="mb-4 flex items-center gap-2">
              <img src="/logo.svg" alt="ACE Logo" className="h-10 w-10" />
            </div>
            <h3 className="font-serif text-lg font-bold leading-tight">
              ACADEMY OF
              <br />
              COGNITUM
              <br />
              EXCELLENCE
            </h3>
          </div>

          {/* ACE University Info */}
          <div className="md:col-span-1">
            <h4 className="mb-3 font-semibold">ACE University</h4>
            <p className="text-sm text-gray-300">
              KM 7, Valley Road
              <br />
              Grandview Estates
              <br />
              Ambala, Virginia
            </p>
          </div>

          {/* Links - Column 1 */}
          <div className="md:col-span-1">
            <h4 className="mb-3 font-semibold">Accreditation Resolution</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-white">
                  Emergency Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Job Opportunities
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Visit ACE
                </a>
              </li>
            </ul>
          </div>

          {/* Links - Column 2 */}
          <div className="md:col-span-1">
            <h4 className="mb-3 font-semibold">Campus Directory</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Map & Directions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Portal (Staff & Students)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social media icons */}
        <div className="mt-8 border-t border-gray-700 pt-8">
          <div className="flex justify-center gap-6">
            <a href="#" className="text-gray-300 hover:text-white">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <Youtube className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 bg-gray-900 py-4">
        <div className="mx-auto max-w-7xl px-6 text-center text-sm text-gray-400">
          ©2025 Academy of Cognitum Excellence
        </div>
      </div>
    </footer>
  );
}
