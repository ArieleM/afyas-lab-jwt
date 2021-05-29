import User from '../models/User';
import Notification from '../schema/Notifications';

class NotificationsController{
  async index(){
    const notification = await Notification.find({
      user: req.userId
    })


    return res.json(notification)
  }
  async update(req, res){
    return res.json({message: 'Notificações'})
  }

}

export default new NotificationsController();