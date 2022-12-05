import Image from "next/image";
import shipPic from "../../public/ship-photo.jpg";
import RSVP from "../../components/rsvp";
import Welcome from "../../components/welcome";

export default function Home() {
    return (
        <div className="bg-black text-white font-sans font-garamond font-bold text-xl tracking-wider">
            <Welcome />
            <div className="container mx-auto">
                <Image
                    alt="Spooky looking ship"
                    src={shipPic}
                    width={700}
                    height={475}
                    sizes="100vw"
                    style={{
                        width: "100%",
                        height: "auto",
                    }}
                />
            </div>
            <RSVP />
        </div>
    );
}
