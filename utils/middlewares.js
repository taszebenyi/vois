export const idParser = (logger) => (req, res, next) => {
  const { id } = req.params;
  if (/^0[0-9]+/.test(id)) {
    const error = 'ID should not start with zero';
    logger.error(error);
    return res.status(400).json({ error });
  }

  const parsedId = parseInt(id, 10);
  if (isNaN(parsedId)) {
    const error = 'Invalid ID format';
    logger.error(error);
    return res.status(400).json({ error });
  }

  req.params.id = parsedId;
  next();
};

// eslint-disable-next-line no-unused-vars
export const errorHandler = (err, req, res, _next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
};
