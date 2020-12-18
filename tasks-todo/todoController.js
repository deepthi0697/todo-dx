const Todo = require('./Todo')

module.exports.list = (req,res) => {
    Todo.find()
        .then((item) =>{
            if(item){
                res.json(item)
            } else {
                res.json({})
            }
        })
        .catch(err => {
            res.json(err)
        })
}


module.exports.create = (req,res) => {
    const body = req.body
        const todo = new Todo(body)
        todo.save()
            .then((item) => {
                if(item){
                    res.json(item)
                } else {
                    res.json({})
                }
            })
            .catch(err => {
                res.json(err)
            })
}

module.exports.show = (req,res) => {
    const id = req.params.id
    Todo.findById(id)
        .then((item) => {
            if(item){
                res.json(item)
            } else {
                res.json({})
            }
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.update = (req,res) => {
    const id = req.params.id
        const body = req.body
        Todo.findByIdAndUpdate(id,body, {new: true, runValidators: true})
            .then((item) => {
                if(item){
                    res.json(item)
                } else {
                    res.json({})
                }
            })
            .catch(err => {
                res.json(err)
            })
}

module.exports.delete = (req, res) => {
    const id = req.params.id
        Todo.findByIdAndDelete(id)
            .then((item) => {
                if(item){
                    res.json(item)
                } else {
                    res.json({})
                }
            })
            .catch(err => {
                res.json(err)
            })
}


