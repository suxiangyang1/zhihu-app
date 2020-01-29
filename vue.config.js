//模拟数据
const express = require('express')
const app = express()
var recommendList = require('./src/data/recommend.json')
var followList = require('./src/data/follow.json')
var hotList = require('./src/data/hot.json')
var apiRoutes = express.Router()
app.use('/api', apiRoutes)

module.exports = {
	devServer: {
		host: "localhost",
		port: 8000,
		https: false,
		open: true,
		hotOnly: true,
		before(app) {
			app.get('/api/recommend', (req, res) => {
				res.json({
					code: 1,
					msg: '成功',
					data: recommendList
				})
			})
			app.get('/api/follow', (req, res) => {
				res.json({
					code: 1,
					msg: '成功',
					data: followList
				})
			})
			app.get('/api/hot', (req, res) => {
				res.json({
					code: 1,
					msg: '成功',
					data: hotList
				})
			})
		}
	}
};
