//Decorator Pattern
//requestErrorHandler() acts as a decorator for the original controller function.
// It wraps the original controller function with additional error handling logic and returns it.
function controllerErrorWrapper(controller) {

    //The following async function will be returned.
    //This following async function is a controller function with an error handling logic.
    return async function (req, res, next) {
        ``
        //If the following controller(req,res) function does not produce an error,
        // only the try part gets run.
        try {
            return await controller(req, res);

            //If the above controller(req,res) function produces an error,
            //express' error handler handles the error.
            //After that, error handler in the app.mjs file gets run.
        } catch (e) {
            next(e);
        }
    };
}

export {controllerErrorWrapper};