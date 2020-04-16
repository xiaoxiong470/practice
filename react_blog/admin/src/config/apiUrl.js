const baseUrl="http://127.0.0.1:7001/";
const serviceUrl={
    login:baseUrl+"login",
    articleType:baseUrl+"gettypeinfo",
    getArticleList:baseUrl+"getArticleList", 
    saveArticle:baseUrl+"saveArticle",
    updateArticle:baseUrl+"updateArticle",
    deleteArticle:baseUrl+"deleteArticle",
}

export default serviceUrl;