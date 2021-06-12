
import { Link } from "react-router-dom"
function RecipeCard(props) {
  return (
    <div className="recipe-card">
      <h4>{props.title}</h4>
      <img src={props.image} />
      <Link to={`/recipe/${props.id}`}><button className="recipe-btn">See full recipe</button></Link>

    </div>
  )
}
export default RecipeCard