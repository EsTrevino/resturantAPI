import mongoose from 'mongoose';
import { Router } from 'express';
import Restaurant from '../models/restaurant';

export default({config, db}) => {
  let api = Router();

  //CRUD Create, Read, Update, Delete

  //CREATE
  //v1/restaurant/add
  api.post('/add', (req, res) => {
    let newRest = new Restaurant();
    newRest.name = req.body.name;
    newRest.save(err => {
      if (err) {
        res.send(err);
      } else {
        res.json({message: "Restaurant saved successfully"});
      }
    });
 });

 //READ
 ///v1/restaurant/
 api.get('/', (req, res) =>{
   Restaurant.find({}, (err, restaurants) => {
     if(err){
       res.send(err);
     }
     else{
       res.json(restaurants);
     }
   });
 });

 //v1/restaurant/:id - find 1
 api.get('/:id', (req, res) => {
   Restaurant.findById(req.params.id, (err, restaurant)=>{
     if(err){
       res.send(err);
     }
     else{
       res.json(restaurant);
     }
   });
 });

 //UPDATE
 //   /v1/restaurant/:id
 api.put('/:id', (req,res)=>{
   Restaurant.findById(req.params.id, (err, restaurant) =>{
     if(err){
       res.send(err);
     }
       restaurant.name = req.body.name;

       restaurant.save(err =>{
         if(err){
           res.send(err);
         }
           res.json({message: "Restaurant info updated"})
       });
   });
 });

 //Delete - /v1/restaurant/:id
 api.delete('/:id', (req, res)=>{
   Restaurant.remove({_id: req.params.id}, (err, restaurant) =>{
     if(err){
       res.send(err);
     }
     res.json({message: "Restaurant successfull removed"});
   });
 });

  return api;
}
