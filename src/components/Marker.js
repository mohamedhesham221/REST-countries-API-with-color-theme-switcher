import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
const Marker = () => {
  return(
    <>
    <FontAwesomeIcon icon={faLocationDot} style={{color : "#202c37", transform: "scale(2)"}}/>
    </>
  )
}
export default Marker;