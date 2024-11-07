const Item = require('../models/itemsModel');

//Get all items
exports.getAllItems = async (req, res) => {
    try{
        const items = await Item.find();
        res.render('index', {items});
    } catch (error){
        res.status(500).send("Error while getting items");
    }
};

//Add a new items
exports.createItem = async (req, res) => {
    const {name, description} = req.body;
    try{
        const item = new Item({name, description});
        await item.save();
        res.redirect('/');
    } catch (error){
        res.status(500).send("Error while creating item");
    }
}