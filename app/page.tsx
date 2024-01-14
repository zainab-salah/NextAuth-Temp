import SectionTitle from "@/components/Common/SectionTitle";
import { getServerSession } from "next-auth";
import { options } from "../app/api/auth/[...nextauth]/options";

const HomePage = async () => {
  const session = await getServerSession(options);
 console.log(session)
  return (
    <section className="min-h-screen  paddings">
      <div className="container">
       <SectionTitle heading="Home Page" primary />
       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo blanditiis asperiores nisi dolorem minus rerum error vero nemo modi harum perspiciatis cumque libero, sit consequatur fugiat nulla? Iusto, cum harum!
      </div>
    </section>
  );


}
export default HomePage;