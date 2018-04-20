
module.exports={
    register:(req,res,next)=>{
        const db=req.app.get('db');
        const{username, password}=req.body;
        db.register_user([username,password])
        
        .then(createdUser=>{req.session.userid=createdUser[0].id
            return res.status(200).send(createdUser[0])})
        .catch(()=>res.status(500).send())
    },
    login:(req,res,next)=>{
        const db=req.app.get('db');
        const{username,password}=req.body;
        db.login_user([username,password])
        .then(user=>{req.session.userid=createdUser[0].id
            return res.status(200).send(user[0])})
        .catch(()=>res.status(500).send())
    },
    logout:(req,res,next)=>{
        req.session.destroy();
        res.status(200).send(req.session);
    },
    getAll:(req, res, next)=>{
        const db=req.app.get('db');
        const{title}=req.query;
        if(title){
            db.get_search(['%'+title+'%'])
            .then(posts=>res.status(200).send(posts))
            .catch(()=>res.status(500).send())
        }
        else {
            db.get_posts()
            .then(posts=>res.status(200).send(posts))
            .catch(()=>res.status(500).send())
        }
    },
    getOne:(req,res,next)=>{
        const db=req.app.get('db');
        const{id}=req.params;
        db.get_post([id])
        .then(post=>res.status(200).send(post))
        .catch(()=>res.status(500).send())

    }
}