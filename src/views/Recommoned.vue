<template>
	<div class="recommened">
		<div v-for="(item, index) in recommenedList" :key="index" class="card">
			<h3 v-if="item.target.question==null">{{item.target.title}}</h3>
			<h3 v-else>{{item.target.question.title}}</h3>
			<p>作者：{{ item.target.author.name }}</p>
			<!-- <div>
				<span>赞同</span>
				<span>分享</span>
				<span>分享</span>
				<span>喜欢</span>
			</div> -->
		</div>
	</div>
</template>

<script>
export default {
	name: 'recommoned',
	data() {
		return {
			recommenedList: []
		};
	},
	created() {
		this.axios.get('/api/recommend').then(res => {
			this.recommenedList = res.data.data.data;
			console.log(this.recommenedList);
		});
	}
};
</script>
<style lang="scss" scoped>
.recommened {
	padding: 10px;
	.card {
		height: 200px;
		border-bottom: 1px solid #eee;
		border-radius: 3px;
		box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
		color: #4f4f4f;
	}
}
</style>
