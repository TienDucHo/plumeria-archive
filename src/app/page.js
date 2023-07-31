import Event from "@/components/Event";

export default function Home() {
  return (
    <main>
      <Event
        title="Lorem ipsum dolor sit amet consectetur."
        subTitle="Lorem ipsum dolor sit amet consectetur. Tincidunt platea vulputate
        egestas eu."
        date="25"
        month="January"
        clubName="Harmonica PTNK Club"
        location="1234 56 Ave Street"
        time="17:00"
        sourcePicture="/pic1.jpg"
      ></Event>
    </main>
  );
}
