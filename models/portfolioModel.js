const mongoose  = require("mongoose");

const introSchema = new mongoose.Schema({
    welcomeText:{
        type:String,
        required:true,
    },
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    caption:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
});

const aboutSchema = new mongoose.Schema({
    lottieURL:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
    },
    description2:{
        type:String,
        required:true,
    },
    skills:{
        type:Array,
        required:true,
    },
});

const experienceSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    period:{
        type:String,
        required:true,
    },
    company:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
})

const projectSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    link:{
        type:String,
        required:true,
    },
    technologies:{
        type:String,
        required:true,
    },
})

const educationSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
})
const contactSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    mobile:{
        type:String,
        required:true,
    },
})
module.exports={
    Intro:mongoose.model("intros",introSchema),
    About:mongoose.model("about",aboutSchema),
    Experience:mongoose.model("experience",experienceSchema),
    Project:mongoose.model("project",projectSchema),
    Contact:mongoose.model("contacts",contactSchema),
}