module.exports = app => {
    const { router, controller } = app;
    const adminauth=app.middleware.adminauth();
    router.post('/login', controller.admin.main.checkLogin);
    router.get('/gettypeinfo',adminauth, controller.admin.main.getTypeInfo);
    
  };