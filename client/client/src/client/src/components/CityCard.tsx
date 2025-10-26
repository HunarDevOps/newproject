import { Link } from "wouter";
import { MapPin } from "lucide-react";

interface CityCardProps {
  name: string;
  image: string;
  hotelCount: number;
}

export default function CityCard({ name, image, hotelCount }: CityCardProps) {
  return (
    <Link href={`/search?city=${encodeURIComponent(name)}`}>
      <a 
        className="group block relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover-elevate"
        data-testid={`card-city-${name.toLowerCase().replace(/\s+/g, '-')}`}
      >
        <div className="aspect-square relative">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <h3 className="text-xl md:text-2xl font-serif font-bold mb-1" data-testid={`text-city-name-${name.toLowerCase().replace(/\s+/g, '-')}`}>
              {name}
            </h3>
            <p className="text-sm flex items-center gap-1 text-white/90">
              <MapPin className="h-4 w-4" />
              {hotelCount} {hotelCount === 1 ? "Hotel" : "Hotels"}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
}
