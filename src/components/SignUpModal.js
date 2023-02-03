import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ModalContext } from "../context/modalContext";
import { userContext } from "../context/userContext";

export default function SignUpModal(props) {
  
  const { modalState, toggleModals } = useContext(ModalContext);
  const {signup} = useContext(userContext)


  const navigate = useNavigate()



  const [validation, setValidation] = useState("");

  const inputs = useRef([])
  const addInputs = el => {
    if(el && !inputs.current.includes(el)){
      inputs.current.push(el)
    }
  }  


  const formRef = useRef()
  console.log( formRef)


  const handleForm = async (e) => {
    e.preventDefault()

    if(inputs.current[1].value !== inputs.current[2].value){
        setValidation("not same pwd")
    }

    try {
      const cred = await signup(inputs.current[0].value, inputs.current[2].value)
       navigate("/private/private-home")
       toggleModals('close')
    } catch (error) {
        console.dir(error)

      if(error.code === "auth/invalid-email") {
        setValidation(" invalid email")
      }
    }
  }

  return (
    <>
      {modalState.signUpModal && (
        <div className="position-fixed top-0 vw-100 vh-100">
          <div
          onClick={() => {toggleModals('close')}}
          className="w-100 h-100 bg-dark bg-opacity-75">
          </div>
            <div
              className="position-absolute top-50 start-50 translate-middle"
              style={{ minWidth: "400px" }}
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Sign Up</h5>
                    <button 
                    onClick={() => {toggleModals('close')}}
                    className="btn-close"></button>
                  </div>

                  <div className="modal-body">
                    <form 
                    ref={formRef}
                    onSubmit={handleForm}
                    className="sign-up-form">
                      <div className="mb-3">
                        <label htmlFor="signUpEmail" className="form-label">
                          Email adress
                        </label>
                        <input
                          ref={addInputs}
                          name="email"
                          required
                          type="email"
                          className="form-control"
                          id="signUpEmail"
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="signUpPwd" className="form-label">
                          Password
                        </label>
                        <input
                          ref={addInputs}
                          name="pwd"
                          required
                          type="password"
                          className="form-control"
                          id="signUpPwd"
                        />
                      </div>

                      <div className="mb-3">
                        <label htmlFor="repeatPwd" className="form-label">
                          Repeat Password
                        </label>
                        <input
                          ref={addInputs}
                          name="pwd"
                          required
                          type="password"
                          className="form-control"
                          id="repeatPwd"
                        />
                        <p className="text-danger mt-1">{validation}</p>
                      </div>

                      <button className="btn btn-primary">Submit</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>

        </div>
      )}
    </>
  );
}
