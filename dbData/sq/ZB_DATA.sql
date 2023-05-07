/*
 Navicat Premium Data Transfer

 Source Server         : Ant-Design-Vue
 Source Server Type    : MongoDB
 Source Server Version : 50002
 Source Host           : localhost:27017
 Source Schema         : ZB_DATA

 Target Server Type    : MongoDB
 Target Server Version : 50002
 File Encoding         : 65001

 Date: 07/05/2023 11:39:25
*/


// ----------------------------
// Collection structure for cartList
// ----------------------------
db.getCollection("cartList").drop();
db.createCollection("cartList");
db.getCollection("cartList").createIndex({
    userId: NumberInt("1")
}, {
    name: "userId_1",
    background: true
});
db.getCollection("cartList").createIndex({
    skuId: NumberInt("1")
}, {
    name: "skuId_1",
    background: true
});

// ----------------------------
// Documents of cartList
// ----------------------------
db.getCollection("cartList").insert([ {
    _id: ObjectId("63830f879a096eb48075d3c3"),
    designSketch: [
        "http://localhost:99/upload/2021/11/27/202111272246_4769.7405879960515.jpg",
        "http://localhost:99/upload/2021/11/27/202111272246_9192.826951803132.jpg",
        "http://localhost:99/upload/2021/11/27/202111272246_2862.392477879161.jpg"
    ],
    __v: NumberInt("0"),
    brandId: "61a2366c1b10f1139d84e507",
    categoryId: "61a23b711b10f1139d84e511",
    categoryName: "俊旅-红茶",
    goodsName: "福茗源秒杀系列",
    goodsNo: "FMY-001",
    goodsType: NumberInt("2"),
    mixDetail: "<p><img src=\"http://localhost:99/upload/2021/11/27/1464607011281965056.jpg\" title=\"\" alt=\"92f461f28309a2ee (1).jpg\" width=\"395\" height=\"350\" style=\"width: 395px; height: 350px;\"/></p><p><img src=\"http://localhost:99/upload/2021/11/27/1464607089895804928.jpg\" title=\"\" alt=\"fb82d3d6a45612df.jpg\" width=\"390\" height=\"350\" style=\"width: 390px; height: 350px;\"/></p><p><br/></p>",
    placeOrigin: "江苏",
    price: NumberInt("3423"),
    salesVolume: NumberInt("2"),
    skuName: "福茗源-粗茶（秒杀）",
    specValue1: "秒杀",
    specValue2: "热销",
    status: NumberInt("1"),
    weight: NumberInt("2345"),
    userId: "6145ea5b5368494d3486bc2d",
    num: NumberInt("99"),
    skuId: "61a244fb2ee28a1f3c799316"
} ]);
db.getCollection("cartList").insert([ {
    _id: ObjectId("638366ba5ab7ae55e01fa551"),
    designSketch: [
        "http://localhost:99/upload/2021/11/27/202111272259_6274.560253740611.jpg",
        "http://localhost:99/upload/2021/11/27/202111272259_6867.74781891121.jpg",
        "http://localhost:99/upload/2021/11/27/202111272259_4770.047019345673.jpg"
    ],
    specValue1: "特价",
    specValue2: "特产",
    price: NumberInt("53"),
    weight: NumberInt("53"),
    skuName: "同仁堂粗茶（特产）",
    goodsType: NumberInt("1"),
    categoryId: "61a2467d2ee28a1f3c79931d",
    status: NumberInt("1"),
    categoryName: "同仁堂养生茶",
    brandId: "61a2367c1b10f1139d84e508",
    goodsNo: "TRT-001",
    goodsName: "同仁堂养生茶",
    placeOrigin: "南京",
    salesVolume: NumberInt("93"),
    __v: NumberInt("0"),
    userId: "6311c93289af37c7a0f04a0e",
    num: NumberInt("1"),
    skuId: "6371abd50089a86074da9323"
} ]);
db.getCollection("cartList").insert([ {
    _id: ObjectId("63836f305ab7ae55e01fa552"),
    designSketch: [
        "http://localhost:99/upload/2021/11/27/202111272247_3483.186613564773.jpg"
    ],
    __v: NumberInt("0"),
    brandId: "61a2366c1b10f1139d84e507",
    categoryId: "61a23b711b10f1139d84e511",
    categoryName: "俊旅-红茶",
    goodsName: "福茗源秒杀系列",
    goodsNo: "FMY-001",
    goodsType: NumberInt("2"),
    mixDetail: "<p><img src=\"http://localhost:99/upload/2021/11/27/1464607705787404288.jpg\" title=\"\" alt=\"c48471bbedce7c0a.jpg\"/></p><p><img src=\"http://localhost:99/upload/2021/11/27/1464607727497121792.jpg\" title=\"\" alt=\"cfc7d78f3e079822.jpg\"/></p>",
    placeOrigin: "江苏",
    price: NumberInt("2342"),
    salesVolume: NumberInt("23"),
    skuName: "福茗源-细茶（打折\t）",
    specValue1: "特价",
    specValue2: "打折",
    status: NumberInt("1"),
    weight: NumberInt("2342"),
    userId: "6311c93289af37c7a0f04a0e",
    num: NumberInt("9"),
    skuId: "61a244fb2ee28a1f3c79931b"
} ]);
db.getCollection("cartList").insert([ {
    _id: ObjectId("63836f365ab7ae55e01fa553"),
    designSketch: [
        "http://localhost:99/upload/2021/11/27/202111272246_8611.221901996088.jpg",
        "http://localhost:99/upload/2021/11/27/202111272246_5402.2563969199555.jpg",
        "http://localhost:99/upload/2021/11/27/202111272246_972.0352984144664.jpg"
    ],
    __v: NumberInt("0"),
    brandId: "61a2366c1b10f1139d84e507",
    categoryId: "61a23b711b10f1139d84e511",
    categoryName: "俊旅-红茶",
    goodsName: "福茗源秒杀系列",
    goodsNo: "FMY-001",
    goodsType: NumberInt("2"),
    mixDetail: "<p><img src=\"http://localhost:99/upload/2021/11/27/1464607208506527744.jpg\" title=\"\" alt=\"60839a61a8fa6084.jpg\" width=\"219\" height=\"220\" style=\"width: 219px; height: 220px;\"/></p><p><img src=\"http://localhost:99/upload/2021/11/27/1464607280891826176.jpg\" title=\"\" alt=\"d2677afdc69d3ebe.jpg\"/></p><p><img src=\"http://localhost:99/upload/2021/11/27/1464607306179284992.jpg\" title=\"\" alt=\"222cd7b043f01173.jpg\"/></p>",
    placeOrigin: "江苏",
    price: NumberInt("2342"),
    salesVolume: NumberInt("65"),
    skuName: "福茗源-粗茶（热销\t）",
    specValue1: "秒杀",
    specValue2: "进口",
    status: NumberInt("1"),
    weight: NumberInt("2434"),
    userId: "6311c93289af37c7a0f04a0e",
    num: NumberInt("4"),
    skuId: "61a244fb2ee28a1f3c799317"
} ]);
db.getCollection("cartList").insert([ {
    _id: ObjectId("63836f3d5ab7ae55e01fa554"),
    designSketch: [
        "http://localhost:99/upload/2021/11/27/202111272246_4769.7405879960515.jpg",
        "http://localhost:99/upload/2021/11/27/202111272246_9192.826951803132.jpg",
        "http://localhost:99/upload/2021/11/27/202111272246_2862.392477879161.jpg"
    ],
    __v: NumberInt("0"),
    brandId: "61a2366c1b10f1139d84e507",
    categoryId: "61a23b711b10f1139d84e511",
    categoryName: "俊旅-红茶",
    goodsName: "福茗源秒杀系列",
    goodsNo: "FMY-001",
    goodsType: NumberInt("2"),
    mixDetail: "<p><img src=\"http://localhost:99/upload/2021/11/27/1464607011281965056.jpg\" title=\"\" alt=\"92f461f28309a2ee (1).jpg\" width=\"395\" height=\"350\" style=\"width: 395px; height: 350px;\"/></p><p><img src=\"http://localhost:99/upload/2021/11/27/1464607089895804928.jpg\" title=\"\" alt=\"fb82d3d6a45612df.jpg\" width=\"390\" height=\"350\" style=\"width: 390px; height: 350px;\"/></p><p><br/></p>",
    placeOrigin: "江苏",
    price: NumberInt("3423"),
    salesVolume: NumberInt("2"),
    skuName: "福茗源-粗茶（秒杀）",
    specValue1: "秒杀",
    specValue2: "热销",
    status: NumberInt("1"),
    weight: NumberInt("2345"),
    userId: "6311c93289af37c7a0f04a0e",
    num: NumberInt("1"),
    skuId: "61a244fb2ee28a1f3c799316"
} ]);
db.getCollection("cartList").insert([ {
    _id: ObjectId("63ad9bdc96cb31c898626158"),
    designSketch: [
        "http://localhost:99/upload/2021/11/27/202111272246_1899.9655640387437.jpg",
        "http://localhost:99/upload/2021/11/27/202111272247_2508.800516233203.jpg"
    ],
    __v: NumberInt("0"),
    brandId: "61a2366c1b10f1139d84e507",
    categoryId: "61a23b711b10f1139d84e511",
    categoryName: "俊旅-红茶",
    goodsName: "福茗源秒杀系列",
    goodsNo: "FMY-001",
    goodsType: NumberInt("2"),
    mixDetail: "<p><img src=\"http://localhost:99/upload/2021/11/27/1464607350240448512.jpg\" title=\"\" alt=\"99f5fb1fcf0c2458.jpg\"/></p>",
    placeOrigin: "江苏",
    price: NumberInt("5324"),
    salesVolume: NumberInt("51"),
    skuName: "福茗源-粗茶（打折）\t）",
    specValue1: "秒杀",
    specValue2: "打折",
    status: NumberInt("1"),
    weight: NumberInt("2342"),
    userId: "61892e7953a376a70c90e323",
    num: NumberInt("4"),
    skuId: "61a244fb2ee28a1f3c799318"
} ]);

// ----------------------------
// Collection structure for goodsBrnadList
// ----------------------------
db.getCollection("goodsBrnadList").drop();
db.createCollection("goodsBrnadList");

// ----------------------------
// Documents of goodsBrnadList
// ----------------------------
db.getCollection("goodsBrnadList").insert([ {
    _id: ObjectId("61a235941b10f1139d84e506"),
    __v: NumberInt("0"),
    introduce: null,
    logoFilePath: "http://localhost:99/upload/2021/11/27/202111272140_5770.06048001037.jpg",
    name: "丁香茶",
    sort: NumberInt("1"),
    status: NumberInt("1")
} ]);
db.getCollection("goodsBrnadList").insert([ {
    _id: ObjectId("61a2366c1b10f1139d84e507"),
    __v: NumberInt("0"),
    introduce: null,
    logoFilePath: "http://localhost:99/upload/2021/11/27/202111272145_7148.050648495323.jpg",
    name: "福茗源",
    sort: NumberInt("2"),
    status: NumberInt("1")
} ]);
db.getCollection("goodsBrnadList").insert([ {
    _id: ObjectId("61a2367c1b10f1139d84e508"),
    __v: NumberInt("0"),
    introduce: null,
    logoFilePath: "http://localhost:99/upload/2021/11/27/202111272145_5677.343118608347.jpg",
    name: "同仁堂",
    sort: NumberInt("3"),
    status: NumberInt("1")
} ]);
db.getCollection("goodsBrnadList").insert([ {
    _id: ObjectId("61a236851b10f1139d84e509"),
    __v: NumberInt("0"),
    introduce: null,
    logoFilePath: "http://localhost:99/upload/2021/11/27/202111272145_1977.707984669308.jpg",
    name: "花果茶",
    sort: NumberInt("4"),
    status: NumberInt("1")
} ]);
db.getCollection("goodsBrnadList").insert([ {
    _id: ObjectId("61a236931b10f1139d84e50a"),
    __v: NumberInt("0"),
    introduce: null,
    logoFilePath: "http://localhost:99/upload/2021/11/27/202111272145_7947.617690782376.jpg",
    name: "忆江南",
    sort: NumberInt("6"),
    status: NumberInt("1")
} ]);

// ----------------------------
// Collection structure for goodsClassList
// ----------------------------
db.getCollection("goodsClassList").drop();
db.createCollection("goodsClassList");

// ----------------------------
// Documents of goodsClassList
// ----------------------------
db.getCollection("goodsClassList").insert([ {
    _id: ObjectId("61a237441b10f1139d84e50b"),
    __v: NumberInt("0"),
    logoFilePath: null,
    name: "绿茶",
    partentId: null,
    partentName: null,
    sort: null,
    status: NumberInt("1")
} ]);
db.getCollection("goodsClassList").insert([ {
    _id: ObjectId("61a2376f1b10f1139d84e50c"),
    __v: NumberInt("0"),
    logoFilePath: null,
    name: "红茶",
    partentId: null,
    partentName: null,
    sort: null,
    status: NumberInt("1")
} ]);
db.getCollection("goodsClassList").insert([ {
    _id: ObjectId("61a2378d1b10f1139d84e50d"),
    __v: NumberInt("0"),
    logoFilePath: null,
    name: "花草茶",
    partentId: null,
    partentName: null,
    sort: null,
    status: NumberInt("1")
} ]);
db.getCollection("goodsClassList").insert([ {
    _id: ObjectId("61a237961b10f1139d84e50e"),
    __v: NumberInt("0"),
    logoFilePath: null,
    name: "普洱茶",
    partentId: null,
    partentName: null,
    sort: null,
    status: NumberInt("1")
} ]);
db.getCollection("goodsClassList").insert([ {
    _id: ObjectId("61a237a21b10f1139d84e50f"),
    __v: NumberInt("0"),
    logoFilePath: null,
    name: "花果茶",
    partentId: null,
    partentName: null,
    sort: null,
    status: NumberInt("1")
} ]);
db.getCollection("goodsClassList").insert([ {
    _id: ObjectId("61a23b4a1b10f1139d84e510"),
    __v: NumberInt("0"),
    logoFilePath: "http://localhost:99/upload/2021/11/27/202111272205_6098.596677495303.jpg",
    name: "乐品乐-绿茶",
    partentId: "61a237441b10f1139d84e50b",
    partentName: "绿茶",
    sort: NumberInt("1"),
    status: NumberInt("1")
} ]);
db.getCollection("goodsClassList").insert([ {
    _id: ObjectId("61a23b711b10f1139d84e511"),
    __v: NumberInt("0"),
    logoFilePath: "http://localhost:99/upload/2021/11/27/202111272206_8375.626671413087.jpg",
    name: "俊旅-红茶",
    partentId: "61a2376f1b10f1139d84e50c",
    partentName: "红茶",
    sort: null,
    status: NumberInt("1")
} ]);
db.getCollection("goodsClassList").insert([ {
    _id: ObjectId("61a246632ee28a1f3c79931c"),
    __v: NumberInt("0"),
    logoFilePath: null,
    name: "养生茶",
    partentId: null,
    partentName: null,
    sort: null,
    status: NumberInt("1")
} ]);
db.getCollection("goodsClassList").insert([ {
    _id: ObjectId("61a2467d2ee28a1f3c79931d"),
    __v: NumberInt("0"),
    logoFilePath: "http://localhost:99/upload/2021/11/27/202111272253_6964.469340510748.jpg",
    name: "同仁堂养生茶",
    partentId: "61a246632ee28a1f3c79931c",
    partentName: null,
    sort: null,
    status: NumberInt("0")
} ]);
db.getCollection("goodsClassList").insert([ {
    _id: ObjectId("61a30329724c4b27b17e8c66"),
    __v: NumberInt("0"),
    logoFilePath: "http://localhost:99/upload/2021/11/27/202111281218_925.310741613281.jpg",
    name: "毛尖绿",
    partentId: "61a237441b10f1139d84e50b",
    partentName: "绿茶",
    sort: NumberInt("2"),
    status: NumberInt("1")
} ]);
db.getCollection("goodsClassList").insert([ {
    _id: ObjectId("61a37533724c4b27b17e8c67"),
    __v: NumberInt("0"),
    logoFilePath: "http://localhost:99/upload/2021/11/27/202111282025_3411.4755601621073.jpg",
    name: "云霄绿茶",
    partentId: "61a237441b10f1139d84e50b",
    partentName: "绿茶",
    sort: null,
    status: NumberInt("1")
} ]);
db.getCollection("goodsClassList").insert([ {
    _id: ObjectId("61a37579724c4b27b17e8c68"),
    __v: NumberInt("0"),
    logoFilePath: "http://localhost:99/upload/2021/11/27/202111282026_4966.365561679076.jpg",
    name: "雀舌",
    partentId: "61a237441b10f1139d84e50b",
    partentName: "绿茶",
    sort: null,
    status: NumberInt("1")
} ]);
db.getCollection("goodsClassList").insert([ {
    _id: ObjectId("61a375c7724c4b27b17e8c69"),
    __v: NumberInt("0"),
    logoFilePath: "http://localhost:99/upload/2021/11/27/202111282027_7793.51787281807.jpg",
    name: "毛尖茶",
    partentId: "61a237441b10f1139d84e50b",
    partentName: "绿茶",
    sort: null,
    status: NumberInt("1")
} ]);
db.getCollection("goodsClassList").insert([ {
    _id: ObjectId("61a375ec724c4b27b17e8c6a"),
    __v: NumberInt("0"),
    logoFilePath: "http://localhost:99/upload/2021/11/27/202111282028_2200.519341176783.jpg",
    name: "六百里",
    partentId: "61a237441b10f1139d84e50b",
    partentName: "绿茶",
    sort: null,
    status: NumberInt("1")
} ]);
db.getCollection("goodsClassList").insert([ {
    _id: ObjectId("61a3769f724c4b27b17e8c6b"),
    __v: NumberInt("0"),
    logoFilePath: "http://localhost:99/upload/2021/11/27/202111282031_6091.030398737636.jpg",
    name: "黄山毛峰",
    partentId: "61a237441b10f1139d84e50b",
    partentName: "绿茶",
    sort: null,
    status: NumberInt("1")
} ]);
db.getCollection("goodsClassList").insert([ {
    _id: ObjectId("61a376ef724c4b27b17e8c6c"),
    __v: NumberInt("0"),
    logoFilePath: "http://localhost:99/upload/2021/11/27/202111282032_2043.3310543763073.jpg",
    name: "金俊眉",
    partentId: "61a2376f1b10f1139d84e50c",
    partentName: "红茶",
    sort: null,
    status: NumberInt("1")
} ]);
db.getCollection("goodsClassList").insert([ {
    _id: ObjectId("61a37803724c4b27b17e8c6d"),
    __v: NumberInt("0"),
    logoFilePath: "http://localhost:99/upload/2021/11/27/202111282037_7031.564917749853.jpg",
    name: "八马正山小种",
    partentId: "61a2376f1b10f1139d84e50c",
    partentName: "红茶",
    sort: null,
    status: NumberInt("1")
} ]);
db.getCollection("goodsClassList").insert([ {
    _id: ObjectId("61a3781f724c4b27b17e8c6e"),
    __v: NumberInt("0"),
    logoFilePath: "http://localhost:99/upload/2021/11/27/202111282037_637.116690269981.jpg",
    name: "润虎",
    partentId: "61a2376f1b10f1139d84e50c",
    partentName: "红茶",
    sort: null,
    status: NumberInt("1")
} ]);
db.getCollection("goodsClassList").insert([ {
    _id: ObjectId("61a37831724c4b27b17e8c6f"),
    __v: NumberInt("0"),
    logoFilePath: "http://localhost:99/upload/2021/11/27/202111282038_2906.7148011662102.jpg",
    name: "乐品乐",
    partentId: "61a2376f1b10f1139d84e50c",
    partentName: "红茶",
    sort: null,
    status: NumberInt("1")
} ]);
db.getCollection("goodsClassList").insert([ {
    _id: ObjectId("61a37888724c4b27b17e8c70"),
    __v: NumberInt("0"),
    logoFilePath: "http://localhost:99/upload/2021/11/27/202111282039_9581.900712510942.jpg",
    name: "盛茗世家",
    partentId: "61a2376f1b10f1139d84e50c",
    partentName: "红茶",
    sort: null,
    status: NumberInt("1")
} ]);
db.getCollection("goodsClassList").insert([ {
    _id: ObjectId("61a378c4724c4b27b17e8c71"),
    __v: NumberInt("0"),
    logoFilePath: "http://localhost:99/upload/2021/11/27/202111282040_9038.34643236467.jpg",
    name: "稀罕小罐茶",
    partentId: "61a2376f1b10f1139d84e50c",
    partentName: "红茶",
    sort: null,
    status: NumberInt("1")
} ]);
db.getCollection("goodsClassList").insert([ {
    _id: ObjectId("61a3790c724c4b27b17e8c72"),
    __v: NumberInt("0"),
    logoFilePath: "http://localhost:99/upload/2021/11/27/202111282041_9884.105718196006.jpg",
    name: "忆江南花草茶",
    partentId: "61a2378d1b10f1139d84e50d",
    partentName: "花草茶",
    sort: null,
    status: NumberInt("1")
} ]);
db.getCollection("goodsClassList").insert([ {
    _id: ObjectId("61a37932724c4b27b17e8c73"),
    __v: NumberInt("0"),
    logoFilePath: "http://localhost:99/upload/2021/11/27/202111282042_954.7026011768933.jpg",
    name: "惠寻枸杞",
    partentId: "61a2378d1b10f1139d84e50d",
    partentName: "花草茶",
    sort: null,
    status: NumberInt("1")
} ]);
db.getCollection("goodsClassList").insert([ {
    _id: ObjectId("61a37946724c4b27b17e8c74"),
    __v: NumberInt("0"),
    logoFilePath: "http://localhost:99/upload/2021/11/27/202111282042_9707.383708909676.jpg",
    name: "奈雪",
    partentId: "61a2378d1b10f1139d84e50d",
    partentName: "花草茶",
    sort: null,
    status: NumberInt("1")
} ]);
db.getCollection("goodsClassList").insert([ {
    _id: ObjectId("61a37961724c4b27b17e8c75"),
    __v: NumberInt("0"),
    logoFilePath: "http://localhost:99/upload/2021/11/27/202111282043_5035.270167065209.jpg",
    name: "茶里桂圆红枣",
    partentId: "61a2378d1b10f1139d84e50d",
    partentName: "花草茶",
    sort: null,
    status: NumberInt("1")
} ]);
db.getCollection("goodsClassList").insert([ {
    _id: ObjectId("61a3799b724c4b27b17e8c76"),
    __v: NumberInt("0"),
    logoFilePath: "http://localhost:99/upload/2021/11/27/202111282044_9382.047675843261.jpg",
    name: "陈一凡普洱",
    partentId: "61a237961b10f1139d84e50e",
    partentName: "普洱茶",
    sort: null,
    status: NumberInt("1")
} ]);
db.getCollection("goodsClassList").insert([ {
    _id: ObjectId("61a379fa724c4b27b17e8c77"),
    __v: NumberInt("0"),
    logoFilePath: "http://localhost:99/upload/2021/11/27/202111282045_9413.204468560481.jpg",
    name: "小青桔",
    partentId: "61a237961b10f1139d84e50e",
    partentName: "普洱茶",
    sort: null,
    status: NumberInt("1")
} ]);
db.getCollection("goodsClassList").insert([ {
    _id: ObjectId("61a37a22724c4b27b17e8c78"),
    __v: NumberInt("0"),
    logoFilePath: "http://localhost:99/upload/2021/11/27/202111282046_851.3805061729918.jpg",
    name: "醇香普洱",
    partentId: "61a237961b10f1139d84e50e",
    partentName: "普洱茶",
    sort: null,
    status: NumberInt("1")
} ]);
db.getCollection("goodsClassList").insert([ {
    _id: ObjectId("61a37a81724c4b27b17e8c79"),
    __v: NumberInt("0"),
    logoFilePath: "http://localhost:99/upload/2021/11/27/202111282048_9445.850879605749.jpg",
    name: "大益",
    partentId: "61a237961b10f1139d84e50e",
    partentName: "普洱茶",
    sort: null,
    status: NumberInt("1")
} ]);
db.getCollection("goodsClassList").insert([ {
    _id: ObjectId("61a37ac2724c4b27b17e8c7a"),
    __v: NumberInt("0"),
    logoFilePath: "http://localhost:99/upload/2021/11/27/202111282049_7412.778941132016.jpg",
    name: "林中鹿",
    partentId: "61a237961b10f1139d84e50e",
    partentName: "普洱茶",
    sort: null,
    status: NumberInt("1")
} ]);
db.getCollection("goodsClassList").insert([ {
    _id: ObjectId("61a37ae7724c4b27b17e8c7b"),
    __v: NumberInt("0"),
    logoFilePath: "http://localhost:99/upload/2021/11/27/202111282049_9789.820879815172.jpg",
    name: "碎银子",
    partentId: "61a237961b10f1139d84e50e",
    partentName: "普洱茶",
    sort: null,
    status: NumberInt("1")
} ]);
db.getCollection("goodsClassList").insert([ {
    _id: ObjectId("61a37b16724c4b27b17e8c7c"),
    __v: NumberInt("0"),
    logoFilePath: "http://localhost:99/upload/2021/11/27/202111282050_3526.885784095102.jpg",
    name: "御举茗",
    partentId: "61a237961b10f1139d84e50e",
    partentName: "普洱茶",
    sort: null,
    status: NumberInt("1")
} ]);
db.getCollection("goodsClassList").insert([ {
    _id: ObjectId("61a37ba6724c4b27b17e8c7d"),
    __v: NumberInt("0"),
    logoFilePath: "http://localhost:99/upload/2021/11/27/202111282052_9597.375949066762.jpg",
    name: "白桃乌龙",
    partentId: "61a237a21b10f1139d84e50f",
    partentName: "花果茶",
    sort: null,
    status: NumberInt("1")
} ]);
db.getCollection("goodsClassList").insert([ {
    _id: ObjectId("61a37bc5724c4b27b17e8c7e"),
    __v: NumberInt("0"),
    logoFilePath: "http://localhost:99/upload/2021/11/27/202111282053_4706.215771745479.jpg",
    name: "蜜桃乌龙",
    partentId: "61a237a21b10f1139d84e50f",
    partentName: "花果茶",
    sort: null,
    status: NumberInt("1")
} ]);
db.getCollection("goodsClassList").insert([ {
    _id: ObjectId("61a37be6724c4b27b17e8c7f"),
    __v: NumberInt("0"),
    logoFilePath: "http://localhost:99/upload/2021/11/27/202111282053_394.94870395656136.jpg",
    name: "西柚白桃",
    partentId: "61a237a21b10f1139d84e50f",
    partentName: "花果茶",
    sort: null,
    status: NumberInt("1")
} ]);
db.getCollection("goodsClassList").insert([ {
    _id: ObjectId("61a37c0f724c4b27b17e8c80"),
    __v: NumberInt("0"),
    logoFilePath: "http://localhost:99/upload/2021/11/27/202111282054_2802.212576374761.jpg",
    name: "金菊百香",
    partentId: "61a237a21b10f1139d84e50f",
    partentName: "花果茶",
    sort: null,
    status: NumberInt("1")
} ]);
db.getCollection("goodsClassList").insert([ {
    _id: ObjectId("61a37c36724c4b27b17e8c81"),
    __v: NumberInt("0"),
    logoFilePath: "http://localhost:99/upload/2021/11/27/202111282055_3308.855153399115.jpg",
    name: "网红养生",
    partentId: "61a237a21b10f1139d84e50f",
    partentName: "花果茶",
    sort: null,
    status: NumberInt("1")
} ]);
db.getCollection("goodsClassList").insert([ {
    _id: ObjectId("61a37d00724c4b27b17e8c82"),
    __v: NumberInt("0"),
    logoFilePath: "http://localhost:99/upload/2021/11/27/202111282058_8971.161936221097.jpg",
    name: "酸枣仁百合",
    partentId: "61a246632ee28a1f3c79931c",
    partentName: "养生茶",
    sort: null,
    status: NumberInt("1")
} ]);
db.getCollection("goodsClassList").insert([ {
    _id: ObjectId("61a37d19724c4b27b17e8c83"),
    __v: NumberInt("0"),
    logoFilePath: "http://localhost:99/upload/2021/11/27/202111282059_7754.906892682337.jpg",
    name: "仁和普圆",
    partentId: "61a246632ee28a1f3c79931c",
    partentName: "养生茶",
    sort: null,
    status: NumberInt("1")
} ]);
db.getCollection("goodsClassList").insert([ {
    _id: ObjectId("61a37d42724c4b27b17e8c84"),
    __v: NumberInt("0"),
    logoFilePath: "http://localhost:99/upload/2021/11/27/202111282059_8861.683520544575.jpg",
    name: "黑糖浆枣茶",
    partentId: "61a246632ee28a1f3c79931c",
    partentName: "养生茶",
    sort: null,
    status: NumberInt("1")
} ]);
db.getCollection("goodsClassList").insert([ {
    _id: ObjectId("61a37d59724c4b27b17e8c85"),
    __v: NumberInt("0"),
    logoFilePath: "http://localhost:99/upload/2021/11/27/202111282100_7064.697710399543.jpg",
    name: "枸杞菊花",
    partentId: "61a246632ee28a1f3c79931c",
    partentName: "养生茶",
    sort: null,
    status: NumberInt("1")
} ]);
db.getCollection("goodsClassList").insert([ {
    _id: ObjectId("61a37d78724c4b27b17e8c86"),
    __v: NumberInt("0"),
    logoFilePath: "http://localhost:99/upload/2021/11/27/202111282100_5373.026488502413.jpg",
    name: "双枸杞",
    partentId: "61a246632ee28a1f3c79931c",
    partentName: "养生茶",
    sort: null,
    status: NumberInt("1")
} ]);
db.getCollection("goodsClassList").insert([ {
    _id: ObjectId("61a37d87724c4b27b17e8c87"),
    __v: NumberInt("0"),
    logoFilePath: "http://localhost:99/upload/2021/11/27/202111282100_3334.3896434883623.jpg",
    name: "虎标",
    partentId: "61a246632ee28a1f3c79931c",
    partentName: "养生茶",
    sort: null,
    status: NumberInt("1")
} ]);
db.getCollection("goodsClassList").insert([ {
    _id: ObjectId("61a37d9f724c4b27b17e8c88"),
    __v: NumberInt("0"),
    logoFilePath: "http://localhost:99/upload/2021/11/27/202111282101_3887.5477886038047.jpg",
    name: "黑苦寂茶",
    partentId: "61a246632ee28a1f3c79931c",
    partentName: "养生茶",
    sort: null,
    status: NumberInt("1")
} ]);
db.getCollection("goodsClassList").insert([ {
    _id: ObjectId("61a37dbe724c4b27b17e8c89"),
    __v: NumberInt("0"),
    logoFilePath: "http://localhost:99/upload/2021/11/27/202111282101_2804.493712560723.jpg",
    name: "菊花栀子茶",
    partentId: "61a246632ee28a1f3c79931c",
    partentName: "养生茶",
    sort: null,
    status: NumberInt("1")
} ]);

// ----------------------------
// Collection structure for goodsInfoList
// ----------------------------
db.getCollection("goodsInfoList").drop();
db.createCollection("goodsInfoList");

// ----------------------------
// Documents of goodsInfoList
// ----------------------------
db.getCollection("goodsInfoList").insert([ {
    _id: ObjectId("61a240441b10f1139d84e51b"),
    __v: NumberInt("0"),
    brandId: "61a235941b10f1139d84e506",
    brandName: "丁香茶",
    categoryId: "61a23b4a1b10f1139d84e510",
    categoryName: "乐品乐-绿茶",
    designSketch: [
        "http://localhost:99/upload/2021/11/27/202111272212_8951.202237454896.jpg",
        "http://localhost:99/upload/2021/11/27/202111272212_3738.95335397427.jpg",
        "http://localhost:99/upload/2021/11/27/202111272212_1404.3076028266864.jpg"
    ],
    goodsId: "17dbf970aa8e4bfab9d1741a31260793",
    goodsName: "绿茶-丁香茶系列",
    goodsNo: "DXC-001",
    goodsType: NumberInt("3"),
    mixDetail: "<p><img src=\"http://localhost:99/upload/2021/11/27/1464603574477656064.jpg\" title=\"\" alt=\"3d66f34a71426f92.jpg\"/></p><p><img src=\"http://localhost:99/upload/2021/11/27/1464603601270870016.jpg\" title=\"\" alt=\"6c6541ea663d3790.jpg\"/></p>",
    placeOrigin: "四川成都",
    price: NumberInt("123"),
    salesVolume: NumberInt("68"),
    skuName: "丁香粗茶特价热销",
    specValue1: "特价",
    specValue2: "热销",
    status: NumberInt("1"),
    weight: NumberInt("23")
} ]);
db.getCollection("goodsInfoList").insert([ {
    _id: ObjectId("61a240441b10f1139d84e51c"),
    __v: NumberInt("0"),
    brandId: "61a235941b10f1139d84e506",
    brandName: "丁香茶",
    categoryId: "61a23b4a1b10f1139d84e510",
    categoryName: "乐品乐-绿茶",
    designSketch: [
        "http://localhost:99/upload/2021/11/27/202111272212_9305.144038277216.jpg",
        "http://localhost:99/upload/2021/11/27/202111272212_8725.45966227782.jpg"
    ],
    goodsId: "17dbf970aa8e4bfab9d1741a31260793",
    goodsName: "绿茶-丁香茶系列",
    goodsNo: "DXC-001",
    goodsType: NumberInt("3"),
    mixDetail: "<p><img src=\"http://localhost:99/upload/2021/11/27/1464603661903728640.jpg\" title=\"\" alt=\"37eb6cea0dbf9b5b.jpg\"/></p><p><img src=\"http://localhost:99/upload/2021/11/27/1464603688680165376.jpg\" title=\"\" alt=\"056d01133f5fe045.jpg\"/></p><p><img src=\"http://localhost:99/upload/2021/11/27/1464603709513273344.jpg\" title=\"\" alt=\"92f461f28309a2ee (1).jpg\" width=\"350\" height=\"350\" style=\"width: 350px; height: 350px;\"/></p>",
    placeOrigin: "四川成都",
    price: NumberInt("534"),
    salesVolume: NumberInt("31"),
    skuName: "丁香粗茶特价进口",
    specValue1: "特价",
    specValue2: "进口",
    status: NumberInt("1"),
    weight: NumberInt("23")
} ]);
db.getCollection("goodsInfoList").insert([ {
    _id: ObjectId("61a240441b10f1139d84e51d"),
    __v: NumberInt("0"),
    brandId: "61a235941b10f1139d84e506",
    brandName: "丁香茶",
    categoryId: "61a23b4a1b10f1139d84e510",
    categoryName: "乐品乐-绿茶",
    designSketch: [
        "http://localhost:99/upload/2021/11/27/202111272213_8485.024464333597.jpg",
        "http://localhost:99/upload/2021/11/27/202111272213_608.9731761532846.jpg",
        "http://localhost:99/upload/2021/11/27/202111272213_8780.427278409023.jpg",
        "http://localhost:99/upload/2021/11/27/202111272213_2209.2812848975486.jpg"
    ],
    goodsId: "17dbf970aa8e4bfab9d1741a31260793",
    goodsName: "绿茶-丁香茶系列",
    goodsNo: "DXC-001",
    goodsType: NumberInt("3"),
    mixDetail: "<p><img src=\"http://localhost:99/upload/2021/11/27/1464601763691761664.jpg\" title=\"\" alt=\"92f461f28309a2ee (1).jpg\" width=\"425\" height=\"350\" style=\"width: 425px; height: 350px;\"/></p><p><img src=\"http://localhost:99/upload/2021/11/27/1464601794045939712.jpg\" title=\"\" alt=\"1587a3468382a0fe.jpg\" width=\"420\" height=\"350\" style=\"width: 420px; height: 350px;\"/></p><p><img src=\"http://localhost:99/upload/2021/11/27/1464601824911822848.jpg\" title=\"\" alt=\"7917a04d9d3b37b0.jpg\" width=\"419\" height=\"350\" style=\"width: 419px; height: 350px;\"/></p>",
    placeOrigin: "四川成都",
    price: NumberInt("232"),
    salesVolume: NumberInt("2"),
    skuName: "丁香细茶特价进口",
    specValue1: "热卖",
    specValue2: "热销",
    status: NumberInt("1"),
    weight: NumberInt("455")
} ]);
db.getCollection("goodsInfoList").insert([ {
    _id: ObjectId("61a240441b10f1139d84e51e"),
    __v: NumberInt("0"),
    brandId: "61a235941b10f1139d84e506",
    brandName: "丁香茶",
    categoryId: "61a23b4a1b10f1139d84e510",
    categoryName: "乐品乐-绿茶",
    designSketch: [
        "http://localhost:99/upload/2021/11/27/202111272213_6172.257989150636.jpg",
        "http://localhost:99/upload/2021/11/27/202111272213_7444.555871639635.jpg",
        "http://localhost:99/upload/2021/11/27/202111272213_9427.666449029279.jpg",
        "http://localhost:99/upload/2021/11/27/202111272213_625.2340962996739.jpg"
    ],
    goodsId: "17dbf970aa8e4bfab9d1741a31260793",
    goodsName: "绿茶-丁香茶系列",
    goodsNo: "DXC-001",
    goodsType: NumberInt("3"),
    mixDetail: "<p><img src=\"http://localhost:99/upload/2021/11/27/1464601900103110656.jpg\" title=\"\" alt=\"fb82d3d6a45612df.jpg\" width=\"424\" height=\"350\" style=\"width: 424px; height: 350px;\"/></p><p><img src=\"http://localhost:99/upload/2021/11/27/1464601922521665536.jpg\" title=\"\" alt=\"eef3d0c0821036a8.jpg\" width=\"433\" height=\"350\" style=\"width: 433px; height: 350px;\"/></p><p><img src=\"http://localhost:99/upload/2021/11/27/1464601950548004864.jpg\" title=\"\" alt=\"c87fa18b3d752567.jpg\" width=\"433\" height=\"350\" style=\"width: 433px; height: 350px;\"/></p><p><img src=\"http://localhost:99/upload/2021/11/27/1464601981556494336.jpg\" title=\"\" alt=\"b49a9e95fd2eda2a.jpg\" width=\"415\" height=\"350\" style=\"width: 415px; height: 350px;\"/></p>",
    placeOrigin: "四川成都",
    price: NumberInt("534"),
    salesVolume: NumberInt("74"),
    skuName: "丁香细茶热卖进口",
    specValue1: "热卖",
    specValue2: "进口",
    status: NumberInt("1"),
    weight: NumberInt("2323")
} ]);
db.getCollection("goodsInfoList").insert([ {
    _id: ObjectId("61a24eb4724c4b27b17e8c59"),
    __v: NumberInt("0"),
    brandId: "61a236851b10f1139d84e509",
    brandName: "花果茶",
    categoryId: "61a23b4a1b10f1139d84e510",
    categoryName: "乐品乐-绿茶",
    designSketch: [
        "http://localhost:99/upload/2021/11/27/202111272328_784.4556600347885.jpg"
    ],
    goodsId: "349f459516ca413bb25df1931d13b35c",
    goodsName: "乐品乐花果茶\t",
    goodsNo: "LPL-002",
    goodsType: NumberInt("1"),
    mixDetail: null,
    placeOrigin: "山东",
    price: NumberInt("432"),
    salesVolume: NumberInt("63"),
    skuName: "乐品乐花果茶细茶（特价）",
    specValue1: "特价",
    specValue2: "秒杀",
    status: NumberInt("1"),
    weight: NumberInt("33")
} ]);
db.getCollection("goodsInfoList").insert([ {
    _id: ObjectId("61a24eb4724c4b27b17e8c5a"),
    __v: NumberInt("0"),
    brandId: "61a236851b10f1139d84e509",
    brandName: "花果茶",
    categoryId: "61a23b4a1b10f1139d84e510",
    categoryName: "乐品乐-绿茶",
    designSketch: [
        "http://localhost:99/upload/2021/11/27/202111272328_9154.977102063469.jpg"
    ],
    goodsId: "349f459516ca413bb25df1931d13b35c",
    goodsName: "乐品乐花果茶\t",
    goodsNo: "LPL-002",
    goodsType: NumberInt("1"),
    mixDetail: null,
    placeOrigin: "山东",
    price: NumberInt("235"),
    salesVolume: NumberInt("44"),
    skuName: "乐品乐花果茶细茶（限时\t）",
    specValue1: "特价",
    specValue2: "限时",
    status: NumberInt("1"),
    weight: NumberInt("532")
} ]);
db.getCollection("goodsInfoList").insert([ {
    _id: ObjectId("61a24eb4724c4b27b17e8c5b"),
    __v: NumberInt("0"),
    brandId: "61a236851b10f1139d84e509",
    brandName: "花果茶",
    categoryId: "61a23b4a1b10f1139d84e510",
    categoryName: "乐品乐-绿茶",
    designSketch: [
        "http://localhost:99/upload/2021/11/27/202111272328_2522.88788030544.jpg"
    ],
    goodsId: "349f459516ca413bb25df1931d13b35c",
    goodsName: "乐品乐花果茶\t",
    goodsNo: "LPL-002",
    goodsType: NumberInt("1"),
    mixDetail: null,
    placeOrigin: "山东",
    price: NumberInt("234"),
    salesVolume: NumberInt("91"),
    skuName: "乐品乐花果茶粗茶（秒杀）",
    specValue1: "限时",
    specValue2: "秒杀",
    status: NumberInt("1"),
    weight: NumberInt("235")
} ]);
db.getCollection("goodsInfoList").insert([ {
    _id: ObjectId("61a24eb4724c4b27b17e8c5c"),
    __v: NumberInt("0"),
    brandId: "61a236851b10f1139d84e509",
    brandName: "花果茶",
    categoryId: "61a23b4a1b10f1139d84e510",
    categoryName: "乐品乐-绿茶",
    designSketch: [
        "http://localhost:99/upload/2021/11/27/202111272328_4949.984347687422.jpg"
    ],
    goodsId: "349f459516ca413bb25df1931d13b35c",
    goodsName: "乐品乐花果茶\t",
    goodsNo: "LPL-002",
    goodsType: NumberInt("1"),
    mixDetail: null,
    placeOrigin: "山东",
    price: NumberInt("523"),
    salesVolume: NumberInt("74"),
    skuName: "乐品乐花果茶粗茶（限时）",
    specValue1: "限时",
    specValue2: "限时",
    status: NumberInt("1"),
    weight: NumberInt("2342")
} ]);
db.getCollection("goodsInfoList").insert([ {
    _id: ObjectId("61a38050724c4b27b17e8c90"),
    designSketch: [
        "http://localhost:99/upload/2021/11/27/202111282112_3037.685864715396.jpg",
        "http://localhost:99/upload/2021/11/27/202111282112_176.93391863532915.jpg",
        "http://localhost:99/upload/2021/11/27/202111282112_8096.376089379706.jpg"
    ],
    __v: NumberInt("0"),
    brandId: "61a236851b10f1139d84e509",
    categoryId: "61a3790c724c4b27b17e8c72",
    categoryName: "忆江南花草茶",
    goodsId: "cff8ea613fab4f2787314628ac5942d9",
    goodsName: "忆江南花果茶22",
    goodsNo: "YJN-002",
    goodsType: NumberInt("1"),
    mixDetail: null,
    placeOrigin: "宣化",
    price: NumberInt("423"),
    salesVolume: NumberInt("42"),
    skuName: "忆江南花果茶打折",
    specValue1: "正品",
    specValue2: "打折",
    status: NumberInt("1"),
    weight: NumberInt("42")
} ]);
db.getCollection("goodsInfoList").insert([ {
    _id: ObjectId("61a38050724c4b27b17e8c91"),
    designSketch: [
        "http://localhost:99/upload/2021/11/27/202111282112_7833.963647993513.jpg",
        "http://localhost:99/upload/2021/11/27/202111282112_4437.5317837885705.jpg",
        "http://localhost:99/upload/2021/11/27/202111282112_4089.505456609277.jpg",
        "http://localhost:99/upload/2021/11/27/202111282112_6225.716500955711.jpg"
    ],
    __v: NumberInt("0"),
    brandId: "61a236851b10f1139d84e509",
    categoryId: "61a3790c724c4b27b17e8c72",
    categoryName: "忆江南花草茶",
    goodsId: "cff8ea613fab4f2787314628ac5942d9",
    goodsName: "忆江南花果茶22",
    goodsNo: "YJN-002",
    goodsType: NumberInt("1"),
    mixDetail: null,
    placeOrigin: "宣化",
    price: NumberInt("234"),
    salesVolume: NumberInt("14"),
    skuName: "忆江南花果茶热卖",
    specValue1: "正品",
    specValue2: "热卖",
    status: NumberInt("1"),
    weight: NumberInt("234")
} ]);
db.getCollection("goodsInfoList").insert([ {
    _id: ObjectId("61a38050724c4b27b17e8c92"),
    designSketch: [
        "http://localhost:99/upload/2021/11/27/202111282112_4827.380833537693.jpg",
        "http://localhost:99/upload/2021/11/27/202111282112_364.1676048309006.jpg",
        "http://localhost:99/upload/2021/11/27/202111282112_6407.40017758745.jpg",
        "http://localhost:99/upload/2021/11/27/202111282112_1986.780909534629.jpg",
        "http://localhost:99/upload/2021/11/27/202111282112_9359.051553986505.jpg"
    ],
    __v: NumberInt("0"),
    brandId: "61a236851b10f1139d84e509",
    categoryId: "61a3790c724c4b27b17e8c72",
    categoryName: "忆江南花草茶",
    goodsId: "cff8ea613fab4f2787314628ac5942d9",
    goodsName: "忆江南花果茶22",
    goodsNo: "YJN-002",
    goodsType: NumberInt("1"),
    mixDetail: null,
    placeOrigin: "宣化",
    price: NumberInt("234"),
    salesVolume: NumberInt("14"),
    skuName: "忆江南花果茶促销",
    specValue1: "促销",
    specValue2: "打折",
    status: NumberInt("1"),
    weight: NumberInt("52")
} ]);
db.getCollection("goodsInfoList").insert([ {
    _id: ObjectId("61a38050724c4b27b17e8c93"),
    designSketch: [
        "http://localhost:99/upload/2021/11/27/202111282112_7951.890336590243.jpg",
        "http://localhost:99/upload/2021/11/27/202111282112_7766.822792382942.jpg",
        "http://localhost:99/upload/2021/11/27/202111282112_4158.945719326672.jpg",
        "http://localhost:99/upload/2021/11/27/202111282112_3873.879683801149.jpg",
        "http://localhost:99/upload/2021/11/27/202111282112_9633.81886460409.jpg",
        "http://localhost:99/upload/2021/11/27/202111282112_4816.44026365112.jpg"
    ],
    __v: NumberInt("0"),
    brandId: "61a236851b10f1139d84e509",
    categoryId: "61a3790c724c4b27b17e8c72",
    categoryName: "忆江南花草茶",
    goodsId: "cff8ea613fab4f2787314628ac5942d9",
    goodsName: "忆江南花果茶22",
    goodsNo: "YJN-002",
    goodsType: NumberInt("1"),
    mixDetail: null,
    placeOrigin: "宣化",
    price: NumberInt("52"),
    salesVolume: NumberInt("61"),
    skuName: "忆江南花果茶正品",
    specValue1: "促销",
    specValue2: "热卖",
    status: NumberInt("1"),
    weight: NumberInt("234")
} ]);
db.getCollection("goodsInfoList").insert([ {
    _id: ObjectId("61a3816a724c4b27b17e8c95"),
    designSketch: [
        "http://localhost:99/upload/2021/11/27/202111282117_3468.047500232241.jpg",
        "http://localhost:99/upload/2021/11/27/202111282117_4952.616091334768.jpg",
        "http://localhost:99/upload/2021/11/27/202111282117_7888.121530099854.jpg"
    ],
    __v: NumberInt("0"),
    brandId: "61a235941b10f1139d84e506",
    categoryId: "61a3790c724c4b27b17e8c72",
    categoryName: "忆江南花草茶",
    goodsId: "b65e608eb3624263956b56ad233b94e1",
    goodsName: "忆江南花草",
    goodsNo: "YJN-002",
    goodsType: NumberInt("1"),
    mixDetail: null,
    placeOrigin: "大同",
    price: NumberInt("42"),
    salesVolume: NumberInt("55"),
    skuName: "忆江南花草正品",
    specValue1: "正品",
    specValue2: null,
    status: NumberInt("1"),
    weight: NumberInt("2")
} ]);
db.getCollection("goodsInfoList").insert([ {
    _id: ObjectId("61a3816a724c4b27b17e8c96"),
    designSketch: [
        "http://localhost:99/upload/2021/11/27/202111282117_3116.1594059214394.jpg"
    ],
    __v: NumberInt("0"),
    brandId: "61a235941b10f1139d84e506",
    categoryId: "61a3790c724c4b27b17e8c72",
    categoryName: "忆江南花草茶",
    goodsId: "b65e608eb3624263956b56ad233b94e1",
    goodsName: "忆江南花草",
    goodsNo: "YJN-002",
    goodsType: NumberInt("1"),
    mixDetail: null,
    placeOrigin: "大同",
    price: NumberInt("323"),
    salesVolume: NumberInt("14"),
    skuName: "忆江南花草特价",
    specValue1: "特价",
    specValue2: null,
    status: NumberInt("1"),
    weight: NumberInt("4432")
} ]);
db.getCollection("goodsInfoList").insert([ {
    _id: ObjectId("61a3816a724c4b27b17e8c97"),
    designSketch: [
        "http://localhost:99/upload/2021/11/27/202111282117_4528.220844331283.jpg"
    ],
    __v: NumberInt("0"),
    brandId: "61a235941b10f1139d84e506",
    categoryId: "61a3790c724c4b27b17e8c72",
    categoryName: "忆江南花草茶",
    goodsId: "b65e608eb3624263956b56ad233b94e1",
    goodsName: "忆江南花草",
    goodsNo: "YJN-002",
    goodsType: NumberInt("1"),
    mixDetail: null,
    placeOrigin: "大同",
    price: NumberInt("523"),
    salesVolume: NumberInt("35"),
    skuName: "忆江南花草促销",
    specValue1: "促销",
    specValue2: null,
    status: NumberInt("1"),
    weight: NumberInt("234")
} ]);
db.getCollection("goodsInfoList").insert([ {
    _id: ObjectId("6367cd9ebb34e44604b9852d"),
    designSketch: [
        "http://localhost:99/upload/2022/11/06/202211062307_5398.501665390403.jpg"
    ],
    specValue1: "1",
    price: NumberInt("1"),
    weight: NumberInt("133333"),
    skuName: "1",
    goodsId: "ab3daf8da1ff453e812c0110e924fafa",
    goodsType: NumberInt("3"),
    categoryId: "61a237441b10f1139d84e50b",
    status: NumberInt("1"),
    categoryName: "绿茶",
    brandId: "61a2366c1b10f1139d84e507",
    goodsNo: "123131",
    goodsName: "1212312312313123",
    placeOrigin: "1",
    salesVolume: NumberInt("87"),
    __v: NumberInt("0")
} ]);
db.getCollection("goodsInfoList").insert([ {
    _id: ObjectId("61a244fb2ee28a1f3c799316"),
    designSketch: [
        "http://localhost:99/upload/2021/11/27/202111272246_4769.7405879960515.jpg",
        "http://localhost:99/upload/2021/11/27/202111272246_9192.826951803132.jpg",
        "http://localhost:99/upload/2021/11/27/202111272246_2862.392477879161.jpg"
    ],
    __v: NumberInt("0"),
    brandId: "61a2366c1b10f1139d84e507",
    categoryId: "61a23b711b10f1139d84e511",
    categoryName: "俊旅-红茶",
    goodsId: "c73187228798469d94e3a3850a97cd75",
    goodsName: "福茗源秒杀系列",
    goodsNo: "FMY-001",
    goodsType: NumberInt("2"),
    mixDetail: "<p><img src=\"http://localhost:99/upload/2021/11/27/1464607011281965056.jpg\" title=\"\" alt=\"92f461f28309a2ee (1).jpg\" width=\"395\" height=\"350\" style=\"width: 395px; height: 350px;\"/></p><p><img src=\"http://localhost:99/upload/2021/11/27/1464607089895804928.jpg\" title=\"\" alt=\"fb82d3d6a45612df.jpg\" width=\"390\" height=\"350\" style=\"width: 390px; height: 350px;\"/></p><p><br/></p>",
    placeOrigin: "江苏",
    price: NumberInt("3423"),
    salesVolume: NumberInt("2"),
    skuName: "福茗源-粗茶（秒杀）",
    specValue1: "秒杀",
    specValue2: "热销",
    status: NumberInt("1"),
    weight: NumberInt("2345")
} ]);
db.getCollection("goodsInfoList").insert([ {
    _id: ObjectId("61a244fb2ee28a1f3c799317"),
    designSketch: [
        "http://localhost:99/upload/2021/11/27/202111272246_8611.221901996088.jpg",
        "http://localhost:99/upload/2021/11/27/202111272246_5402.2563969199555.jpg",
        "http://localhost:99/upload/2021/11/27/202111272246_972.0352984144664.jpg"
    ],
    __v: NumberInt("0"),
    brandId: "61a2366c1b10f1139d84e507",
    categoryId: "61a23b711b10f1139d84e511",
    categoryName: "俊旅-红茶",
    goodsId: "c73187228798469d94e3a3850a97cd75",
    goodsName: "福茗源秒杀系列",
    goodsNo: "FMY-001",
    goodsType: NumberInt("2"),
    mixDetail: "<p><img src=\"http://localhost:99/upload/2021/11/27/1464607208506527744.jpg\" title=\"\" alt=\"60839a61a8fa6084.jpg\" width=\"219\" height=\"220\" style=\"width: 219px; height: 220px;\"/></p><p><img src=\"http://localhost:99/upload/2021/11/27/1464607280891826176.jpg\" title=\"\" alt=\"d2677afdc69d3ebe.jpg\"/></p><p><img src=\"http://localhost:99/upload/2021/11/27/1464607306179284992.jpg\" title=\"\" alt=\"222cd7b043f01173.jpg\"/></p>",
    placeOrigin: "江苏",
    price: NumberInt("2342"),
    salesVolume: NumberInt("65"),
    skuName: "福茗源-粗茶（热销\t）",
    specValue1: "秒杀",
    specValue2: "进口",
    status: NumberInt("1"),
    weight: NumberInt("2434")
} ]);
db.getCollection("goodsInfoList").insert([ {
    _id: ObjectId("61a244fb2ee28a1f3c799318"),
    designSketch: [
        "http://localhost:99/upload/2021/11/27/202111272246_1899.9655640387437.jpg",
        "http://localhost:99/upload/2021/11/27/202111272247_2508.800516233203.jpg"
    ],
    __v: NumberInt("0"),
    brandId: "61a2366c1b10f1139d84e507",
    categoryId: "61a23b711b10f1139d84e511",
    categoryName: "俊旅-红茶",
    goodsId: "c73187228798469d94e3a3850a97cd75",
    goodsName: "福茗源秒杀系列",
    goodsNo: "FMY-001",
    goodsType: NumberInt("2"),
    mixDetail: "<p><img src=\"http://localhost:99/upload/2021/11/27/1464607350240448512.jpg\" title=\"\" alt=\"99f5fb1fcf0c2458.jpg\"/></p>",
    placeOrigin: "江苏",
    price: NumberInt("5324"),
    salesVolume: NumberInt("51"),
    skuName: "福茗源-粗茶（打折）\t）",
    specValue1: "秒杀",
    specValue2: "打折",
    status: NumberInt("1"),
    weight: NumberInt("2342")
} ]);
db.getCollection("goodsInfoList").insert([ {
    _id: ObjectId("61a244fb2ee28a1f3c799319"),
    designSketch: [
        "http://localhost:99/upload/2021/11/27/202111272247_6745.647025132686.jpg",
        "http://localhost:99/upload/2021/11/27/202111272247_4619.585996469211.jpg"
    ],
    __v: NumberInt("0"),
    brandId: "61a2366c1b10f1139d84e507",
    categoryId: "61a23b711b10f1139d84e511",
    categoryName: "俊旅-红茶",
    goodsId: "c73187228798469d94e3a3850a97cd75",
    goodsName: "福茗源秒杀系列",
    goodsNo: "FMY-001",
    goodsType: NumberInt("2"),
    mixDetail: "<p><img src=\"http://localhost:99/upload/2021/11/27/1464607509917601792.jpg\" title=\"\" alt=\"5af2e514N5931048c.jpg\"/></p><p><img src=\"http://localhost:99/upload/2021/11/27/1464607539554553856.jpg\" title=\"\" alt=\"c48471bbedce7c0a.jpg\"/></p>",
    placeOrigin: "江苏",
    price: NumberInt("2342"),
    salesVolume: NumberInt("95"),
    skuName: "福茗源-细茶（热销\t）\t）",
    specValue1: "特价",
    specValue2: "热销",
    status: NumberInt("1"),
    weight: NumberInt("234")
} ]);
db.getCollection("goodsInfoList").insert([ {
    _id: ObjectId("61a244fb2ee28a1f3c79931a"),
    designSketch: [
        "http://localhost:99/upload/2021/11/27/202111272247_6050.966084392216.jpg"
    ],
    __v: NumberInt("0"),
    brandId: "61a2366c1b10f1139d84e507",
    categoryId: "61a23b711b10f1139d84e511",
    categoryName: "俊旅-红茶",
    goodsId: "c73187228798469d94e3a3850a97cd75",
    goodsName: "福茗源秒杀系列",
    goodsNo: "FMY-001",
    goodsType: NumberInt("2"),
    mixDetail: "<p><img src=\"http://localhost:99/upload/2021/11/27/1464607634064805888.jpg\" title=\"\" alt=\"1403c3fc34360acb.jpg\"/></p><p><img src=\"http://localhost:99/upload/2021/11/27/1464607655241846784.jpg\" title=\"\" alt=\"8549b3188052163a.jpg\"/></p>",
    placeOrigin: "江苏",
    price: NumberInt("2345"),
    salesVolume: NumberInt("48"),
    skuName: "福茗源-细茶（进口\t）",
    specValue1: "特价",
    specValue2: "进口",
    status: NumberInt("1"),
    weight: NumberInt("523")
} ]);
db.getCollection("goodsInfoList").insert([ {
    _id: ObjectId("61a244fb2ee28a1f3c79931b"),
    designSketch: [
        "http://localhost:99/upload/2021/11/27/202111272247_3483.186613564773.jpg"
    ],
    __v: NumberInt("0"),
    brandId: "61a2366c1b10f1139d84e507",
    categoryId: "61a23b711b10f1139d84e511",
    categoryName: "俊旅-红茶",
    goodsId: "c73187228798469d94e3a3850a97cd75",
    goodsName: "福茗源秒杀系列",
    goodsNo: "FMY-001",
    goodsType: NumberInt("2"),
    mixDetail: "<p><img src=\"http://localhost:99/upload/2021/11/27/1464607705787404288.jpg\" title=\"\" alt=\"c48471bbedce7c0a.jpg\"/></p><p><img src=\"http://localhost:99/upload/2021/11/27/1464607727497121792.jpg\" title=\"\" alt=\"cfc7d78f3e079822.jpg\"/></p>",
    placeOrigin: "江苏",
    price: NumberInt("2342"),
    salesVolume: NumberInt("23"),
    skuName: "福茗源-细茶（打折\t）",
    specValue1: "特价",
    specValue2: "打折",
    status: NumberInt("1"),
    weight: NumberInt("2342")
} ]);
db.getCollection("goodsInfoList").insert([ {
    _id: ObjectId("636f61ad3dd47b529c1e114b"),
    designSketch: [
        "http://localhost:99/upload/2022/11/12/202211121704_9319.130387934061.jpg"
    ],
    specValue1: "2432",
    specValue2: "234324",
    price: NumberInt("423343"),
    weight: NumberInt("2"),
    skuName: "2342",
    goodsId: "91eed240e4534ed3b6265f4d4d6e929a",
    goodsType: NumberInt("1"),
    categoryId: "61a2376f1b10f1139d84e50c",
    status: NumberInt("1"),
    brandName: "福茗源",
    categoryName: "红茶",
    brandId: "61a2366c1b10f1139d84e507",
    goodsNo: "12322",
    goodsName: "同仁堂养生茶1",
    placeOrigin: "2342",
    salesVolume: NumberInt("71"),
    __v: NumberInt("0")
} ]);
db.getCollection("goodsInfoList").insert([ {
    _id: ObjectId("6371abd50089a86074da9321"),
    designSketch: [
        "http://localhost:99/upload/2021/11/27/202111272258_3361.4240506109304.jpg",
        "http://localhost:99/upload/2021/11/27/202111272258_9451.99574027899.jpg",
        "http://localhost:99/upload/2021/11/27/202111272258_3459.3379473286423.jpg"
    ],
    specValue1: "特价",
    specValue2: "特惠",
    price: NumberInt("432"),
    weight: NumberInt("532"),
    skuName: "同仁堂粗茶（特惠）",
    goodsId: "7cb3cf04356946b5aa70bbd6af376ac0",
    goodsType: NumberInt("1"),
    categoryId: "61a2467d2ee28a1f3c79931d",
    status: NumberInt("1"),
    categoryName: "同仁堂养生茶",
    brandId: "61a2367c1b10f1139d84e508",
    goodsNo: "TRT-001",
    goodsName: "同仁堂养生茶",
    placeOrigin: "南京",
    salesVolume: NumberInt("51"),
    __v: NumberInt("0")
} ]);
db.getCollection("goodsInfoList").insert([ {
    _id: ObjectId("6371abd50089a86074da9322"),
    designSketch: [
        "http://localhost:99/upload/2021/11/27/202111272258_1012.2367023378831.jpg",
        "http://localhost:99/upload/2021/11/27/202111272258_3768.9425102657315.jpg",
        "http://localhost:99/upload/2021/11/27/202111272258_3848.973638913673.jpg"
    ],
    specValue1: "特价",
    specValue2: "畅销",
    price: NumberInt("342"),
    weight: NumberInt("234"),
    skuName: "同仁堂粗茶（畅销）",
    goodsId: "7cb3cf04356946b5aa70bbd6af376ac0",
    goodsType: NumberInt("1"),
    categoryId: "61a2467d2ee28a1f3c79931d",
    status: NumberInt("1"),
    categoryName: "同仁堂养生茶",
    brandId: "61a2367c1b10f1139d84e508",
    goodsNo: "TRT-001",
    goodsName: "同仁堂养生茶",
    placeOrigin: "南京",
    salesVolume: NumberInt("0"),
    __v: NumberInt("0")
} ]);
db.getCollection("goodsInfoList").insert([ {
    _id: ObjectId("6371abd50089a86074da9323"),
    designSketch: [
        "http://localhost:99/upload/2021/11/27/202111272259_6274.560253740611.jpg",
        "http://localhost:99/upload/2021/11/27/202111272259_6867.74781891121.jpg",
        "http://localhost:99/upload/2021/11/27/202111272259_4770.047019345673.jpg"
    ],
    specValue1: "特价",
    specValue2: "特产",
    price: NumberInt("53"),
    weight: NumberInt("53"),
    skuName: "同仁堂粗茶（特产）",
    goodsId: "7cb3cf04356946b5aa70bbd6af376ac0",
    goodsType: NumberInt("1"),
    categoryId: "61a2467d2ee28a1f3c79931d",
    status: NumberInt("1"),
    categoryName: "同仁堂养生茶",
    brandId: "61a2367c1b10f1139d84e508",
    goodsNo: "TRT-001",
    goodsName: "同仁堂养生茶",
    placeOrigin: "南京",
    salesVolume: NumberInt("93"),
    __v: NumberInt("0")
} ]);
db.getCollection("goodsInfoList").insert([ {
    _id: ObjectId("6371abd50089a86074da9324"),
    designSketch: [
        "http://localhost:99/upload/2021/11/27/202111272300_5072.004267931629.jpg"
    ],
    specValue1: "特价",
    specValue2: "打折",
    price: NumberInt("642"),
    weight: NumberInt("89"),
    skuName: "同仁堂粗茶（打折）",
    goodsId: "7cb3cf04356946b5aa70bbd6af376ac0",
    goodsType: NumberInt("1"),
    categoryId: "61a2467d2ee28a1f3c79931d",
    status: NumberInt("1"),
    categoryName: "同仁堂养生茶",
    brandId: "61a2367c1b10f1139d84e508",
    goodsNo: "TRT-001",
    goodsName: "同仁堂养生茶",
    placeOrigin: "南京",
    salesVolume: NumberInt("98"),
    __v: NumberInt("0")
} ]);
db.getCollection("goodsInfoList").insert([ {
    _id: ObjectId("6371abd50089a86074da9325"),
    designSketch: [
        "http://localhost:99/upload/2021/11/27/202111272259_1146.2757390986656.jpg",
        "http://localhost:99/upload/2021/11/27/202111272259_7094.136266256574.jpg",
        "http://localhost:99/upload/2021/11/27/202111272259_8973.896864319704.jpg"
    ],
    specValue1: "进口",
    specValue2: "特惠",
    price: NumberInt("234"),
    weight: NumberInt("52"),
    skuName: "同仁堂细茶（特惠）",
    goodsId: "7cb3cf04356946b5aa70bbd6af376ac0",
    goodsType: NumberInt("1"),
    categoryId: "61a2467d2ee28a1f3c79931d",
    status: NumberInt("1"),
    categoryName: "同仁堂养生茶",
    brandId: "61a2367c1b10f1139d84e508",
    goodsNo: "TRT-001",
    goodsName: "同仁堂养生茶",
    placeOrigin: "南京",
    salesVolume: NumberInt("63"),
    __v: NumberInt("0")
} ]);
db.getCollection("goodsInfoList").insert([ {
    _id: ObjectId("6371abd50089a86074da9326"),
    designSketch: [
        "http://localhost:99/upload/2021/11/27/202111272259_9358.250795437925.jpg",
        "http://localhost:99/upload/2021/11/27/202111272259_7734.167351587283.jpg",
        "http://localhost:99/upload/2021/11/27/202111272259_5007.180768361841.jpg"
    ],
    specValue1: "进口",
    specValue2: "畅销",
    price: NumberInt("532"),
    weight: NumberInt("235"),
    skuName: "同仁堂细茶（畅销）",
    goodsId: "7cb3cf04356946b5aa70bbd6af376ac0",
    goodsType: NumberInt("1"),
    categoryId: "61a2467d2ee28a1f3c79931d",
    status: NumberInt("1"),
    categoryName: "同仁堂养生茶",
    brandId: "61a2367c1b10f1139d84e508",
    goodsNo: "TRT-001",
    goodsName: "同仁堂养生茶",
    placeOrigin: "南京",
    salesVolume: NumberInt("93"),
    __v: NumberInt("0")
} ]);
db.getCollection("goodsInfoList").insert([ {
    _id: ObjectId("6371abd50089a86074da9327"),
    designSketch: [
        "http://localhost:99/upload/2021/11/27/202111272259_2457.526303918125.jpg",
        "http://localhost:99/upload/2021/11/27/202111272259_4498.002295748571.jpg",
        "http://localhost:99/upload/2021/11/27/202111272259_2246.1670092868835.jpg",
        "http://localhost:99/upload/2021/11/27/202111272259_1457.1075882674434.jpg"
    ],
    specValue1: "进口",
    specValue2: "特产",
    price: NumberInt("235"),
    weight: NumberInt("52"),
    skuName: "同仁堂细茶（特产）",
    goodsId: "7cb3cf04356946b5aa70bbd6af376ac0",
    goodsType: NumberInt("2"),
    categoryId: "61a2467d2ee28a1f3c79931d",
    status: NumberInt("1"),
    categoryName: "同仁堂养生茶",
    brandId: "61a2367c1b10f1139d84e508",
    goodsNo: "TRT-001",
    goodsName: "同仁堂养生茶",
    placeOrigin: "南京",
    salesVolume: NumberInt("30"),
    __v: NumberInt("0")
} ]);
db.getCollection("goodsInfoList").insert([ {
    _id: ObjectId("6371abd50089a86074da9328"),
    designSketch: [
        "http://localhost:99/upload/2021/11/27/202111272300_8372.508873417843.jpg",
        "http://localhost:99/upload/2021/11/27/202111272300_2255.487955340725.jpg"
    ],
    specValue1: "进口",
    specValue2: "打折",
    price: NumberInt("2342"),
    weight: NumberInt("235"),
    skuName: "同仁堂细茶（打折）",
    goodsId: "7cb3cf04356946b5aa70bbd6af376ac0",
    goodsType: NumberInt("1"),
    categoryId: "61a2467d2ee28a1f3c79931d",
    status: NumberInt("1"),
    categoryName: "同仁堂养生茶",
    brandId: "61a2367c1b10f1139d84e508",
    goodsNo: "TRT-001",
    goodsName: "同仁堂养生茶",
    placeOrigin: "南京",
    salesVolume: NumberInt("85"),
    __v: NumberInt("0")
} ]);
db.getCollection("goodsInfoList").insert([ {
    _id: ObjectId("637b3ad49399528148030b3b"),
    designSketch: [
        "http://localhost:99/upload/2021/11/27/202111282108_2775.41719330457.jpg",
        "http://localhost:99/upload/2021/11/27/202111282108_502.42827062921157.jpg",
        "http://localhost:99/upload/2021/11/27/202111282108_9519.969167433801.jpg",
        "http://localhost:99/upload/2021/11/27/202111282108_5615.833330251993.jpg",
        "http://localhost:99/upload/2021/11/27/202111282108_1682.0637484910383.jpg",
        "http://localhost:99/upload/2021/11/27/202111282108_596.1914898784526.jpg",
        "http://localhost:99/upload/2021/11/27/202111282108_691.0970340981982.jpg"
    ],
    specValue1: "特价",
    specValue2: "热销",
    price: NumberInt("534"),
    weight: NumberInt("242"),
    skuName: "忆江南花草茶打折",
    goodsId: "03041c0a22cc4862b062326658daada5",
    goodsType: NumberInt("2"),
    categoryId: "61a3790c724c4b27b17e8c72",
    status: NumberInt("1"),
    categoryName: "忆江南花草茶",
    brandId: "61a236931b10f1139d84e50a",
    goodsNo: "YJL-002",
    goodsName: "忆江南花草",
    placeOrigin: "宣化",
    salesVolume: NumberInt("61"),
    __v: NumberInt("0")
} ]);
db.getCollection("goodsInfoList").insert([ {
    _id: ObjectId("637b3ad49399528148030b3c"),
    designSketch: [
        "http://localhost:99/upload/2021/11/27/202111282108_6615.394017002612.jpg",
        "http://localhost:99/upload/2021/11/27/202111282108_4296.225109436089.jpg",
        "http://localhost:99/upload/2021/11/27/202111282108_3785.926868623175.jpg"
    ],
    specValue1: "特价",
    specValue2: "打折",
    price: NumberInt("64"),
    weight: NumberInt("42"),
    skuName: "忆江南花草茶热销",
    goodsId: "03041c0a22cc4862b062326658daada5",
    goodsType: NumberInt("1"),
    categoryId: "61a3790c724c4b27b17e8c72",
    status: NumberInt("1"),
    categoryName: "忆江南花草茶",
    brandId: "61a236931b10f1139d84e50a",
    goodsNo: "YJL-002",
    goodsName: "忆江南花草",
    placeOrigin: "宣化",
    salesVolume: NumberInt("82"),
    __v: NumberInt("0")
} ]);
db.getCollection("goodsInfoList").insert([ {
    _id: ObjectId("637b3ad49399528148030b3d"),
    designSketch: [
        "http://localhost:99/upload/2021/11/27/202111282109_7739.274255888225.jpg",
        "http://localhost:99/upload/2021/11/27/202111282109_5918.731919050224.jpg",
        "http://localhost:99/upload/2021/11/27/202111282109_6273.15275928658.jpg",
        "http://localhost:99/upload/2021/11/27/202111282109_1745.5555300156834.jpg"
    ],
    specValue1: "正品",
    specValue2: "热销",
    price: NumberInt("234"),
    weight: NumberInt("523"),
    skuName: "忆江南花草茶正品（热销）",
    goodsId: "03041c0a22cc4862b062326658daada5",
    goodsType: NumberInt("1"),
    categoryId: "61a3790c724c4b27b17e8c72",
    status: NumberInt("1"),
    categoryName: "忆江南花草茶",
    brandId: "61a236931b10f1139d84e50a",
    goodsNo: "YJL-002",
    goodsName: "忆江南花草",
    placeOrigin: "宣化",
    salesVolume: NumberInt("97"),
    __v: NumberInt("0")
} ]);
db.getCollection("goodsInfoList").insert([ {
    _id: ObjectId("637b3ad49399528148030b3e"),
    designSketch: [
        "http://localhost:99/upload/2021/11/27/202111282109_5870.790604722198.jpg",
        "http://localhost:99/upload/2021/11/27/202111282109_4385.168303988589.jpg",
        "http://localhost:99/upload/2021/11/27/202111282109_1847.3014666683096.jpg",
        "http://localhost:99/upload/2021/11/27/202111282109_9807.569552687508.jpg"
    ],
    specValue1: "正品",
    specValue2: "打折",
    price: NumberInt("523"),
    weight: NumberInt("234"),
    skuName: "忆江南花草茶打折",
    goodsId: "03041c0a22cc4862b062326658daada5",
    goodsType: NumberInt("1"),
    categoryId: "61a3790c724c4b27b17e8c72",
    status: NumberInt("1"),
    categoryName: "忆江南花草茶",
    brandId: "61a236931b10f1139d84e50a",
    goodsNo: "YJL-002",
    goodsName: "忆江南花草",
    placeOrigin: "宣化",
    salesVolume: NumberInt("26"),
    __v: NumberInt("0")
} ]);
db.getCollection("goodsInfoList").insert([ {
    _id: ObjectId("63841fa413d821b5509b4e51"),
    designSketch: [
        "http://localhost:99/upload/2022/11/13/202211132136_6829.416190781297.jpg"
    ],
    specValue1: "131",
    specValue2: "12313",
    specValue3: "sgf",
    price: NumberInt("1000000"),
    weight: NumberInt("423424"),
    skuName: "施工方",
    goodsId: "e77d36687ae249a08598736d0913672e",
    goodsType: NumberInt("1"),
    categoryId: "61a23b711b10f1139d84e511",
    status: NumberInt("1"),
    categoryName: "俊旅-红茶",
    brandId: "61a235941b10f1139d84e506",
    goodsNo: "321",
    goodsName: "2",
    placeOrigin: "123",
    salesVolume: NumberInt("84"),
    __v: NumberInt("0")
} ]);
db.getCollection("goodsInfoList").insert([ {
    _id: ObjectId("63841fa413d821b5509b4e52"),
    designSketch: [
        "http://localhost:99/upload/2022/11/13/202211132136_5968.766316754348.jpg"
    ],
    specValue1: "131",
    specValue2: "12313",
    specValue3: "gfsgsgfsgss",
    price: NumberInt("2424"),
    weight: NumberInt("2424"),
    skuName: "是分公司",
    goodsId: "e77d36687ae249a08598736d0913672e",
    goodsType: NumberInt("1"),
    categoryId: "61a23b711b10f1139d84e511",
    status: NumberInt("1"),
    categoryName: "俊旅-红茶",
    brandId: "61a235941b10f1139d84e506",
    goodsNo: "321",
    goodsName: "2",
    placeOrigin: "123",
    salesVolume: NumberInt("4"),
    __v: NumberInt("0")
} ]);
db.getCollection("goodsInfoList").insert([ {
    _id: ObjectId("63841fa413d821b5509b4e53"),
    designSketch: [
        "http://localhost:99/upload/2022/11/13/202211132137_4458.6292106693645.jpg"
    ],
    specValue1: "131",
    specValue2: "dfgdgd",
    specValue3: "sgf",
    price: NumberInt("424"),
    weight: NumberInt("2424"),
    skuName: "sgfgs给都",
    goodsId: "e77d36687ae249a08598736d0913672e",
    goodsType: NumberInt("1"),
    categoryId: "61a23b711b10f1139d84e511",
    status: NumberInt("1"),
    categoryName: "俊旅-红茶",
    brandId: "61a235941b10f1139d84e506",
    goodsNo: "321",
    goodsName: "2",
    placeOrigin: "123",
    salesVolume: NumberInt("89"),
    __v: NumberInt("0")
} ]);
db.getCollection("goodsInfoList").insert([ {
    _id: ObjectId("63841fa413d821b5509b4e54"),
    designSketch: [
        "http://localhost:99/upload/2022/11/13/202211132137_6212.182593893028.jpg"
    ],
    specValue1: "131",
    specValue2: "dfgdgd",
    specValue3: "gfsgsgfsgss",
    price: NumberInt("2342"),
    weight: NumberInt("1000000"),
    skuName: "dgsg死光光",
    goodsId: "e77d36687ae249a08598736d0913672e",
    goodsType: NumberInt("1"),
    categoryId: "61a23b711b10f1139d84e511",
    status: NumberInt("1"),
    categoryName: "俊旅-红茶",
    brandId: "61a235941b10f1139d84e506",
    goodsNo: "321",
    goodsName: "2",
    placeOrigin: "123",
    salesVolume: NumberInt("96"),
    __v: NumberInt("0")
} ]);
db.getCollection("goodsInfoList").insert([ {
    _id: ObjectId("63841fa413d821b5509b4e55"),
    designSketch: [
        "http://localhost:99/upload/2022/11/13/202211132137_5703.502293585257.jpg"
    ],
    specValue1: "131",
    specValue2: "sggsgs",
    specValue3: "sgf",
    price: NumberInt("4234"),
    weight: NumberInt("24"),
    skuName: "sgfss's'g",
    goodsId: "e77d36687ae249a08598736d0913672e",
    goodsType: NumberInt("1"),
    categoryId: "61a23b711b10f1139d84e511",
    status: NumberInt("1"),
    categoryName: "俊旅-红茶",
    brandId: "61a235941b10f1139d84e506",
    goodsNo: "321",
    goodsName: "2",
    placeOrigin: "123",
    salesVolume: NumberInt("47"),
    __v: NumberInt("0")
} ]);
db.getCollection("goodsInfoList").insert([ {
    _id: ObjectId("63841fa413d821b5509b4e56"),
    designSketch: [
        "http://localhost:99/upload/2022/11/13/202211132137_8592.324065920217.jpg"
    ],
    specValue1: "131",
    specValue2: "sggsgs",
    specValue3: "gfsgsgfsgss",
    price: NumberInt("23424"),
    weight: NumberInt("243242"),
    skuName: "ssg",
    goodsId: "e77d36687ae249a08598736d0913672e",
    goodsType: NumberInt("1"),
    categoryId: "61a23b711b10f1139d84e511",
    status: NumberInt("1"),
    categoryName: "俊旅-红茶",
    brandId: "61a235941b10f1139d84e506",
    goodsNo: "321",
    goodsName: "2",
    placeOrigin: "123",
    salesVolume: NumberInt("57"),
    __v: NumberInt("0")
} ]);
db.getCollection("goodsInfoList").insert([ {
    _id: ObjectId("63841fa413d821b5509b4e57"),
    designSketch: [
        "http://localhost:99/upload/2022/11/13/202211132137_5112.694255484913.jpg"
    ],
    specValue1: "123131",
    specValue2: "12313",
    specValue3: "sgf",
    price: NumberInt("23424"),
    weight: NumberInt("234"),
    skuName: "诗歌风格",
    goodsId: "e77d36687ae249a08598736d0913672e",
    goodsType: NumberInt("1"),
    categoryId: "61a23b711b10f1139d84e511",
    status: NumberInt("1"),
    categoryName: "俊旅-红茶",
    brandId: "61a235941b10f1139d84e506",
    goodsNo: "321",
    goodsName: "2",
    placeOrigin: "123",
    salesVolume: NumberInt("49"),
    __v: NumberInt("0")
} ]);
db.getCollection("goodsInfoList").insert([ {
    _id: ObjectId("63841fa413d821b5509b4e58"),
    designSketch: [
        "http://localhost:99/upload/2022/11/13/202211132137_4277.069812709653.jpg"
    ],
    specValue1: "123131",
    specValue2: "12313",
    specValue3: "gfsgsgfsgss",
    price: NumberInt("23442"),
    weight: NumberInt("242"),
    skuName: "s归属感",
    goodsId: "e77d36687ae249a08598736d0913672e",
    goodsType: NumberInt("1"),
    categoryId: "61a23b711b10f1139d84e511",
    status: NumberInt("1"),
    categoryName: "俊旅-红茶",
    brandId: "61a235941b10f1139d84e506",
    goodsNo: "321",
    goodsName: "2",
    placeOrigin: "123",
    salesVolume: NumberInt("73"),
    __v: NumberInt("0")
} ]);
db.getCollection("goodsInfoList").insert([ {
    _id: ObjectId("63841fa413d821b5509b4e59"),
    designSketch: [
        "http://localhost:99/upload/2022/11/13/202211132137_7369.732052148417.jpg"
    ],
    specValue1: "123131",
    specValue2: "dfgdgd",
    specValue3: "sgf",
    price: NumberInt("2342"),
    weight: NumberInt("2342"),
    skuName: "式管s",
    goodsId: "e77d36687ae249a08598736d0913672e",
    goodsType: NumberInt("1"),
    categoryId: "61a23b711b10f1139d84e511",
    status: NumberInt("1"),
    categoryName: "俊旅-红茶",
    brandId: "61a235941b10f1139d84e506",
    goodsNo: "321",
    goodsName: "2",
    placeOrigin: "123",
    salesVolume: NumberInt("33"),
    __v: NumberInt("0")
} ]);
db.getCollection("goodsInfoList").insert([ {
    _id: ObjectId("63841fa413d821b5509b4e5a"),
    designSketch: [
        "http://localhost:99/upload/2022/11/13/202211132137_9674.440801580904.jpg"
    ],
    specValue1: "123131",
    specValue2: "dfgdgd",
    specValue3: "gfsgsgfsgss",
    price: NumberInt("42"),
    weight: NumberInt("423432"),
    skuName: "s是个十分",
    goodsId: "e77d36687ae249a08598736d0913672e",
    goodsType: NumberInt("1"),
    categoryId: "61a23b711b10f1139d84e511",
    status: NumberInt("1"),
    categoryName: "俊旅-红茶",
    brandId: "61a235941b10f1139d84e506",
    goodsNo: "321",
    goodsName: "2",
    placeOrigin: "123",
    salesVolume: NumberInt("33"),
    __v: NumberInt("0")
} ]);
db.getCollection("goodsInfoList").insert([ {
    _id: ObjectId("63841fa413d821b5509b4e5b"),
    designSketch: [
        "http://localhost:99/upload/2022/11/13/202211132137_8083.444265350888.jpg"
    ],
    specValue1: "123131",
    specValue2: "sggsgs",
    specValue3: "sgf",
    price: NumberInt("2342"),
    weight: NumberInt("242"),
    skuName: "诗歌风格三个",
    goodsId: "e77d36687ae249a08598736d0913672e",
    goodsType: NumberInt("2"),
    categoryId: "61a23b711b10f1139d84e511",
    status: NumberInt("1"),
    categoryName: "俊旅-红茶",
    brandId: "61a235941b10f1139d84e506",
    goodsNo: "321",
    goodsName: "2",
    placeOrigin: "123",
    salesVolume: NumberInt("78"),
    __v: NumberInt("0")
} ]);
db.getCollection("goodsInfoList").insert([ {
    _id: ObjectId("63841fa413d821b5509b4e5c"),
    designSketch: [
        "http://localhost:99/upload/2022/11/13/202211132137_5071.801806685743.jpg"
    ],
    specValue1: "123131",
    specValue2: "sggsgs",
    specValue3: "gfsgsgfsgss",
    price: NumberInt("32"),
    weight: NumberInt("324244"),
    skuName: "是分公司鬼斧神工",
    goodsId: "e77d36687ae249a08598736d0913672e",
    goodsType: NumberInt("1"),
    categoryId: "61a23b711b10f1139d84e511",
    status: NumberInt("1"),
    categoryName: "俊旅-红茶",
    brandId: "61a235941b10f1139d84e506",
    goodsNo: "321",
    goodsName: "2",
    placeOrigin: "123",
    salesVolume: NumberInt("48"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for goodsSpaceList
// ----------------------------
db.getCollection("goodsSpaceList").drop();
db.createCollection("goodsSpaceList");

// ----------------------------
// Documents of goodsSpaceList
// ----------------------------
db.getCollection("goodsSpaceList").insert([ {
    _id: ObjectId("61a23cfd1b10f1139d84e512"),
    __v: NumberInt("0"),
    brandId: "61a235941b10f1139d84e506",
    brandName: "丁香茶",
    categoryId: "61a23b4a1b10f1139d84e510",
    categoryName: "乐品乐-绿茶",
    goodsId: "17dbf970aa8e4bfab9d1741a31260793",
    goodsName: "绿茶-丁香茶系列",
    goodsNo: "DXC-001",
    placeOrigin: "四川成都",
    spaceValueList: [
        {
            spaceName: "丁香粗茶",
            key: NumberInt("-1"),
            mixList: [
                {
                    specValue: "特价",
                    key: 144.81937121725,
                    isShowInp: false
                },
                {
                    specValue: "热卖",
                    key: 49.7914614396724,
                    isShowInp: false
                }
            ]
        },
        {
            spaceName: "丁香细茶",
            key: 44.3505211575919,
            mixList: [
                {
                    specValue: "热销",
                    key: 144.958273970274,
                    isShowInp: false
                },
                {
                    specValue: "进口",
                    key: 115.796709385444,
                    isShowInp: false
                }
            ]
        }
    ]
} ]);
db.getCollection("goodsSpaceList").insert([ {
    _id: ObjectId("61a244fb2ee28a1f3c799315"),
    __v: NumberInt("0"),
    brandId: "61a2366c1b10f1139d84e507",
    brandName: null,
    categoryId: "61a23b711b10f1139d84e511",
    categoryName: "俊旅-红茶",
    goodsId: "c73187228798469d94e3a3850a97cd75",
    goodsName: "福茗源秒杀系列",
    goodsNo: "FMY-001",
    placeOrigin: "江苏",
    spaceValueList: [
        {
            spaceName: "福茗源-粗茶",
            key: NumberInt("-1"),
            mixList: [
                {
                    specValue: "秒杀",
                    key: 165.352622886829,
                    isShowInp: false
                },
                {
                    specValue: "特价",
                    key: 491.793165656407,
                    isShowInp: false
                }
            ]
        },
        {
            spaceName: "福茗源-细茶",
            key: 54.3604224085039,
            mixList: [
                {
                    specValue: "热销",
                    key: 396.445424651556,
                    isShowInp: false
                },
                {
                    specValue: "进口",
                    key: 835.085845238562,
                    isShowInp: false
                },
                {
                    specValue: "打折",
                    key: 312.663432277804,
                    isShowInp: false
                }
            ]
        }
    ]
} ]);
db.getCollection("goodsSpaceList").insert([ {
    _id: ObjectId("61a248172ee28a1f3c79931e"),
    __v: NumberInt("0"),
    brandId: "61a2367c1b10f1139d84e508",
    brandName: null,
    categoryId: "61a2467d2ee28a1f3c79931d",
    categoryName: "同仁堂养生茶",
    goodsId: "7cb3cf04356946b5aa70bbd6af376ac0",
    goodsName: "同仁堂养生茶",
    goodsNo: "TRT-001",
    placeOrigin: "南京",
    spaceValueList: [
        {
            spaceName: "养生茶粗茶",
            key: NumberInt("-1"),
            mixList: [
                {
                    specValue: "特价",
                    key: 651.534023294245,
                    isShowInp: false
                },
                {
                    specValue: "进口",
                    key: 721.12438453488,
                    isShowInp: false
                }
            ]
        },
        {
            spaceName: "养生茶细茶",
            key: 529.972386541421,
            mixList: [
                {
                    specValue: "特惠",
                    key: 87.1774150992004,
                    isShowInp: false
                },
                {
                    specValue: "畅销",
                    key: 793.979448614573,
                    isShowInp: false
                },
                {
                    specValue: "特产",
                    key: 595.892938609501,
                    isShowInp: false
                },
                {
                    specValue: "打折",
                    key: 698.151097378984,
                    isShowInp: false
                }
            ]
        }
    ]
} ]);
db.getCollection("goodsSpaceList").insert([ {
    _id: ObjectId("61a24eb4724c4b27b17e8c58"),
    __v: NumberInt("0"),
    brandId: "61a236851b10f1139d84e509",
    brandName: "花果茶",
    categoryId: "61a23b4a1b10f1139d84e510",
    categoryName: "乐品乐-绿茶",
    goodsId: "349f459516ca413bb25df1931d13b35c",
    goodsName: "乐品乐花果茶\t",
    goodsNo: "LPL-002",
    placeOrigin: "山东",
    spaceValueList: [
        {
            spaceName: "细茶",
            key: NumberInt("-1"),
            mixList: [
                {
                    specValue: "特价",
                    key: 727.206252162901,
                    isShowInp: false
                },
                {
                    specValue: "限时",
                    key: 666.467347720122,
                    isShowInp: false
                }
            ]
        },
        {
            spaceName: "粗茶",
            key: 263.92273628379,
            mixList: [
                {
                    specValue: "秒杀",
                    key: 109.360211970121,
                    isShowInp: false
                },
                {
                    specValue: "限时",
                    key: 370.275966664182,
                    isShowInp: false
                }
            ]
        }
    ]
} ]);
db.getCollection("goodsSpaceList").insert([ {
    _id: ObjectId("61a37f88724c4b27b17e8c8a"),
    __v: NumberInt("0"),
    brandId: "61a236931b10f1139d84e50a",
    brandName: null,
    categoryId: "61a3790c724c4b27b17e8c72",
    categoryName: "忆江南花草茶",
    goodsId: "03041c0a22cc4862b062326658daada5",
    goodsName: "忆江南花草",
    goodsNo: "YJL-002",
    placeOrigin: "宣化",
    spaceValueList: [
        {
            spaceName: "袋装",
            key: NumberInt("-1"),
            mixList: [
                {
                    specValue: "特价",
                    key: 108.901733801295,
                    isShowInp: false
                },
                {
                    specValue: "正品",
                    key: 941.459252269231,
                    isShowInp: false
                }
            ]
        },
        {
            spaceName: "盒装",
            key: 461.05030416983,
            mixList: [
                {
                    specValue: "热销",
                    key: 466.340792608588,
                    isShowInp: false
                },
                {
                    specValue: "打折",
                    key: 763.970646051707,
                    isShowInp: false
                }
            ]
        }
    ]
} ]);
db.getCollection("goodsSpaceList").insert([ {
    _id: ObjectId("61a38050724c4b27b17e8c8f"),
    __v: NumberInt("0"),
    brandId: "61a236851b10f1139d84e509",
    brandName: "花果茶",
    categoryId: "61a3790c724c4b27b17e8c72",
    categoryName: "忆江南花草茶",
    goodsId: "cff8ea613fab4f2787314628ac5942d9",
    goodsName: "忆江南花果茶",
    goodsNo: "YJN-002",
    placeOrigin: "宣化",
    spaceValueList: [
        {
            spaceName: "盒装",
            key: NumberInt("-1"),
            mixList: [
                {
                    specValue: "正品",
                    key: 708.45268858147,
                    isShowInp: false
                },
                {
                    specValue: "促销",
                    key: 244.642431327531,
                    isShowInp: false
                }
            ]
        },
        {
            spaceName: "袋装",
            key: 484.29629114287,
            mixList: [
                {
                    specValue: "打折",
                    key: 690.291198665772,
                    isShowInp: false
                },
                {
                    specValue: "热卖",
                    key: 75.4965084014747,
                    isShowInp: false
                }
            ]
        }
    ]
} ]);
db.getCollection("goodsSpaceList").insert([ {
    _id: ObjectId("61a3816a724c4b27b17e8c94"),
    __v: NumberInt("0"),
    brandId: "61a236851b10f1139d84e509",
    brandName: "花果茶",
    categoryId: "61a3790c724c4b27b17e8c72",
    categoryName: "忆江南花草茶",
    goodsId: "b65e608eb3624263956b56ad233b94e1",
    goodsName: "忆江南花草",
    goodsNo: "YJN-002",
    placeOrigin: "大同",
    spaceValueList: [
        {
            spaceName: "袋装",
            key: NumberInt("-1"),
            mixList: [
                {
                    specValue: "正品",
                    key: 98.9405570772544,
                    isShowInp: false
                },
                {
                    specValue: "特价",
                    key: 659.643080075013,
                    isShowInp: false
                },
                {
                    specValue: "促销",
                    key: 536.959674667954,
                    isShowInp: false
                }
            ]
        }
    ]
} ]);
db.getCollection("goodsSpaceList").insert([ {
    _id: ObjectId("6311e3f7450ab00378097abc"),
    spaceValueList: [
        {
            spaceName: "13",
            key: NumberInt("-1"),
            mixList: [
                {
                    specValue: "131",
                    key: 962.703971755708,
                    isShowInp: true
                },
                {
                    specValue: "123131",
                    key: 325.673870956402,
                    isShowInp: false
                }
            ]
        },
        {
            spaceName: "123131231",
            key: 758.562106811803,
            mixList: [
                {
                    specValue: "12313",
                    key: 254.8531290536,
                    isShowInp: false
                },
                {
                    specValue: "dfgdgd",
                    key: 374.128616254414,
                    isShowInp: false
                },
                {
                    specValue: "sggsgs",
                    key: 191.402814363985,
                    isShowInp: false
                }
            ]
        },
        {
            spaceName: "22gfsg",
            key: 804.736242462193,
            mixList: [
                {
                    specValue: "sgf",
                    key: 141.809737056418,
                    isShowInp: false
                },
                {
                    specValue: "gfsgsgfsgss",
                    key: 504.328439786631,
                    isShowInp: false
                }
            ]
        }
    ],
    goodsName: "2",
    placeOrigin: "123",
    brandName: null,
    categoryId: "61a23b711b10f1139d84e511",
    brandId: "61a235941b10f1139d84e506",
    goodsNo: "321",
    goodsId: "e77d36687ae249a08598736d0913672e",
    __v: NumberInt("0"),
    categoryName: "俊旅-红茶"
} ]);
db.getCollection("goodsSpaceList").insert([ {
    _id: ObjectId("6311e5685e3afdaecc8d1e49"),
    spaceValueList: [
        {
            spaceName: "13",
            key: NumberInt("-1"),
            mixList: [
                {
                    specValue: "131",
                    key: 962.703971755708,
                    isShowInp: false
                }
            ]
        }
    ],
    goodsName: "2",
    categoryName: "同仁堂养生茶",
    categoryId: "61a2467d2ee28a1f3c79931d",
    brandId: "61a235941b10f1139d84e506",
    goodsNo: "321",
    goodsId: "e77d36687ae249a08598736d0913672e",
    placeOrigin: "123",
    __v: NumberInt("0")
} ]);
db.getCollection("goodsSpaceList").insert([ {
    _id: ObjectId("6367c9b776cbac4f28c79437"),
    spaceValueList: [
        {
            spaceName: "福茗源-粗茶",
            key: NumberInt("-1"),
            mixList: [
                {
                    specValue: "秒杀",
                    key: 165.352622886829,
                    isShowInp: false
                },
                {
                    specValue: "特价",
                    key: 491.793165656407,
                    isShowInp: false
                }
            ]
        },
        {
            spaceName: "福茗源-细茶",
            key: 54.3604224085039,
            mixList: [
                {
                    specValue: "热销",
                    key: 396.445424651556,
                    isShowInp: false
                },
                {
                    specValue: "进口",
                    key: 835.085845238562,
                    isShowInp: false
                },
                {
                    specValue: "打折",
                    key: 312.663432277804,
                    isShowInp: false
                }
            ]
        }
    ],
    goodsName: "福茗源秒杀系列",
    categoryName: "俊旅-红茶",
    categoryId: "61a23b711b10f1139d84e511",
    brandId: "61a2366c1b10f1139d84e507",
    goodsNo: "FMY-001",
    goodsId: "c73187228798469d94e3a3850a97cd75",
    placeOrigin: "江苏",
    __v: NumberInt("0")
} ]);
db.getCollection("goodsSpaceList").insert([ {
    _id: ObjectId("6367ca610b5a2d5214349102"),
    spaceValueList: [
        {
            spaceName: "福茗源-粗茶",
            key: NumberInt("-1"),
            mixList: [
                {
                    specValue: "秒杀",
                    key: 165.352622886829,
                    isShowInp: false
                },
                {
                    specValue: "特价",
                    key: 491.793165656407,
                    isShowInp: false
                }
            ]
        },
        {
            spaceName: "福茗源-细茶",
            key: 54.3604224085039,
            mixList: [
                {
                    specValue: "热销",
                    key: 396.445424651556,
                    isShowInp: false
                },
                {
                    specValue: "进口",
                    key: 835.085845238562,
                    isShowInp: false
                },
                {
                    specValue: "打折",
                    key: 312.663432277804,
                    isShowInp: false
                }
            ]
        }
    ],
    goodsName: "福茗源秒杀系列",
    categoryName: "俊旅-红茶",
    categoryId: "61a23b711b10f1139d84e511",
    brandId: "61a2366c1b10f1139d84e507",
    goodsNo: "FMY-001",
    goodsId: "c73187228798469d94e3a3850a97cd75",
    placeOrigin: "江苏",
    __v: NumberInt("0")
} ]);
db.getCollection("goodsSpaceList").insert([ {
    _id: ObjectId("6367cabbdefdbf4aac12d67b"),
    spaceValueList: [
        {
            spaceName: "福茗源-粗茶",
            key: NumberInt("-1"),
            mixList: [
                {
                    specValue: "秒杀",
                    key: 165.352622886829,
                    isShowInp: false
                },
                {
                    specValue: "特价",
                    key: 491.793165656407,
                    isShowInp: false
                }
            ]
        },
        {
            spaceName: "福茗源-细茶",
            key: 54.3604224085039,
            mixList: [
                {
                    specValue: "热销",
                    key: 396.445424651556,
                    isShowInp: false
                },
                {
                    specValue: "进口",
                    key: 835.085845238562,
                    isShowInp: false
                },
                {
                    specValue: "打折",
                    key: 312.663432277804,
                    isShowInp: false
                }
            ]
        }
    ],
    goodsName: "福茗源秒杀系列",
    categoryName: "俊旅-红茶",
    categoryId: "61a23b711b10f1139d84e511",
    brandId: "61a2366c1b10f1139d84e507",
    goodsNo: "FMY-001",
    goodsId: "c73187228798469d94e3a3850a97cd75",
    placeOrigin: "江苏",
    __v: NumberInt("0")
} ]);
db.getCollection("goodsSpaceList").insert([ {
    _id: ObjectId("6367cad225627c1eb89ccae9"),
    spaceValueList: [
        {
            spaceName: "福茗源-粗茶",
            key: NumberInt("-1"),
            mixList: [
                {
                    specValue: "秒杀",
                    key: 165.352622886829,
                    isShowInp: false
                },
                {
                    specValue: "特价",
                    key: 491.793165656407,
                    isShowInp: false
                }
            ]
        },
        {
            spaceName: "福茗源-细茶",
            key: 54.3604224085039,
            mixList: [
                {
                    specValue: "热销",
                    key: 396.445424651556,
                    isShowInp: false
                },
                {
                    specValue: "进口",
                    key: 835.085845238562,
                    isShowInp: false
                },
                {
                    specValue: "打折",
                    key: 312.663432277804,
                    isShowInp: false
                }
            ]
        }
    ],
    goodsName: "福茗源秒杀系列",
    categoryName: "俊旅-红茶",
    categoryId: "61a23b711b10f1139d84e511",
    brandId: "61a2366c1b10f1139d84e507",
    goodsNo: "FMY-001",
    goodsId: "c73187228798469d94e3a3850a97cd75",
    placeOrigin: "江苏",
    __v: NumberInt("0")
} ]);
db.getCollection("goodsSpaceList").insert([ {
    _id: ObjectId("6367caf24068324544817dc6"),
    spaceValueList: [
        {
            spaceName: "养生茶粗茶",
            key: NumberInt("-1"),
            mixList: [
                {
                    specValue: "特价",
                    key: 651.534023294245,
                    isShowInp: false
                },
                {
                    specValue: "进口",
                    key: 721.12438453488,
                    isShowInp: false
                }
            ]
        },
        {
            spaceName: "养生茶细茶",
            key: 529.972386541421,
            mixList: [
                {
                    specValue: "特惠",
                    key: 87.1774150992004,
                    isShowInp: false
                },
                {
                    specValue: "畅销",
                    key: 793.979448614573,
                    isShowInp: false
                },
                {
                    specValue: "特产",
                    key: 595.892938609501,
                    isShowInp: false
                },
                {
                    specValue: "打折",
                    key: 698.151097378984,
                    isShowInp: false
                }
            ]
        }
    ],
    goodsName: "同仁堂养生茶",
    categoryName: "同仁堂养生茶",
    categoryId: "61a2467d2ee28a1f3c79931d",
    brandId: "61a2367c1b10f1139d84e508",
    goodsNo: "TRT-001",
    goodsId: "7cb3cf04356946b5aa70bbd6af376ac0",
    placeOrigin: "南京",
    __v: NumberInt("0")
} ]);
db.getCollection("goodsSpaceList").insert([ {
    _id: ObjectId("6367cafa4068324544817dcf"),
    spaceValueList: [
        {
            spaceName: "养生茶粗茶",
            key: NumberInt("-1"),
            mixList: [
                {
                    specValue: "特价",
                    key: 651.534023294245,
                    isShowInp: false
                },
                {
                    specValue: "进口",
                    key: 721.12438453488,
                    isShowInp: false
                }
            ]
        },
        {
            spaceName: "养生茶细茶",
            key: 529.972386541421,
            mixList: [
                {
                    specValue: "特惠",
                    key: 87.1774150992004,
                    isShowInp: false
                },
                {
                    specValue: "畅销",
                    key: 793.979448614573,
                    isShowInp: false
                },
                {
                    specValue: "特产",
                    key: 595.892938609501,
                    isShowInp: false
                },
                {
                    specValue: "打折",
                    key: 698.151097378984,
                    isShowInp: false
                }
            ]
        }
    ],
    goodsName: "同仁堂养生茶1",
    categoryName: "同仁堂养生茶",
    categoryId: "61a2467d2ee28a1f3c79931d",
    brandId: "61a2367c1b10f1139d84e508",
    goodsNo: "TRT-001",
    goodsId: "7cb3cf04356946b5aa70bbd6af376ac0",
    placeOrigin: "南京",
    __v: NumberInt("0")
} ]);
db.getCollection("goodsSpaceList").insert([ {
    _id: ObjectId("6367cb094068324544817dd8"),
    spaceValueList: [
        {
            spaceName: "袋装",
            key: NumberInt("-1"),
            mixList: [
                {
                    specValue: "特价",
                    key: 108.901733801295,
                    isShowInp: false
                },
                {
                    specValue: "正品",
                    key: 941.459252269231,
                    isShowInp: false
                }
            ]
        },
        {
            spaceName: "盒装",
            key: 461.05030416983,
            mixList: [
                {
                    specValue: "热销",
                    key: 466.340792608588,
                    isShowInp: false
                },
                {
                    specValue: "打折",
                    key: 763.970646051707,
                    isShowInp: false
                }
            ]
        }
    ],
    goodsName: "忆江南花草1",
    categoryName: "忆江南花草茶",
    categoryId: "61a3790c724c4b27b17e8c72",
    brandId: "61a236931b10f1139d84e50a",
    goodsNo: "YJL-002",
    goodsId: "03041c0a22cc4862b062326658daada5",
    placeOrigin: "宣化",
    __v: NumberInt("0")
} ]);
db.getCollection("goodsSpaceList").insert([ {
    _id: ObjectId("6367cb114068324544817ddd"),
    spaceValueList: [
        {
            spaceName: "盒装",
            key: NumberInt("-1"),
            mixList: [
                {
                    specValue: "正品",
                    key: 708.45268858147,
                    isShowInp: false
                },
                {
                    specValue: "促销",
                    key: 244.642431327531,
                    isShowInp: false
                }
            ]
        },
        {
            spaceName: "袋装",
            key: 484.29629114287,
            mixList: [
                {
                    specValue: "打折",
                    key: 690.291198665772,
                    isShowInp: false
                },
                {
                    specValue: "热卖",
                    key: 75.4965084014747,
                    isShowInp: false
                }
            ]
        }
    ],
    goodsName: "忆江南花果茶22",
    categoryName: "忆江南花草茶",
    categoryId: "61a3790c724c4b27b17e8c72",
    brandId: "61a236851b10f1139d84e509",
    goodsNo: "YJN-002",
    goodsId: "cff8ea613fab4f2787314628ac5942d9",
    placeOrigin: "宣化",
    __v: NumberInt("0")
} ]);
db.getCollection("goodsSpaceList").insert([ {
    _id: ObjectId("6367cb184068324544817de2"),
    spaceValueList: [
        {
            spaceName: "袋装",
            key: NumberInt("-1"),
            mixList: [
                {
                    specValue: "正品",
                    key: 98.9405570772544,
                    isShowInp: false
                },
                {
                    specValue: "特价",
                    key: 659.643080075013,
                    isShowInp: false
                },
                {
                    specValue: "促销",
                    key: 536.959674667954,
                    isShowInp: false
                }
            ]
        }
    ],
    goodsName: "忆江南花草",
    categoryName: "忆江南花草茶",
    categoryId: "61a3790c724c4b27b17e8c72",
    brandId: "61a235941b10f1139d84e506",
    goodsNo: "YJN-002",
    goodsId: "b65e608eb3624263956b56ad233b94e1",
    placeOrigin: "大同",
    __v: NumberInt("0")
} ]);
db.getCollection("goodsSpaceList").insert([ {
    _id: ObjectId("6367cd6ebb34e44604b9852a"),
    spaceValueList: [
        {
            spaceName: "13",
            key: NumberInt("-1"),
            mixList: [
                {
                    specValue: "131",
                    key: 962.703971755708,
                    isShowInp: false
                }
            ]
        }
    ],
    goodsName: "2",
    categoryName: "俊旅-红茶",
    categoryId: "61a23b711b10f1139d84e511",
    brandId: "61a235941b10f1139d84e506",
    goodsNo: "321",
    goodsId: "e77d36687ae249a08598736d0913672e",
    placeOrigin: "123",
    __v: NumberInt("0")
} ]);
db.getCollection("goodsSpaceList").insert([ {
    _id: ObjectId("6367cd9ebb34e44604b9852c"),
    spaceValueList: [
        {
            spaceName: "1",
            key: NumberInt("-1"),
            mixList: [
                {
                    specValue: "1",
                    key: 385.259755664533,
                    isShowInp: false
                },
                {
                    specValue: "123131",
                    key: 892.058680329128,
                    isShowInp: false
                }
            ]
        }
    ],
    goodsName: "1212312312313123",
    placeOrigin: "1",
    categoryName: "绿茶",
    brandName: null,
    categoryId: "61a237441b10f1139d84e50b",
    brandId: "61a2366c1b10f1139d84e507",
    goodsNo: "123131",
    goodsId: "ab3daf8da1ff453e812c0110e924fafa",
    __v: NumberInt("0")
} ]);
db.getCollection("goodsSpaceList").insert([ {
    _id: ObjectId("6367cdbcbb34e44604b98530"),
    spaceValueList: [
        {
            spaceName: "1",
            key: NumberInt("-1"),
            mixList: [
                {
                    specValue: "1",
                    key: 385.259755664533,
                    isShowInp: false
                }
            ]
        }
    ],
    goodsName: "1",
    categoryName: "绿茶",
    categoryId: "61a237441b10f1139d84e50b",
    brandId: "61a2366c1b10f1139d84e507",
    goodsNo: "1",
    goodsId: "ab3daf8da1ff453e812c0110e924fafa",
    placeOrigin: "1",
    __v: NumberInt("0")
} ]);
db.getCollection("goodsSpaceList").insert([ {
    _id: ObjectId("6367ceed4f429110c4b8116d"),
    spaceValueList: [
        {
            spaceName: "1",
            key: NumberInt("-1"),
            mixList: [
                {
                    specValue: "1",
                    key: 385.259755664533,
                    isShowInp: false
                }
            ]
        }
    ],
    goodsName: "12222",
    categoryName: "绿茶",
    categoryId: "61a237441b10f1139d84e50b",
    brandId: "61a2366c1b10f1139d84e507",
    goodsNo: "12322",
    goodsId: "ab3daf8da1ff453e812c0110e924fafa",
    placeOrigin: "1",
    __v: NumberInt("0")
} ]);
db.getCollection("goodsSpaceList").insert([ {
    _id: ObjectId("636f61ad3dd47b529c1e114a"),
    spaceValueList: [
        {
            spaceName: "234324",
            key: NumberInt("-1"),
            mixList: [
                {
                    specValue: "2432",
                    key: 748.558387308064,
                    isShowInp: false,
                    price: "",
                    weight: "",
                    skuName: "",
                    designSketch: [ ],
                    goodsId: "",
                    goodsType: NumberInt("1")
                }
            ]
        },
        {
            spaceName: "23432",
            key: 421.420053362214,
            mixList: [
                {
                    specValue: "234324",
                    key: 576.413068825887,
                    isShowInp: false
                }
            ]
        }
    ],
    goodsName: "同仁堂养生茶1",
    placeOrigin: "2342",
    categoryName: "红茶",
    brandName: "福茗源",
    categoryId: "61a2376f1b10f1139d84e50c",
    brandId: "61a2366c1b10f1139d84e507",
    goodsNo: "12322",
    goodsId: "91eed240e4534ed3b6265f4d4d6e929a",
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for informationList
// ----------------------------
db.getCollection("informationList").drop();
db.createCollection("informationList");

// ----------------------------
// Documents of informationList
// ----------------------------
db.getCollection("informationList").insert([ {
    _id: ObjectId("61a2fb73724c4b27b17e8c62"),
    __v: NumberInt("0"),
    content: "同仁堂养生茶限时促销，先到先得，前20下单客户可享受6折优惠",
    createTime: "2021-11-28",
    imageFilePath: "http://localhost:99/upload/2021/11/27/202111281145_9717.879885925842.png",
    name: "双十一促销活动",
    status: NumberInt("0")
} ]);
db.getCollection("informationList").insert([ {
    _id: ObjectId("63626ac8455dff37544b70cb"),
    name: "热带雨林",
    imageFilePath: "http://localhost:99/upload/2022/11/02/202211022104_8788.53293708731.jpg",
    status: NumberInt("1"),
    content: "213131",
    createTime: "2022-11-02",
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for menuList
// ----------------------------
db.getCollection("menuList").drop();
db.createCollection("menuList");

// ----------------------------
// Documents of menuList
// ----------------------------
db.getCollection("menuList").insert([ {
    _id: ObjectId("6145e6e85368494d3486bc28"),
    __v: NumberInt("0"),
    children: [ ],
    component: "RouteView",
    icon: "QqOutlined",
    key: "P_User_Center",
    name: "用户中心",
    parentId: null,
    redirectUrl: "/usercenter/menulist",
    sort: NumberInt("2"),
    status: null,
    url: "/usercenter/menulist",
    menuType: NumberInt("1")
} ]);
db.getCollection("menuList").insert([ {
    _id: ObjectId("6145e7935368494d3486bc29"),
    __v: NumberInt("0"),
    children: [ ],
    component: "/userCenter/userRole",
    icon: "AimOutlined",
    key: "P_User_Role",
    name: "用户角色",
    parentId: "6145e6e85368494d3486bc28",
    redirectUrl: null,
    sort: NumberInt("1"),
    status: NumberInt("1"),
    url: "/usercenter/userrole",
    menuType: NumberInt("1")
} ]);
db.getCollection("menuList").insert([ {
    _id: ObjectId("6145e8355368494d3486bc2a"),
    __v: NumberInt("0"),
    children: [ ],
    component: "/userCenter/menuList",
    icon: "AppstoreOutlined",
    key: "P_Menu_List",
    name: "菜单管理",
    parentId: "6145e6e85368494d3486bc28",
    redirectUrl: null,
    sort: NumberInt("2"),
    status: NumberInt("1"),
    url: "/usercenter/menulist",
    menuType: NumberInt("1")
} ]);
db.getCollection("menuList").insert([ {
    _id: ObjectId("6145e85f5368494d3486bc2b"),
    __v: NumberInt("0"),
    children: [ ],
    component: "/userCenter/userAccount",
    icon: null,
    key: "P_Account_Manage",
    name: "账号管理",
    parentId: "6145e6e85368494d3486bc28",
    redirectUrl: null,
    sort: NumberInt("3"),
    status: null,
    url: "/usercenter/accountmanage",
    menuType: NumberInt("1")
} ]);
db.getCollection("menuList").insert([ {
    _id: ObjectId("6145eb8a5368494d3486bc2e"),
    __v: NumberInt("0"),
    children: [ ],
    component: "RouteView",
    icon: "AlipayCircleFilled",
    key: "P_Commodity_Center",
    name: "商品中心",
    parentId: null,
    redirectUrl: "/commoditycenter/commodityclass",
    sort: NumberInt("2"),
    status: null,
    url: "/commoditycenter",
    menuType: NumberInt("1")
} ]);
db.getCollection("menuList").insert([ {
    _id: ObjectId("6145ebba5368494d3486bc2f"),
    __v: NumberInt("0"),
    children: [ ],
    component: "/commodityCenter/commodityBrand",
    icon: null,
    key: "P_Commodity_Brand",
    name: "商品品牌",
    parentId: "6145eb8a5368494d3486bc2e",
    redirectUrl: null,
    sort: NumberInt("2"),
    status: NumberInt("1"),
    url: "/commoditycenter/commoditybrand",
    menuType: NumberInt("1")
} ]);
db.getCollection("menuList").insert([ {
    _id: ObjectId("6145ebd75368494d3486bc30"),
    __v: NumberInt("0"),
    children: [ ],
    component: "/commodityCenter/commodityClass",
    icon: null,
    key: "P_Commodity_class",
    name: "商品分类",
    parentId: "6145eb8a5368494d3486bc2e",
    redirectUrl: null,
    sort: null,
    status: null,
    url: "/commoditycenter/commodityclass",
    menuType: NumberInt("1")
} ]);
db.getCollection("menuList").insert([ {
    _id: ObjectId("6145ebfb5368494d3486bc31"),
    __v: NumberInt("0"),
    children: [ ],
    component: "/commodityCenter/commodityLibrary",
    icon: null,
    key: "P_Commodity_Libray",
    name: "商品库",
    parentId: "6145eb8a5368494d3486bc2e",
    redirectUrl: null,
    sort: null,
    status: null,
    url: "/commoditycenter/commoditylibrary",
    menuType: NumberInt("1")
} ]);
db.getCollection("menuList").insert([ {
    _id: ObjectId("617389e0f41b145cec73f28c"),
    __v: NumberInt("0"),
    children: [ ],
    component: "RouteView",
    icon: "BellFilled",
    key: "P_Information_Center",
    name: "消息中心",
    parentId: null,
    redirectUrl: "/informationcenter/informationList",
    sort: NumberInt("6"),
    status: null,
    url: "/informationcenter",
    menuType: NumberInt("1")
} ]);
db.getCollection("menuList").insert([ {
    _id: ObjectId("61738a3df41b145cec73f28d"),
    __v: NumberInt("0"),
    children: [ ],
    component: "/informationCenter/informationList",
    icon: null,
    key: "P_Information_List",
    name: "活动通知",
    parentId: "617389e0f41b145cec73f28c",
    redirectUrl: null,
    sort: null,
    status: null,
    url: "/informationcenter/informationList",
    menuType: NumberInt("1")
} ]);
db.getCollection("menuList").insert([ {
    _id: ObjectId("6311b8d78144d48d8cb28e62"),
    children: [ ],
    name: "首页",
    status: NumberInt("1"),
    icon: "HomeOutlined",
    component: "/Home/Home",
    url: "/home/page",
    redirectUrl: null,
    sort: NumberInt("1"),
    key: "P_Home_Page",
    parentId: null,
    __v: NumberInt("0"),
    menuType: NumberInt("1")
} ]);
db.getCollection("menuList").insert([ {
    _id: ObjectId("631b5e3e65222d1d9968a34f"),
    children: [ ],
    name: "新增角色",
    status: null,
    icon: null,
    component: "RouteView",
    url: "/home/page",
    redirectUrl: null,
    sort: NumberInt("1"),
    key: "Btn_Add_Role",
    parentId: "6145e7935368494d3486bc29",
    menuType: NumberInt("2"),
    __v: NumberInt("0")
} ]);
db.getCollection("menuList").insert([ {
    _id: ObjectId("631c82c673dad3196526a525"),
    children: [ ],
    name: "编辑角色",
    status: null,
    icon: null,
    component: null,
    url: null,
    redirectUrl: null,
    sort: NumberInt("2"),
    key: "Btn_Edit_Role",
    parentId: "6145e7935368494d3486bc29",
    menuType: NumberInt("2"),
    __v: NumberInt("0")
} ]);
db.getCollection("menuList").insert([ {
    _id: ObjectId("631c89a94359f0b79c70ec47"),
    children: [ ],
    name: "新增账号",
    status: NumberInt("1"),
    icon: "HomeOutlined",
    component: null,
    url: null,
    redirectUrl: null,
    sort: NumberInt("1"),
    key: "Btn_Add_Account",
    parentId: "6145e85f5368494d3486bc2b",
    menuType: NumberInt("2"),
    __v: NumberInt("0")
} ]);
db.getCollection("menuList").insert([ {
    _id: ObjectId("631c89cb4359f0b79c70ec48"),
    children: [ ],
    name: "编辑账号",
    status: NumberInt("1"),
    icon: "HomeOutlined",
    component: null,
    url: null,
    redirectUrl: null,
    sort: NumberInt("2"),
    key: "Btn_Edit_Account",
    parentId: "6145e85f5368494d3486bc2b",
    menuType: NumberInt("2"),
    __v: NumberInt("0")
} ]);
db.getCollection("menuList").insert([ {
    _id: ObjectId("631c8a224359f0b79c70ec49"),
    children: [ ],
    name: "新增商品",
    status: null,
    icon: null,
    component: null,
    url: null,
    redirectUrl: null,
    sort: NumberInt("1"),
    key: "Btn_Add_Goods",
    parentId: "6145ebfb5368494d3486bc31",
    menuType: NumberInt("2"),
    __v: NumberInt("0")
} ]);
db.getCollection("menuList").insert([ {
    _id: ObjectId("631c8a3e4359f0b79c70ec4a"),
    children: [ ],
    name: "商品编辑",
    status: null,
    icon: null,
    component: null,
    url: null,
    redirectUrl: null,
    sort: NumberInt("2"),
    key: "Btn_Edit_Goods",
    parentId: "6145ebfb5368494d3486bc31",
    menuType: NumberInt("2"),
    __v: NumberInt("0")
} ]);
db.getCollection("menuList").insert([ {
    _id: ObjectId("631c8aa04359f0b79c70ec4b"),
    children: [ ],
    name: "角色删除",
    status: null,
    icon: null,
    component: null,
    url: null,
    redirectUrl: null,
    sort: null,
    key: "Btn_Delete_Role",
    parentId: "6145e7935368494d3486bc29",
    menuType: NumberInt("2"),
    __v: NumberInt("0")
} ]);
db.getCollection("menuList").insert([ {
    _id: ObjectId("631ca8f0c8ff0820550cb626"),
    children: [ ],
    name: "删除账号",
    status: NumberInt("1"),
    icon: null,
    component: null,
    url: null,
    redirectUrl: null,
    sort: NumberInt("2"),
    key: "Btn_Delete_Account",
    parentId: "6145e85f5368494d3486bc2b",
    menuType: NumberInt("2"),
    __v: NumberInt("0")
} ]);
db.getCollection("menuList").insert([ {
    _id: ObjectId("645716a9a33cc696c80f5c87"),
    children: [ ],
    name: "另一个首页菜单",
    status: NumberInt("1"),
    icon: "AppleOutlined",
    component: "/Home/Home",
    url: "/deom",
    redirectUrl: null,
    sort: null,
    key: "deom_1",
    parentId: "6457172fa33cc696c80f5c88",
    menuType: NumberInt("1"),
    __v: NumberInt("0")
} ]);
db.getCollection("menuList").insert([ {
    _id: ObjectId("6457172fa33cc696c80f5c88"),
    children: [ ],
    name: "动态路由测试",
    status: NumberInt("1"),
    icon: null,
    component: "RouteView",
    url: "/deom3",
    redirectUrl: null,
    sort: NumberInt("9"),
    key: "async_router_deom",
    parentId: null,
    menuType: NumberInt("1"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for orderList
// ----------------------------
db.getCollection("orderList").drop();
db.createCollection("orderList");

// ----------------------------
// Documents of orderList
// ----------------------------
db.getCollection("orderList").insert([ {
    _id: ObjectId("61a24f0b724c4b27b17e8c5e"),
    __v: NumberInt("0"),
    brandId: "61a236851b10f1139d84e509",
    brandName: "花果茶",
    categoryId: "61a23b4a1b10f1139d84e510",
    categoryName: "乐品乐-绿茶",
    createTime: "2021-11-27 23:30:19",
    designSketch: [
        "http://localhost:99/upload/2021/11/27/202111272328_9154.977102063469.jpg"
    ],
    goodsName: "乐品乐花果茶\t",
    goodsNo: "LPL-002",
    goodsType: NumberInt("1"),
    num: NumberInt("1"),
    placeOrigin: "山东",
    price: NumberInt("235"),
    salesVolume: NumberInt("44"),
    skuName: "乐品乐花果茶细茶（限时\t）",
    specValue1: "特价",
    specValue2: "限时",
    status: NumberInt("4"),
    userId: "619a467d36568547d078b7a2",
    weight: NumberInt("532")
} ]);
db.getCollection("orderList").insert([ {
    _id: ObjectId("61a24fe3724c4b27b17e8c60"),
    __v: NumberInt("0"),
    brandId: "61a2367c1b10f1139d84e508",
    brandName: "同仁堂",
    categoryId: "61a2467d2ee28a1f3c79931d",
    categoryName: "同仁堂养生茶",
    createTime: "2021-11-27 23:33:55",
    designSketch: [
        "http://localhost:99/upload/2021/11/27/202111272300_5072.004267931629.jpg"
    ],
    goodsName: "同仁堂养生茶",
    goodsNo: "TRT-001",
    goodsType: NumberInt("1"),
    num: NumberInt("1"),
    placeOrigin: "南京",
    price: NumberInt("642"),
    salesVolume: NumberInt("54"),
    skuName: "同仁堂粗茶（打折）",
    specValue1: "特价",
    specValue2: "打折",
    status: NumberInt("2"),
    userId: "619a467d36568547d078b7a2",
    weight: NumberInt("89")
} ]);
db.getCollection("orderList").insert([ {
    _id: ObjectId("61a3905e8afe60672ea4e957"),
    __v: NumberInt("0"),
    brandId: "61a236851b10f1139d84e509",
    brandName: "花果茶",
    categoryId: "61a3790c724c4b27b17e8c72",
    categoryName: "忆江南花草茶",
    createTime: "2021-11-28 22:21:18",
    designSketch: [
        "http://localhost:99/upload/2021/11/27/202111282112_4827.380833537693.jpg",
        "http://localhost:99/upload/2021/11/27/202111282112_364.1676048309006.jpg",
        "http://localhost:99/upload/2021/11/27/202111282112_6407.40017758745.jpg",
        "http://localhost:99/upload/2021/11/27/202111282112_1986.780909534629.jpg",
        "http://localhost:99/upload/2021/11/27/202111282112_9359.051553986505.jpg"
    ],
    goodsName: "忆江南花果茶",
    goodsNo: "YJN-002",
    goodsType: NumberInt("1"),
    num: NumberInt("2"),
    placeOrigin: "宣化",
    price: NumberInt("234"),
    salesVolume: NumberInt("35"),
    skuName: "忆江南花果茶促销",
    specValue1: "促销",
    specValue2: "打折",
    status: NumberInt("1"),
    userId: "619a467d36568547d078b7a2",
    weight: NumberInt("52")
} ]);
db.getCollection("orderList").insert([ {
    _id: ObjectId("63830ee09a096eb48075d3c2"),
    designSketch: [
        "http://localhost:99/upload/2021/11/27/202111272246_1899.9655640387437.jpg",
        "http://localhost:99/upload/2021/11/27/202111272247_2508.800516233203.jpg"
    ],
    brandId: "61a2366c1b10f1139d84e507",
    categoryId: "61a23b711b10f1139d84e511",
    categoryName: "俊旅-红茶",
    goodsName: "福茗源秒杀系列",
    goodsNo: "FMY-001",
    goodsType: NumberInt("2"),
    mixDetail: "<p><img src=\"http://localhost:99/upload/2021/11/27/1464607350240448512.jpg\" title=\"\" alt=\"99f5fb1fcf0c2458.jpg\"/></p>",
    placeOrigin: "江苏",
    price: NumberInt("5324"),
    salesVolume: NumberInt("51"),
    skuName: "福茗源-粗茶（打折）\t）",
    specValue1: "秒杀",
    specValue2: "打折",
    weight: NumberInt("2342"),
    userId: "6145ea5b5368494d3486bc2d",
    status: NumberInt("2"),
    num: NumberInt("3"),
    createTime: "2022-11-27 15:16:48",
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for roleInfoList
// ----------------------------
db.getCollection("roleInfoList").drop();
db.createCollection("roleInfoList");

// ----------------------------
// Documents of roleInfoList
// ----------------------------
db.getCollection("roleInfoList").insert([ {
    _id: ObjectId("6145e95f5368494d3486bc2c"),
    __v: NumberInt("0"),
    describe: "所有权限",
    name: "超级管理员",
    "roleMenuName_List": [
        "用户中心",
        "用户角色",
        "菜单管理",
        "账号管理",
        "商品中心",
        "商品品牌",
        "商品分类",
        "商品库",
        "消息中心",
        "活动通知",
        "首页",
        "新增角色",
        "编辑角色",
        "新增账号",
        "编辑账号",
        "新增商品",
        "商品编辑",
        "角色删除",
        "删除账号",
        "测试",
        "/Home/Home",
        "热带雨林"
    ],
    "roleMenu_List": [
        "6311b8d78144d48d8cb28e62",
        "6145ebd75368494d3486bc30",
        "6145ebba5368494d3486bc2f",
        "6145ebfb5368494d3486bc31",
        "631c8a224359f0b79c70ec49",
        "631c8a3e4359f0b79c70ec4a",
        "6145eb8a5368494d3486bc2e",
        "631c89a94359f0b79c70ec47",
        "631b5e3e65222d1d9968a34f",
        "631c82c673dad3196526a525",
        "631c89cb4359f0b79c70ec48",
        "617389e0f41b145cec73f28c",
        "61738a3df41b145cec73f28d",
        "631ca8f0c8ff0820550cb626",
        "6145e85f5368494d3486bc2b",
        "631c8aa04359f0b79c70ec4b",
        "6145e7935368494d3486bc29",
        "645716a9a33cc696c80f5c87",
        "6457172fa33cc696c80f5c88",
        "6145e8355368494d3486bc2a",
        "6145e6e85368494d3486bc28",
        "6457185ea33cc696c80f5c89"
    ],
    status: NumberInt("1")
} ]);
db.getCollection("roleInfoList").insert([ {
    _id: ObjectId("6145ee775368494d3486bc32"),
    __v: NumberInt("0"),
    describe: "商品中心权限",
    name: "商品中心管理员",
    "roleMenuName_List": [
        "商品中心",
        "商品品牌",
        "商品分类",
        "商品库",
        "新增商品",
        "商品编辑"
    ],
    "roleMenu_List": [
        "6145ebba5368494d3486bc2f",
        "6145ebd75368494d3486bc30",
        "631c8a224359f0b79c70ec49",
        "6145eb8a5368494d3486bc2e",
        "6145ebfb5368494d3486bc31",
        "631c8a3e4359f0b79c70ec4a"
    ],
    status: NumberInt("1")
} ]);
db.getCollection("roleInfoList").insert([ {
    _id: ObjectId("6153dac18603ce66ac84aea0"),
    __v: NumberInt("0"),
    describe: "测试角色",
    name: "测试",
    "roleMenuName_List": [
        "商品库",
        "消息中心",
        "活动通知",
        "新增商品",
        "商品编辑"
    ],
    "roleMenu_List": [
        "617389e0f41b145cec73f28c",
        "61738a3df41b145cec73f28d",
        "6145ebfb5368494d3486bc31",
        "631c8a224359f0b79c70ec49",
        "631c8a3e4359f0b79c70ec4a"
    ],
    status: NumberInt("1")
} ]);
db.getCollection("roleInfoList").insert([ {
    _id: ObjectId("631c95c67b986b0a1d3ada50"),
    "roleMenu_List": [
        "6145e6e85368494d3486bc28",
        "6145e7935368494d3486bc29",
        "6145e8355368494d3486bc2a",
        "6145e85f5368494d3486bc2b",
        "631b5e3e65222d1d9968a34f",
        "631c82c673dad3196526a525",
        "631c8aa04359f0b79c70ec4b",
        "631c89a94359f0b79c70ec47",
        "631c89cb4359f0b79c70ec48"
    ],
    "roleMenuName_List": [
        "用户中心",
        "用户角色",
        "菜单管理",
        "账号管理",
        "新增角色",
        "编辑角色",
        "新增账号",
        "编辑账号",
        "角色删除"
    ],
    name: "用户中心管理员",
    describe: "拥有用户中心权限",
    status: NumberInt("1"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for userInfoList
// ----------------------------
db.getCollection("userInfoList").drop();
db.createCollection("userInfoList");

// ----------------------------
// Documents of userInfoList
// ----------------------------
db.getCollection("userInfoList").insert([ {
    _id: ObjectId("6145ea5b5368494d3486bc2d"),
    __v: NumberInt("0"),
    createTime: "2021-09-18 21:32:11",
    email: "1259558183@qq.com",
    passWord: "03adf148360d42274c42decb95b43661",
    phone: "15958665541",
    status: NumberInt("1"),
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoi6LqDIiwiaWQiOiIxNmY3Zjk1ZmNyMWMwMDAwIiwiaWF0IjoxNjgzNDI3MjM5LCJleHAiOjE2ODM3ODcyMzl9.2r0yDA3qjw1UzHaCnK04Z9d_rR-7mONB6wey9qUtgd0",
    userAccount: "admin",
    userRole: [
        "6145e95f5368494d3486bc2c"
    ],
    userRoleName: [
        "超级管理员"
    ],
    userType: null
} ]);
db.getCollection("userInfoList").insert([ {
    _id: ObjectId("6153da418603ce66ac84ae9f"),
    __v: NumberInt("0"),
    createTime: "2021-09-29 11:15:13",
    email: "1259558183@qq.com",
    passWord: "e10adc3949ba59abbe56e057f20f883e",
    phone: "15008356350",
    status: NumberInt("0"),
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoi6IuAIiwiaWQiOiJlaHB1eWhqeXhzODAwMDAwIiwiaWF0IjoxNjM2MjE0Mjg4LCJleHAiOjE2MzY1NzQyODh9.1Sw-K8CYtjYK5W6CIW7rKEyXarUxs-B4Fmabekqmgms",
    userAccount: "zhang666",
    userRole: [
        "6145e95f5368494d3486bc2c"
    ],
    userRoleName: [
        "超级管理员"
    ],
    userType: null
} ]);
db.getCollection("userInfoList").insert([ {
    _id: ObjectId("61815891834e15ff4892024e"),
    __v: NumberInt("0"),
    createTime: "2021-11-02 23:26:09",
    email: null,
    passWord: "e10adc3949ba59abbe56e057f20f883e",
    phone: "15256522562",
    status: NumberInt("1"),
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoi6aW8IiwiaWQiOiJoeHp3OTA2ZGg4MDAwMDAwIiwiaWF0IjoxNjM2Mjg3NjIzLCJleHAiOjE2MzY2NDc2MjN9.cWCt2bf6WsVCOj22utkjDHkBwL42B0Ow9Bn6uRChvzs",
    userAccount: "123",
    userRole: [
        "631c95c67b986b0a1d3ada50",
        "6153dac18603ce66ac84aea0"
    ],
    userRoleName: [
        "测试",
        "用户中心管理员"
    ],
    userType: NumberInt("2")
} ]);
db.getCollection("userInfoList").insert([ {
    _id: ObjectId("6181594c834e15ff4892024f"),
    __v: NumberInt("0"),
    createTime: "2021-11-02 23:29:16",
    email: null,
    passWord: "e10adc3949ba59abbe56e057f20f883e",
    phone: "15985658523",
    status: NumberInt("1"),
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoi5Y2BIiwiaWQiOiIxMHJieHFnczR6Mm8wMDAwMCIsImlhdCI6MTYzNjI4NzE3NCwiZXhwIjoxNjM2NjQ3MTc0fQ.iAzX7jq1u4u7ueE7OriLKPjHS2lVc3p8fwmiIflSt9c",
    userAccount: "纸条张",
    userRole: [ ],
    userRoleName: [ ],
    userType: NumberInt("2")
} ]);
db.getCollection("userInfoList").insert([ {
    _id: ObjectId("61892e7953a376a70c90e323"),
    __v: NumberInt("0"),
    createTime: "2021-11-08 22:04:41",
    email: null,
    passWord: "03adf148360d42274c42decb95b43661",
    phone: "15982328805",
    status: NumberInt("1"),
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoi5q6rIiwiaWQiOiJmZDZzOGRqODJhbzAwMDAwIiwiaWF0IjoxNjcyMzA3NjIxLCJleHAiOjE2NzI2Njc2MjF9.N7Spyxwt5pkeemHZzsIEhkKIXKlRnYC659XzFUm9GO0",
    userAccount: "zhanghao1",
    userRole: [
        "6153dac18603ce66ac84aea0"
    ],
    userRoleName: [
        "测试"
    ],
    userType: NumberInt("2")
} ]);
db.getCollection("userInfoList").insert([ {
    _id: ObjectId("6311c93289af37c7a0f04a0e"),
    userRole: [
        "6145ee775368494d3486bc32"
    ],
    userRoleName: [
        "商品中心管理员"
    ],
    userAccount: "zhangbo",
    passWord: "e10adc3949ba59abbe56e057f20f883e",
    createTime: "2022-09-02 17:13:22",
    phone: "15982228807",
    email: "1259558183@qq.com",
    userType: NumberInt("1"),
    status: null,
    __v: NumberInt("0"),
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoi5puFIiwiaWQiOiIxMHBia2Y4YnUzb2cwMDAwMCIsImlhdCI6MTY2OTUzNTQxMiwiZXhwIjoxNjY5ODk1NDEyfQ.4ZJmEKReZgUUW5X8DK32dUKEwEZAKn9e1RajEWbY4yk"
} ]);
