import React from "react";
import Wrapper from "./Wrapper";
import Searchicon from "../assets/Search.png";
import Placeholder from "../assets/Placeholder.png";
import Bell from "../assets/bell.png";
import gear from "../assets/gear.png";

// ---------------------------------------------------------------------------
// Data
// (orders/interest are stored as numbers and formatted at render time, so the
// same values could later drive sorting, totals, an API payload, etc.)
// ---------------------------------------------------------------------------
const foods = [
  {
    id: 1,
    name: "Beef Steak with Fried Potato",
    category: "Lunch",
    rating: 4.9,
    orders: 1456,
    interest: 26,
    progress: 50,
  },
  {
    id: 2,
    name: "Pancake with Honey",
    category: "Breakfast",
    rating: 4.7,
    orders: 1456,
    interest: 26,
    progress: 50,
  },
  {
    id: 3,
    name: "Japanese Beef Ramen",
    category: "Lunch",
    rating: 4.8,
    orders: 1456,
    interest: 26,
    progress: 50,
  },
  {
    id: 4,
    name: "Mixed Salad",
    category: "Lunch",
    rating: 4.2,
    orders: 1456,
    interest: 26,
    progress: 50,
  },
  {
    id: 5,
    name: "Beef Meatball with Vegetable",
    category: "Snack",
    rating: 4.5,
    orders: 1456,
    interest: 26,
    progress: 50,
  },
];

// ---------------------------------------------------------------------------
// Inline icons — kept as plain SVG (instead of the old ★ / ▇▇▇ / ↗ / ⋮
// characters) so they render the same size and weight on every device,
// and so this file doesn't need an icon-library dependency.
// ---------------------------------------------------------------------------
const StarIcon = () => (
  <svg
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-4 h-4 text-yellow-400"
    aria-hidden="true"
  >
    <path d="M10 1.5l2.6 5.4 5.9.6-4.4 4 1.3 5.8L10 14.9l-5.4 3 1.3-5.8-4.4-4 5.9-.6L10 1.5z" />
  </svg>
);

const BarsIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    className="w-6 h-6 text-[#4F46E5]"
    aria-hidden="true"
  >
    <path d="M5 19V13M12 19V8M19 19V5" />
  </svg>
);

const ArrowUpIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6 text-[#4F46E5]"
    aria-hidden="true"
  >
    <path d="M7 17 17 7M9 7h8v8" />
  </svg>
);

const KebabIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
    aria-hidden="true"
  >
    <circle cx="12" cy="5" r="1.8" />
    <circle cx="12" cy="12" r="1.8" />
    <circle cx="12" cy="19" r="1.8" />
  </svg>
);

// ---------------------------------------------------------------------------
// Small shared pieces — these used to be copy-pasted between the desktop
// row and the mobile card. Pulling them out means the badge/rating/stat
// markup only exists once, so a style tweak only has to happen in one place.
// ---------------------------------------------------------------------------
const CategoryBadge = ({ category }) => (
  <span className="bg-[#4F46E5] text-white text-xs px-3 py-1 rounded-full">
    {category}
  </span>
);

const Rating = ({ value }) => (
  <div className="flex items-center gap-2">
    <StarIcon />
    <span className="font-semibold text-[#303972]">{value}</span>
  </div>
);

const Stat = ({ icon, value, label }) => (
  <div className="flex items-center gap-3">
    {icon}
    <div>
      <p className="font-bold text-[#303972]">{value}</p>
      <p className="text-sm text-gray-400">{label}</p>
    </div>
  </div>
);

const KebabButton = ({ foodName }) => (
  <button
    type="button"
    aria-label={`More actions for ${foodName}`}
    className="text-gray-500 hover:text-[#4F46E5] transition"
  >
    <KebabIcon />
  </button>
);

// size/radius/stroke are kept as separate props (not derived from each
// other) so the numbers stay identical to the original design — only how
// they're parameterized has changed.
const ProgressCircle = ({ progress, size = 48, radius = 18, stroke = 4 }) => {
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;
  const center = size / 2;

  return (
    <div
      className="relative"
      style={{ width: size, height: size }}
      role="img"
      aria-label={`${progress}% popularity`}
    >
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={center}
          cy={center}
          r={radius}
          stroke="#E5E7EB"
          strokeWidth={stroke}
          fill="none"
        />
        <circle
          cx={center}
          cy={center}
          r={radius}
          stroke="#4F46E5"
          strokeWidth={stroke}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
        />
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-[10px] font-semibold text-[#303972]">
        {progress}%
      </span>
    </div>
  );
};

// ---------------------------------------------------------------------------
// One dish — a desktop grid row, swapped for a stacked mobile card at `lg`.
// ---------------------------------------------------------------------------
const FoodRow = ({ food }) => (
  <div className="border rounded-xl p-4 hover:shadow-md transition">
    {/* Desktop */}
    <div className="hidden lg:grid grid-cols-[90px_2fr_120px_150px_120px_80px_30px] gap-6 items-center">
      <div className="bg-[#D7D2FF] h-20 rounded-xl" aria-hidden="true" />

      <div>
        <CategoryBadge category={food.category} />
        <h3 className="mt-3 font-bold text-[#303972]">{food.name}</h3>
      </div>

      <Rating value={food.rating} />
      <Stat
        icon={<BarsIcon />}
        value={food.orders.toLocaleString()}
        label="Total Order"
      />
      <Stat
        icon={<ArrowUpIcon />}
        value={`${food.interest}%`}
        label="Interest"
      />
      <ProgressCircle progress={food.progress} />
      <KebabButton foodName={food.name} />
    </div>

    {/* Mobile */}
    <div className="lg:hidden">
      <div className="flex gap-4">
        <div
          className="bg-[#D7D2FF] w-20 h-20 rounded-xl shrink-0"
          aria-hidden="true"
        />

        <div className="flex-1">
          <CategoryBadge category={food.category} />
          <h3 className="mt-2 font-bold text-[#303972]">{food.name}</h3>
          <div className="mt-2">
            <Rating value={food.rating} />
          </div>
        </div>

        <KebabButton foodName={food.name} />
      </div>

      <div className="grid grid-cols-3 gap-4 mt-5">
        <div>
          <BarsIcon />
          <h4 className="font-bold mt-1">{food.orders.toLocaleString()}</h4>
          <p className="text-xs text-gray-400">Orders</p>
        </div>
        <div>
          <ArrowUpIcon />
          <h4 className="font-bold mt-1">{food.interest}%</h4>
          <p className="text-xs text-gray-400">Interest</p>
        </div>
        <div className="flex justify-center">
          <ProgressCircle progress={food.progress} />
        </div>
      </div>
    </div>
  </div>
);

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export default function Food() {
  return (
    <div className="min-h-screen xl:ml-80 bg-[#F3F4FF]">
      <Wrapper>
        <div className="sticky  xl:fixed  top-0 xl:left-80 xl:right-5 z-20 bg-[#F3F4FF] py-4 xl:pt-8 xl:px-10 flex flex-col lg:flex-row justify-between items-end md:items-end lg:items-center gap-4">
          <h1 className="text-[36px] font-bold text-[#303972] lg:mt-5 mt-0 xl:mt-0">Food</h1>

          <div className="flex lg:mt-5  items-center bg-white rounded-full px-4 py-2 w-full lg:w-80 shadow-sm">
            <img
              src={Searchicon}
              alt=""
              aria-hidden="true"
              className="w-5 h-5"
            />
            <input
              type="text"
              placeholder="Search here..."
              aria-label="Search dishes"
              className="ml-3 flex-1 outline-none bg-transparent text-sm text-gray-500"
            />
          </div>

          <div className="hidden xl:flex items-center gap-6">
            <button
              type="button"
              aria-label="Notifications"
              className="p-0 bg-transparent border-0 leading-none cursor-pointer"
            >
              <img src={Bell} alt="" aria-hidden="true" className="w-7 h-7" />
            </button>
            <button
              type="button"
              aria-label="Settings"
              className="p-0 bg-transparent border-0 leading-none cursor-pointer"
            >
              <img src={gear} alt="" aria-hidden="true" className="w-7 h-7" />
            </button>

            <div className="flex items-center gap-3">
              <div className="text-right">
                <h2 className="text-[14px] font-bold text-[#303972]">
                  Nabila A.
                </h2>
                <p className="text-[12px] text-[#A098AE]">Admin</p>
              </div>
              <img
                src={Placeholder}
                alt="Nabila A."
                className="w-12 h-12 rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Clears the sticky/fixed header above. Tune this if the header's
            real height (driven by your actual assets/Wrapper) differs. */}
        <div className="mt-15 xl:mt-32 shadow-lg space-y-5">
          {foods.map((food) => (
            <FoodRow key={food.id} food={food} />
          ))}
        </div>
      </Wrapper>
    </div>
  );
}
