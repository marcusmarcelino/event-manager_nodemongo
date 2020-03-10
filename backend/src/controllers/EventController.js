//index, show, store, update, destroy
const Event = require('../models/Event');
module.exports = {
  async index(req, res) {
    const events = await Event.find();
    if(!events){
      return res.json("Nenhum Evento cadastrado");
    }
    return res.json(events);
  },

  async show(req, res) {
    const { event_id } = req.params;
    const event = await Event.findById(event_id);
    return res.json(event);
  },

  async store(req, res) {
    const { name, location, date, time } = req.body;
    let event = await Event.findOne({ date, time });
    if(!event){
      event = await Event.create({ 
        name,
        location,
        date,
        time
      });
    }
    return res.json(event);
  },

  async update(req, res) {
    const { event_id } = req.params;
    const event = await Event.findById(event_id);
    const { name, location, date, time } = req.body;
    event.name=name;
    event.location=location;
    event.date=date;
    event.time=time;
    
    event.save((error) => {
      if(error){
        return res.send('Error ao atualizar evento!' + error);
      }
      return res.json({message: 'Evento atualizado com sucesso!'});
    });
  },

  async destroy(req, res) {
    const { event_id } = req.params;
    const event = await Event.findById(event_id);
    await event.remove();
    return res.json({message: "The event has been deleted"});
  }
};