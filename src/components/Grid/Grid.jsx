import React, { useEffect, useState } from "react";
import CardAsset from "../CardAsset/CardAsset";
import "./Grid.scss";

const Grid = ({ filter }) => {
  const gridList = [
    {
      title: "BOL.COM",
      subtitle: "A summer island in the Netherlands",
      asset: "bolcom",
      type: "asset",
      category: "eCommerce",
    },
    {
      title: "KEMPEN",
      subtitle: "Not some average banking website",
      asset: "kempen",
      type: "asset",
      category: "finTech",
    },
    {
      title: "PHILIPS",
      subtitle: "Beautiful design meets innovative technology",
      asset: "philips",
      type: "asset",
      category: "technology",
    },
    {
      title: "GEMEENTEMUSEUM",
      subtitle: "A 100 years of Mondariaan & De Stijl",
      asset: "gemeentemuseum",
      type: "asset",
      category: "culture",
    },
    {
      title: "Florensis",
      subtitle: "Rethinking the entire online ecosystem",
      asset: "florensis",
      type: "extendedAsset",
      category: "innovation",
    },
    {
      title: "MICROSOFT",
      subtitle:
        "Tapping into Ireland's unique gaming culture and bringing a fresh flavour to their Xbox media channels",
      asset: "",
      type: "text",
      category: "technology",
    },
    {
      title: "O'NEILL",
      subtitle:
        "Integrating existing content into O'Neil's new e-commerce platform",
      asset: "",
      type: "text",
      category: "eCommerce",
    },
    {
      title: "BE LIGHTING",
      subtitle: "Delivering clarity on a global scale",
      asset: "lightning",
      type: "asset",
      category: "technology",
    },
    {
      title: "TUI",
      subtitle: "swipe to find your next holiday destination",
      asset: "tui",
      type: "asset",
      category: "travel",
    },
    {
      title: "BUTLINS",
      subtitle:
        "Enhancing customer experience for personalised holiday planning using real time data",
      asset: "",
      type: "text",
      category: "travel",
    },
    {
      title: "VACANTSESELECT",
      subtitle:
        "Predicting booking behavior for holidays with smart data, voice search and machine learning",
      asset: "",
      type: "text",
      category: "travel",
    },
    {
      title: "Florensis",
      subtitle: "Rethinking the entire online ecosystem",
      asset: "florensis",
      type: "extendedAsset",
      category: "innovation",
    },
    {
      title: "CHOCOMEL",
      subtitle: "A campaign for the limited edition letter packs",
      asset: "chocomel",
      type: "asset",
      category: "food",
    },
    {
      title: "JBL",
      subtitle: "Live like a champion with Jerome Bootneg",
      asset: "jbl",
      type: "asset",
      category: "eCommerce",
    },
    {
      title: "ZALANDO",
      subtitle: "Innovative SEO and content strategy for Zalando",
      asset: "zalando",
      type: "asset",
      category: "eCommerce",
    },
    {
      title: "KONINKLIJKE BIBLIOTHEEK",
      subtitle: "The search for the most influential book ever",
      asset: "koninklijke-bibliotheek",
      type: "asset",
      category: "culture",
    },
    {
      title: "LIBERTY GLOBAL",
      subtitle: "Delivering complex commerce solutions",
      asset: "liberty-global",
      type: "asset",
      category: "technology",
    },
    {
      title: "ARLA",
      subtitle: "Swipe to find your next holiday destination",
      asset: "arla",
      type: "asset",
      category: "food",
    },
  ];

  const allLevel1Group = gridList.slice(0, 4);
  const allLevel2Group = gridList.slice(4, 7);
  const allLevel3Group = gridList.slice(7, 9);
  const allLevel4Group = gridList.slice(9, 12);
  const allLevel5Group = gridList.slice(12, 16);
  const allLevel6Group = gridList.slice(16, 18);

  const [level1Group, setLevel1Group] = useState(allLevel1Group);
  const [level2Group, setLevel2Group] = useState(allLevel2Group);
  const [level3Group, setLevel3Group] = useState(allLevel3Group);
  const [level4Group, setLevel4Group] = useState(allLevel4Group);
  const [level5Group, setLevel5Group] = useState(allLevel5Group);
  const [level6Group, setLevel6Group] = useState(allLevel6Group);

  useEffect(() => {
    if (filter === "all") {
      setLevel1Group(allLevel1Group);
      setLevel2Group(allLevel2Group);
      setLevel3Group(allLevel3Group);
      setLevel4Group(allLevel4Group);
      setLevel5Group(allLevel5Group);
      setLevel6Group(allLevel6Group);
    } else {
      setLevel1Group(gridList.filter((item) => item.category === filter));
      setLevel2Group([]);
      setLevel3Group([]);
      setLevel4Group([]);
      setLevel5Group([]);
      setLevel6Group([]);
    }
  }, [filter]);

  return (
    <div className="storyGrid">
      <div className="storyGrid_groupFour">
        {level1Group.map((gridItem, index) => {
          return <CardAsset item={gridItem} key={index} />;
        })}
      </div>
      {level2Group.length > 0 && (
        <div className="storyGrid_extendedLeft">
          <CardAsset item={level2Group[0]} />
          <div className="storyGrid_textGroup">
            <CardAsset item={level2Group[1]} />
            <CardAsset item={level2Group[2]} />
          </div>
        </div>
      )}
      <div className="storyGrid_groupTwo">
        {level3Group.map((gridItem, index) => {
          return <CardAsset item={gridItem} key={index} />;
        })}
      </div>
      {level4Group.length > 0 && (
        <div className="storyGrid_extendedRight">
          <div className="storyGrid_textGroup">
            <CardAsset item={level4Group[0]} />
            <CardAsset item={level4Group[1]} />
          </div>
          <CardAsset item={level4Group[2]} />
        </div>
      )}
      <div className="storyGrid_groupFour">
        {level5Group.map((gridItem, index) => {
          return <CardAsset item={gridItem} key={index} />;
        })}
      </div>
      <div className="storyGrid_divider"></div>
      <div className="storyGrid_quote">
        <div className="storyGrid_quote-title">
          "Dept helped us tell our story through a bold new identity and a
          robust online experience. To the tune of 60% growth in online bookings
          in just one month."
        </div>
        <div className="storyGrid_quote-subtitle">
          MATTIJS TEN BRINK - CEO, TRANSAVIA
        </div>
      </div>
      <div className="storyGrid_groupTwo">
        {level6Group.map((gridItem, index) => {
          return <CardAsset item={gridItem} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Grid;
