const products = [
	{id: 1,title: 'Bracelet with lightgreen Stone', price: 11.55, qty: 1, image: './sliki/bracelet1unzoom.jpg'},  
	{id: 2,title: 'Bracelet with lightgreen Stone',price: 11.55, qty: 1,image: './sliki/bracelet2unzoom.jpg'},  
	{id: 3,title: 'Rose Bracelet with white Zirconias',price: 11.55,qty: 1,image: './sliki/bracelet3unzoom.jpg'},  
	{id: 4,title: 'Rose Bracelet with white Zirconias',price: 12.25, qty: 1, image: './sliki/bracelet4unzoom.jpg'},  
	{id: 5,title: 'Bracelet with darkblue Zirconias',price: 11.55,qty: 1,image: './sliki/bracelet5unzoom.jpg'},  
	{id: 6,title: 'Bracelet with white Zirconia',price: 11.55, qty: 1, image: './sliki/bracelet6unzoom.jpg'}, 
	{id: 7,title: 'Rose Bracelet with white Zirconia',price: 11.55,qty: 1,image: './sliki/bracelet7unzoom.jpg'},  
	{id: 8,title: 'Bracelet with white Zirconias',price: 10.29, qty: 1, image: './sliki/bracelet8unzoom.jpg'},
	//{id: 9,title: 'Rose Bracelet with white Zirconias',price: 12.11,qty: 1,image: './sliki/bracelet9unzoom.jpg'},  
];
const necklaces = [
	{id: 1,title: 'Silver Necklace with blue Edelstein', price: 18.55, qty: 1, image: './sliki/necklaces1unzoom.jpg'},  
	{id: 2,title: 'Silver Necklace with white Zirconias',price: 17.15, qty: 1, image: './sliki/necklaces2unzoom.jpg'},  
	{id: 3,title: 'Rose Necklace with white Zirconias',price: 17.15,qty: 1, image: './sliki/necklaces3unzoom.jpg'},  
	{id: 4,title: 'Silver Necklace with white Zirconias',price: 17.99, qty: 1, image: './sliki/necklaces4unzoom.jpg'},  
	{id: 5,title: 'Silver Necklace with white Zirconias',price: 17.15,qty: 1, image: './sliki/necklaces5unzoom.jpg'},  
	{id: 6,title: 'Rose Necklace with white Zirconias',price: 19.15, qty: 1, image: './sliki/necklaces6unzoom.jpg'}, 
	{id: 7,title: 'Rose Necklace with white Zirconias',price: 20.95,qty: 1, image: './sliki/necklaces7unzoom.jpg'},  
	{id: 8,title: 'Silver Necklace with Pearls',price: 15.95, qty: 1, image: './sliki/necklaces8unzoom.jpg'},
];
const rings = [
	{id: 1,title: 'Ring with pink&white Zirconias', price: 19.95, qty: 1, image: './sliki/rings1unzoom.jpg'},  
	{id: 2,title: 'Rose Ring with white Zirconias',price: 8.75, qty: 1,image: './sliki/rings2unzoom.jpg'},  
	{id: 3,title: 'Ring with white Zirconias',price: 8.05,qty: 1,image: './sliki/rings3unzoom.jpg'},  
	{id: 4,title: 'Flowers Ring with green Zirconias',price: 10.15, qty: 1, image: './sliki/rings4unzoom.jpg'},  
	{id: 5,title: 'Butterflies Ring with white Zirconias',price: 10.15,qty: 1,image: './sliki/rings5unzoom.jpg'},  
	{id: 6,title: 'Butterflies Ring with white Zirconias',price: 15.05, qty: 1, image: './sliki/rings6unzoom.jpg'}, 
	{id: 7,title: 'Star Ring with white Zirconias',price: 8.75,qty: 1,image: './sliki/rings7unzoom.jpg'},  
	{id: 8,title: 'Rose Ring with white Zirconias',price: 9.45, qty: 1, image: './sliki/rings8unzoom.jpg'},
];

new Vue({
	el:"#app",
	data:{
		products,
		rings,
		cartItems: [],
	},
	methods:{
		addToCart(item){
			if (!this.alreadyThere(item.id)){
				this.cartItems = [...this.cartItems, {...item}];
			} else {
				
				var index = this.cartItems.findIndex((itemInArray)=>{
					return item.id === itemInArray.id
				})
				this.cartItems[index].qty += item.qty;
				item.qty = 1;
			}
		},
		alreadyThere(id){
			let isThere = false;
			this.cartItems.forEach((item)=>{
				if(item.id === id){
					isThere = true;
				}
			})

			return isThere;
		},
		
	},
	
})

Vue.component('shopping-cart',{
	props:{
		items: [],
	},
	computed: {
		Total(){
			let total = 0;
			this.items.forEach((item)=>{
				total += item.qty * item.price;
			})

			return total;
		}
	},
	methods:{
		removeItem(id){
			var index = this.items.findIndex((itemInArray)=>{
				return id === itemInArray.id
			});
			this.items.splice(index,1);
		}
	}
	
});

Vue.component('item-vue',{

	template: '#cart-item-template',
	props:[
		'item'
	],
	data:{

	},
	methods:{
		removeItem(id){
			this.$parent.removeItem(id);
		}
		
	},
	filters: {
		capitalize: function (value) {
		  if (!value) return ''
		  value = value.toString()
		  return value.charAt(0).toUpperCase() + value.slice(1)
		},
	},
	computed:{

	},
	
	mounted(){
		console.log(this.item);
	}

})

