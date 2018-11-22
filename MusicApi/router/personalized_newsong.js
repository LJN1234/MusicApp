const express = require("express")
const router = express()
const { createWebAPIRequest } = require("../util/util")

router.get("/", (req, res) => {
  const cookie = req.get('Cookie') ? req.get('Cookie') : ''
  const data = {
    type: "recommend"
  }
  createWebAPIRequest(
    'music.163.com',
    '/api/personalized/newsong',
    'POST',
    data,
    cookie,
    music_req => {
    	console.log(music_req)
      res.send(music_req)
    },
    err => res.status(502).send('fetch error')
  )
})


module.exports = router