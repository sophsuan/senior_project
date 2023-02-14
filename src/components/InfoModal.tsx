import React from "react";
// import Modal from "react-modal";
const Modal = require("react-modal");

const customStyles = {
  content: {
    bottom: "auto",
    border: "solid white 6px",
    "border-radius": "20px",
    background: "#DF7E74",
    color: "white",
    left: "50%",
    marginRight: "-50%",
    outline: "solid black 2px",
    right: "auto",
    top: "50%",
    transform: "translate(-50%, -50%)",
    "font-size": "22px",
    width: "50%"
  },
  overlay: { zIndex: 1000 }
};

function InfoModal() {
  // let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = '#f00';
  // }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className='font-mono text-white border-4 rounded-full z-15'>
      <div>
        <button className='text-8xl pl-5 pr-5' onClick={openModal}>
          ?
        </button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Example Modal'
      >
        <button className='font-bold text-5xl' onClick={closeModal}>
          X
        </button>
        <div className='pb-5'>
          <div className='text-center w-full text-4xl'>
            <b>
              Welcome to Moodasaurus! <br />
              Your virtual mental health companion! :D <br />
            </b>
          </div>
          <br />
          <div className='text-3xl'>
            <b>What is Moodasaurus?</b>
            <br />
          </div>
          Moodasaurus is a virtual companion that helps you track improving your
          mental health!
          <br />
          <br />
          To get started, use your arrow keys and Enter button, or{" "}
          <b>
            click on the buttons on-screen to interact with your new dinosaur
            friend! :D
          </b>
          <br />
          <br />
          Select your mood and then fill out today's daily written prompt on the
          home page! Or, view some helpful mental health resources and more from
          the sidebar to the left!
          <br />
        </div>
      </Modal>
    </div>
  );
}

export default InfoModal;
