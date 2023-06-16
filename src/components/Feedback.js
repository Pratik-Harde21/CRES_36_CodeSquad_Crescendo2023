import React from 'react'
import "./Feedback.css"

const Feedback = () => {
  return (
    <div class="form-body">
    <div class="row">
        <div class="form-holder">
            <div class="form-content">
                <div class="form-items">
                    <h3>Feedback Form</h3>
                    <p>Give Us Your Valuable Feedback Here!</p>
                    <form class="requires-validation" novalidate>

                      <div class="col-md-12 mt-3">
                        <label class="mb-3 mr-1" for="explore">How's your experience with hack edu so far? </label>

                        <input type="radio" class="btn-check" name="experience" id="good" autocomplete="off" required/>
                        <label class="btn btn-sm btn-outline-secondary" value="good">Good</label> < nbsp />
                        
                        <input type="radio" class="btn-check" name="experience" id="average" autocomplete="off" required/>
                        <label class="btn btn-sm btn-outline-secondary" value="no">Average</label> < nbsp />

                        <input type="radio" class="btn-check" name="experience" id="poor" autocomplete="off" required/>
                        <label class="btn btn-sm btn-outline-secondary" for="poor">Poor</label> 
                           <div class="valid-feedback mv-up">You selected an option!</div>
                            <div class="invalid-feedback mv-up">Please select an option!</div>
                      </div>

                        <div class="col-md-12">
                            <textarea class="form-control" type="text" name="suggest" placeholder="Any more suggessions" required />
                             <div class="valid-feedback">field is valid!</div>
                             <div class="invalid-feedback">field cannot be blank!</div>
                        </div>

                       <div class="col-md-12">
                            <select class="form-select mt-3" required>
                                  <option selected disabled value="">What more courses would you like to explore?</option>
                                  <option value="history">History</option>
                                  <option value="geography">Geography</option>
                                  <option value="politics">Politics</option>
                                  <option value="maths">Maths</option>
                                  <option value="Art">Art</option>
                                  <option value="sci&nature">Science & Nature</option>
                           </select>
                            <div class="valid-feedback">You selected a course!</div>
                            <div class="invalid-feedback">Please select a course!</div>
                       </div>

                       <div class="col-md-12 mt-3">
                        <label class="mb-3 mr-1" for="explore">Would you like to explore more on current course? </label>

                        <input type="radio" class="btn-check" name="explore" id="yes" autocomplete="off" required/>
                        <label class="btn btn-sm btn-outline-secondary mr-1" value="yes">Yes</label>

                        <input type="radio" class="btn-check" name="explore" id="no" autocomplete="off" required/>
                        <label class="btn btn-sm btn-outline-secondary" value="no">No</label>

                          <div class="valid-feedback mv-up">You selected an option!</div>
                          <div class="invalid-feedback mv-up">Please select an option!</div>
                        </div>

                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                      <label class="form-check-label">I confirm that all data are correct</label>
                     <div class="invalid-feedback">Please confirm that the entered data are all correct!</div>
                    </div>
              

                        <div class="form-button mt-3">
                            <button id="submit" type="submit" class="btn btn-primary">Submit Feedback</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

  )
}

export default Feedback
