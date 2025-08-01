"use client";
import { useState } from "react";

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState("vision");
  const [showFact, setShowFact] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "vision":
        return "As automation and technology govern our life, reading takes a backseat. Our vision is to gift back the habit of reading to those who’ve lost reading and to ignite the fire in youth to gift literacy to those who aren’t fortunate enough to have access to it.";
      case "mission":
        return "Our Mission is to keep the love of books alive- being a medium where readers connect with each other and to create a virtual world where reading is alive and breathing. We encourage reading with sustainability- choosing sharing over buying. We aim to make the youth aware of illiteracy in India and the World and empower them to harness it.";
      case "purpose":
        return "BookSpace originated as a close-knit committee in Mumbai where readers can share books with each other for free as available in the BookSpace Library. We extend our purpose to be a warm place for readers where collaborations, book discussions, and progressive steps in the world of literature can thrive.";
      default:
        return "";
    }
  };

  return (
    <div className="flex flex-col items-center w-full font-serif bg-[#FDE8BE] text-[#5D2F1C] min-h-screen">
      {/* ABOUT US heading with full-width brown background */}
      <div className="w-full bg-[#945D49] py-6 flex justify-center items-center">
        <h1 className="font-caveat text-[5vw] sm:text-[4vw] md:text-[3vw] lg:text-[2.5vw] leading-tight text-white text-center">
          ABOUT US
        </h1>
      </div>

      {/* BOOKSPACE SUBHEADING with decor */}
      <div className="flex flex-col items-center justify-center mt-6 mb-6 w-full px-4">
        <div className="flex items-center justify-center w-full max-w-[600px]">
          <div className="h-2 w-12 sm:w-20 bg-[#9C5C44] mr-2 sm:mr-8"></div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-merriweather font-bold text-[#311E17] text-center whitespace-nowrap">
            BOOKSPACE
          </h2>
          <div className="h-2 w-12 sm:w-20 bg-[#9C5C44] ml-2 sm:ml-8"></div>
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-literata font-bold italic text-[#311E17] mt-4 text-center px-2">
          WHERE BOOKS CONNECT US
        </h2>
      </div>

      {/* Galaxy Animated Section */}
      <div className="relative bg-[#9C5C44] p-2 rounded-lg mt-4 mb-14 w-[90%] max-w-[500px] mx-auto overflow-hidden h-[250px] sm:h-[300px] md:h-[350px]">
        <img
          src="/galaxy.jpg"
          alt="Galaxy Background"
          className="rounded-lg w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 flex items-center justify-center z-30 animate-welcome-text">
          <h1 className="text-xl sm:text-2xl md:text-3xl text-white font-bold text-center">
            Welcome to <br />
            <span className="text-[#BA7FCB]">BookSpace</span>
          </h1>
        </div>
        <img
          src="/book_open.png"
          alt="Closed Book"
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[200px] sm:w-[250px] z-20"
          loading="lazy"
        />
      </div>

      {/* OUR VALUES */}
      <div
        className="w-full py-24 px-4 flex flex-col items-center"
        style={{
          backgroundImage: "url('/our_values_bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative mb-4">
          <div className="absolute inset-0 bg-[#FDE8BE] rounded-lg opacity-90 blur-sm z-0" />
          <h2 className="text-2xl md:text-3xl font-merriweather font-bold text-[#311E17] relative z-10 px-4">
            OUR VALUES
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row w-[90%] lg:w-3/4 bg-white bg-opacity-80 rounded-xl shadow-md overflow-hidden">
          <div className="flex flex-col text-left font-merriweather font-semibold w-full lg:w-1/4">
            {["vision", "mission", "purpose"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-6 border-b-2 lg:border-b-0 lg:border-r-2 border-[#9C5C44] text-left transition-all duration-300 ${
                  activeTab === tab ? "text-[#BA7FCB] font-bold" : "text-black"
                } hover:bg-[#FDE8BE] hover:text-[#704CAA]`}
              >
                {tab.toUpperCase()}
              </button>
            ))}
          </div>
          <div className="w-full lg:w-3/4 p-6 text-[#5D2F1C]">
            {renderTabContent()}
          </div>
        </div>
      </div>

      {/* OUR STORY */}
      <div className="flex flex-col items-center text-center py-10 w-[90%]">
        <h2 className="text-2xl md:text-3xl font-merriweather font-bold text-[#311E17] border-b-4 border-[#9C5C44] mb-6">
          OUR STORY
        </h2>
        <div className="bg-[#B9745A] rounded-[30px] px-6 py-6 w-full lg:w-[60%] text-left text-white shadow-md relative">
          <p className="mb-4 text-lg md:text-xl font-semibold">
            The urge to read one book today turns into 10 books by few days.
            To read each book do I have to buy a book? Oh, but this book is with a friend’s friend’s friend.
            What are the chances I know? Very low. Being in this dilemma, rose the question- why don’t we have a community where books every member has is listed on the community library and can be borrowed by anyone from the community.
            This was the creation of BookSpace- 1+1 is more than 2.
          </p>
          <div className="relative flex flex-col items-center">
            <img
              src="/our_story2.png"
              alt="Bookshelf"
              className="w-[200px] md:w-[250px] rounded-xl cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={() => setShowFact(!showFact)}
            />
            {showFact && (
              <div className="absolute -top-[80px] w-[180px] bg-white text-[#5D2F1C] text-sm p-3 rounded-2xl shadow-lg z-20 animate-fade-in">
                Lorem ipsum dolor sit amet, consectetur...
              </div>
            )}
            <div className="mt-4 text-[#5D2F1C] font-bold text-sm md:text-base text-center">
              <span className="text-2xl block">➤</span>
              CLICK TO KNOW FACTS
            </div>
          </div>
        </div>
      </div>

      {/* IMPACTS */}
      <div className="bg-[#9C5C44] rounded-3xl text-white w-[90%] lg:w-3/4 p-6 md:p-8 text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-merriweather font-bold text-[#311E17] mb-8">
          IMPACTS MADE
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center">
          {[
            { value: 246, label: "ACTIVE READERS" },
            { value: 60, label: "BOOK DONATION" },
            { value: 20, label: "CHILDREN EDUCATED" },
          ].map((impact, idx) => (
            <div
              key={idx}
              className="bg-[#D9CFC9] text-[#5D2F1C] rounded-full w-32 h-32 md:w-36 md:h-36 flex flex-col justify-center items-center shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg mx-auto"
            >
              <span className="text-2xl md:text-3xl font-bold">{impact.value}</span>
              <p className="text-center text-xs md:text-sm mt-1 px-2">{impact.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}