const top_list_all = {
  "0": ['云音乐新歌榜', '/api/playlist/detail?id=3779629'],
  "1": ['云音乐热歌榜', '/api/playlist/detail?id=3778678'],
  "2": ['网易原创歌曲榜', '/api/playlist/detail?id=2884035'],
  "3": ['云音乐飙升榜', '/api/playlist/detail?id=19723756'],
}
const express = require("express")
const router = express()
const { createRequest } = require("../util/util")

router.get("/", (req, res) => {
  const idx = req.query.idx
  const action = 'http://music.163.com' + top_list_all[idx][1]
  createRequest(`${action}`, 'GET', null)
    .then(result => {
      res.setHeader("Content-Type", "application/json")
      console.log(result)
      res.send(result)
    })
    .catch(err => {
      res.status(502).send('fetch error')
    })
})


module.exports = router