/*
Full hotel-detail page replica (React + Tailwind)
Drop this single-file component into your React app (e.g. src/components/HotelDetail.jsx)
Requirements:
- React 18+
- TailwindCSS configured in your project (optional: you can convert classes to plain CSS)

What this file contains:
- Default export: HotelDetail component (page) — ready to render
- Subcomponents inside the file: GalleryCarousel, BookingSidebar, PriceBadge, ReviewList, AmenitiesList, MapPlaceholder
- Demo data is embedded so you can run immediately without backend

Usage:
import HotelDetail from './components/HotelDetail';
// then use <HotelDetail /> in a route or page

*/

import React, { useState, useEffect } from 'react';

// -- Demo images (unsplash placeholders)
const IMAGES = [
  'https://images.unsplash.com/photo-1501117716987-c8e2a0b1c6d9?w=1400&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1505691723518-36a4b3f5f1a2?w=1400&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1551882547-ffb8b9b4b4b6?w=1400&q=80&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1400&q=80&auto=format&fit=crop'
];

const DEFAULT_HOTEL = {
  id: 'hotel-1',
  name: 'La Vista Boutique Hotel',
  address: '123 Rizal St, Makati, Philippines',
  rating: 8.6,
  reviewCount: 432,
  description: 'Contemporary boutique hotel located in the heart of the city, within walking distance of restaurants and attractions. Family rooms and free WiFi available.',
  images: IMAGES,
  pricePerNight: 4200, // PHP
  currency: 'PHP',
  rooms: [
    { id: 'r1', name: 'Deluxe Double', capacity: 2, refundable: true, price: 4200 },
    { id: 'r2', name: 'Family Suite', capacity: 4, refundable: false, price: 7500 },
    { id: 'r3', name: 'Single Standard', capacity: 1, refundable: true, price: 3100 }
  ],
  amenities: ['Free WiFi', 'Breakfast included', 'Swimming pool', 'Air conditioning', '24-hour front desk', 'Laundry service'],
  reviews: [
    { id: 'v1', name: 'James', score: 9, text: 'Great location and friendly staff. Room was spotless.' },
    { id: 'v2', name: 'Maria', score: 8, text: 'Good value for money. Breakfast could be improved.' },
    { id: 'v3', name: 'Ken', score: 7, text: 'Nice stay overall. AC noisy at night.' }
  ]
};

export default function HotelDetail() {
  const [hotel] = useState(DEFAULT_HOTEL);
  const [selectedRoom, setSelectedRoom] = useState(hotel.rooms[0]);
  const [guests, setGuests] = useState(2);
  const [checkIn, setCheckIn] = useState(todayISO(7));
  const [checkOut, setCheckOut] = useState(todayISO(8));
  const [showGallery, setShowGallery] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    // keep dates consistent
    if (new Date(checkOut) <= new Date(checkIn)) {
      const next = new Date(checkIn);
      next.setDate(next.getDate() + 1);
      setCheckOut(next.toISOString().slice(0, 10));
    }
  }, [checkIn]);

  function handleBook() {
    // Simple client-side validation + simulated booking
    setMessage('');
    if (!selectedRoom) return setMessage('Please select a room.');
    setMessage('Processing booking...');
    setTimeout(() => {
      setMessage(`Booking confirmed! (demo) — ${selectedRoom.name} for ${guests} guest(s).`);
    }, 900);
  }

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
      <main className="lg:col-span-2">
        <div className="flex justify-between items-start gap-4">
          <div>
            <h1 className="text-2xl font-semibold">{hotel.name}</h1>
            <div className="text-sm text-gray-600">{hotel.address}</div>
            <div className="mt-2 flex items-center gap-3">
              <div className="bg-amber-400 rounded px-2 py-1 font-semibold text-sm">{hotel.rating}</div>
              <div className="text-sm text-gray-700">{hotel.reviewCount} reviews</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <PriceBadge price={hotel.pricePerNight} currency={hotel.currency} small />
            <div className="text-sm text-gray-500">per night</div>
          </div>
        </div>

        <div className="mt-4">
          <GalleryCarousel images={hotel.images} onOpen={() => setShowGallery(true)} />
        </div>

        <section className="mt-6 bg-white p-4 rounded shadow-sm">
          <h2 className="text-lg font-medium mb-2">About this property</h2>
          <p className="text-gray-700">{hotel.description}</p>
          <AmenitiesList items={hotel.amenities} />
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-medium mb-3">Rooms & rates</h2>
          <div className="space-y-4">
            {hotel.rooms.map(room => (
              <article key={room.id} className={`p-4 border rounded flex justify-between items-center ${selectedRoom?.id === room.id ? 'ring-2 ring-amber-300' : ''}`}>
                <div>
                  <div className="font-semibold">{room.name}</div>
                  <div className="text-sm text-gray-600">Capacity: {room.capacity} • {room.refundable ? 'Free cancellation' : 'Non-refundable'}</div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold">{formatCurrency(room.price, hotel.currency)}</div>
                  <div className="mt-2 flex gap-2 justify-end">
                    <button onClick={() => setSelectedRoom(room)} className="px-3 py-1 border rounded">Select</button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-medium mb-3">Guest reviews</h2>
          <ReviewList reviews={hotel.reviews} />
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-medium mb-3">Location</h2>
          <MapPlaceholder address={hotel.address} />
        </section>

      </main>

      <aside className="lg:col-span-1">
        <div className="sticky top-6">
          <div className="bg-white p-4 rounded shadow">
            <div className="text-sm text-gray-600">Your stay</div>
            <div className="mt-2 grid grid-cols-2 gap-2">
              <label className="flex flex-col text-xs">
                Check-in
                <input type="date" className="mt-1 p-2 border rounded" value={checkIn} onChange={e => setCheckIn(e.target.value)} />
              </label>
              <label className="flex flex-col text-xs">
                Check-out
                <input type="date" className="mt-1 p-2 border rounded" value={checkOut} onChange={e => setCheckOut(e.target.value)} />
              </label>
            </div>

            <label className="block mt-3 text-xs">
              Guests
              <input type="number" min={1} value={guests} onChange={e => setGuests(Number(e.target.value))} className="mt-1 p-2 border rounded w-full" />
            </label>

            <div className="mt-4 flex items-center justify-between">
              <div>
                <div className="text-sm text-gray-600">Selected</div>
                <div className="font-semibold">{selectedRoom?.name}</div>
                <div className="text-sm text-gray-700">{formatCurrency(selectedRoom?.price || 0, hotel.currency)} / night</div>
              </div>
              <div className="text-right">
                <PriceBadge price={calculateTotal(selectedRoom?.price || 0, nightsBetween(checkIn, checkOut))} currency={hotel.currency} />
                <div className="text-xs text-gray-500">Total for {nightsBetween(checkIn, checkOut)} night(s)</div>
              </div>
            </div>

            <button onClick={handleBook} className="mt-4 w-full px-4 py-2 bg-amber-500 rounded text-white font-semibold">Reserve</button>
            {message && <div className="mt-3 text-sm text-green-700">{message}</div>}

            <div className="mt-4 text-xs text-gray-500">
              <div>Pay at property or now — demo only.</div>
            </div>
          </div>

          <div className="mt-4 p-4 bg-white rounded shadow text-sm text-gray-600">
            <div className="font-semibold mb-2">Need help?</div>
            <div>Call +63 2 1234 5678 or email support@example.com</div>
          </div>
        </div>
      </aside>

      {/* Fullscreen gallery modal */}
      {showGallery && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="max-w-4xl w-full bg-white rounded overflow-hidden">
            <div className="flex justify-between items-center p-3 border-b">
              <div className="font-semibold">Photos</div>
              <button onClick={() => setShowGallery(false)} className="text-xl">✕</button>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {hotel.images.map((src, i) => (
                  <img key={i} src={src} alt={`photo-${i}`} className="w-full h-64 object-cover rounded" />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

/* ------------------ Subcomponents ------------------ */

function GalleryCarousel({ images = [], onOpen }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex(i => (i + 1) % images.length), 4000);
    return () => clearInterval(t);
  }, [images.length]);

  return (
    <div className="relative">
      <div className="w-full h-72 rounded overflow-hidden shadow">
        <img src={images[index]} alt={`img-${index}`} className="w-full h-full object-cover" />
      </div>
      <div className="absolute left-3 top-1/2 -translate-y-1/2">
        <button onClick={() => setIndex(i => (i - 1 + images.length) % images.length)} className="p-2 bg-white/80 rounded shadow">‹</button>
      </div>
      <div className="absolute right-3 top-1/2 -translate-y-1/2">
        <button onClick={() => setIndex(i => (i + 1) % images.length)} className="p-2 bg-white/80 rounded shadow">›</button>
      </div>
      <div className="mt-2 flex items-center justify-between">
        <div className="text-sm text-gray-600">{images.length} photos</div>
        <div className="flex gap-2">
          <button onClick={onOpen} className="text-sm px-3 py-1 border rounded">Show all photos</button>
        </div>
      </div>
    </div>
  );
}

function PriceBadge({ price, currency = 'PHP', small = false }) {
  return (
    <div className={`${small ? 'px-2 py-1 text-sm' : 'px-3 py-2 text-lg'} bg-amber-500 text-white rounded font-semibold`}>{formatCurrency(price, currency)}</div>
  );
}

function ReviewList({ reviews = [] }) {
  if (!reviews.length) return <div className="text-sm text-gray-600">No reviews yet.</div>;
  return (
    <div className="space-y-3">
      {reviews.map(r => (
        <div key={r.id} className="p-3 border rounded">
          <div className="flex items-center justify-between">
            <div className="font-semibold">{r.name}</div>
            <div className="bg-slate-100 px-2 py-1 rounded text-sm">{r.score}/10</div>
          </div>
          <div className="text-sm text-gray-700 mt-2">{r.text}</div>
        </div>
      ))}
    </div>
  );
}

function AmenitiesList({ items = [] }) {
  return (
    <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm text-gray-700">
      {items.map((a, i) => (
        <div key={i} className="flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            <path d="M5 6h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
          <span>{a}</span>
        </div>
      ))}
    </div>
  );
}

function MapPlaceholder({ address }) {
  return (
    <div className="w-full h-48 bg-gray-100 rounded flex items-center justify-center text-gray-500">
      <div className="text-center">
        <div className="font-semibold">Map placeholder</div>
        <div className="text-sm mt-1">{address}</div>
      </div>
    </div>
  );
}

/* ------------------ Helpers ------------------ */
function formatCurrency(value, currency = 'PHP') {
  if (value == null) return '';
  try {
    return new Intl.NumberFormat('en-PH', { style: 'currency', currency }).format(Number(value));
  } catch (e) {
    return `${currency} ${value}`;
  }
}

function todayISO(offsetDays = 0) {
  const d = new Date();
  d.setDate(d.getDate() + offsetDays);
  return d.toISOString().slice(0, 10);
}

function nightsBetween(checkIn, checkOut) {
  const a = new Date(checkIn);
  const b = new Date(checkOut);
  const diff = Math.max(1, Math.round((b - a) / (1000 * 60 * 60 * 24)));
  return diff;
}

function calculateTotal(pricePerNight, nights) {
  return (Number(pricePerNight) || 0) * Math.max(1, nights);
}
