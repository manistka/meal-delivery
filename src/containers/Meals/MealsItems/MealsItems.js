import React from "react";
import ScrollBar from "../../../components/UI/ScrollBar/ScrollBar";
import dumplings from "../../../Images/dumplings.png";
import musli from "../../../Images/musli.jpg";
import sandwich from "../../../Images/sandwich.jpg";
import MealsItem from "./MealsItem/MealsItem";

const MealsItems = () => {
    const items = [
        {
            name: "Chinese Meat Dumplings",
            kcal: "672",
            price: "5,99",
            img: dumplings,
            tags: ["meat"],
        },
        {
            name: "Bio Musli with Peach",
            kcal: "348",
            price: "3,49",
            img: musli,
            tags: ["vegan"],
        },
        {
            name: "Fresh Sandwich with Ham",
            kcal: "522",
            price: "4,29",
            img: sandwich,
            tags: ["bread", "meat"],
        },
    ];

    return (
        <ScrollBar style={{ height: "80%" }}>
            {items.map((item) => (
                <MealsItem
                    key={item.name}
                    name={item.name}
                    kcal={item.kcal}
                    price={item.price}
                    img={item.img}
                    tags={item.tags}
                />
            ))}
        </ScrollBar>
    );
};

export default MealsItems;
