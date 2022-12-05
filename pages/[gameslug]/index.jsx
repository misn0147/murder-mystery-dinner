import Head from "next/head";
import Image from "next/image";
import shipPic from "../../public/ship-photo.jpg";
import RSVP from "../../components/rsvp";

export default function Home() {
    return (
        <div className="bg-black text-white font-sans font-bold text-xl tracking-wider">
    
            <h1 className="text-5xl">Welcome to Murder Mystery</h1>
            <p className="my-8 font-garamond">
                Can you solve the case and figure out whodunit? Join us and test
                your detective skills.
            </p>

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
