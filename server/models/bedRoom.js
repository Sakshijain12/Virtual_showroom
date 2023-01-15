const mongoose = require('mongoose');
const validator = require("validator");
const regex = new RegExp('[a-z]+@iitj.ac.in');




const bedRoom = new mongoose.Schema({
  area : {
    type: Number,
    required: true,
  },
  name: {
    type : String,
    required: true,
        
    },
    bed: {
      type : String,
      color : String,
      length : Number,
      width : Number,
      height : Number,
      required: true,
          
    },
    cupboard: {
      type : String,
      color : String,
      length : Number,
      width : Number,
      height : Number,
      required: true,
    },
  curtains: { 
      color : String,
      width : Number,
      height : Number,
      required: true,
   },
  sofa: { 
      type : Number, 
      color : String,
      length : Number,
      height : Number,
      required: true,
   },
});


module.exports = mongoose.model('bedRoom', bedRoom);
