import React from "react";
import { Modal } from "react-bootstrap";
import policies, { termsAndCondition } from "../MockData/policy";

interface TermsAndPolicyModalProps {
  show: boolean;
  onClose: () => void;
}

const TermsAndPolicyModal: React.FC<TermsAndPolicyModalProps> = ({
  show,
  onClose,
}) => {
  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title> Terms And Conditions</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ol>
          {policies.map((item, index) => (
            <li key={index}>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </li>
          ))}
        </ol>
        <hr />
        <p>{termsAndCondition}</p>
      </Modal.Body>
    </Modal>
  );
};

export default TermsAndPolicyModal;
