const User = require("../models/user.js");

module.exports = {
  async index(req, res) {
    res.json({ message: "Index Route" });
  },

  async createUser(req, res) {
    const { name, email, password } = req.body;
    const user = {
      name: name,
      email: email,
      password: password,
    };

    User.create(user)
      .then((user) => {
        res.json(user);
      })
      .catch((err) => {
        res.status("500").json({
          message: "Error creating user",
          error: err,
        });
      });
  },

  async getUsers(req, res) {
    User.findAll()
      .then((users) => {
        res.json(users);
      })
      .catch((err) => {
        res.status("500").json({
          message: "Error getting users",
          error: err,
        });
      });
  },

  async getUser(req, res) {
    const { id } = req.params;
    User.findByPk(id)
      .then((user) => {
        res.json(user);
      })
      .catch((err) => {
        res.status("500").json({
          message: "Error getting user",
          error: err,
        });
      });
  },

  async updateUser(req, res) {
    const { id } = req.params;
    const user = await User.findByPk(id);
    
    if (!user) {
      res.status("404").json({ message: "User not found" });
    }
    
    const payload = {
      name: req.body.name || user.name,
      email: req.body.email || user.email,
      password: req.body.password || user.password,
    }
    
    User.update(payload, {
      where: { id: id },
    })
      .then((affectedCount) => {
        if (affectedCount > 0) {
          res.json({ message: "User updated" });
        } else {
          res.status("404").json({ message: "Error updating user" });
        }
      })
      .catch((err) => {
        res.status("500").json({
          message: "Error updating user",
          error: err,
        });
      });
  },

  async deleteUser(req, res) {
    const { id } = req.params;
    const user = await User.findByPk(id);
    
    if (!user) {
      res.status("404").json({ message: "User not found" });
    }
    
    User.destroy({
      where: { id: id },
    }).then((affectedCount) => {
      if (affectedCount > 0) {
        res.json({ message: "User deleted" });
      } else {
        res.status("404").json({ message: "Error deleting user" });
      }
    })
  },
};
