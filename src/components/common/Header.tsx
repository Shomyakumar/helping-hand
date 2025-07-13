import { HOME_ROUTE } from "@/constants/appRoutes";
import Link from "next/link";
import { NAV_MENU } from "@/config/navbar";
import Sidebar from "@/components/common/Sidebar";

export default function Header() {
  return (
    <div className="bg-custom-yellow">
      <div className="max-w-[1160px] mx-auto p-4 sm:p-6 md:p-8">
        <div className="flex items-center justify-between">
          <div className="font-extrabold text-2xl md:text-3xl cursor-pointer font-nunito">
            <Link href={HOME_ROUTE}>Helping Hand</Link>
          </div>
          <ul className="hidden md:flex gap-6 items-center ">
            {NAV_MENU.map((nav) => (
              <li key={nav.id} className="text-xl font-semibold border-b-2 border-transparent  hover:border-black text-custom-black font-nunito">
                <Link href={nav.link} >{nav.name}</Link>
              </li>
            ))}
          </ul>
          <div className="md:hidden visible">
            <Sidebar/>
          </div>
        </div>
      </div>
    </div>
  );
}
