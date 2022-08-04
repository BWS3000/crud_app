var Userdb = require('../model/model');

//create user
exports.create = (req, res) => {
  if (!(req.body)) {
    res.status(400).send({message: "Content cannot be empty"});
    return;
  }

  //new user
  const user = new Userdb ({
    name : req.body.name,
    email : req.body.email,
    gender : req.body.gender,
    status : req.body.status
  })

  //save the user to database
  user
    .save(user)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
    res.status(500).send({
      message : err.message || "Some error occured while creating a create operation"
    });
  });
}

//get all users / get a single user
exports.find = (req,res) => {
Userdb.find()
.then(user => {
  res.send(user)
})
  .catch(err => {
    res.status(500).send({message : err.message || "Error Occured while getting user information"})
  })
}

//update user using user id
exports.update =  (req,res) => {
  if(!req.body){
    return res
      .status(400)
      .send({message : "Updated data cannot be empty"})
  }

  const id = req.params.id;
  Userdb.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
    .then(data => {
      if(!data){
        res.status(404).send({message : `Cannot update user ${id}. User was not found.`})
      } else {
        res.send(data)
      }
    })
      .catch(err => {
        res.status(500).send({message : "Error when updating user information"})
      })
}

//delete user by user id
exports.delete = (req,res) => {
  const id = req.params.id;

  Userdb.findByIdAndDelete(id)
    .then(data => {
      if(!data) {
        res.status(404).send({message  : `Cannot delete user ${id}. Not found.`})
      }  else {
        res.send({
          message : "User deleted."
        })
      }
    }) .catch(err => {
      res.status(500).send({message : `Could not delete user ${id}`})
    })
}
