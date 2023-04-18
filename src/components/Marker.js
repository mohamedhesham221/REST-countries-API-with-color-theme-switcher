import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
const Marker = () => {
  return(
    <>
    <FontAwesomeIcon icon={faLocationDot} style={{color : "#0c64b6", transform: "scale(3)"}}/>
    </>
  )
}
export default Marker;