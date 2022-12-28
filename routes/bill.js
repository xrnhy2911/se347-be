const billController = require('../controllers/billController');
const router = require('express').Router();
const upload = require('../middleware/upload');


/**
 * @swagger
 *  components:
 *     schemas:
 *         Post:
 *             type : object
 *             properties:
 *                  _id:
 *                     type: string
 *                  title:
 *                     type: string
 *                  des:
 *                     type: string
 *                  like:
 *                     type: number
 *                  imgURLs:
 *                     type: string
 */


router.post('/addBill',  billController.addBill);

/**
 * @swagger
 * /v1/post/readPost:
 *    get:
 *       tags:
 *         - Post:
 *       summary: API này dùng để lấy tất cả các bài Post
 *       responses: 
 *             200:
 *                description: 
 *                content:
 *                   application/json:
 *                          schema:
 *                             type: array
 *                             items: 
 *                                 $ref : '#components/schemas/Post'
 */
router.get('/readBill', billController.readBill);

/**
 * @swagger
 * /v1/post/deletePost:
 *   delete:
 *     tags:
 *        - Post:
 *     summary: API này dùng để xóa bài Post
 *     requestBody:
 *           required: true
 *           content: 
 *               application/json:
 *                   schema:
 *                       $ref : '#components/schemas/Post'
 *     responses: 
 *             200:
 *                description: Post deleted successfully
 *             500:
 *                description: Failed to delete post
 */
router.delete('/deleteBill', billController.deleteBill);


/**
 * @swagger
 * /v1/post/likePost:
 *  put:
 *     tags:
 *        - Post:
 *     summary: API này dùng để cập nhật dữ liệu
 *     requestBody:
 *           required: true
 *           content: 
 *               application/json:
 *                   schema:
 *                       $ref : '#components/schemas/Post'
 *     responses: 
 *             200:
 *                description: 
 *                content:
 *                   application/json:
 *                          schema:
 *                             type: array
 *                             items: 
 *                                 $ref : '#components/schemas/Post'
 */

router.post('/updateBill', billController.updateBill);


module.exports = router;