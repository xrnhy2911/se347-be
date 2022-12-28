const postModel = require("../models/Post");

const postController = {
    addPost : async(req , res)=>{
        const post = new postModel({
            title: req.body.title,
            des: req.body.des,
            owner:req.body.owner
        })
        if(req.files){
            let path = '';
            req.files.forEach((function (files, index, arr) {
                path = path + files.path + ','
            }));
            path=path.substring(0 , path.lastIndexOf(','));
            post.imgURLs = path;
        }
        try {
            await post.save();
            res.send(post);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    readPost: async(req,res) => {
        try{
            const posts= await postModel.find({});
            res.status(200).json(posts);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    likePost: async(req , res)=>{
        try {
            const id = req.body._id;
            const post = await postModel.findById(id);
            post.like = post.like + 1;
            post.save();
            res.status(200).json(post)
        } catch (error) {
            res.status(500).json(error)
        }
    },
  deletePost: async (req, res) => {
    try {
        const postID = req.params.idPost;
        const deletePost = await postModel.findByIdAndDelete(postID)

        res.status(200).json('Xóa thành công') 
    } catch (error) {
        res.status(500).json('Xóa thất bại') 
    }
  },
  updatePost: async(req, res)=>{
    try {
        const postID = req.params.idPost;
        let updateData={
            title: req.body.title,
            des:req.body.des,
            
        }
        const updatePost = await postModel.findByIdAndUpdate(postID,{$set: updateData})

        res.status(200).json('Update thành công') 
    } catch (error) {
        res.status(500).json('Update thất bại') 
    }
   /* const postID=req.params.idPost;
    let updateData={
        title: req.body.title,
        des:req.body.des,
        
    }
    
    postModel
    .findByIdAndUpdate(postID,{$set: updateData})
    .then(()=>{
        res.json({
            message:"Post updated successfully!"
        })
    })
    .catch(error=>{
        res.json({
            message:'An error Occured!'
        })
    })*/
  },
};

module.exports = postController;
