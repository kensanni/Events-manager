class Validation {
  static validateSignUpInput(req, res, next) {
    req.checkBody({
      email: {
        notEmpty: {
          options: true,
          errorMessage: 'Email field cannot be empty'
        },
        isEmail: {
          errorMessage: 'Please input a valid Email address'
        }
      }
    });
    const errors = req.validationErrors();
    if(errors) {
      const allErrors = [];
      errors.forEach((error) => {
        allErrors.push({
          message: error.msg
        })
      })
      return({ errors: allErrors })
    }
  }
}

export default Validation