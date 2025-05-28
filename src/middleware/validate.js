export function validate(schema) {
  return (req, res, next) => {
    try {
      const validated = schema.parse(req.body);
      req.body = validated;
      next();
    } catch (error) {
      res.status(400).json({
        message: 'Erro de validação',
        errors: error.errors.map(e => ({ 
         path: e.path.join('.'),
         message: e.message 
        })),
      });
    }
  };
}
