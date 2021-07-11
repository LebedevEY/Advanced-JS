Vue.component('cart', {
    data(){
      return {
          cartItems: [],
          showCart: false
      }
    },

    mounted(){
        this.$parent.getJson(`/api/cart`)
            .then(data => {
                for (let item of data.contents){
                    this.$data.cartItems.push(item);
                }
            });
    },

    methods: {
        addProduct(item){
            let find = this.cartItems.find(el => el.id_product === item.id_product);
            if(find){
                this.$parent.putJson(`/api/cart/${find.id_product}`, {quantity: 1})
                    .then(data => {
                        if(data.result === 1){
                            find.quantity++;
                        }
                    })
            } else {
                const prod = Object.assign({quantity: 1}, item);
                this.$parent.postJson(`/api/cart`, prod)
                    .then(data => {
                        if(data.result === 1){
                            this.cartItems.push(prod);
                        }
                    })
            }
        },

        minus(item){
            let find = this.cartItems.find(el => el.id_product === item.id_product);
            if (find) {
                this.$parent.putJson(`/api/cart/${find.id_product}`, {quantity: 1})
                    .then(data => {
                        if(data.result === 1){
                            if (item.quantity > 1) {
                                item.quantity--;
                            }
                        }
                    })
            }
        },

        remove(item){
            this.$parent.delJson(`/api/cart/`, item)
                .then(data => {
                    if (data.result === 1) {
                        this.cartItems.splice(this.cartItems.indexOf(item), 1);
                    } else {
                        console.log('error');
                    }
                })
        },
    },

    template: `<div>
        <button class="btn-cart" type="button" @click="showCart = !showCart">Корзина</button>
        <div class="cart-block" v-show="showCart">
            
            <cart-item v-for="item of cartItems" :cart-item="item" :key="item.id_product" :img="item.img" @remove="remove" @add="addProduct" @minus="minus">
            </cart-item>
        </div>
        </div>
    `
})

Vue.component('cart-item', {
    props: ['cartItem', 'img'],
    template: `
    <div class="cart-item">
                    <img :src="img" alt="Some img">
                    <div class="product-bio">
                        
                        <div class="product-desc">
                            <div class="product-title">{{ cartItem.product_name }}</div>
                            <div class="product-quantity">Quantity: {{ cartItem.quantity }}</div>
                            <div class="buttons">
                                <button class="del-btn" @click="$emit('minus', cartItem)">-</button>
                                <button class="del-btn" @click="$emit('add', cartItem)">+</button>
                            </div>
                            <div class="product-single-price">{{ cartItem.price }} &#8381 each</div>
                        </div>
                    </div>
                    <div class="right-block">
                        <div class="product-price">{{cartItem.quantity*cartItem.price}} &#8381</div>
                        <button class="del-btn" @click="$emit('remove', cartItem)">&times;</button>
                    </div>
                </div>
    `
})