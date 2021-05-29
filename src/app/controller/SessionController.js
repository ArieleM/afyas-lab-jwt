import jwt from 'jsonwebtoken';

import User from '../models/User';
import authConfig from '../../config/auth'

class SessionController {
  async store(req, res){
    const {email, password} = req.body;

    const user = await User.findOne({where: {email}});

    if(!user){
      return res.status(400).json({message:"Usuario não encontrado"})
    }
    if(!(await user.checkPassword(password))){
      return res.status(401).json({ erro: 'Senha não confere'})
    }

    const {id, name} = user



    return res.status(200).json({
      user:{
        id,
        name,
        email
      },
      token: jwt.sign({id}, authConfig.secret,{
        expiresIn: authConfig.expireIn,
      })
    })

  }
}

export default new SessionController();