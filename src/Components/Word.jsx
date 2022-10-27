import React from "react";
import { useSelector } from "react-redux";

function Word(props) {
  const connectedUser = useSelector((state) => state.sessionUser);
  const textImages = connectedUser.textInUse.images;

  let imgSrc;
  textImages.forEach((img) => {
    if (img.src.split("/")[3].split(".")[0] == props.mot.split(".")[0]) {
      imgSrc = img.src;
    }
  });

  return (
    <span>
      <table className="d-inline me-2 text-center">
        <tbody>
          <tr>
            <td>
              <img src={imgSrc} alt="" width="70px" />
            </td>
          </tr>
          <tr style={props.style}>
            <td>{props.mot}</td>
          </tr>
        </tbody>
      </table>
    </span>
  );
}

export default Word;
