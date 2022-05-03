<template name="heatmap">
	<view class="">
		<view class="mycord" style="background-color: rgba(19, 64, 102, 0.9);margin-top: 22.22rpx;margin-left: 27.77rpx;width:580.33rpx;height:350.55rpx;position: fixed;">
		<view id="mymap" class="mymap" style="border-color: rgb(51, 104, 255);width:550.33rpx;height:300.55rpx;margin-top: 11.11rpx;margin-left: 11.11rpx;"></view>
		</view>
		<!--<view id="echarts" ref="map" class="echarts" style="width:1500px;height:1000px;"></view>-->
		<!--<web-view src="/static/html/heatmap.html"></web-view>-->
	</view>
</template>

<script>
	export default {
		name: "heatmap",
		data() {
			return {
				option: {
					title: {
						text: 'ECharts 入门示例'
					},
					tooltip: {},
					legend: {
						data: ['销量']
					},
					xAxis: {
						data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
					},
					yAxis: {},
					series: [{
						name: '销量',
						type: 'bar',
						data: [5, 20, 36, 10, 10, 20]
					}]
				}
			}
		},
		methods: {

		}
	}
</script>


<script module="mymap" lang="renderjs">
	
	import data1 from "./hangzhou-tracks.json"
	
	export default {
		data() {
			return {
				map:null
			}
		},
		mounted(){
			// if (typeof window.echarts === 'function') {
			// 	this.initEcharts()
			// } else {
			// // 	// 动态引入较大类库避免影响页面展示
			// 	const script3 = document.createElement('script')
			// 	// view 层的页面运行在 www 根目录，其相对路径相对于 www 计算
			// 	script3.src = 'static/echarts.js'
			// 	script3.onload = this.initEcharts.bind(this)
			// 	document.head.appendChild(script3)
			//  }
			
			
			var script=document.createElement("script")
			script.type='text/javascript'
			script.src="http://api.map.baidu.com/api?v=2.0&type=webgl&ak=AcLhbaEjGo3At21EZmFK5SfNb2IkT4sp&callback=init"
			document.head.appendChild(script)
			
			var script2=document.createElement("script")
			//script2.src="https://unpkg.com/mapvgl/dist/mapvgl.min.js"
			script2.src="https://code.bdstatic.com/npm/mapvgl@1.0.0-beta.140/dist/mapvgl.min.js"		
			document.head.appendChild(script2)
			
			var script4=document.createElement("script")
			script4.src="https://mapv.baidu.com/build/mapv.min.js"
			//script2.src="https://code.bdstatic.com/npm/mapvgl@1.0.0-beta.140/dist/mapvgl.min.js"		
			document.head.appendChild(script4)
			
			var script5=document.createElement("script")
			script5.src="https://mapv.baidu.com/gl/examples/static/common.js"
			//script2.src="https://code.bdstatic.com/npm/mapvgl@1.0.0-beta.140/dist/mapvgl.min.js"		
			document.head.appendChild(script5)
			
			
			window.init=this.init
			
		},
		methods: {
			
			init(){
				const points = [].concat.apply([], data1.map(function (track) {
				               return track.map(function (seg) {
				                   return seg.coord.concat([10]);
				               });
				           }));
				
				var data2=[]
				for(var i=0;i<points.length;i++){
					var item=points[i]
					data2.push({
					                geometry: {
					                    type: 'Point',
					                    coordinates: [item[0]+0.22, item[1]+0.06]
										//coordinates: [120.3610610961914-0.05*i, item[1]+0.06]
					                },
					                properties: {
					                    count: item[2]
					                }
					            });
				}
			
				
				
				this.map=new BMapGL.Map("mymap"); 
				//var point=new BMapGL.Point(120.13066322374, 30.240018034923);
				var point=new BMapGL.Point(120.3610610961914, 30.301864432118798);
				this.map.centerAndZoom(point,15);
				this.map.enableScrollWheelZoom(true);
				
				
				 var view =new mapvgl.View({
				 	map:this.map
				 })
				
				// 3. 创建可视化图层，并添加到图层管理器中sciapy
				var layer = new mapvgl.HeatmapLayer({
				    gradient: {
				        0.1: 'rgb(25,25,112)',
				        0.2: 'rgb(50, 250, 56)',
				        0.3: 'rgb(250, 250, 56)',
				        1.0: 'rgb(250, 50, 56)'
				    },
					size:9
				   
				});
				view.addLayer(layer);
				
				
				// 4. 准备好规范化坐标数据
				
				
				// 5. 关联图层与数据，享受震撼的可视化效果
				layer.setData(data2);
			},
			
			
		}
	}
	
	
</script>
<style>
	page {

		background-color: rgb(11, 37, 109);

	}
	.echarts{
		background-color: #FFFFFF;
	}
</style>
