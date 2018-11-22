const express = require("express")
const router = express()
const { createWebAPIRequest } = require("../util/util")

router.get("/", (req, res) => {
//const cookie = req.get('Cookie') ? req.get('Cookie') : ''
let cookie="usertrack=ezq0o1uKD/Kea1JZBAEvAg==; _ntes_nnid=67aa5c518ee4259ced68b56fe5e0acd6,1535774710245; _ntes_nuid=67aa5c518ee4259ced68b56fe5e0acd6; _ga=GA1.2.2108984734.1535774713; __f_=1541984452345; __guid=94650624.4184442643618185000.1542162399750.1482; _iuqxldmzr_=32; __utmz=94650624.1542162401.1.1.utmcsr=so.com|utmccn=(organic)|utmcmd=organic|utmctr=%E7%BD%91%E6%98%93%E4%BA%91%E9%9F%B3%E4%B9%90; WM_TID=oODtzBBuie1AQFQUQRc4ekJEVMnlKvuw; WM_NI=bS8aNpiD39p34oM33kXMNQZ2OFdSh9PCb%2BPEPA0R%2BLftWIMKUOjP3M1baqW2OHfdQxTIL699m2kNyAVQoYJtDJyLARAXQREhKaoKBAz2jV871bbuESCThQvt3XH%2BYPFfQ1A%3D; WM_NIKE=9ca17ae2e6ffcda170e2e6eeacd969f292b8a3c969e9ef8aa7c14a838a8eaabb6ebceca284f35ab6afae83e92af0fea7c3b92aa28df882cd7cab9cfddaf339f8b183d4b2619c9382b2d93a8d9aacb4eb33949daeccd34f949f00b3aa48a6ac99aad0419791a6b1b247f3beaf92d63a8d98aa85d474989784d7bc33afeea5affc4b968fa1bac9808896b7adc45a83889fb3c86489bfa1acc14bbaeea6b7bb3df3beae96c859818ca8b2f580f18888ccdc5c86ba9fd2c437e2a3; JSESSIONID-WYYY=d6lP%2Fkfb4xXDlav%2BQ8kROOjaHyitenb3Q3gpx7tK2nwvR%2BZmE8%5C%2F9b5AcdEl2QdgEYgEv%2F1bdrFK%2B0lVCAiVMoMGXAsd%5CeXpnwdVfZ3mD1zmF1bPlMTcPyudSJP5MOByOwioKS1oVEJniA9T1JBj%5CZAXvhB4NMZaigshvg6q0WQxmOWS%3A1542859334625; __utma=94650624.2108984734.1535774713.1542788253.1542857536.3; __utmc=94650624; __utmb=94650624.2.10.1542857536; monitor_count=15"
const data = {
  }
  createWebAPIRequest(
    'music.163.com',
    '/api/personalized/playlist',
    'POST',
    data,
    cookie,
    music_req => {
//  	console.log(music_req)
      res.send(music_req)
    },
    err => res.status(502).send('fetch error')
  )
})


module.exports = router