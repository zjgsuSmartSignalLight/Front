<template name='home'>
	<view class="mybar" >
		<view class="" style="">
			<image style="width: 758.88rpx;margin-top: 62.22rpx;" class="bg-set" :src="'/static/bj.png'"></image>
			<image class="bg-set" :src="'/static/bj2.png'" style="width: 306.66rpx;height: 361.11rpx;margin-top: 10%;margin-left: 30%;"></image>
			<image class="bg-set" :src="'/static/bj3.png'" style="width: 364.31rpx;height: 61.05rpx;margin-top: 10%;margin-left: 33%;"></image>
		</view>		
		<view style="display: flex;">
			<view style="position: absolute;">
			<view class="fbox" style="margin-left: 30px;">
				<view class="titlebox">
					<view class="charttitle">车辆总数</view>
				</view>
				<view class="charts-box">
					<qiun-data-charts
						type="column"
						:chartData="chartData"
						background="#041439"
					/>
				</view>
			</view>		
			<view class="fbox" style="margin-top: 20%;margin-left: 30px;">
				<view class="titlebox">
					<view class="charttitle">车辆类型</view>
				</view>
				<view class="charts-box">
					<qiun-data-charts
						type="pie"
						:chartData="chartData_pie"
						background="#041439"
					/>
				</view>
			</view>
		</view>
		
		<view style="margin-left: 68%; position: absolute;">
			<view class="fbox" style="min-height: 0rpx; height: 90.55rpx;">
				<view class="titlebox">
					<view class="charttitle">交通点信息</view>
				</view>
				<view class="cu-bar tabbar bg-home shadow" style="min-height: 0rpx; background-color: #041439;height: 69.77rpx;" >
					<view class="action" style="">
						<view class="dwxx kx">
							<view class="dwxx1 ">{{passinfo[0]}}</view>
						</view>
						<view class="mycontent" style="" >空闲</view>
					</view>
					<view class="action">
						<view class="dwxx ct">
							<view class="dwxx1">{{passinfo[1]}}</view>
						</view>
						<view class="mycontent">通畅</view>
					</view>
					<view class="action">
						<view class="dwxx fm">
							<view class="dwxx1">{{passinfo[2]}}</view>
						</view>
						<view class="mycontent">繁忙</view>
					</view>
					<view class="action">
						<view class="dwxx yd">
							<view class="dwxx1">{{passinfo[3]}}</view>
						</view>
						<view class="mycontent">拥堵</view>
					</view>
				</view>
			</view>
			
			<view class="fbox" style="min-height: 0; margin-top: 10%; height:260rpx ;border: none;">
				<view class="titlebox" style="border: none;">
					<view class="charttitle">告警信息</view>
				</view>
				<uni-table style="border: none;width:220.44rpx ;" border stripe emptyText="暂无更多数据" >
					<!-- 表头行 -->
					<uni-tr style="width:220.44rpx ;border: none;">
						<uni-th align="center">告警内容</uni-th>
						<uni-th align="center">告警点位</uni-th>
						<uni-th align="center">告警时间</uni-th>
					</uni-tr>
					<!-- 表格数据行 -->
					<uni-tr v-for="item in gjData" style="border: none;">
						<uni-td align="center" style="">{{item.content}}</uni-td>
						<uni-td align="center">{{item.place}}</uni-td>
						<uni-td align="center">{{item.time}}</uni-td>
					</uni-tr>
					
				
				</uni-table>
			</view>
			
		</view>
		
		</view>
	</view>
</template>

<script>
	import "colorui/main.css"
	export default {
		name:"home",
		data() {
			return {
				passinfo:[10,10,10,10],
				gjData:[
					{
						'content':"违规掉头",
						'place':'下沙路一号路口',
						'time':'18:45'
					},{
						'content':"闯红灯",
						'place':'六号大街口',
						'time':'18:29'
					},{
						'content':"超速",
						'place':'东沙商业中心',
						'time':'17:50'
					},{
						'content':"套牌",
						'place':'十号大街口',
						'time':'17:45'
					},{
						'content':"违规变道",
						'place':'智络村',
						'time':'17:43'
					},{
						'content':"报废车辆",
						'place':'下沙文化中心',
						'time':'17:40'
					},{
						'content':"违规掉头",
						'place':'天城东路上沙路口',
						'time':'17:38'
					},{
						'content':"超速",
						'place':'十二号大街口',
						'time':'17:20'
					},{
						'content':"套牌",
						'place':'学源街文汇路口',
						'time':'17:09'
					},{
						'content':"超速",
						'place':'文泽路口',
						'time':'16:58'
					}
					],
				chartData:{                        
				  categories: ["机动车", "非机动车", "行人", "特殊车辆"],
				  series: [{
				    name: "数据",
				    data: [1390, 699, 1688,1000],
					color: "#5087ec"
				  }]
				},
				chartData_pie:{
					series: [
						{
            "data": [
                {
                    "name": "小轿车",
                    "value": 50
                },
                {
                    "name": "特殊车辆",
                    "value": 30
                },
                {
                    "name": "自行车",
                    "value": 20
                },
                {
                    "name": "摩托车",
                    "value": 18
                },
                {
                    "name": "电瓶车",
                    "value": 8
                },{
                    "name": "大客车",
                    "value": 18
                },{
                    "name": "大货车",
                    "value": 18
                }
            ]
        }
    ]
				}
			}
		},
		mounted:function() {
			this.get_msg_motorNum();
			this.get_msg_passinfo();
		},
		methods: {
			//获取车辆总数
			get_msg_motorNum:function(){
				this.api.get_msg_motorNum().then(res=>{
					console.log('车辆总数',res)
					// console.log("特殊车辆",res["特殊车辆"]["total"])
					this.$data.chartData.series[0]["data"]=[res["机动车"],res["非机动车"],res["行人"],res["特殊车辆"]["total"]]
					// console.log("ARR",this.$data.chartData.series[0]["data"])
				})
			},
			
			//获取点位状况
			get_msg_passinfo:function(){
				this.api.get_msg_passinfo().then(res=>{
					console.log('点位状态',res)
					this.$data.passinfo=[res["空闲"],res["通畅"],res["繁忙"],res["拥堵"]]
				})
			}
		}
	}
</script>

<style>
.uni-table-tr{
	background-color:#041439 ;
	display: block;
	
}
.uni-table-scroll{
	width: 100%;
	overflow-y: auto;
	overflow-x: auto;
	
}
.uni-table-td{
	border: none;
	
	font-weight: 400;
	font-size: 7.77rpx;
	color: rgb(255, 76, 5);
	background-color:#041439;
	width: 75.33rpx;
}
.uni-table-th{
	border: none;
	font-weight: 400;
	font-size: 8.88rpx;
	color: rgb(255, 255, 255);
	width: 83.33rpx;
	
}

.charts-box{
  width: 100%;
  height:100%;
}
.content{
	
}
.fbox{
	width: 220.44rpx; 
	height: 150.77rpx;
	text-align: center; 
	background-color: #03102a;
}
.titlebox{
	width: 220.44rpx;
	height: 20.77rpx;
}

.kx{
	background-color: rgba(59, 255, 84, 0.12);
	border-color: rgb(59, 255, 84);
}
.ct{
	background-color: rgba(83, 179, 227, 0.12);
	border-color: rgb(83, 179, 227);
}
.fm{
	background-color: rgba(253, 132, 66, 0.12);
	border-color: rgb(253, 132, 66);
}
.yd{
	background-color: rgba(255, 0, 0, 0.12);
	border-color: rgb(255, 0, 0);
}

</style>
