import Card from "./Card";

export default function Members() {
  return (
    <div className="gap-10 grid auto-rows-fr grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-20">
      {new Array(3).fill(0).map((_, i) => (
        <Card
          key={i}
          name="John Doe"
          role="Head of Engineering"
          body="Robotics and technology have fascinated me ever since I was a child. Joining 479 as a sophomore, I was a little late to the party, but I felt like I was still welcomed and encouraged to learn just like everyone else. The adrenaline you get watching the team succeed is unlike any other, and you feel kind of proud in a way. FTC has allowed me to develop my skills as an amateur engineer, machinist, software developer, and team leader, and has made me into a more well-rounded individual. I am sure this is true for everyone else on the team and anyone else who decides to join in the future."
        />
      ))}
    </div>
  );
}
