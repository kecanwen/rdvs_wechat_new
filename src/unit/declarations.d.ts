declare module '*';

interface detailContent{
    left:string,
    right:string
}

interface ImageInterface {
    imgURL:string
}

interface titleFace {
    title:string
}

interface ballInterface{
    mainTitle:string,
    cardList:Array<any>
}

interface resInterface {
    message:string,
    success:number,
    data:any,
    total:number
}