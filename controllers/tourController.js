const tourModel = require("../models/Tour");

const tourController = {
    addTour : async(req , res)=>{
        const tour = new tourModel({
            location: req.body.location,
            totalTime: req.body.totalTime,
            schedule: req.body.schedule,
            price: req.body.price,
            checkin:req.body.checkin,
            checkout:req.body.checkout,
        })
        if(req.files){
            let path = '';
            req.files.forEach((function (files, index, arr) {
                path = path + files.path + ','
            }));
            path=path.substring(0 , path.lastIndexOf(','));
            tour.imgURLs = path;
        }
        try {
            await tour.save();
            res.send(tour);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    readTour: async(req,res) => {
        try{
            const tours= await tourModel.find({});
            res.status(200).json(tours);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    likeTour: async(req , res)=>{
        try {
            const id = req.body._id;
            const tour = await tourModel.findById(id);
            tour.like = tour.like + 1;
            tour.save();
            tour.status(200).json(tour)
        } catch (error) {
            res.status(500).json(error)
        }
    },
  deleteTour: async (req, res) => {
    const tourID = req.body.tourID;
    tourModel
      .findByIdAndDelete(tourID)
      .then(() => {
        res.json({
          message: "Tour deleted successfully",
        });
      })
      .catch((error) => {
        res.json({
          message: "Failed to delete tost",
        });
      });
  },
  updateTour: async(req, res)=>{
    const tourID=req.body.tourID
    let updateData={
        location: req.body.location,
        price:req.body.price,
        schedule:req.body.schedule,
        totalTime:req.body.totalTime
    }
    
    tourModel
    .findByIdAndUpdate(tourID,{$set: updateData})
    .then(()=>{
        res.json({
            message:"Tour updated successfully!"
        })
    })
    .catch(error=>{
        res.json({
            message:'An error Occured!'
        })
    })
  },
};

module.exports = tourController;
