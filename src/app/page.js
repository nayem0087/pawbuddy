import Banner from "@/components/Banner";
import BestServices from "@/components/BestService";
import HappyPetsSection from "@/components/HappyPets";
import PetCareTips from "@/components/PetCareTips";

export default function Home() {
  return (
    <div>
        <Banner/>
        {/* <Featured/> */}
        {/* <WhyAdoptPets/> */}
        {/* <SuccessStories/> */}
        <PetCareTips/>
        <HappyPetsSection/>
        {/* <PetStats/> */}
        <BestServices/>
    </div>
  );
}
