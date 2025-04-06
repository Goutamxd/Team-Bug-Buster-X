import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" alt="Chikitsa+ Logo" width={150} height={40} />
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Your complete healthcare solution. Book appointments, find doctors, check bed availability, order
              medicines, and manage your health records all in one place.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-green-600 hover:text-green-700">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-green-600 hover:text-green-700">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-green-600 hover:text-green-700">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-green-600 hover:text-green-700">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/doctors"
                  className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500"
                >
                  Find Doctors
                </Link>
              </li>
              <li>
                <Link
                  href="/hospitals"
                  className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500"
                >
                  Hospitals
                </Link>
              </li>
              <li>
                <Link
                  href="/medicines"
                  className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500"
                >
                  Medicines
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500"
                >
                  Health Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/appointments"
                  className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500"
                >
                  Doctor Appointments
                </Link>
              </li>
              <li>
                <Link
                  href="/beds"
                  className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500"
                >
                  Bed Booking
                </Link>
              </li>
              <li>
                <Link
                  href="/medicine-delivery"
                  className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500"
                >
                  Medicine Delivery
                </Link>
              </li>
              <li>
                <Link
                  href="/reminders"
                  className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500"
                >
                  Medication Reminders
                </Link>
              </li>
              <li>
                <Link
                  href="/expenses"
                  className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500"
                >
                  Expense Tracking
                </Link>
              </li>
              <li>
                <Link
                  href="/records"
                  className="text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-500"
                >
                  Health Records
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                <span className="text-gray-600 dark:text-gray-400">
                  123 Healthcare Avenue, Medical District, City, Country
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-green-600 mr-2" />
                <span className="text-gray-600 dark:text-gray-400">+1 (123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-green-600 mr-2" />
                <span className="text-gray-600 dark:text-gray-400">contact@chikitsaplus.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Chikitsa+. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-gray-600 dark:text-gray-400 text-sm hover:text-green-600 dark:hover:text-green-500"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-600 dark:text-gray-400 text-sm hover:text-green-600 dark:hover:text-green-500"
            >
              Terms of Service
            </Link>
            <Link
              href="/faq"
              className="text-gray-600 dark:text-gray-400 text-sm hover:text-green-600 dark:hover:text-green-500"
            >
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

