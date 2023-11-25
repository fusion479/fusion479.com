export default function Timeline() {
  return (
    <div>
      <div className="border-l pl-2">
        {new Array(10).fill(0).map((_, i) => (
          <div className="flex items-center" key={i}>
            <div
              className={`border-t w-3 mr-2 ${i === 3 && "border-blue-700"}`}
            />
            <button className="relative block px-4 py-2 bg-gray-50 my-4 rounded-lg shadow-sm hover:bg-blue-100 text-slate-700 hover:-translate-y-0.5  hover:text-blue-600 duration-150">
              <span className="inline-block font-light rounded-lg text-sm">
                {2014 + i}: Lorem Isput
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
