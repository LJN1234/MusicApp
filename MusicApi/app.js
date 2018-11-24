const express = require('express')
const http = require('http')
const app = express()

// 跨域设置
app.all('*', function(req, res, next) {  
    res.header("Access-Control-Allow-Origin", "http://localhoat:8080");  
    res.header("Access-Control-Allow-Headers", "X-Requested-With");  
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Credentials",true);
    res.header("X-Powered-By",' 3.2.1')  
    res.header("Content-Type", "application/json;charset=utf-8");  
    next();  
});

//推荐歌单
const personalized = require("./router/personalized");
app.use("/personalized", personalized)

// 推荐mv
app.use("/mv/first", require("./router/mv_first"))

//推荐新音乐
app.use("/personalized/newsong", require("./router/personalized_newsong"))

// 热门歌手 http://music.163.com/#/discover/artist/
app.use('/top/artists', require('./router/top_artists'))

app.use('/top/list', require('./router/top_list'))

//独家放送
app.use("/personalized/privatecontent", require("./router/personalized_privatecontent"))

// 搜索
app.use('/search', require('./router/search'))

// 搜索 hot
app.use('/search/hot', require('./router/search_hot'))


// 搜索 suggest,搜索结果包含单曲,歌手,歌单,mv信息
app.use('/search/suggest', require('./router/search_suggest'))



const port = 9009

app.listen(port, () => {
  console.log(`server running @${port}`)
})