import Text from "../models/Text";

export const textApi = async(req, res) => {
    const {id} = req.params;
    const text = await Text.findById(id);
    return res.json({text});
}