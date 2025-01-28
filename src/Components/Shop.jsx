import { useState, useEffect } from "react";
import "./Shop.css";
export default function Shop() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://cookie-upgrade-api.vercel.app/api/upgrades"
        );
        const data = await response.json();
        console.log("data fetched successfully!");

        setItems(data);
      } catch {
        console.log(" Failed to fetch items!");
      }
    }
    fetchData();
  }, []);

  console.log("This is the fetched data:", items);

  // Limiting items to the first 4
  const limitedItems = items.slice(0, 4);

  return (
    <>
      <div className="shop">
        <h3>Shops</h3>

        <div>
          {limitedItems.length === 0 ? (
            <p>Loading items...</p>
          ) : (
            limitedItems.map((item) => (
              <div key={item.id} className="shopitems">
                <p>{item.name}</p>
                <p>Cost: {item.cost}</p>
                <p>increase:{item.increase}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
