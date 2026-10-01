// import {CarouselComponent} from "@/components/home/CarouselComponent";

import LatestBooksComponent from "@/components/home/LatestBooksComponent";
import BookAdComponent from "@/components/home/BookAdComponent";

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">مرحباً بكِ في موقع كتابي</h1>

      {/* <CarouselComponent /> */}
        
        <LatestBooksComponent />

        <BookAdComponent />
      
    </main>
  );
}
