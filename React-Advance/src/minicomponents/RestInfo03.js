import Accord from "../minicomponents/Accordion";

function RestInfo03({ cardInfo }) {
  return (
    <>
      <div className="mb-20">
        {cardInfo.map((ele, index) => {
          console.log(ele);
          const { itemCards, title, categories } = ele.card.card;

          if (
            ele.card.card["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
          ) {
            return (
              <Accord key={index} cardInfo={itemCards} cardTitle={title} />
            );
          } else if (
            ele.card.card["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
          ) {
            return (
              <div key={index} className="accord2">
                <h2 className="text-[18px] py-2 font-bold">
                  {title || "Category"}
                </h2>
                {categories.map((category, catIndex) => {
                  const { itemCards: catItems, title: catTitle } = category;
                  return (
                    <Accord
                      key={catIndex}
                      cardInfo={catItems}
                      cardTitle={catTitle}
                    />
                  );
                })}
                <hr className="my-4" />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </>
  );
}

export default RestInfo03;
