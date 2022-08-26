const {Membership} = require("../../db/db.js")

async function createMembership(type, price, description){
    
    const create = await Membership.create({type, price, description});
    return create;

}

async function allMembership(){
    
    const all = await Membership.findAll();
    return all;

}


module.exports = {
    createMembership,
    allMembership
}