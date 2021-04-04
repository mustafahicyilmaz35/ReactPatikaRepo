import "./App.css";
import Card from "./components/Card/Card";
//import food from "./assets/hunkar_begendi.jpg"; // Tell webpack this JS file uses this image
import food from "./assets/hunkar_begendi.jpg";

function App() {
  const recipeAuthor = "Kodluyoruz";
  const recipeItem = {
    title: "Hünkar Beğendi",
    date: "4 Nisan 2021, Pazar",
    image: food,
    description:
      "Saray mutfağının önde gelen, hünkarın da midesini fetheden yemek tariflerinden biri hünkar beğendi. Pratik bir yemek tarifi sayılan, aşamaları biraz fazla olsa da lezzetli ana yemeklerden biri o! Tereyağında kavrulmuş un ve soğuk süt ilavesiyle hazırlanan beğendi bir yana dursun kısık ateşte pişen bol soğanlı et karışımı onu diğerlerinden ayırıyor. Karşınıza her haliyle övgüleri toplayacak, et yemeklerinin en görkemlisi hünkar beğendi yemeği çıkıyor.  ",
  };

  const likeCount = 193;
  const isLiked = false;

  return (
    <div className="App">
      <header className="App-header">
        <Card
          /* prop ismi = { değişken } */
          author={recipeAuthor}
          count={likeCount}
          liked={isLiked}
          title={recipeItem.title}
          date={recipeItem.date}
          description={recipeItem.description}
          foodImg={recipeItem.image}
          
        />
      </header>
    </div>
  );
}

export default App;
