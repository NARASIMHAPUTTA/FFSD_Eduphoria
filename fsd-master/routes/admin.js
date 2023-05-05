const express = require("express");
const router = express.Router();
const isAuth = require("../middleware/isAuth");
const adminController = require("../controllers/admin");
const userController = require("../controllers/user");
router.param("uid", userController.getUserById);
router.get("/admindb", isAuth, adminController.getDashboard);
router.get("/detail/course/:id", adminController.getSingleCourse);
router.get("/all/students", isAuth, adminController.getAllStudents);
router.get("/all/teachers", isAuth, adminController.getAllTeachers);
router.get("/all/pending", isAuth, adminController.pendingTeachers);
router.get("/accept/:id", isAuth, adminController.acceptTeacher);
router.get("/decline/:id", isAuth, adminController.declineTeacher);
router.get("/all/courses", isAuth, adminController.getAllCourses);
router.get("/block/:id", isAuth, adminController.BlockUser);
router.get("/delete/:uid", isAuth, adminController.DeleteUser);
router.get("/course/delete/:id", isAuth, adminController.deleteCourse);
router.post("/search/users", isAuth, adminController.searchAdmin);
router.post("/profile/edit/:id", isAuth, adminController.postProfileEdit);
router.get("/mail", isAuth, adminController.sendmail);
router.post("/mail", isAuth, adminController.postsendmail);

module.exports = router;
