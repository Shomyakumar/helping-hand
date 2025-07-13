import Link from "next/link";
import { HOME_ROUTE } from "@/constants/appRoutes";
import { NAV_MENU } from "@/config/navbar";
import { FOLLOW_LINK } from "@/config/footer";

export default function Footer() {
  return (
    <footer className="bg-custom-yellow ">
      <div className="max-w-[1160px] mx-auto p-4 sm:p-6 md:p-8">
        <div className="flex gap-8 flex-col sm:flex-row items-center sm:items-start justify-between">
          <div>
            <div className="font-extrabold text-2xl md:text-3xl cursor-pointer font-nunito text-center sm:text-start">
              <Link href={HOME_ROUTE}>Helping Hand</Link>
            </div>
            <p className="text-gray-600 text-lg mt-2 font-semibold font-raleway">
              Join us to makes a difference!
            </p>
          </div>
          <FollowUs />
          <ul className="hidden md:flex flex-col gap-6  ">
            {NAV_MENU.map((nav) => (
              <li
                key={nav.id}
                className="text-lg font-semibold border-b-2 border-transparent  hover:border-black text-custom-black font-nunito"
              >
                <Link href={nav.link}>{nav.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export function FollowUs() {
  return (
    <div className="flex flex-col gap-4 items-center sm:items-start md:items-center font-raleway">
      <div className="text-lg font-bold ">Follow us on</div>
      <ul className="flex gap-4">
        {FOLLOW_LINK.map((data) => (
          <li key={data.id}>
            <Link href={data.href} className="text-2xl" target="_blank">
              {<data.icon />}
            </Link>
          </li>
        ))}
      </ul>
      <div className="font-nunito max-w-[200px] text-center sm:text-start md:text-center text-gray-700">
        &copy; {new Date().getFullYear()} Helping Hand. All rights reserved
      </div>
    </div>
  );
}
