import "./TooltipPopup.css";
import Button from "../Button/Button";
import iconAuthOk from "../../images/tooltip-popup/auth-ok.svg";
import iconAuthFail from "../../images/tooltip-popup/auth-fail.svg";

function InfoTooltip({ tooltipState, setTooltipState }) {
  const { isVisible, isSuccessful, text } = tooltipState;

  const closeTooltipPopup = () => {
    setTooltipState({
      isVisible: false,
      isSuccessful: isSuccessful,
      text: text,
    });
  };

  return (
    <section className={`tooltip-popup ${isVisible && "tooltip-popup_opened"}`}>
      <div className="tooltip-popup__container">
        <Button onClick={closeTooltipPopup} type={"close-popup"} />
        <img
          className="tooltip-popup__image"
          src={isSuccessful ? iconAuthOk : iconAuthFail}
          alt="Иконка с результатом авторизации"
        />
        <h3 className="tooltip-popup__title">{text}</h3>
      </div>
    </section>
  );
}

export default InfoTooltip;
