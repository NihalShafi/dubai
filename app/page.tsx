import Image from "next/image";
import BookingForm from "./components/BookingForm";

export default function Home() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist)]">
            <main>
                <h1 className="text-4xl font-bold mb-6">Space Travel Booking</h1>
                <BookingForm />
            </main>
        </div>
    );
}
