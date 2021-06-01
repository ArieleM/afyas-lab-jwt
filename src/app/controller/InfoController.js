import Info from '../models/Info'
import Notifications from '../schema/Notifications';


class InfoController {
  async store(req, res){
    const {city, address} = req.body;
    const info = await Info.create({
      city,
      address,
      user_id: req.userId
    });
    if(!info){
      return res.status(400).json({message: 'Error'})

    }
    const UpdateNotify = await Notifications.create({
      content: 'endereço criado',
      user: req.userId,
    })

    return res.status(201).json({city, address, UpdateNotify})
  }
  async update(req, res){
    const {city, address} = req.body;
    const updateInfo = await Info.update(
      {
        city,
        address
      },{
        where:{
          id: req.userId
        }
    })
    const UpdateNotify = await Notifications.create({
      content: 'endereço alterado',
      user: req.userId,
    })
    return res.status(201).json({city, address, UpdateNotify})
  }

}

export default new InfoController();