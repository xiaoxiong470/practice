module.exports = app => {
    const { router, controller } = app;
    const adminauth=app.middleware.adminauth();
    router.post('/login', controller.admin.main.checkLogin);
    router.get('/gettypeinfo',adminauth, controller.admin.main.getTypeInfo);
    router.get('/getArticleList',adminauth, controller.admin.main.getArticleList);
    router.post('/saveArticle',adminauth, controller.admin.main.saveArticle);
    router.post('/updateArticle',adminauth, controller.admin.main.updateArticle);
    router.post('/deleteArticle',adminauth, controller.admin.main.deleteArticle);
  };