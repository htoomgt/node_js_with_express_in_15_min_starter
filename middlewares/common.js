export function mid(req, res, next){
    console.log(req.body);
    console.log(req.params);
    next();
}
