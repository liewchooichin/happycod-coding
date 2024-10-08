import PropTypes from "prop-types";
import { Form } from "react-router-dom";
import { useFetcher } from "react-router-dom";


Favorite.propTypes = {
  contact: PropTypes.shape({
    first: PropTypes.string.isRequired,
    last: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    twitter: PropTypes.string.isRequired,
    notes: PropTypes.string.isRequired,
    favorite: PropTypes.bool.isRequired,
  })
}
export function Favorite({contact}){
  const fetcher = useFetcher();
  const favorite = contact.favorite;

  return(
    <fetcher.Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={
          favorite
          ? "Remove from favorites"
          : "Add to favorites"
        }
      >
        {favorite ? "★" : "☆"}
      </button>
    </fetcher.Form>
  )
}