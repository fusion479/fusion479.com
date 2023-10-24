export default function Copyright({ theme }: { theme: "dark" | "light" }) {
  return (
    <>
      <div className="border-t-[1px] w-1/2 ml-auto mt-8 mr-auto" />
      <div
        className={`text-center text-sm text-gray-50 text-bold sm:text-center pt-6 ${
          theme === "light" ? "text-gray-50" : " text-gray-500"
        }`}
      >
        Copyright © StuyFusion 2023
      </div>
    </>
  );
}
