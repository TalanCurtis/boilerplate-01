module.exports={
  testGet: (req, res, next)=>{
      let myResponse = 'testGet hit';
      console.log(myResponse);
      // console.log(req.session.user)
      res.status(200).send(myResponse);
  },
  // getAll Users hits the database
  getAllUsers: (req, res)=>{
    const db = req.app.get('db')
    db.boilerplate.get_all_users().then(dbResponse => {
        res.status(200).send(dbResponse)
    })
  },
  createUser: (req, res)=>{
    // req.body is where you would get the variables to replace "testName", "testImage.png", "testAuthId".
    const db = req.app.get('db')
    db.boilerplate.create_user(["testName", "testImage.png", "testAuthId"]).then(dbResponse => {
        res.status(200).send(dbResponse)
    })
  },
  updateUser: (req, res)=>{
    // req.body is where you would get the variables to replace "testName"
    const db = req.app.get('db')
    db.boilerplate.update_user(["Purple", "testName"]).then(dbResponse => {
        res.status(200).send(dbResponse)
    })
  },
  deleteUser: (req, res)=>{
    // req.body is where you would get the variables to replace "testName"
    const db = req.app.get('db')
    db.boilerplate.delete_user(["testName"]).then(dbResponse => {
        res.status(200).send(dbResponse)
    })
  },
}
