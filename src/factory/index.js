const items = require("./items.json");

const createItem = (
    tag,
    quantity = 1,
    addons = [],
    price = items[tag].price,
) => ({
    tag,
    quantity,
    addons,
    price,
    name: items[tag].name,
    category: items[tag].category,
});

const createAddon = ({ tag, quantity = 1 }) => ({
    tag,
    quantity,
    price: items[tag].price,
    name: items[tag].name,
    category: items[tag].category,
});

export { createItem, createAddon };
