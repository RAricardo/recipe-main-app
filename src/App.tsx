import "./App.css";

function App() {
  return (
    <div className="card">
      <img className="image" src="images/image-omelette.jpeg" />

      <div className="body">
        <section>
          <h1>Simple Omelette Recipe</h1>
          <p>
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
        </section>
        <section>
          <div className="prep-section">
            <h3>Preparation time</h3>
            <ul>
              <li>
                <span className="bold">Total:</span> Approximately 10 minutes
              </li>
              <li>
                <span className="bold">Preparation:</span> 5 minutes
              </li>
              <li>
                <span className="bold">Cooking:</span> 5 minutes
              </li>
            </ul>
          </div>
        </section>
        <Separator />
        <section>
          <h2>Ingredients</h2>
          <ul>
            <li>2-3 large eggs</li>
            <li>Salt, to taste</li>
            <li>Pepper, to taste</li>
            <li>1 tablespoon of butter or oil</li>
            <li>
              Optional fillings: cheese, diced vegetables, cooked meats, herbs
            </li>
          </ul>
        </section>
        <Separator />
        <section>
          <h2>Instructions</h2>
          <ol>
            <li>
              <span className="bold">Beat the eggs:</span> In a bowl, beat the
              eggs with a pinch of salt and pepper until they are well mixed.
              You can add a tablespoon of water or milk for a fluffier texture.
            </li>
            <li>
              <span className="bold">Heat the pan:</span> Place a non-stick
              frying pan over medium heat and add butter or oil.
            </li>
            <li>
              <span className="bold">Cook the omelette:</span> Once the butter
              is melted and bubbling, pour in the eggs. Tilt the pan to ensure
              the eggs evenly coat the surface.
            </li>
            <li>
              <span className="bold">Add fillings (optional):</span> When the
              eggs begin to set at the edges but are still slightly runny in the
              middle, sprinkle your chosen fillings over one half of the
              omelette.
            </li>
            <li>
              <span className="bold">Fold and serve:</span> As the omelette
              continues to cook, carefully lift one edge and fold it over the
              fillings. Let it cook for another minute, then slide it onto a
              plate.
            </li>
            <li>
              <span className="bold">Enjoy:</span> Serve hot, with additional
              salt and pepper if needed.
            </li>
          </ol>
        </section>
        <Separator />
        <section>
          <h2>Nutrition</h2>
          <p>
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>
          <div className="flex-table">
            <div className="flex-row">
              <div className="col">Calories </div>
              <div className="col">277kcal</div>
            </div>
            <Separator />
            <div className="flex-row">
              <div className="col">Carbs</div>
              <div className="col">0g</div>
            </div>
            <Separator />
            <div className="flex-row">
              <div className="col">Protein</div>
              <div className="col">20g</div>
            </div>
            <Separator />
            <div className="flex-row">
              <div className="col">Fat</div>
              <div className="col">22g</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

const Separator = () => {
  return <div className="separator"></div>;
};

export default App;
