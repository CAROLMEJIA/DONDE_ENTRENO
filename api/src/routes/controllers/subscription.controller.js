const {Subscription, Payment_order, Membership} = require("../../db/db.js")

async function subscriptionUser(userId){

    const subscription = await Subscription.findOne(
        {

            where:
            {
                userId: userId,
                state: true
            },
            include:    
            {
                model: Payment_order,
                attributes: {exclude: [ 'createdAt', 'updatedAt','deletedAt']},
                
            },
           
        },

        
         {attributes: {exclude: ['createdAt', 'updatedAt','deletedAt']},}
    )



    const subscriptionMembership = await Subscription.findOne(
        {

            where:
            {
                userId: userId,
                state: true
            },
            include:    
            {
               
                model: Membership,
                attributes: {exclude: [ 'createdAt', 'updatedAt','deletedAt']}

            },
           
        },

        
         {attributes: {exclude: ['createdAt', 'updatedAt','deletedAt']},}
    )


    if(subscription){
        const response ={
            subscription: {
                    id: subscription.dataValues.id,
                    start_date:subscription.dataValues.start_date,
                    end_date:subscription.dataValues.end_date,
                    renovation:subscription.dataValues.renovation,
                    state:subscription.dataValues.state
            },
            payment_order: subscription.dataValues.payment_order.dataValues,
            membership: subscriptionMembership.dataValues.membership.dataValues
    }

        return response
    
    }else{
        return "El usuario no tiene una suscripción"
    }
  
    
}




module.exports={
    subscriptionUser
}