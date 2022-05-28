<template name="timeManage">
	<view class="mybar" style="margin-top: -10.55rpx;">
		<view class="" style="display: flex;margin-left: 22.22rpx;margin-top: 33.33rpx;">
			<view>
				<view class="" style="display: flex;width: 279.44rpx;justify-content: space-between;">
					<view class="content3">当前点位</view>
					<view class="content4">
						<input class="inputcontent" @input="onKeyInput" :value="inputValue" />
					</view>
				</view>

				<view class="cord" style="margin-top: 11.11rpx;height: 280.77rpx;">
					<view class="content4 " style="width: 279.44rpx;height: 27.77rpx;margin-left: -1rpx;">
						<view class="inputcontent"
							style="font-size: 12rpx;width: 100%;height: 20.77rpx; color: #FFFFFF;">信号灯状态</view>
					</view>
					<view style="margin-left: 10.22rpx;">
						<view class="st">
							<view class="content3" style="font-size: 12rpx;margin-top: 5.55rpx;">当前状态</view>
							<view class="content4" style="width: 163.33rpx;height: 18.22rpx;">
								<view class="inputcontent" style="font-size: 10rpx;margin-top: 2.22rpx;">{{range[devalue].text}}</view>
							</view>

						</view>
						<view class="st" style="">
							<view class="content3" style="font-size: 12rpx;margin-top: 5.55rpx;">运行时长</view>
							<view class="content4" style="width: 163.33rpx;height: 18.22rpx;">
								<view class="inputcontent" style="font-size: 10rpx;margin-top: 2.22rpx;">
									<smh-timer ref="timer1" :auto="true"></smh-timer>
								</view>
							</view>

						</view>
						<view class="st">
							<view class="content3" style="font-size:12rpx;margin-top: 5.55rpx;">相位A绿灯时长</view>
							<view class="content4" style="width: 163.33rpx;height: 18.22rpx;">
								<view class="inputcontent" style="font-size: 10rpx;margin-top: 2.22rpx;">{{initred}}
								</view>
							</view>
						</view>
						<view class="st">
							<view class="content3" style="font-size: 12rpx;margin-top: 5.55rpx;">相位A红灯时长</view>
							<view class="content4" style="width: 163.33rpx;height: 18.22rpx;">
								<view class="inputcontent" style="font-size: 10rpx;margin-top: 2.22rpx;">{{initgreen}}
								</view>
							</view>
						</view>
						<view class="st">
							<view class="content3" style="font-size: 12rpx;margin-top: 5.55rpx;">相位B绿灯时长</view>
							<view class="content4" style="width: 163.33rpx;height: 18.22rpx;">
								<view class="inputcontent" style="font-size: 10rpx;margin-top: 2.22rpx;">{{initgreen}}
								</view>
							</view>
						</view>
						<view class="st">
							<view class="content3" style="font-size: 12rpx;margin-top: 5.55rpx;">相位B红灯时长</view>
							<view class="content4" style="width: 163.33rpx;height: 18.22rpx;">
								<view class="inputcontent" style="font-size: 10rpx;margin-top: 2.22rpx;">{{initred}}
								</view>
							</view>
						</view>
					</view>
				</view>

			</view>

			<view style="margin-left: 11.11rpx;">
				<view class="" style="display: flex;">
					<view class="tj">
						<view class="xw">
							<view>
								<image class="signimage" :src="'/static/red.png'">
								</image>
							</view>
							<view class="content3 xwl" style="">{{tjvModelValuered}}</view>
						</view>
						<view class="xw" style="margin-top: -11.11rpx;">
							<view>
								<image class="signimage" :src="'/static/green.png'">
								</image>
							</view>
							<view class="content3" style="font-size: 17rpx;margin-top: -5.55rpx;">{{tjvModelValuegreen}}
							</view>
						</view>
						<view class="content3" style="text-align: center;">系统推荐(相位A)</view>
					</view>

					<view class="tj" style="margin-left: 11.11rpx;">
						<view class="xw">
							<view>
								<image class="signimage" :src="'/static/red.png'">
								</image>
							</view>
							<view class="content3 xwl" style="">{{tjvModelValuegreen}}</view>
						</view>
						<view class="xw" style="margin-top: -11.11rpx;">
							<view>
								<image class="signimage" :src="'/static/green.png'">
								</image>
							</view>
							<view class="content3" style="font-size: 17rpx;margin-top: -5.55rpx;">{{tjvModelValuered}}
							</view>
						</view>
						<view class="content3" style="text-align: center;">系统推荐(相位B)</view>
					</view>
					<view>

					</view>
				</view>


				<view style="display: flex; margin-top: 11.11rpx;">
					<view class="xg">
						<view class="content3" style="margin-top: 27.77rpx;">配时修改</view>
						<view class="content4" style="width: 90rpx;height: 26.11rpx;margin-top: 22.22rpx;">
							<view class="inputcontent" style="font-size: 10rpx;margin-top: 4.22rpx;">
								<smh-timer ref="timer" :auto="true"></smh-timer>
							</view>
						</view>
						<view class="xgview" @click="open" data-cur="DialogModal1">
							<image class="xgimg2" :src="'/static/afm.png'">
							</image>
						</view>
					</view>


					<view class="xg" style="margin-left: 11.11rpx;">
						<view class="content3" style="margin-top: 27.77rpx;">信号灯运行状态</view>
						<view class="content4" style="width: 90rpx;height: 26.11rpx;margin-top: 22.22rpx;">
							<view class="inputcontent" style="font-size: 10rpx;margin-top: 4.22rpx;">
								{{range[devalue].text}}</view>
						</view>
						<view class="xgview imgbule" @click="dischange">
							<image class="xgimg" :src="'/static/sys.png'">
							</image>
						</view>
					</view>
				</view>
			</view>


		</view>

		<uni-popup ref="popup" type="dialog" style="">
			<uni-popup-dialog mode="" style="width: 333.33rpx;font-size:10rpx;" title="配时控制" message="成功消息"
				:duration="2000" :before-close="true" @close="close" @confirm="confirm">
				<view style="margin-left: -50rpx;">
					<view>
						<view class="dialogbottom" style="">参考消息</view>
						<view class="dialognum dialogbottom dialogleft" style="width: 250rpx; display: flex;">
							<view>系统推荐时长：</view>
							<view class="fontred">红灯(S)：{{tjvModelValuered}}</view>
							<view class="fontgreen">绿灯(S)：{{tjvModelValuegreen}}</view>
						</view>
						<view class="dialognum dialogbottom dialogleft" style=" display: flex;">
							<view>路口流量预测(0.5h)：</view>
							<view class="fontred">25 --> 27</view>
						</view>
					</view>

					<view>
						<view class="dialogbottom">配时修改</view>
						<view class="dialognum dialogbottom dialogleft" style="display: flex;">
							<view>系统状态</view>
							<view class="myradio" style=" color: #000000;">
								<uni-data-checkbox class="" style="transform:scale(1);color: #000000;" v-model="value"
									:localdata="range" @change="changekz"></uni-data-checkbox>
							</view>
						</view>
						<view class="dialognum dialogbottom dialogleft" style="">
							<view>红灯时长(S)</view>
							<view>
								<uni-number-box :disabled="isSys==true" v-model="vModelValuered"
									@change="bindChangered"></uni-number-box>
							</view>
						</view>
						<view class="dialognum dialogbottom dialogleft" style="display: flex;">
							<view>绿灯时长(S)</view>
							<view>
								<uni-number-box :disabled="isSys==true" v-model="vModelValuegreen"
									@change="bindChangegreen"></uni-number-box>
							</view>
						</view>
						<view class="dialognum dialogbottom dialogleft" style="display: flex;">
							<view>系统控制时长(min)</view>
							<view>
								<uni-number-box :disabled="isSys==false" v-model="systime" @change="bindChangesystime">
								</uni-number-box>
							</view>
						</view>
					</view>
				</view>
			</uni-popup-dialog>
		</uni-popup>


		<uni-popup ref="popup2" type="message">
			<uni-popup-message style="" type="success" message="设置成功" :duration="2000"></uni-popup-message>
		</uni-popup>
		<uni-popup ref="popup3" type="message">
			<uni-popup-message style="" type="success" message="设置成功,请在记录中查看" :duration="2000"></uni-popup-message>
		</uni-popup>
		

		<button class="bg-blue bu" @click="openlbd">绿波带设置</button>

		<uni-popup ref="lbd" type="dialog" style="">

			<uni-popup-dialog mode="" style="width: 450.33rpx;font-size:10rpx;" title="绿波带管理" message="成功消息"
				:duration="2000" :before-close="true" @close="closelbd" @confirm="confirmlbd">

				
				<view>
					<view
						style="display: flex;width: 100%;justify-content: space-between;text-align: center;align-items: center;">
						<view data-cur="setting" @click="NavChange" class="setitem"
							:style="PageCur=='setting'?'background-color:#f5f5f5;':''">
							<view style="margin-top: 5rpx;">设置</view>
						</view>
						<view data-cur="settinglog" @click="NavChange" class="setitem"
							:style="PageCur=='settinglog'?'background-color:#f5f5f5;':''">
							<view style="margin-top: 5rpx;">设置记录</view>
						</view>
					</view>
					<view v-if="PageCur=='setting'">
					<view style="align-items: center;">
						<view class="lbdtop">点位搜索</view>
						<view class="lbdtop" style="margin-left: 40px;">
							<input-autocomplete class="unit-item__input" :value="searchpoint" v-model="searchpoint"
								placeholder="请输入点位名称" highlightColor="#FF0000" :loadData="loadAutocompleteData"
								v-on:selectItem="selectItemD"
								style="background-color: #f5f5f5;width: 250rpx;height: 22.22rpx;border-radius: 5px;">
					 ></input-autocomplete>
						</view>
					</view>
					<view style="">
						<view class="lbdtop">已选点位</view>
						<view>
							<robby-tags v-model="tagList" @delete="delTag" enable-del="true"></robby-tags>
						</view>
					</view>
					<view style="">
						<view>设定时长(min)</view>
						<view class="lbdtop" style="margin-left: 20rpx;">
							<uni-number-box v-model="lbdtime" @change="bindlbdtime"></uni-number-box>
						</view>
					</view>
					</view>
					
					<view v-if="PageCur=='settinglog'" style="">
						<view style="" class="lbdtop" >
							
							<uni-table ref="table" border stripe  emptyText="暂无更多数据" >
											<uni-tr >
												<uni-th  align="center">设置时间</uni-th>
												<uni-th  align="center">设置时长</uni-th>
												<uni-th  align="center">点位</uni-th>
												<uni-th align="center">运行状态</uni-th>
												
											</uni-tr>
											<uni-tr v-for="(item, index) in lbdList" :key="index" >			
												<uni-td align="center">
													<view class="name">{{ item.settime }}</view>
												</uni-td>
												<uni-td align="center">
													<view class="name">{{ item.time }}分钟</view>
												</uni-td>
												<uni-td align="center">
													<view v-for="items in item.pointlist">{{items}}</view>
												</uni-td>
												<uni-td>
													<view style="display: flex;">
														<view :style="item.state=='运行中..'?'color:red;':''" >{{item.state}}</view>
														<view @click="changelbdstate(index)" v-if="item.state=='运行中..'" style="margin-left: 15rpx;">
															<image class="" style="width: 22.22rpx;height: 22.22rpx;margin-left: 5.55rpx;" :src="'/static/stop.png'">
															</image>
															<view>提前结束</view>
														</view>
													</view>
												</uni-td>
											</uni-tr>
										</uni-table>
									
						</view>
					</view>
					
				</view>
			</uni-popup-dialog>
		</uni-popup>

	</view>
</template>

<script>
	import robbyTags from '@/components/robby-tags/robby-tags.vue'
	import inputAutocomplete from '@/components/input-autocomplete/input-autocomplete.vue'
	export default {
		name: "timeManage",
		components: {
			robbyTags,
			inputAutocomplete
		},
		data() {
			return {
				inputValue: "杭州市白杨街道学林支路",
				modalName: '',
				value: 0,
				devalue: 0,
				isSys: true,
				searchpoint: '',
				range: [{
					"value": 0,
					"text": "系统控制"
				}, {
					"value": 1,
					"text": "人工控制"
				}],
				initred: 25,
				initgreen: 27,
				vModelValuered: 25,
				vModelValuegreen: 25,
				tjvModelValuered: 28,
				tjvModelValuegreen: 26,
				systime: 30,
				tagList: [
					"学林街（南北方向）", "文海南路（南北方向）", "宝龙（南北方向）"
				],
				lbdtime: 1,
				lbdList: [
					{
						"pointlist": [
					"学林街（南北方向）", "文海南路（南北方向）", "宝龙（南北方向）"
				],
						"time": "4",
						"settime":"2022/2/15/13:45",
						"state":"运行结束"
					}
				],
				PageCur: 'setting'
			}
		},
		methods: {
			onKeyInput: function(e) {
				this.inputValue = e.target.value
				console.log(this.inputValue)
			},
			openlbd() {
				this.$refs.lbd.open()
			},
			open() {
				this.$refs.popup.open()
			},
			close() {
				// TODO 做一些其他的事情，before-close 为true的情况下，手动执行 close 才会关闭对话框
				// ...
				this.$refs.popup.close()
			},
			closelbd() {
				// TODO 做一些其他的事情，before-close 为true的情况下，手动执行 close 才会关闭对话框
				// ...
				this.$refs.lbd.close()
			},
			confirm() {
				this.devalue = this.value
				if (this.devalue == 1) {
					this.initgreen = this.vModelValuegreen
					this.initred = this.vModelValuered
				} else {
					this.initgreen = this.tjvModelValuegreen
					this.initred = this.tjvModelValuered
				}
				this.$refs.timer.reset()
				this.$refs.timer1.reset()
				this.$refs.popup.close()
				this.$refs.popup2.open()
			},
			dischange(){
				if(this.devalue==0){
					this.initgreen = this.vModelValuegreen
					this.initred = this.vModelValuered
					
					this.devalue=1
				}else{
					this.devalue=0
					this.initgreen = this.tjvModelValuegreen
					this.initred = this.tjvModelValuered
				}
				this.$refs.timer.reset()
				this.$refs.timer1.reset()
			},
			gettime(){
				var date=new Date()
				//年
				    var year=date.getFullYear();
				    //月
				    var month=date.getMonth()+1;
				    //日
				    var day=date.getDate();
				    //时
				    var hh=date.getHours();
				    //分
				    var mm=date.getMinutes();
					var time=year+'/'+month+"/"+day+'/'+hh+':'+mm
					return time
					
			},
			confirmlbd() {
				if(this.PageCur=="setting"){
				this.lbdList.push({
					"pointlist": this.tagList,
					"time": this.lbdtime,
					"settime":this.gettime(),
					"state":"运行中.."
				})
				
				this.$refs.popup3.open()
				this.$refs.lbd.close()
				console.log(this.lbdList)
				}
				else{
					this.$refs.lbd.close()
				}
			},
			changekz(e) {
				console.log('e:', e);
				this.isSys = !this.isSys
				console.log(this.isSys)
			},
			bindChangered(e) {
				console.log('e:', e);
			},
			bindChangegreen(e) {
				console.log('e:', e);
			},
			bindChangesystime(e) {
				console.log('e:', e);
			},
			bindlbdtime(e) {
				console.log('e:', e);
			},
			changelbdstate(index){
				this.lbdList[index].state="运行结束"
			},
			delTag: function(e) {
				console.log(e)
				console.log(this.tagList)
			},
			loadAutocompleteData(value) {
				console.log('每次输入经过防抖处理以后都会进到这里');
				console.log('此参数就是输入框的值：', value);

				// 【注意】：由于此方法是组件调用进来的，这里的this对象已经不是指向当前页面了
				// 所以无法在这里通过this去取当前页面的数据；
				// 基于同样的原因，也无法通过this去调用当前页的其它方法。
				// 【正确的做法】：在这个方法内写完所有取数据的逻辑，如果需要用输入框的值则取这里的value参数

				//可以通过$root拿到当前页面的引用，从而访问当前页面的数据
				let that = this;
				console.log('访问当前页的数据:', that.searchpoint);
				if (value != '') {
					return Promise.resolve(["学林街（南北方向）", "学林街（东西方向）", "文海南路（南北方向）", "文海南路（东西方向）", "浙江工商大学（南北方向）",
						"浙江工商大学（东西方向）", "宝龙（南北方向）", "宝龙（东西方向）"
					]);
				}
			},
			//响应选择事件，接收选中的数据
			selectItemD(data) {
				console.log('收到数据了:', data);
				var num = 0
				for (var i = 0; i < this.tagList.length; i++) {
					if (this.tagList[i] == data) {
						num++
					}
				}
				if (num == 0) {
					this.tagList.push(data)
				}
				console.log(this.tagList)
			},
			NavChange: function(e) {
				this.PageCur = e.currentTarget.dataset.cur
			}
		}
	}
</script>

<style>
	.st {
		display: flex;
		width: 255.22rpx;
		justify-content: space-between;
		margin-top: 19.33rpx;
	}

	.signimage {
		transform: rotate(90deg);
		width: 38.88rpx;
		height: 38.88rpx;
	}

	.xw {
		margin-left: 11.11rpx;
		display: flex;
		width: 90rpx;
		justify-content: space-between;
		text-align: center;
		align-items: center;
	}

	.xwl {
		font-size: 17rpx;
		margin-top: -5.55rpx;
	}
	.lbdtop{
		margin-top: 10rpx;
	}
	.xg {
		width: 147.77rpx;
		height: 201.66rpx;
		background-color: rgb(17, 62, 103);
		border-style: none;
		border-color: unset;
		text-align: center;

	}

	.xgimg {
		margin-top: 5.55rpx;
		width: 55.55rpx;
		height: 55.55rpx;
	}
	.xgimg2 {
		margin-top: 10.55rpx;
		width: 45.55rpx;
		height: 45.55rpx;
	}

	.setitem {

		width: 50%;
		height: 22.22rpx;
	}

	.xgview {
		margin-top: 22.22rpx;
		margin-left: 25%;
		border-radius: 50%;
		width: 72.22rpx;
		height: 72.22rpx;
		background-color: rgb(18, 157, 217);
		border-width: 0px;
		border-style: none;
		border-color: unset;

	}

	.imgbule {
		background-color: rgb(18, 157, 217);
	}

	.fontred {
		color: rgba(255, 22, 0, 1);
		
	}

	.fontgreen {
		color: rgba(0, 221, 81, 1.0);
	}

	.dialognum {
		display: flex;
		width: 150rpx;
		justify-content: space-between;
		align-items: center;
	}

	.dialogbottom {
		margin-bottom: 10rpx;
	}

	.dialogleft {
		margin-left: 10rpx;
	}

	.bu {
		font-size: 15prx;
		width: 130px;
		height: 50px;
		background-color: rgb(18, 157, 217);
		margin-left: 530.77rpx;
		margin-top: 16.66rpx;
		color: #FFFFFF;
	}
</style>
