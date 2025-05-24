const { chatgpt, mylogic, takanashi, github, vault, yotools, fbdl, igdl, ttdl } = require("./soft");

module.exports = {
  ai: {
    chatgpt,
    mylogic,
    takanashi
  },
  uploader: {
    github,
    vault,
    yotools
  },
  downloader: {
    fbdl,
    igdl,
    ttdl
  }
};
