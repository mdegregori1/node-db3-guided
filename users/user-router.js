const express = require('express');

// const db = require('../data/db-config.js');
//can erase after reconfig

const Users = require("./user-model.js")
const router = express.Router();

router.get('/', (req, res) => {
  Users.find()
  .then(users => {
    res.json(users);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to get users' });
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  Users.findById(id)
  .then(user => {
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'Could not find user with given id.' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get user' });
  });
});

router.post('/', (req, res) => {
  const userData = req.body;

  Users.add(userData)
  .then(newUser => {
    res.status(201).json(newUser);
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({ message: 'Failed to create new user' });
  });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Users.update(id, changes)
  .then(user => {
    if (user) {
      res.json({updated: user});
    } else {
      res.status(404).json({ message: 'Could not find user with given id' });
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to update user' });
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  Users.remove(id)
  .then(count => {
    if (count) {
      res.json({ removed: count });
    } else {
      res.status(404).json({ message: 'Could not find user with given id' });
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to delete user' });
  });
});
// select p.id, contents, username from posts as p
// join users as u on p.user_id = u.id;
router.get('/:id/posts', (req, res ) => {
  const {id} = req.params;
  // db('posts as p')
  //   .join('users as u', 'u.id', 'p.user_id')//table name, two columns that should match
  //   .select('p.id', 'p.contents', 'u.username') //specifying what you want to be shown upon request
  //   .where({user_id: id})
  Users.findPosts(id)
  .then(posts => {
    res.json(posts)
  })
  .catch(error => {
    res.status(500).json({message: "failed to get posts"})
  })
})

module.exports = router;