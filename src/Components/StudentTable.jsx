import React, { useState } from "react";

const students = [
  { id: "123456789", name: "Samantha William", class: "VII A", fee: "$50,036" },
  { id: "123456789", name: "Tony Soap", class: "VII A", fee: "$50,036" },
  { id: "123456789", name: "Jordan Nico", class: "VII A", fee: "$50,036" },
  { id: "123456789", name: "Karen Hope", class: "VII A", fee: "$50,036" },
  { id: "123456789", name: "Nadila Adja", class: "VII A", fee: "$50,036" },
  { id: "123456789", name: "Mark Evans", class: "VII B", fee: "$50,036" },
  { id: "123456789", name: "Lisa Turner", class: "VII B", fee: "$50,036" },
  { id: "123456789", name: "James Cole", class: "VII B", fee: "$50,036" },
  { id: "123456789", name: "Nina Patel", class: "VII C", fee: "$50,036" },
  { id: "123456789", name: "Oscar Bruno", class: "VII C", fee: "$50,036" },
];

const PER_PAGE = 5;

const StudentTable = () => {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(students.length / PER_PAGE);
  const paginated = students.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      {/* Table */}
      <div className="divide-y divide-gray-100">
        {paginated.map((student, i) => (
          <div key={i} className="flex items-center gap-4 py-4">
            {/* Avatar */}
            <div className="w-12 h-12 rounded-full bg-[#C1BBF6] shrink-0" />

            {/* Name */}
            <p className="w-44 font-bold text-[#303972] text-[15px]">
              {student.name}
            </p>

            {/* ID */}
            <p className="w-36 text-[#4D44B5] font-semibold text-[13px]">
              ID {student.id}
            </p>

            {/* Class icon + label */}
            <div className="flex items-center gap-2 w-28">
              <div className="w-9 h-9 rounded-full bg-[#FB7D5B] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] text-[#A098AE]">Class</p>
                <p className="text-[13px] font-bold text-[#303972]">
                  {student.class}
                </p>
              </div>
            </div>

            {/* Fee */}
            <p className="w-24 font-bold text-[#303972] text-[15px]">
              {student.fee}
            </p>

            {/* Actions */}
            <div className="flex items-center gap-3 ml-auto">
              <button className="p-2 hover:opacity-70 transition-opacity">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-[#A098AE]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
                  />
                </svg>
              </button>
              <button className="p-2 hover:opacity-70 transition-opacity">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-[#A098AE]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="5" cy="12" r="2" />
                  <circle cx="12" cy="12" r="2" />
                  <circle cx="19" cy="12" r="2" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-6">
        <p className="text-[13px] text-[#A098AE]">
          Showing{" "}
          <span className="font-bold text-[#303972]">
            {(page - 1) * PER_PAGE + 1}-
            {Math.min(page * PER_PAGE, students.length)}
          </span>{" "}
          from{" "}
          <span className="font-bold text-[#303972]">{students.length}</span>{" "}
          data
        </p>

        {/* Pagination */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="w-9 h-9 rounded-full flex items-center justify-center text-[#303972] hover:bg-gray-100 disabled:opacity-30 transition-colors"
          >
            ‹
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              onClick={() => setPage(n)}
              className={`w-9 h-9 rounded-full text-[13px] font-bold transition-colors ${
                page === n
                  ? "bg-[#303972] text-white"
                  : "text-[#303972] border border-gray-200 hover:bg-gray-50"
              }`}
            >
              {n}
            </button>
          ))}

          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="w-9 h-9 rounded-full flex items-center justify-center text-[#303972] hover:bg-gray-100 disabled:opacity-30 transition-colors"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentTable;
