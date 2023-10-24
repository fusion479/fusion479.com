export default function Timeline() {
  return (
    <div className="relative mb-10">
      {new Array(5).fill(0).map((_, i) => (
        <>
          <div className="border-l-[1px] border-slate-300 h-36 right-1/2 absolute" />
          <div className="flex pt-20">
            <div className="p-10 bg-white shadow-md rounded-lg">
              <p className="text-blue-500 tracking-wide text-2xl mb-1 font-medium font-merinda">
                April 13th, 1839
              </p>
              <h3 className="text-3xl tracking-wide font-medium mb-4 font-merinda">
                Lorem Ispum Dolar
              </h3>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente obcaecati dicta incidunt ut fugiat iusto quasi ea quae
                tenetur sequi, dolore doloremque illum ratione, aliquam ab
                aspernatur inventore, qui eligendi alias suscipit iure delectus!
                Eius sit expedita officiis quidem sequi in dolore ullam
                consectetur! Recusandae possimus quis assumenda aliquam vitae
                maxime eaque iusto dicta soluta nostrum mollitia esse
                consequatur, ut provident! Accusamus atque sapiente delectus
                neque, corrupti dolore sit odio excepturi quis nihil, illo
                explicabo.
              </p>
            </div>
            <img
              src="placeholder_image.jpg"
              alt="placeholder"
              className="ml-6"
            />
          </div>
        </>
      ))}
    </div>
  );
}
