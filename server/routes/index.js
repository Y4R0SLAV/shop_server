const Router = require('express')

const router = new Router()

const collectionRouter = require('./collectionRouter')
const orderDetailsRouter = require('./orderDetailsRouter')
const orderRouter = require('./orderRouter')
const photoRouter = require('./photoRouter')
const productRouter = require('./productRouter')
const subtypeRouter = require('./subtypeRouter')
const typeRouter = require('./typeRouter')

router.use('/collection', collectionRouter)
router.use('/order', orderRouter)
router.use('/orderDetails', orderDetailsRouter)
router.use('/photo', photoRouter)
router.use('/product', productRouter)
router.use('/subtype', subtypeRouter)
router.use('/type', typeRouter)

module.exports = router