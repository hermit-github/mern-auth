const validateReqBody = (schema) => {
  return (req, res, next) => {
    const data = req.body;

    const result = schema.validate(data);

    if (result.error) {
      return res.status(400).json({
        success:false,
        message:"Missing Required Field",
        error: result.error.details[0].message
     });
    }

    // If validation passes, continue to the next middleware or route handler
    next();
  };
};

export default validateReqBody;