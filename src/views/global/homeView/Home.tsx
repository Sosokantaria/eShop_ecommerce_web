import TopProducts from "./topProducts";
import { SlickCarousel } from "../../../components/slickCarousel";
import { Navigation } from "../../../components/navigation";

export default function HomeView() {
  return (
    <>
      <Navigation />
      <div>
        <div className="my-10">
          <SlickCarousel />
          <div className="mt-10">
            <TopProducts/>
          </div>
        </div>
      </div>
    </>
  );
}
