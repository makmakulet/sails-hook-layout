/**
 * @name sails Layout=
 * @desc sails hook to add .useLayout(); method on res object 
 * @author makmakulet 
 */

module.exports = SailsLayout;



function SailsLayout(req, res, next) {

  req.options.layout = {
    folder: "",
    file: ""
  };

  res.useLayout = function (layout) {
    req.options.layout.file = layout;
    res.locals.layout = req.options.layout.folder + req.options.layout.file;
  };

  return next();
}

//==============================================================================
