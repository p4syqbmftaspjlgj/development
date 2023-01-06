# Development

### Link to Deployed Website

If you used the stencil code, this is `https://<your GitHub username>.github.io/<name of your repository>`

### Goal and Value of the Application

I really like to make recipes from the New York Times cooking website, but the way the current website is layed out, it's hard to set a menu and figure out a list of recipes I want to make without opening a bunch of tabs. This website interface makes it easy to select several recipes to make for a simple meal or for a larger dinner party and have an easy way to see how long each recipe will take to make.

### Usability Principles Considered

I wanted to keep the filter and sorting cateogries clear at the top, and I chose checkboxes since it made the most sense out of any other type of marker/button. Checkboxes were necessary since I wanted the users to be able to toggle and stack filters, and checkboxes most easily allowed for that functionality. I considered a radio button for the sorting button, but since radio buttons are required, I opted for a checkbox instead to indicate that you could also return to the plain, unsorted version.

### Organization of Components

I used a "BakeryItem" component (leftover fromt the React lab) as a way to store the recipe/food cards, which used json data that was passed through a map to store and render different recipes.

### How Data is Passed Down Through Components

I kept a few things the same from the React lab, so the BakeryItem really represents a recipe item. Data through a json file is passed into BakeryItem components, which are then rendered through the parent App.js file. The json file includes all the important type data for each recipe which is also rendered through the BakeryItem file.

### How the User Triggers State Changes

When the user clicks "Add to menu," a few things happen -- the state of the menu updates to include the one recipe, which also updates the total hours the selected menu will take. The user also triggers a state change that allows them to take the item off the menu if they want. In order to filter, the user can check off what kind of meal they want (lunch, dessert or dinner), and filter by several categories (i.e. just desserts and dinner, or just lunch). The user can also click a sorting button that resorts the data according to cook time. Unchecking the button brings the data back to its original state.
