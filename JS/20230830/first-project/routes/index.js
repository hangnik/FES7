var express = require("express");
var router = express.Router();

// GET method
/* router.get("/read", (req, res) => {
  res.status(200).json({
    message: "read success",
  });
});

let arr = [];

// POST method
router.post("/create", (req, res) => {
  const { data } = req.body;
  arr.push(data);
  res.status(200).json({
    message: "create success",
    result: arr,
  });
});

// PUT method
router.put("/update/:id", (req, res) => {
  const { id } = req.params;
  const { data } = req.body;
  arr[id] = data;
  res.status(200).json({
    message: "update success",
    result: arr,
  });
});

// DELETE method
router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  arr.splice(id, 1);
  res.status(200).json({
    message: "delete success",
    result: arr,
  });
}); */

/* // middleware
const loginCheck = require("../module/loginCheck");

router.get("/", loginCheck, (req, res) => {
  res.status(200).json({
    message: "login success",
  });
});

// multer
const upload = require("../module/imageUpload");

router.post("/upload", upload.single("image"), (req, res) => {
  const file = req.file;
  console.log(file);
  res.status(200).json({
    message: "upload success",
  });
}); */

// mongodb 데이터
// POST (CREATE)
const postModel = require("../model/post");

router.post("/", async (req, res) => {
  const { title, content } = req.body;
  const post = new postModel({
    title: title,
    content: content,
  });

  try {
    const result = await post.save();
    res.status(200).json({
      message: "upload success",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
});

// GET (READ)
// 전체 게시물 조회
router.get("/", async (req, res) => {
  try {
    const result = await postModel.find({});
    res.status(200).json({
      message: "read success",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
});

// id값을 통해 하나의 게시물 조회
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await postModel.findById(id);
    res.status(200).json({
      message: "detail success",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
});

// PUT (UPDATE)
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const result = await postModel.findByIdAndUpdate(
      id,
      {
        title: title,
        content: content,
      },
      {
        new: true,
      }
    );
    res.status(200).json({
      message: "update success",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await postModel.findByIdAndDelete(id);
    res.status(200).json({
      message: "delete success",
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
});

module.exports = router;
