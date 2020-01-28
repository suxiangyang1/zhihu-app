<template>
	<div class="wrapper">
		<div class="container">
			<div class="top">
				<p class="roundtable">圆桌</p>
				<p class="link">举办圆桌</p>
			</div>
			<div class="row">
				<div class="col-3" v-for="(item, index) in roundTables" :key="index">
					<div class="mask"></div>
					<img :src="item.logo" alt="" />
					<p class="name">{{ item.name }}</p>
					<p class="visits_count">该圆桌被浏览{{ item.visitsCount }}次</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'follow',
	data() {
		return {
			roundTables: []
		};
	},
	created() {
		this.axios
			.get(this.$store.state.baseUrl + '/roundtable/list', {
				params: {
					offset: 0,
					limit: 20
				}
			})
			.then(res => {
				console.log(res);
				this.roundTables = res.data.data;
			});
	}
};
</script>
<style lang="scss" scoped>
.wrapper {
	margin-top: 10px;
	.container {
		width: 80%;
		margin: 0 auto;
		padding: 5px;
		background-color: #fff;
		.top {
			display: flex;
			justify-content: space-between;
			padding:15px 55px 15px 50px;
			font-size: 15px;
			font-weight: 600;
			.roundtable{
				color: #1a1a1a;
			}
			.link {
				text-decoration: none;
				color: #0c89ff;
				cursor: pointer;
			}
			border-radius: 3px;
			box-shadow: 0 1px 3px 0 rgba(0, 34, 77, 0.05);
		}
		.row {
			text-align: center;
			.col-3 {
				display: inline-block;
				position: relative;
				width: 200px;
				height: 230px;
				margin: 15px;
				border-radius: 5px;
				padding-left: 5px;
				.mask {
					position: absolute;
					top: 0;
					left: 0;
					right: 0;
					bottom: 30px;
					width: 200px;
					height: 200px;
					box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
					background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
					z-index: 5;
				}
				.name {
					position: absolute;
					font-size: 15px;
					color: #fff;
					bottom: 40px;
					z-index: 10;
				}
				img {
					position: absolute;
					top: 0;
					left: 0;
					right: 0;
					width: 200px;
					height: 200px;
					bottom: 30px;
					border-radius: 5px;
				}
				.visits_count {
					position: absolute;
					bottom: 0;
					font-size: 15px;
					color: #8590A6;
				}
			}
		}
	}
}
</style>
