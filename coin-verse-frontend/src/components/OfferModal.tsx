import Image from "next/image";
import { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import modalImage from "../assets/modal/signInOffer.jpg";

export default function OfferModal() {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
    localStorage.setItem("modalClosedTimestamp", Date.now().toString());
  };

  useEffect(() => {
    const modalClosedTimestamp = localStorage.getItem("modalClosedTimestamp");
    const currentTime = Date.now();
    const timeDifference = currentTime - Number(modalClosedTimestamp);
    const shouldShowModal =
      !modalClosedTimestamp || timeDifference > 1 * 24 * 60 * 60 * 1000;

    if (shouldShowModal) {
      setTimeout(() => {
        setShowModal(true);
        // 4 seconds delay before opening the modal
      }, 5000);
    }
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = showModal ? "hidden" : "";
  }, [showModal]);

  return (
    <div
      className={`${
        showModal ? "scale-100 opacity-100" : "scale-0 opacity-0"
      } fixed top-0 left-0 bg-[#00000060] h-screen w-screen z-50 duration-200 overflow-hidden`}>
      <div className="border border-black w-full h-full rounded-md relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="max-w-[500px] max-h-[500px] min-w-[300px] min-h-[300px] relative cursor-pointer">
            <div
              onClick={handleCloseModal}
              className="absolute top-6 right-6 text-white border-2 border-white rounded-full w-7 h-7 flex justify-center items-center font-semibold cursor-pointer">
              <CgClose />
            </div>
            <Image
              src={modalImage}
              className="w-full h-full rounded-md"
              alt="Sign in offer modal image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
