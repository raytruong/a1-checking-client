import currency from "currency.js";

const Item = function(
    db,
    tag,
    quantity = 1,
    addons = [],
    price = db[tag].price,
) {
    (this.tag = tag),
        (this.quantity = quantity),
        (this.addons = addons),
        (this.price = currency(price, { fromCents: true })),
        (this.category = db[tag].category),
        (this.name = db[tag].name),
        (this.setPrice = function(newPrice) {
            this.price = currency(newPrice);
        }),
        (this.setQuantity = function(newQuantity) {
            this.quantity = newQuantity;
        }),
        (this.setAddons = function(newAddons) {
            this.addons = newAddons;
        });
};

const Addon = function(db, tag, quantity = 1) {
    (this.tag = tag),
        (this.quantity = quantity),
        (this.price = currency(db[tag].price, { fromCents: true })),
        (this.category = db[tag].category),
        (this.name = db[tag].name),
        (this.setPrice = function(newPrice) {
            this.price = currency(newPrice);
        }),
        (this.setQuantity = function(newQuantity) {
            this.quantity = newQuantity;
        });
};

// const Transaction = function(db, tag, quantity = 1) {
//     (this.tag = tag),
//         (this.quantity = quantity),
//         (this.price = db[tag].price),
//         (this.category = db[tag].category),
//         (this.name = db[tag].name),
//         (this.setQuantity = function(newQuantity) {
//             this.quantity = newQuantity;
//         });
// };

export { Item, Addon };
