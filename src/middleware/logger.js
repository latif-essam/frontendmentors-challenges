
const logger = (store) => next => action => {
    console.group(action.type);
    console.log({ action });
    console.log("New State: ", next(action))
    console.groupEnd()
    return next(action);
}
export default logger;