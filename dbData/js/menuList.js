db.getCollection("menuList").insert( {
    __v: NumberInt("0"),
    _id: ObjectId("6145e6e85368494d3486bc28"),
    children: [ ],
    component: "RouteView",
    icon: "QqOutlined",
    key: "P_User_Center",
    menuType: NumberInt("1"),
    name: "用户中心",
    parentId: null,
    redirectUrl: "/usercenter/menulist",
    sort: NumberInt("2"),
    status: null,
    url: "/usercenter/menulist"
} );
db.getCollection("menuList").insert( {
    __v: NumberInt("0"),
    _id: ObjectId("6145e7935368494d3486bc29"),
    children: [ ],
    component: "/userCenter/userRole",
    icon: "AimOutlined",
    key: "P_User_Role",
    menuType: NumberInt("1"),
    name: "用户角色",
    parentId: "6145e6e85368494d3486bc28",
    redirectUrl: null,
    sort: NumberInt("1"),
    status: NumberInt("1"),
    url: "/usercenter/userrole"
} );
db.getCollection("menuList").insert( {
    __v: NumberInt("0"),
    _id: ObjectId("6145e8355368494d3486bc2a"),
    children: [ ],
    component: "/userCenter/menuList",
    icon: "AppstoreOutlined",
    key: "P_Menu_List",
    menuType: NumberInt("1"),
    name: "菜单管理",
    parentId: "6145e6e85368494d3486bc28",
    redirectUrl: null,
    sort: NumberInt("2"),
    status: NumberInt("1"),
    url: "/usercenter/menulist"
} );
db.getCollection("menuList").insert( {
    __v: NumberInt("0"),
    _id: ObjectId("6145e85f5368494d3486bc2b"),
    children: [ ],
    component: "/userCenter/userAccount",
    icon: null,
    key: "P_Account_Manage",
    menuType: NumberInt("1"),
    name: "账号管理",
    parentId: "6145e6e85368494d3486bc28",
    redirectUrl: null,
    sort: NumberInt("3"),
    status: null,
    url: "/usercenter/accountmanage"
} );
db.getCollection("menuList").insert( {
    __v: NumberInt("0"),
    _id: ObjectId("6145eb8a5368494d3486bc2e"),
    children: [ ],
    component: "RouteView",
    icon: "AlipayCircleFilled",
    key: "P_Commodity_Center",
    menuType: NumberInt("1"),
    name: "商品中心",
    parentId: null,
    redirectUrl: "/commoditycenter/commodityclass",
    sort: NumberInt("2"),
    status: null,
    url: "/commoditycenter"
} );
db.getCollection("menuList").insert( {
    __v: NumberInt("0"),
    _id: ObjectId("6145ebba5368494d3486bc2f"),
    children: [ ],
    component: "/commodityCenter/commodityBrand",
    icon: null,
    key: "P_Commodity_Brand",
    menuType: NumberInt("1"),
    name: "商品品牌",
    parentId: "6145eb8a5368494d3486bc2e",
    redirectUrl: null,
    sort: NumberInt("2"),
    status: NumberInt("1"),
    url: "/commoditycenter/commoditybrand"
} );
db.getCollection("menuList").insert( {
    __v: NumberInt("0"),
    _id: ObjectId("6145ebd75368494d3486bc30"),
    children: [ ],
    component: "/commodityCenter/commodityClass",
    icon: null,
    key: "P_Commodity_class",
    menuType: NumberInt("1"),
    name: "商品分类",
    parentId: "6145eb8a5368494d3486bc2e",
    redirectUrl: null,
    sort: null,
    status: null,
    url: "/commoditycenter/commodityclass"
} );
db.getCollection("menuList").insert( {
    __v: NumberInt("0"),
    _id: ObjectId("6145ebfb5368494d3486bc31"),
    children: [ ],
    component: "/commodityCenter/commodityLibrary",
    icon: null,
    key: "P_Commodity_Libray",
    menuType: NumberInt("1"),
    name: "商品库",
    parentId: "6145eb8a5368494d3486bc2e",
    redirectUrl: null,
    sort: null,
    status: null,
    url: "/commoditycenter/commoditylibrary"
} );
db.getCollection("menuList").insert( {
    __v: NumberInt("0"),
    _id: ObjectId("617389e0f41b145cec73f28c"),
    children: [ ],
    component: "RouteView",
    icon: "BellFilled",
    key: "P_Information_Center",
    menuType: NumberInt("1"),
    name: "消息中心",
    parentId: null,
    redirectUrl: "/informationcenter/informationList",
    sort: NumberInt("6"),
    status: null,
    url: "/informationcenter"
} );
db.getCollection("menuList").insert( {
    __v: NumberInt("0"),
    _id: ObjectId("61738a3df41b145cec73f28d"),
    children: [ ],
    component: "/informationCenter/informationList",
    icon: null,
    key: "P_Information_List",
    menuType: NumberInt("1"),
    name: "活动通知",
    parentId: "617389e0f41b145cec73f28c",
    redirectUrl: null,
    sort: null,
    status: null,
    url: "/informationcenter/informationList"
} );
db.getCollection("menuList").insert( {
    __v: NumberInt("0"),
    _id: ObjectId("6311b8d78144d48d8cb28e62"),
    children: [ ],
    component: "/Home/Home",
    icon: "HomeOutlined",
    key: "P_Home_Page",
    menuType: NumberInt("1"),
    name: "首页",
    parentId: null,
    redirectUrl: null,
    sort: NumberInt("1"),
    status: NumberInt("1"),
    url: "/home/page"
} );
db.getCollection("menuList").insert( {
    __v: NumberInt("0"),
    _id: ObjectId("631b5e3e65222d1d9968a34f"),
    children: [ ],
    component: "RouteView",
    icon: null,
    key: "Btn_Add_Role",
    menuType: NumberInt("2"),
    name: "新增角色",
    parentId: "6145e7935368494d3486bc29",
    redirectUrl: null,
    sort: NumberInt("1"),
    status: null,
    url: "/home/page"
} );
db.getCollection("menuList").insert( {
    __v: NumberInt("0"),
    _id: ObjectId("631c82c673dad3196526a525"),
    children: [ ],
    component: null,
    icon: null,
    key: "Btn_Edit_Role",
    menuType: NumberInt("2"),
    name: "编辑角色",
    parentId: "6145e7935368494d3486bc29",
    redirectUrl: null,
    sort: NumberInt("2"),
    status: null,
    url: null
} );
db.getCollection("menuList").insert( {
    __v: NumberInt("0"),
    _id: ObjectId("631c89a94359f0b79c70ec47"),
    children: [ ],
    component: null,
    icon: "HomeOutlined",
    key: "Btn_Add_Account",
    menuType: NumberInt("2"),
    name: "新增账号",
    parentId: "6145e85f5368494d3486bc2b",
    redirectUrl: null,
    sort: NumberInt("1"),
    status: NumberInt("1"),
    url: null
} );
db.getCollection("menuList").insert( {
    __v: NumberInt("0"),
    _id: ObjectId("631c89cb4359f0b79c70ec48"),
    children: [ ],
    component: null,
    icon: "HomeOutlined",
    key: "Btn_Edit_Account",
    menuType: NumberInt("2"),
    name: "编辑账号",
    parentId: "6145e85f5368494d3486bc2b",
    redirectUrl: null,
    sort: NumberInt("2"),
    status: NumberInt("1"),
    url: null
} );
db.getCollection("menuList").insert( {
    __v: NumberInt("0"),
    _id: ObjectId("631c8a224359f0b79c70ec49"),
    children: [ ],
    component: null,
    icon: null,
    key: "Btn_Add_Goods",
    menuType: NumberInt("2"),
    name: "新增商品",
    parentId: "6145ebfb5368494d3486bc31",
    redirectUrl: null,
    sort: NumberInt("1"),
    status: null,
    url: null
} );
db.getCollection("menuList").insert( {
    __v: NumberInt("0"),
    _id: ObjectId("631c8a3e4359f0b79c70ec4a"),
    children: [ ],
    component: null,
    icon: null,
    key: "Btn_Edit_Goods",
    menuType: NumberInt("2"),
    name: "商品编辑",
    parentId: "6145ebfb5368494d3486bc31",
    redirectUrl: null,
    sort: NumberInt("2"),
    status: null,
    url: null
} );
db.getCollection("menuList").insert( {
    __v: NumberInt("0"),
    _id: ObjectId("631c8aa04359f0b79c70ec4b"),
    children: [ ],
    component: null,
    icon: null,
    key: "Btn_Delete_Role",
    menuType: NumberInt("2"),
    name: "角色删除",
    parentId: "6145e7935368494d3486bc29",
    redirectUrl: null,
    sort: null,
    status: null,
    url: null
} );
db.getCollection("menuList").insert( {
    __v: NumberInt("0"),
    _id: ObjectId("631ca8f0c8ff0820550cb626"),
    children: [ ],
    component: null,
    icon: null,
    key: "Btn_Delete_Account",
    menuType: NumberInt("2"),
    name: "删除账号",
    parentId: "6145e85f5368494d3486bc2b",
    redirectUrl: null,
    sort: NumberInt("2"),
    status: NumberInt("1"),
    url: null
} );
db.getCollection("menuList").insert( {
    __v: NumberInt("0"),
    _id: ObjectId("645716a9a33cc696c80f5c87"),
    children: [ ],
    component: "/Home/Home",
    icon: "AppleOutlined",
    key: "deom_1",
    menuType: NumberInt("1"),
    name: "另一个首页菜单",
    parentId: "6457172fa33cc696c80f5c88",
    redirectUrl: null,
    sort: null,
    status: NumberInt("1"),
    url: "/deom"
} );
db.getCollection("menuList").insert( {
    __v: NumberInt("0"),
    _id: ObjectId("6457172fa33cc696c80f5c88"),
    children: [ ],
    component: "RouteView",
    icon: null,
    key: "async_router_deom",
    menuType: NumberInt("1"),
    name: "动态路由测试",
    parentId: null,
    redirectUrl: null,
    sort: NumberInt("9"),
    status: NumberInt("1"),
    url: "/deom3"
} );
