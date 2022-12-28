const billModel = require("../models/Bill");

const billController = {
    addBill : async(req , res)=>{
        const bill = new billModel({
            userName: req.body.userName,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            address: req.body.address,
            amount:req.body.amount,
            billStatic:req.body.billStatic,
            idUser:req.body.idUser,
            idTour:req.body.idTour,
            sumPrice:req.body.sumPrice
        })
       
        try {
            await bill.save();
            res.send(bill);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    readBill: async(req,res) => {
        try{
            const bills= await billModel.find({});
            res.status(200).json(bills);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    
  deleteBill: async (req, res) => {
    const billID = req.body.billID;
    billModel
      .findByIdAndDelete(billID)
      .then(() => {
        res.json({
          message: "bill deleted successfully",
        });
      })
      .catch((error) => {
        res.json({
          message: "Failed to delete tost",
        });
      });
  },
  updateBill: async(req, res)=>{
    const billID=req.body.billID
    let updateData={
            userName: req.body.userName,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            address: req.body.address,
            amount:req.body.amount,
             billStatic:req.body. billStatic,
            idUser:req.body.idUser,
            idTour:req.body.idTour,
            sumPrice:req.body.sumPrice
    }
    
    billModel
    .findByIdAndUpdate(billID,{$set: updateData})
    .then(()=>{
        res.json({
            message:"bill updated successfully!"
        })
    })
    .catch(error=>{
        res.json({
            message:'An error Occured!'
        })
    })
  },
};

module.exports = billController;
