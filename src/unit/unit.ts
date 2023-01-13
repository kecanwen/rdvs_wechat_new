const getSearchParams =  function ():any {
    const urlSearch = window.location.search;
    let params: any = urlSearch.split('?')[1],
        returnParams:any = {};
    if (params) {
        params = params.split('&');
        for (let i = 0; i < params.length; i++) {
            let pkv = params[i].split('=');
            let vpkv = pkv.slice(1);
            returnParams[pkv[0]] = vpkv.join('=');
        }
    }
    return returnParams;
};

export {
    getSearchParams
}