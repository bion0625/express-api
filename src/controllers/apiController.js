import Text from "../models/Text";

export const textApi = async(req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    console.log("ENTER TEXT API");
    const {id} = req.params;
    const text = await Text.findById(id);
    return res.json({text});
}