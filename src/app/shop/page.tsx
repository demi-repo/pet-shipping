import FavCard from "@/components/cards/favCard";
import ChatIcon from "@/components/icons/chatIcon";
import EarPieceIcon from "@/components/icons/earpieceIcon";
import MailIcon from "@/components/icons/mailIcon";

const Shop = () => {
  return (
    <main className="w-full h-full flex flex-col gap-6 items-center justify-center lg:px-6 md:px-4 px-2 mb-4">
      <section className="max-w-screen-2xl w-full h-full flex flex-col mt-6 gap-1">
        <nav>
          <ul className="flex gap-2 font-medium text-sm">
            <li>Payment Option</li>
          </ul>
        </nav>
      </section>
    </main>
  );
};

export default Shop;
