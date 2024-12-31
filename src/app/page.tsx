import MonthsaryCard from "@/components/monthsary-card";
import React from "react";

function Home() {
  return (
    <>
      <MonthsaryCard
        months={1}
        message="Every moment with you is a treasure. Here's to many more months of love and happiness!"
        partnerName="Langga"
        musicSrc="/assets/images/blue.mp3"
      ></MonthsaryCard>
    </>
  );
}

export default Home;
