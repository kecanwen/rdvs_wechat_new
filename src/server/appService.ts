import instance from "./http-server";

const appService = {
    getWeChatUserInfoApi:instance.get('/getWeChatUserInfo.do',{params:{userCode: 336745}})
};
export default appService