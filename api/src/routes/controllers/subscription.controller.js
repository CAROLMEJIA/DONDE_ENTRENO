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


async function subscriptionActive(userId){
    const active = await Subscription.findOne({
        where:{
            userId:userId,
            state: true
        }
    })

    if(active){
        let date = new Date(Date.now());
        let final = new Date(active.end_date)
        //console.log("soy validación", date.getTime() > final.getTime())
        if(date.getTime() > final.getTime()){
             active.state = false
        }
            
        await active.save()
        //console.log("soy active", active)
        return active; 
    }else{
            return"El usuario no tiene una suscripción"
        }

}




module.exports={
    subscriptionUser,
    subscriptionActive
}