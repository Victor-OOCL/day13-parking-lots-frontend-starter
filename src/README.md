parking site prompt
帮我生成parkingsite组件，通过prop接收一个ticket对象，格式如{
"plateNumber": "GHI789",
"position": 1,
"parkingLot": 1
}，return 一个格子，显示ticket的plateNumber，好看些

parking lot prompt
帮我生成parkinglot组件，prop传入数据像这样{
"id": 2,
"name": "City Mall Garage",
"tickets": [],
"capacity": 12,
"availableCapacity": 12,
"availablePositionRate": 1,
"full": false
}，需要显示parkinglot的名字，然后将tickets每一项用parkingsite组件渲染，并传入ticket进去，并且每一行只显示3个ticket，好看些

parking lot group prompt
帮我生成parkinglotgroup组件，它的数据来源是api调用http://localhost:8080/parking-lots获取，用axios，使用UseContext和UseReducer对数据进行维护，获取的数据{
"code": 200,
"message": "Success",
"data": [
{
"id": 1,
"name": "The Plaza Park",
"tickets": [
{
"plateNumber": "GHI789",
"position": 1,
"parkingLot": 1
}
],
"capacity": 9,
"availableCapacity": 8,
"availablePositionRate": 0.8888888888888888,
"full": false
},
{
"id": 2,
"name": "City Mall Garage",
"tickets": [],
"capacity": 12,
"availableCapacity": 12,
"availablePositionRate": 1,
"full": false
},
{
"id": 3,
"name": "Office Tower Parking",
"tickets": [],
"capacity": 9,
"availableCapacity": 9,
"availablePositionRate": 1,
"full": false
}
]
}像这种，需要将data取出作为useContext,然后遍历Data的数据使用parkinglot组件渲染，并传入parkinglot

control bar prompt
帮我生成一个操作栏组件，它是一个横向的，并且放在parkinggroup上面，里面有一个车牌的输入框，要保证输入的格式只能是“AB-1234”这种两个英文字母加-加4个数字，然后旁边有个下拉框，只能选择STANDARD，SMART,SUPER_SMART这三种parkingboy，再旁边有个park按钮，发post请求http://localhost:8080/parking-lots/park?parkingBoyType=STANDARD这样，body带Car类型{
"plateNumber": "GHI789"
}类似这种，参数分别来自输入框和下拉框，用state维护，然后将返回的ticket添加到ParkingLotContext，再旁边有个fetch按钮，发送post请求http://localhost:8080/parking-lots/fetch?parkingBoyType=STANDARD，body带ticket类型{
"plateNumber": "GHI789",
"position": 1,
"parkingLot": 1
}类似这种，可以根据plateNumber在ParkingLotContext找到，当请求返回plateNumber，需要将对应ticket清除