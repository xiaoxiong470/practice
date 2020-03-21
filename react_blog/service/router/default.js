module.exports = app => {
    const { router, controller } = app;
    router.get('/default', controller.default.home.index);
    router.get('/default/articlelist', controller.default.home.getArticleList);
    //http://127.0.0.1:7001/default/articledetail/1
    router.get('/default/articledetail/:id', controller.default.home.getArticleById);
    
  };