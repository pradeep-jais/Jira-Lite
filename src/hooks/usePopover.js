import { useState } from "react";

const userPopover = (initialState) => {
  const [isPopupOpen, setIsPopupOpen] = useState(initialState);
  const [coords, setCoords] = useState({ top: 0, left: 0 });

  const togglePopup = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const dataName = e.currentTarget.dataset.name;

    setCoords({
      top: rect.bottom,
      left: rect.right - (dataName === "nav-profile-btn" ? 280 : 0),
    });
    setIsPopupOpen((prev) => !prev);
  };

  return { isPopupOpen, coords, togglePopup };
};

export default userPopover;
