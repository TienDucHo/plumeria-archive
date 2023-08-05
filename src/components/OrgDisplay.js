import Image from "next/image";

export default function OrgDisplay({ orgName, orgPic }) {
  return (
    <div id="org-display-component">
      <div className="relative h-80">
        <Image
          className="object-cover"
          src={orgPic}
          alt="A club image"
          fill
        ></Image>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-end">
          {["w-1/4", "w-1/6", "w-0", "w-3/12", "w-1/6", "w-1/3"].map(
            (elem, index) => (
              <div
                key={index}
                className={`${elem} masked-box`}
              ></div>
            )
          )}
        </div>
      </div>

      <p
        id="text-gradient"
        className="text-3xl font-semibold self-center pb-16 justify-self-start pl-7"
      >
        {orgName}
      </p>
    </div>
  );
}
