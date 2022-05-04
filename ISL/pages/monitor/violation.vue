<template name="violation">
	<view class="mybar">
		<view style="display: flex;margin-left: 11.11rpx;" v-if="godetail==false">
			<view>
				<view class="cord" style="width: 361.11rpx;">
					<view class="content4" style="display: flex; width: 361.11rpx;height: 20.77rpx;">
						<view class="inputcontent td" >车牌号</view>
						<view class="inputcontent td" >位置</view>
						<view class="inputcontent td" >违规类型</view>
						<view class="inputcontent td" >时间</view>
					</view>
					
					<view class="content4" @click="goVioDetail(id)"  style="background-color: rgb(17, 62, 103); display: flex; width: 361.11rpx;height: 25.77rpx;border-bottom: solid #FFFFFF 0.55rpx;;">
						<view class="inputcontent tr" >浙A23445</view>
						<view class="inputcontent tr" >杭州市白杨街道学林支路</view>
						<view class="inputcontent tr" >漏牌</view>
						<view class="inputcontent tr" >2022/3/12 19:03</view>
					</view>
					<view class="content4" v-for="item in gjData" style="background-color: rgb(17, 62, 103); display: flex; width: 361.11rpx;height: 25.77rpx;border-bottom: solid #FFFFFF 0.55rpx;;">
						<view class="inputcontent tr" >{{item.carid}}</view>
						<view class="inputcontent tr" >{{item.place}}</view>
						<view class="inputcontent tr" >{{item.content}}</view>
						<view class="inputcontent tr" >{{item.time}}</view>
					</view>
					
					
					
				</view>
			</view>
			
			
			<view style="margin-left: 11.11rpx;">
				<view class="cord" style="width: 238.88rpx;height: 80.55rpx;">
					<view class="content4" style="width: 238.88rpx;height: 20.77rpx;">
						<view class="inputcontent" style="width: 100%;height: 20.77rpx; color: #FFFFFF;font-size: 9.11rpx;">今日违规统计</view>
					</view>
					<view class="cu-bar tabbar bg-home shadow" style="background-color: rgb(17, 62, 103);height: 80rpx;font-size: 9.11rpx;" >
						<view class="action" style="">
							<view class="dwxx lp">
								<view class="dwxx1 ">16</view>
							</view>
							
							<view class="mycontent wgtj" >漏牌</view>
							
						</view>
						<view class="action">
							<view class="dwxx cs">
								<view class="dwxx1">13</view>
							</view>
							<view class="mycontent wgtj" >超速</view>
						</view>
						<view class="action">
							<view class="dwxx chd">
								<view class="dwxx1">6</view>
							</view>
							<view class="mycontent wgtj" >闯红灯</view>
						</view>
						<view class="action">
							<view class="dwxx bfcl">
								<view class="dwxx1">28</view>
							</view>
							<view class="mycontent wgtj" >报废车辆</view>
						</view>
					</view>
					<view class="cu-bar tabbar bg-home " style="background-color: rgb(17, 62, 103);height: 80rpx;font-size: 9.11rpx;" >
						<view class="action" style="">
							<view class="dwxx lp">
								<view class="dwxx1 ">20</view>
							</view>
							
							<view class="mycontent wgtj" >违规变道</view>
							
						</view>
						<view class="action">
							<view class="dwxx cs">
								<view class="dwxx1">15</view>
							</view>
							<view class="mycontent wgtj" >超员</view>
						</view>
						<view class="action">
							<view class="dwxx chd">
								<view class="dwxx1">9</view>
							</view>
							<view class="mycontent wgtj" >违规掉头</view>
						</view>
						<view class="action">
							<view class="dwxx bfcl">
								<view class="dwxx1">28</view>
							</view>
							<view class="mycontent wgtj" >遮挡号牌</view>
						</view>
					</view>
					<view class="cu-bar tabbar bg-home" style="background-color: rgb(17, 62, 103);height: 80rpx;font-size: 9.11rpx;" >
						<view class="action" style="">
							<view class="dwxx lp">
								<view class="dwxx1 ">6</view>
							</view>
							
							<view class="mycontent wgtj" >违规倒车</view>
							
						</view>
						<view class="action">
							<view class="dwxx cs">
								<view class="dwxx1">8</view>
							</view>
							<view class="mycontent wgtj" >套牌</view>
						</view>
						<view class="action">
							<view class="dwxx chd">
								<view class="dwxx1">3</view>
							</view>
							<view class="mycontent wgtj" >逆行</view>
						</view>
						<view class="action">
							
						</view>
					</view>
				</view>
				
				
			</view>
		</view>
		
		<viodetail @send_one="toShade" v-if="godetail==true" :id="id"></viodetail>
		
	</view>
</template>

<script>
	export default {
		name:"violation",
		data() {
			return {
				id:3,
				godetail:false,
				gjData:[
					{
						'carid':'浙A56776',
						'content':"违规掉头",
						'place':'下沙路一号路口',
						'time':'2022/3/12 18:45'
					},{
						'carid':'浙BN7865',
						'content':"闯红灯",
						'place':'六号大街口',
						'time':'2022/3/12 18:29'
					},{
						'carid':'浙A78656',
						'content':"超速",
						'place':'东沙商业中心',
						'time':'2022/3/12 17:50'
					},{
						'carid':'浙A67523',
						'content':"套牌",
						'place':'十号大街口',
						'time':'2022/3/12 17:45'
					},{
						'carid':'浙E55567',
						'content':"违规变道",
						'place':'智络村',
						'time':'2022/3/12 17:43'
					},{
						'carid':'浙C76887',
						'content':"报废车辆",
						'place':'下沙文化中心',
						'time':'2022/3/12 17:40'
					},{
						'carid':'浙A55566',
						'content':"违规掉头",
						'place':'天城东路上沙路口',
						'time':'2022/3/12 17:38'
					},{
						'carid':'浙BHJ987',
						'content':"超速",
						'place':'十二号大街口',
						'time':'2022/3/12 17:20'
					},{
						'carid':'浙AA98IJ',
						'content':"套牌",
						'place':'学源街文汇路口',
						'time':'2022/3/12 17:09'
					},{
						'carid':'浙F44532',
						'content':"超速",
						'place':'文泽路口',
						'time':'2022/3/12 16:58'
					},
					{
						'carid':'浙A33427',
						'content':"套牌",
						'place':'学源街文汇路口',
						'time':'2022/3/12 17:09'
					},{
						'carid':'浙DA2345',
						'content':"超速",
						'place':'文泽路口',
						'time':'2022/3/12 16:58'
					},
					{
						'carid':'浙A45635',
						'content':"套牌",
						'place':'学源街文汇路口',
						'time':'2022/3/12 17:09'
					}
					],
			}
		},
		methods: {
			goVioDetail(id){
				console.log('gogogo')
				this.godetail=true
				
			},
			toShade:function(e){
				console.log(e)
				this.godetail=e
				console.log(this.godetail)
			}
		}
	}
</script>

<style >
	page{
		
		background-color: rgb(11, 37, 109);;
	}
	.wgtj{
		font-size: 9.11rpx;margin-top: 12.66rpx;
	}
	.td{
		width: 100%;height: 25.77rpx; color: #FFFFFF;font-size: 9rpx;
	}
	.tr{
		width: 100%;height: 25.77rpx; color: #FFFFFF;font-size: 8rpx;
	}
	.lp{
		background-color: rgba(255, 59, 59, 0.12);
		border-color: rgb(255, 59, 59);
	}
	.cs{
		background-color: rgba(59, 255, 84, 0.12);
		border-color: rgb(59, 255, 84);
	}
	.chd{
		background-color: rgba(178, 56, 247, 0.14);
		border-color: rgb(178, 56, 247);
	}
	.bfcl{
		background-color: rgba(59, 176, 255, 0.15);
		border-color: rgb(59, 176, 255);
	}
</style>
