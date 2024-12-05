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

