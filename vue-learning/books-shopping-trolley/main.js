const app = new Vue({
	el:'#app',
	data:{
		books:[
			{
				id: 1,
				name: 'book1',
				date: 1999-10-1,
				price: 81.00,
				count: 1
			},
			{
				id: 2,
				name: 'book2',
				date: 1999-10-2,
				price: 82.00,
				count: 1
			},
			{
				id: 3,
				name: 'book3',
				date: 1999-10-3,
				price: 83.00,
				count: 1
			},	
			{
				id: 4,
				name: 'book4',
				date: 1999-10-4,
				price: 84.00,
				count: 1
			},								
		]
	},
	methods:{
		// getFinalPrice(price) {
		// 	return '￥' + price.toFixed(2);
		// }
		increment(index) {
			this.books[index].count++
		}, 
		decrement(index) {
			this.books[index].count--
		},
		removeHandler(index) {
			this.books.splice(index, 1)
		}
	},
	computed:{
		totalPrice(){
			let totalPrice = 0;
			for (let i = 0; i < this.books.length; i++) {
				totalPrice += this.books[i].price * this.books[i].count;
			}
			return totalPrice;
		}
	},
	filters:{
		showPrice(price) {
			return '￥' + price.toFixed(2);
		}
	}
})
