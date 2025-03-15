import { NextRequest, NextResponse } from 'next/server';
import BookingForm from '@/app/components/BookingForm';
export async function POST(req: NextRequest) {
    try {
        const { departureDate, destination, seatClass } = await req.json();

        if (!departureDate || !destination || !seatClass) {
            return NextResponse.json({
                success: false,
                message: 'All fields are required.'
            }, { status: 400 });
        }

        // Simulate booking logic (can be expanded later)
        const bookingDetails = {
            departureDate,
            destination,
            seatClass,
            bookingId: `SPC-${Math.floor(Math.random() * 100000)}`
        };

        return NextResponse.json({
            success: true,
            message: 'Booking successful! Enjoy your space journey.',
            data: bookingDetails
        });
    } catch (error) {
        console.error('Error processing booking:', error);
        return NextResponse.json({
            success: false,
            message: 'Failed to process booking. Please try again.'
        }, { status: 500 });
    }
}
