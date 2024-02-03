import { Card } from "@/components/Card";
import Image from "next/image";

const database = [
  {
    name: 'scoopy',
    price: '1.0',
    date: {isAvailable: true, date: ''},
    engine: '125',
    img: '/images/scoopy.png',
  },
  {
    name: 'nmax',
    price: '2.25',
    date: {isAvailable: false, date: '12 jan 2030'},
    engine: '160',
    img: '/images/nmax.png',
  },
  {
    name: 'vespa',
    price: '5',
    date: {isAvailable: true, date: ''},
    engine: '150',
    img: '/images/vespa.png',
  }
]

// name: string
// price: number
// date: {isAvailable: boolean, date: string}
// engine: string
// img: string

export default function Home() {
  return (
    <div className="flex justify-center max-w-2xl mx-auto mt-4">
      <div className="flex flex-col mx-4 space-y-5 w-full">
        <h1 className="text-3xl sm:text-4xl font-bold text-center">
          Choose a bike of your dream
        </h1>
        <div className="flex-col space-y-6">
          {database.map((item) => (
            <Card key={item.name} motor={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
