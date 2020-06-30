const Post = require('../models/post');




exports.getPosts = (req, res) =>{

      const posts = Post.find()
      .select("_id title body")
      .then(posts =>{
        res.status(200).json({ posts })
    })
    .catch(error =>console.log(error)) 
  }; 

  exports.createPost = (req, res) => {
      const post = new Post(req.body);
       post.save()
       .then(resultat => {
           res.status(200).json({
               post :resultat
           });
       });
   
  };