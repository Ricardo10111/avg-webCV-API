const express = require('express')
const router = express.Router()

const useCaseInfo = require('../usecases/info.usecase')

router.post('/post', async (req, res) => {
  try {
    const info = req.body
    const newInfo = await useCaseInfo.create(info)
    res.json({
      succes: true,
      message: 'Info created',
      data: {
        info: newInfo
      }
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      message: error.message
    })
  }
})

router.get('/', async (req, res) => {
  try {
    const info = await useCaseInfo.getAll()
    res.json({
      success: true,
      message: 'All info',
      data: {
        info
      }
    })
  } catch (error) {
    res.status(400)
    res.json({
      success: false,
      message: error.message
    })
  }
})

module.exports = router
